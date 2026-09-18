import { NextResponse } from "next/server";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      position,
      name,
      email,
      phone,
      portfolio,
      resumeName,
      resumeUrl,
      message,
    } = body;

    /* =========================================================
       VALIDATION
    ========================================================= */

    if (!position) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select a position.",
        },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your name.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your email.",
        },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your phone number.",
        },
        { status: 400 }
      );
    }

    /* =========================================================
       EMAIL VALIDATION
    ========================================================= */

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

    /* =========================================================
       SAVE TO FIRESTORE
    ========================================================= */

    const applicationData = {
      position: String(position).trim(),

      name: String(name).trim(),

      email: String(email)
        .trim()
        .toLowerCase(),

      phone: String(phone).trim(),

      portfolio: portfolio
        ? String(portfolio).trim()
        : "",

      resumeName: resumeName
        ? String(resumeName).trim()
        : "",

      resumeUrl: resumeUrl
        ? String(resumeUrl).trim()
        : "",

      message: message
        ? String(message).trim()
        : "",

      status: "new",

      createdAt: serverTimestamp(),

      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(
      collection(db, "careers_applications"),
      applicationData
    );

    /* =========================================================
       SUCCESS
    ========================================================= */

    return NextResponse.json(
      {
        success: true,
        message:
          "Your application has been submitted successfully.",
        applicationId: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CAREERS API ERROR:",
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