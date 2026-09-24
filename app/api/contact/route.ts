import { NextResponse, after } from "next/server";
import { randomBytes } from "crypto";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "@/lib/firebaseAdmin";
import { sendEnquiryEmail } from "@/lib/emailService";

export const runtime = "nodejs";

// ============================================================
// TICKET ID
// ============================================================

function generateTicketId() {
  const date = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  const random = randomBytes(3)
    .toString("hex")
    .toUpperCase();

  return `ASG-${date}-${random}`;
}

// ============================================================
// ALLOWED PROJECT TYPES
// ============================================================

const ALLOWED_PROJECT_TYPES = new Set([
  "residential",
  "commercial",
  "retail",
  "office",
  "renovation",
  "other",
]);

// ============================================================
// POST
// ============================================================

export async function POST(request: Request) {
  try {
    // ========================================================
    // READ REQUEST
    // ========================================================

    const body = await request.json();

    const {
      name,
      phone,
      email,
      vertical,
      message,
    } = body;

    // ========================================================
    // CLEAN VALUES
    // ========================================================

    const cleanName = String(name ?? "").trim();

    const cleanPhone = String(phone ?? "").trim();

    const cleanEmail = String(email ?? "")
      .trim()
      .toLowerCase();

    const cleanVertical = String(vertical ?? "")
      .trim()
      .toLowerCase();

    const cleanMessage = String(message ?? "").trim();

    // ========================================================
    // REQUIRED FIELD VALIDATION
    // ========================================================

    if (
      !cleanName ||
      !cleanPhone ||
      !cleanVertical ||
      !cleanMessage
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // PROJECT TYPE VALIDATION
    // ========================================================

    if (!ALLOWED_PROJECT_TYPES.has(cleanVertical)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a valid project type.",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // PHONE VALIDATION
    // ========================================================

    const phoneDigits = cleanPhone.replace(/\D/g, "");

    if (
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // EMAIL VALIDATION
    // ========================================================

    if (cleanEmail) {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(cleanEmail)) {
        return NextResponse.json(
          {
            success: false,
            message: "Please enter a valid email address.",
          },
          {
            status: 400,
          }
        );
      }
    }

    // ========================================================
    // GENERATE UNIQUE TICKET
    // ========================================================

    const ticketId = generateTicketId();

    // ========================================================
    // SAVE ENQUIRY TO FIRESTORE
    // ========================================================

    const inquiryRef = await adminDb
      .collection("inquiries")
      .add({
        ticketId,

        name: cleanName,

        phone: cleanPhone,

        email: cleanEmail,

        vertical: cleanVertical,

        message: cleanMessage,

        createdAt: FieldValue.serverTimestamp(),

        source: "contact-page",

        status: "new",

        emailStatus: "pending",
      });

    // ========================================================
    // SEND EMAIL IN BACKGROUND
    // ========================================================

    after(async () => {
      try {
        // ----------------------------------------------------
        // SEND EMAIL
        // ----------------------------------------------------

        await sendEnquiryEmail({
          ticketId,
          name: cleanName,
          phone: cleanPhone,
          email: cleanEmail,
          vertical: cleanVertical,
          message: cleanMessage,
        });

        // ----------------------------------------------------
        // MARK EMAIL AS SENT
        // ----------------------------------------------------

        await inquiryRef.update({
          emailStatus: "sent",
          emailSentAt: FieldValue.serverTimestamp(),
        });

        console.log(
          `CONTACT EMAIL SENT: ${ticketId}`
        );
      } catch (emailError) {
        // ----------------------------------------------------
        // EMAIL FAILED
        // ----------------------------------------------------

        console.error(
          `CONTACT EMAIL FAILED: ${ticketId}`,
          emailError
        );

        // ----------------------------------------------------
        // SAVE EMAIL FAILURE
        // ----------------------------------------------------

        try {
          await inquiryRef.update({
            emailStatus: "failed",

            emailError:
              emailError instanceof Error
                ? emailError.message
                : "Unknown email error",

            emailFailedAt:
              FieldValue.serverTimestamp(),
          });
        } catch (firestoreError) {
          console.error(
            "EMAIL STATUS UPDATE FAILED:",
            firestoreError
          );
        }
      }
    });

    // ========================================================
    // IMMEDIATE SUCCESS RESPONSE
    // ========================================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Thank you! We have received your enquiry. Our team will contact you shortly.",

        ticketId,

        id: inquiryRef.id,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    // ========================================================
    // API ERROR
    // ========================================================

    console.error(
      "CONTACT API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Unable to submit your enquiry right now. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}