import { NextResponse } from "next/server";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      vertical,
      message,
    } = body;

    // ------------------------------------------------------------
    // CLEAN VALUES
    // ------------------------------------------------------------

    const cleanName = String(name ?? "").trim();
    const cleanPhone = String(phone ?? "").trim();
    const cleanEmail = String(email ?? "").trim().toLowerCase();
    const cleanVertical = String(vertical ?? "").trim();
    const cleanMessage = String(message ?? "").trim();

    // ------------------------------------------------------------
    // REQUIRED FIELD VALIDATION
    // ------------------------------------------------------------

    if (
      !cleanName ||
      !cleanPhone ||
      !cleanVertical ||
      !cleanMessage
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // ------------------------------------------------------------
    // PHONE VALIDATION
    // ------------------------------------------------------------

    // Allows numbers with spaces, +, -, brackets, etc.
    // but requires at least 7 and at most 15 digits.
    const phoneDigits = cleanPhone.replace(/\D/g, "");

    if (
      phoneDigits.length < 7 ||
      phoneDigits.length > 15
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid phone number.",
        },
        {
          status: 400,
        }
      );
    }

    // ------------------------------------------------------------
    // OPTIONAL EMAIL VALIDATION
    // ------------------------------------------------------------

    if (cleanEmail) {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(cleanEmail)) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Please enter a valid email address.",
          },
          {
            status: 400,
          }
        );
      }
    }

    // ------------------------------------------------------------
    // SAVE TO FIRESTORE
    // ------------------------------------------------------------

    const inquiryRef = await addDoc(
      collection(db, "inquiries"),
      {
        name: cleanName,

        phone: cleanPhone,

        // Empty string is stored when email is not provided.
        email: cleanEmail,

        vertical: cleanVertical,

        message: cleanMessage,

        createdAt: serverTimestamp(),

        source: "contact-page",

        status: "new",
      }
    );

    // ------------------------------------------------------------
    // SUCCESS RESPONSE
    // ------------------------------------------------------------

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you. Your inquiry has been submitted successfully.",
        id: inquiryRef.id,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "CONTACT API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit your inquiry right now. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}