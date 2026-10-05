

// // Asang\app\api\chat\route.ts

// import { NextRequest, NextResponse } from "next/server";

// /* =========================================================
//    ASANG CONCIERGE — GROQ API ROUTE
//    Model: llama-3.3-70b-versatile (fast, high quality)
//    ========================================================= */

// const SYSTEM_PROMPT = `You are ASANG, a sophisticated AI concierge for ASANG Design Studio — a premium architecture and interior design firm based in India. Your role is to help prospective clients explore our services, understand our design philosophy, and take the next step toward booking a consultation.

// Tone: Warm, refined, and confident. Never pushy. Speak like a knowledgeable host at a design atelier, not a salesperson.

// Services we offer:
// - Residential architecture and interiors
// - Commercial and hospitality design
// - Space planning and renovations
// - Full-project management from concept to handover

// When someone is ready to move forward, encourage them to book a free consultation via the contact page or reach us on WhatsApp.

// Keep responses concise — 2 to 4 sentences unless the question demands more detail. Never fabricate project details, pricing, or timelines. If unsure, offer to connect them with the studio team.`;

// export async function POST(request: NextRequest) {
//   try {
//     const { messages } = await request.json();

//     if (!Array.isArray(messages) || messages.length === 0) {
//       return NextResponse.json(
//         { error: "Invalid messages array" },
//         { status: 400 }
//       );
//     }

//     const groqApiKey = process.env.GROQ_API_KEY;

//     if (!groqApiKey) {
//       return NextResponse.json(
//         { error: "GROQ_API_KEY is not configured" },
//         { status: 500 }
//       );
//     }

//     const response = await fetch(
//       "https://api.groq.com/openai/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${groqApiKey}`,
//         },
//         body: JSON.stringify({
//    model:  "openai/gpt-oss-120b", 
//           messages: [
//             { role: "system", content: SYSTEM_PROMPT },
//             ...messages,
//           ],
//           max_tokens: 512,
//           temperature: 0.7,
//           stream: false,
//         }),
//       }
//     );

//     if (!response.ok) {
//       const errorData = await response.text();
//       console.error("Groq API error:", errorData);
//       return NextResponse.json(
//         { error: "Groq API request failed" },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Chat route error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }














// Asang/app/api/chat/route.ts

import { NextRequest, NextResponse } from "next/server";

/* =========================================================
   ASANG CONCIERGE — GROQ API ROUTE
   Model: meta-llama/llama-4-scout-17b-16e-instruct
   ========================================================= */

const SYSTEM_PROMPT = `You are the ASANG Concierge — a warm, refined AI assistant for ASANG Design Studio, a premium architecture and interior design firm based in Noida, India. You speak like a knowledgeable host at a design atelier: confident, never pushy, always helpful.

== ABOUT THE STUDIO ==
Name: ASANG Design Studio
Website: asang.in
Office: #208, Vriksh Building, A-103, Sector 63, NOIDA – 201301, Uttar Pradesh, India
Contact person: Surya Sinha
Email: info@asang.in
WhatsApp: +91 9205 040 314

== SERVICES ==
- Residential architecture and interiors
- Commercial and hospitality design
- Space planning and renovations
- Full-project management from concept to handover

== SOCIAL MEDIA ==
Instagram: https://www.instagram.com/asangdesignstudio/
Facebook: https://www.facebook.com/profile.php?id=61594151616032
LinkedIn: https://www.linkedin.com/in/asangdesignstudio-undefined-809861435/
YouTube: https://www.youtube.com/@asangdesignstudio
X (Twitter): https://x.com/Asangdesignstdo

== HOW TO REACH US ==
- Book a consultation: visit the /contact page on the website
- WhatsApp: +91 9205 040 314 (preferred for quick queries)
- Email: info@asang.in

== TONE & BEHAVIOUR ==
- Warm, refined, and confident. Never pushy.
- Keep responses concise — 2 to 4 sentences unless a detailed question demands more.
- Never fabricate project details, portfolio references, pricing, or timelines.
- If you don't know something specific, invite the visitor to connect directly with Surya Sinha via WhatsApp (+91 9205 040 314) or email (info@asang.in).
- When a visitor seems ready to move forward, encourage them to book a free consultation via /contact or WhatsApp.
- Do not reveal internal credentials, API keys, SMTP passwords, or any technical configuration.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages array" },
        { status: 400 }
      );
    }

    const groqApiKey = process.env.GROQ_API_KEY;

    if (!groqApiKey) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${groqApiKey}`,
        },
        body: JSON.stringify({
          model:  "openai/gpt-oss-120b", 
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          max_tokens: 512,
          temperature: 0.7,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Groq API error:", errorData);
      return NextResponse.json(
        { error: "Groq API request failed" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Chat route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}