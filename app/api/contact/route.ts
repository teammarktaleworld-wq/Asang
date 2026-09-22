// app/api/contact/route.ts

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
      email,
      vertical,
      message,
    } = body;

    // ------------------------------------------------------------
    // VALIDATION
    // ------------------------------------------------------------

    if (!name || !email || !vertical || !message) {
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

    // ------------------------------------------------------------
    // SAVE TO FIRESTORE
    // ------------------------------------------------------------

    const inquiryRef = await addDoc(
      collection(db, "inquiries"),
      {
        name: String(name).trim(),

        email: String(email)
          .trim()
          .toLowerCase(),

        vertical: String(vertical).trim(),

        message: String(message).trim(),

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