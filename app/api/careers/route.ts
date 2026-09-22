// app/api/careers/route.ts

import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
      message,
    } = body;

    // Basic validation
    if (!position || !name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Save application to Firestore
    const applicationRef = await addDoc(
      collection(db, "careers"),
      {
        position: String(position).trim(),
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        portfolio: portfolio
          ? String(portfolio).trim()
          : "",
        message: message
          ? String(message).trim()
          : "",

        createdAt: serverTimestamp(),

        source: "ASANG Careers Page",

        status: "new",
      }
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Your application has been submitted successfully.",
        id: applicationRef.id,
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
          "Unable to submit your application. Please try again.",
      },
      { status: 500 }
    );
  }
}