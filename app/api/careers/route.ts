import { NextResponse, after } from "next/server";
import { randomBytes } from "crypto";
import { FieldValue } from "firebase-admin/firestore";

import { adminDb } from "@/lib/firebaseAdmin";
import { sendCareersEmail } from "@/lib/emailService";

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

  return `ASG-CAR-${date}-${random}`;
}

// ============================================================
// ALLOWED POSITIONS
// ============================================================

const ALLOWED_POSITIONS = [
  "Architect",
  "Interior Designer",
  "Junior Designer",
  "Design Intern",
  "General Application",
] as const;

// ============================================================
// POST
// ============================================================

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const phone =
      typeof body.phone === "string"
        ? body.phone.trim()
        : "";

    const position =
      typeof body.position === "string"
        ? body.position.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    // ========================================================
    // VALIDATION
    // ========================================================

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, email, phone number and position are required.",
        },
        { status: 400 }
      );
    }

    // ========================================================
    // EMAIL VALIDATION
    // ========================================================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // ========================================================
    // POSITION VALIDATION
    // ========================================================

    if (
      !ALLOWED_POSITIONS.includes(
        position as (typeof ALLOWED_POSITIONS)[number]
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid position selected.",
        },
        { status: 400 }
      );
    }

    // ========================================================
    // GENERATE TICKET ID
    // ========================================================

    const ticketId = generateTicketId();

    // ========================================================
    // SAVE TO FIREBASE
    // ========================================================

    const applicationData = {
      ticketId,

      name,

      email,

      phone,

      position,

      message,

      status: "new",

      emailStatus: "pending",

      createdAt: FieldValue.serverTimestamp(),

      updatedAt: FieldValue.serverTimestamp(),
    };

    const applicationRef = await adminDb
      .collection("careers")
      .add(applicationData);

    // ========================================================
    // SEND EMAIL
    // ========================================================

    after(async () => {
      try {
        await sendCareersEmail({
          ticketId,
          name,
          email,
          phone,
          position,
          message,
        });

        // ====================================================
        // UPDATE EMAIL STATUS
        // ====================================================

        await applicationRef.update({
          emailStatus: "sent",

          emailSentAt:
            FieldValue.serverTimestamp(),

          updatedAt:
            FieldValue.serverTimestamp(),
        });

        console.log(
          `CAREERS EMAIL SENT: ${ticketId}`
        );
      } catch (emailError) {
        console.error(
          `Failed to send career application email for ${ticketId}:`,
          emailError
        );

        // ====================================================
        // SAVE EMAIL FAILURE
        // ====================================================

        await applicationRef.update({
          emailStatus: "failed",

          emailError:
            emailError instanceof Error
              ? emailError.message
              : "Unknown email error",

          updatedAt:
            FieldValue.serverTimestamp(),
        });
      }
    });

    // ========================================================
    // SUCCESS RESPONSE
    // ========================================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Your application has been submitted successfully.",

        ticketId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Careers API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong while submitting your application.",
      },
      { status: 500 }
    );
  }
}