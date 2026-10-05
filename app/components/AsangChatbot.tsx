// "use client";

// import { useState, useEffect, useRef } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Cormorant_Garamond, Montserrat } from "next/font/google";

// /* =========================================================
//    FONTS — matching Hero
//    ========================================================= */

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-cormorant",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-montserrat",
// });

// /* =========================================================
//    TYPES
//    ========================================================= */

// interface Message {
//   role: "user" | "assistant";
//   content: string;
// }

// /* =========================================================
//    SYSTEM PROMPT — ASANG persona
//    ========================================================= */

// const SYSTEM_PROMPT = `You are ASANG, a sophisticated AI concierge for ASANG Design Studio — a premium architecture and interior design firm based in India. Your role is to help prospective clients explore our services, understand our design philosophy, and take the next step toward booking a consultation.

// Tone: Warm, refined, and confident. Never pushy. Speak like a knowledgeable host at a design atelier, not a salesperson.

// Services we offer:
// - Residential architecture and interiors
// - Commercial and hospitality design
// - Space planning and renovations
// - Full-project management from concept to handover

// When someone is ready to move forward, encourage them to book a free consultation via /contact or reach us on WhatsApp.

// Keep responses concise — 2 to 4 sentences unless the question demands more detail. Never fabricate project details, pricing, or timelines. If unsure, offer to connect them with the studio team.`;

// /* =========================================================
//    COMPONENT
//    ========================================================= */

// export default function AsangChatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "assistant",
//       content:
//         "Welcome to ASANG Design Studio. I'm here to help you explore our architecture and interiors services. How can I assist you today?",
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   /* -------------------------------------------------------
//      AUTO-SCROLL
//      ------------------------------------------------------- */

//   useEffect(() => {
//     if (isOpen) {
//       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, isOpen]);

//   useEffect(() => {
//     if (isOpen) {
//       setTimeout(() => inputRef.current?.focus(), 300);
//     }
//   }, [isOpen]);

//   /* -------------------------------------------------------
//      SEND MESSAGE → GROQ
//      ------------------------------------------------------- */

//   const sendMessage = async () => {
//     const trimmed = inputValue.trim();
//     if (!trimmed || isLoading) return;

//     const userMessage: Message = { role: "user", content: trimmed };
//     const updatedMessages = [...messages, userMessage];

//     setMessages(updatedMessages);
//     setInputValue("");
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           messages: updatedMessages.map((m) => ({
//             role: m.role,
//             content: m.content,
//           })),
//         }),
//       });

//       if (!response.ok) throw new Error("API error");

//       const data = await response.json();
//       const assistantContent =
//         data.choices?.[0]?.message?.content ?? "I'm sorry, I couldn't process that. Please try again.";

//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: assistantContent },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             "I seem to be having trouble connecting right now. Please reach out to us directly on WhatsApp or via our contact page.",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   /* -------------------------------------------------------
//      RENDER
//      ------------------------------------------------------- */

//   return (
//     <div
//       className={`${cormorant.variable} ${montserrat.variable}`}
//       style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
//     >
//       {/* ===================================================
//           CHAT PANEL
//           =================================================== */}

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key="chat-panel"
//             initial={{ opacity: 0, y: 24, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 24, scale: 0.96 }}
//             transition={{ duration: 0.28, ease: "easeOut" }}
//             style={{
//               position: "fixed",
//               bottom: "88px",
//               right: "24px",
//               zIndex: 9999,
//               width: "min(380px, calc(100vw - 32px))",
//               height: "520px",
//               display: "flex",
//               flexDirection: "column",
//               background: "#0c0c0c",
//               border: "1px solid rgba(255,255,255,0.08)",
//               borderRadius: "16px",
//               boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
//               overflow: "hidden",
//             }}
//           >
//             {/* Header */}
//             <div
//               style={{
//                 padding: "16px 20px",
//                 borderBottom: "1px solid rgba(255,255,255,0.07)",
//                 background: "rgba(255,255,255,0.03)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 flexShrink: 0,
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                 {/* Status dot */}
//                 <span
//                   style={{
//                     width: "8px",
//                     height: "8px",
//                     borderRadius: "50%",
//                     background: "#4ade80",
//                     boxShadow: "0 0 6px #4ade80",
//                     flexShrink: 0,
//                   }}
//                 />
//                 <div>
//                   <p
//                     style={{
//                       fontFamily: "var(--font-cormorant, serif)",
//                       fontSize: "18px",
//                       fontWeight: 500,
//                       color: "#ffffff",
//                       letterSpacing: "0.04em",
//                       lineHeight: 1.2,
//                       margin: 0,
//                     }}
//                   >
//                     ASANG Concierge
//                   </p>
//                   <p
//                     style={{
//                       fontSize: "10px",
//                       color: "rgba(255,255,255,0.4)",
//                       letterSpacing: "0.08em",
//                       textTransform: "uppercase",
//                       margin: 0,
//                       marginTop: "2px",
//                     }}
//                   >
//                     Design Studio · Online
//                   </p>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setIsOpen(false)}
//                 aria-label="Close chat"
//                 style={{
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   color: "rgba(255,255,255,0.4)",
//                   padding: "4px",
//                   display: "flex",
//                   alignItems: "center",
//                   transition: "color 0.2s",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
//                 }
//               >
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//                   <path d="M18 6L6 18M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Messages */}
//             <div
//               style={{
//                 flex: 1,
//                 overflowY: "auto",
//                 padding: "16px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "12px",
//                 scrollbarWidth: "thin",
//                 scrollbarColor: "rgba(255,255,255,0.1) transparent",
//               }}
//             >
//               {messages.map((msg, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.22 }}
//                   style={{
//                     display: "flex",
//                     justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
//                   }}
//                 >
//                   <div
//                     style={{
//                       maxWidth: "82%",
//                       padding: "10px 14px",
//                       borderRadius:
//                         msg.role === "user"
//                           ? "14px 14px 4px 14px"
//                           : "14px 14px 14px 4px",
//                       background:
//                         msg.role === "user"
//                           ? "rgba(255,255,255,0.9)"
//                           : "rgba(255,255,255,0.06)",
//                       border:
//                         msg.role === "user"
//                           ? "none"
//                           : "1px solid rgba(255,255,255,0.08)",
//                       color: msg.role === "user" ? "#0c0c0c" : "rgba(255,255,255,0.88)",
//                       fontSize: "13.5px",
//                       lineHeight: "1.6",
//                       letterSpacing: "0.01em",
//                     }}
//                   >
//                     {msg.content}
//                   </div>
//                 </motion.div>
//               ))}

//               {/* Typing indicator */}
//               {isLoading && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   style={{ display: "flex", alignItems: "center", gap: "5px", paddingLeft: "4px" }}
//                 >
//                   {[0, 1, 2].map((dot) => (
//                     <motion.span
//                       key={dot}
//                       animate={{ opacity: [0.3, 1, 0.3] }}
//                       transition={{
//                         duration: 1.2,
//                         repeat: Infinity,
//                         delay: dot * 0.2,
//                       }}
//                       style={{
//                         width: "5px",
//                         height: "5px",
//                         borderRadius: "50%",
//                         background: "rgba(255,255,255,0.4)",
//                         display: "inline-block",
//                       }}
//                     />
//                   ))}
//                 </motion.div>
//               )}

//               <div ref={messagesEndRef} />
//             </div>

//             {/* Input */}
//             <div
//               style={{
//                 padding: "12px 16px",
//                 borderTop: "1px solid rgba(255,255,255,0.07)",
//                 background: "rgba(255,255,255,0.02)",
//                 display: "flex",
//                 gap: "10px",
//                 alignItems: "center",
//                 flexShrink: 0,
//               }}
//             >
//               <input
//                 ref={inputRef}
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Ask about our services…"
//                 disabled={isLoading}
//                 style={{
//                   flex: 1,
//                   background: "rgba(255,255,255,0.06)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   borderRadius: "24px",
//                   padding: "10px 16px",
//                   color: "#ffffff",
//                   fontSize: "13px",
//                   letterSpacing: "0.01em",
//                   outline: "none",
//                   fontFamily: "var(--font-montserrat, sans-serif)",
//                   transition: "border-color 0.2s",
//                 }}
//                 onFocus={(e) =>
//                   (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
//                 }
//                 onBlur={(e) =>
//                   (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
//                 }
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={isLoading || !inputValue.trim()}
//                 aria-label="Send message"
//                 style={{
//                   width: "38px",
//                   height: "38px",
//                   borderRadius: "50%",
//                   background:
//                     inputValue.trim() && !isLoading
//                       ? "rgba(255,255,255,0.9)"
//                       : "rgba(255,255,255,0.12)",
//                   border: "none",
//                   cursor:
//                     inputValue.trim() && !isLoading ? "pointer" : "default",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexShrink: 0,
//                   transition: "background 0.2s",
//                 }}
//               >
//                 <svg
//                   width="15"
//                   height="15"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke={inputValue.trim() && !isLoading ? "#0c0c0c" : "rgba(255,255,255,0.3)"}
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
//                 </svg>
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ===================================================
//           FAB TOGGLE BUTTON
//           =================================================== */}

//       <motion.button
//         onClick={() => setIsOpen((prev) => !prev)}
//         aria-label={isOpen ? "Close chat" : "Open ASANG Concierge"}
//         whileHover={{ scale: 1.06 }}
//         whileTap={{ scale: 0.95 }}
//         style={{
//           position: "fixed",
//           bottom: "24px",
//           right: "24px",
//           zIndex: 9999,
//           width: "56px",
//           height: "56px",
//           borderRadius: "50%",
//           background: "#0c0c0c",
//           border: "1px solid rgba(255,255,255,0.15)",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
//           cursor: "pointer",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <AnimatePresence mode="wait">
//           {isOpen ? (
//             <motion.svg
//               key="close"
//               initial={{ opacity: 0, rotate: -90 }}
//               animate={{ opacity: 1, rotate: 0 }}
//               exit={{ opacity: 0, rotate: 90 }}
//               transition={{ duration: 0.2 }}
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="rgba(255,255,255,0.8)"
//               strokeWidth="2"
//               strokeLinecap="round"
//             >
//               <path d="M18 6L6 18M6 6l12 12" />
//             </motion.svg>
//           ) : (
//             <motion.svg
//               key="chat"
//               initial={{ opacity: 0, rotate: 90 }}
//               animate={{ opacity: 1, rotate: 0 }}
//               exit={{ opacity: 0, rotate: -90 }}
//               transition={{ duration: 0.2 }}
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="rgba(255,255,255,0.85)"
//               strokeWidth="1.75"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
//             </motion.svg>
//           )}
//         </AnimatePresence>
//       </motion.button>
//     </div>
//   );
// }

// /* =========================================================
//    EXPORT SYSTEM PROMPT (for use in API route)
//    ========================================================= */

// export { SYSTEM_PROMPT };


















"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";

/* =========================================================
   FONTS
   ========================================================= */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

/* =========================================================
   TYPES
   ========================================================= */

interface Message {
  role: "user" | "assistant";
  content: string;
}

/* =========================================================
   PRE-CHAT TEASER QUESTIONS — rotate on FAB before open
   ========================================================= */

const TEASER_QUESTIONS = [
  "How do I start designing my dream home?",
  "What makes a space feel luxurious?",
  "How long does an interior project take?",
  "Which design style suits my lifestyle?",
  "How do I maximise a small apartment?",
  "What's the first step to renovate my home?",
  "Can architecture change how I feel at home?",
  "How do I choose the right colour palette?",
];

/* =========================================================
   QUICK REPLY SUGGESTIONS — shown inside open chat
   Always includes WhatsApp + 3 rotating questions
   ========================================================= */

const ROTATING_SUGGESTIONS = [
  "What services do you offer?",
  "How do I book a consultation?",
  "Do you handle commercial projects?",
  "What is your design process?",
  "How much does a project cost?",
  "Do you work outside Noida?",
  "How long does a project take?",
  "Can I see your past work?",
  "What styles do you specialise in?",
  "Do you offer space planning only?",
];

const WHATSAPP_URL =
  "https://wa.me/919205040314?text=" +
  encodeURIComponent(
    "Hi ASANG Design Studio, I came across your website and would like to discuss a project."
  );

/* =========================================================
   COMPONENT
   ========================================================= */

export default function AsangChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to ASANG Design Studio. I'm your design concierge — here to help you explore our architecture and interiors services. What would you like to know?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* Teaser: index of question shown above FAB */
  const [teaserIndex, setTeaserIndex] = useState(0);
  const [teaserVisible, setTeaserVisible] = useState(true);
  const [teaserDismissed, setTeaserDismissed] = useState(false);

  /* Rotating suggestions inside chat */
  const [suggestionSet, setSuggestionSet] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* -------------------------------------------------------
     TEASER ROTATION — every 4 s
     ------------------------------------------------------- */

  useEffect(() => {
    if (isOpen || teaserDismissed) return;

    const id = setInterval(() => {
      setTeaserVisible(false);
      setTimeout(() => {
        setTeaserIndex((i) => (i + 1) % TEASER_QUESTIONS.length);
        setTeaserVisible(true);
      }, 350);
    }, 4000);

    return () => clearInterval(id);
  }, [isOpen, teaserDismissed]);

  /* -------------------------------------------------------
     PICK 3 RANDOM SUGGESTIONS on open / after each reply
     ------------------------------------------------------- */

  const refreshSuggestions = () => {
    const shuffled = [...ROTATING_SUGGESTIONS].sort(() => Math.random() - 0.5);
    setSuggestionSet(shuffled.slice(0, 3));
  };

  useEffect(() => {
    if (isOpen) {
      refreshSuggestions();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  /* -------------------------------------------------------
     AUTO-SCROLL
     ------------------------------------------------------- */

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  /* -------------------------------------------------------
     SEND MESSAGE → GROQ
     ------------------------------------------------------- */

  const sendMessage = async (text?: string) => {
    const trimmed = (text ?? inputValue).trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("API error");

      const data = await response.json();
      const assistantContent =
        data.choices?.[0]?.message?.content ??
        "I'm sorry, I couldn't process that. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantContent },
      ]);
      refreshSuggestions();
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please reach us directly on WhatsApp or via our contact page.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /* -------------------------------------------------------
     RENDER
     ------------------------------------------------------- */

  return (
    <div className={`${cormorant.variable} ${montserrat.variable}`}>

      {/* ===================================================
          TEASER BUBBLE — visible before chat opens
          =================================================== */}

      <AnimatePresence>
        {!isOpen && !teaserDismissed && (
          <motion.div
            key="teaser"
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "92px",
              right: "24px",
              zIndex: 9998,
              maxWidth: "240px",
            }}
          >
            {/* Dismiss × */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setTeaserDismissed(true);
              }}
              aria-label="Dismiss"
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "rgba(30,30,30,0.95)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "11px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              ✕
            </button>

            {/* Bubble */}
            <button
              onClick={() => {
                setTeaserDismissed(true);
                setIsOpen(true);
              }}
              style={{
                background: "#0c0c0c",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px 14px 4px 14px",
                padding: "12px 16px",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                width: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-montserrat, sans-serif)",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: "0 0 6px 0",
                }}
              >
                ASANG Design Studio
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={teaserIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: teaserVisible ? 1 : 0, y: teaserVisible ? 0 : -6 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    fontFamily: "var(--font-cormorant, serif)",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.88)",
                    margin: 0,
                    lineHeight: 1.4,
                    letterSpacing: "0.01em",
                  }}
                >
                  {TEASER_QUESTIONS[teaserIndex]}
                </motion.p>
              </AnimatePresence>
              <p
                style={{
                  fontFamily: "var(--font-montserrat, sans-serif)",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.35)",
                  margin: "8px 0 0 0",
                  letterSpacing: "0.06em",
                }}
              >
                Tap to ask →
              </p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================
          CHAT PANEL
          =================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "88px",
              right: "24px",
              zIndex: 9999,
              width: "min(380px, calc(100vw - 32px))",
              height: "560px",
              display: "flex",
              flexDirection: "column",
              background: "#0c0c0c",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
              overflow: "hidden",
            }}
          >
            {/* ----- Header ----- */}
            <div
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    boxShadow: "0 0 6px #4ade80",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant, serif)",
                      fontSize: "17px",
                      fontWeight: 500,
                      color: "#ffffff",
                      letterSpacing: "0.04em",
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    ASANG Concierge
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: "2px 0 0 0",
                    }}
                  >
                    Design Studio · Online
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.4)",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ----- Messages ----- */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "14px 14px 8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.1) transparent",
              }}
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "82%",
                      padding: "10px 14px",
                      borderRadius:
                        msg.role === "user"
                          ? "14px 14px 4px 14px"
                          : "14px 14px 14px 4px",
                      background:
                        msg.role === "user"
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.06)",
                      border:
                        msg.role === "user"
                          ? "none"
                          : "1px solid rgba(255,255,255,0.08)",
                      color:
                        msg.role === "user"
                          ? "#0c0c0c"
                          : "rgba(255,255,255,0.88)",
                      fontSize: "13px",
                      lineHeight: "1.6",
                      letterSpacing: "0.01em",
                      fontFamily: "var(--font-montserrat, sans-serif)",
                    }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    paddingLeft: "4px",
                  }}
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.2,
                      }}
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.4)",
                        display: "inline-block",
                      }}
                    />
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ----- Quick Replies ----- */}
            <div
              style={{
                padding: "6px 14px 8px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flexShrink: 0,
              }}
            >
              {/* Always-visible WhatsApp CTA */}
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "9px 14px",
                  borderRadius: "24px",
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.3)",
                  color: "#4ade80",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  fontFamily: "var(--font-montserrat, sans-serif)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(37,211,102,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "rgba(37,211,102,0.12)")
                }
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact us on WhatsApp
              </Link>

              {/* 3 rotating question chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {suggestionSet.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={isLoading}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "11px",
                      letterSpacing: "0.02em",
                      cursor: isLoading ? "default" : "pointer",
                      fontFamily: "var(--font-montserrat, sans-serif)",
                      transition: "background 0.2s, color 0.2s",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      if (!isLoading) {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.1)";
                        e.currentTarget.style.color =
                          "rgba(255,255,255,0.95)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.color =
                        "rgba(255,255,255,0.7)";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* ----- Input ----- */}
            <div
              style={{
                padding: "10px 14px 14px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our services…"
                disabled={isLoading}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "24px",
                  padding: "10px 16px",
                  color: "#ffffff",
                  fontSize: "13px",
                  letterSpacing: "0.01em",
                  outline: "none",
                  fontFamily: "var(--font-montserrat, sans-serif)",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.3)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.1)")
                }
              />
              <button
                onClick={() => sendMessage()}
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background:
                    inputValue.trim() && !isLoading
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.12)",
                  border: "none",
                  cursor:
                    inputValue.trim() && !isLoading ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={
                    inputValue.trim() && !isLoading
                      ? "#0c0c0c"
                      : "rgba(255,255,255,0.3)"
                  }
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================
          FAB TOGGLE BUTTON
          =================================================== */}

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open ASANG Concierge"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#0c0c0c",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}