// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, vertical, message } = body;

    // ── Validation ──────────────────────────────────────────────────────────
    if (
      !name?.trim() ||
      !email?.trim() ||
      !vertical?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const allowedVerticals = ["commercial", "residential", "industrial", "other"];
    if (!allowedVerticals.includes(vertical)) {
      return NextResponse.json(
        { error: "Invalid project type selected." },
        { status: 400 }
      );
    }

    // ── Write to Firestore ───────────────────────────────────────────────────
    const docRef = await addDoc(collection(db, "contacts"), {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      vertical,
      message: message.trim(),
      status: "new",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      { success: true, id: docRef.id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[contact/route] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}