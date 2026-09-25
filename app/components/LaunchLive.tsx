// // "use client";

// // import { motion, AnimatePresence } from "framer-motion";
// // import { ExternalLink, Heart, Sparkles, Play } from "lucide-react";
// // import { useEffect, useState } from "react";

// // const YOUTUBE_VIDEO_ID =
// //   process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID;

// // const reactions = [
// //   {
// //     name: "Design Enthusiast",
// //     message: "Beautiful launch.",
// //   },
// //   {
// //     name: "Architecture Lover",
// //     message: "The space looks incredible.",
// //   },
// //   {
// //     name: "Studio Guest",
// //     message: "Love the ASANG identity.",
// //   },
// //   {
// //     name: "Creative Community",
// //     message: "This is beautiful.",
// //   },
// //   {
// //     name: "ASANG Supporter",
// //     message: "Congratulations ASANG!",
// //   },
// //   {
// //     name: "Design Enthusiast",
// //     message: "The presentation is amazing.",
// //   },
// // ];

// // export default function LaunchLive() {
// //   const [visibleReactions, setVisibleReactions] =
// //     useState<
// //       {
// //         id: number;
// //         name: string;
// //         message: string;
// //       }[]
// //     >([]);

// //   const [started, setStarted] = useState(false);

// //   useEffect(() => {
// //     let index = 0;

// //     const interval = setInterval(() => {
// //       const reaction = reactions[index % reactions.length];

// //       setVisibleReactions((current) => [
// //         ...current.slice(-3),
// //         {
// //           ...reaction,
// //           id: Date.now(),
// //         },
// //       ]);

// //       index++;
// //     }, 3200);

// //     return () => clearInterval(interval);
// //   }, []);

// //   const youtubeUrl = YOUTUBE_VIDEO_ID
// //     ? `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`
// //     : "https://www.youtube.com/";

// //   return (
// //     <section className="relative overflow-hidden bg-[#171614] px-5 py-20 text-[#f4f0e8] md:px-10 lg:px-16 lg:py-28">
// //       {/* Background atmosphere */}
// //       <div className="pointer-events-none absolute inset-0">
// //         <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0d1]/[0.025] blur-[120px]" />

// //         <div className="absolute inset-0 opacity-[0.035]">
// //           <div
// //             className="h-full w-full"
// //             style={{
// //               backgroundImage:
// //                 "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
// //             }}
// //           />
// //         </div>
// //       </div>

// //       <div className="relative z-10 mx-auto max-w-7xl">
// //         {/* Header */}
// //         <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
// //           <div>
// //             <div className="mb-5 flex items-center gap-3">
// //               <span className="relative flex h-2.5 w-2.5">
// //                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
// //                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
// //               </span>

// //               <span className="text-[10px] uppercase tracking-[0.4em] text-[#aaa397]">
// //                 Live Brand Launch
// //               </span>
// //             </div>

// //             <h1 className="font-serif text-5xl font-light tracking-tight md:text-7xl">
// //               ASANG
// //             </h1>

// //             <p className="mt-4 max-w-xl text-sm leading-7 text-[#aaa397] md:text-base">
// //               An evening of architecture, interiors and ideas.
// //             </p>
// //           </div>

// //           <div className="text-left md:text-right">
// //             <p className="text-[9px] uppercase tracking-[0.35em] text-[#aaa397]">
// //               Architecture & Interiors
// //             </p>

// //             <p className="mt-2 font-serif text-lg">
// //               Live from the studio
// //             </p>
// //           </div>
// //         </div>

// //         {/* Main grid */}
// //         <div className="grid gap-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.65fr)]">
// //           {/* Video */}
// //           <div className="overflow-hidden border border-white/10 bg-black">
// //             <div className="relative aspect-video">
// //               {YOUTUBE_VIDEO_ID ? (
// //                 <iframe
// //                   className="absolute inset-0 h-full w-full"
// //                   src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
// //                   title="ASANG Brand Launch Live"
// //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //                   allowFullScreen
// //                 />
// //               ) : (
// //                 <div className="absolute inset-0 flex items-center justify-center bg-[#211f1c]">
// //                   <div className="text-center">
// //                     <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
// //                       <Play
// //                         size={20}
// //                         strokeWidth={1}
// //                       />
// //                     </div>

// //                     <p className="text-xs uppercase tracking-[0.3em] text-[#aaa397]">
// //                       Live stream coming soon
// //                     </p>
// //                   </div>
// //                 </div>
// //               )}

// //               {/* Live badge */}
// //               <div className="absolute left-4 top-4 z-10 flex items-center gap-2 bg-black/70 px-3 py-2 backdrop-blur-md">
// //                 <span className="h-2 w-2 rounded-full bg-red-500" />

// //                 <span className="text-[9px] uppercase tracking-[0.25em]">
// //                   Live
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Video footer */}
// //             <div className="flex flex-col justify-between gap-5 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center">
// //               <div>
// //                 <p className="text-[9px] uppercase tracking-[0.3em] text-[#aaa397]">
// //                   ASANG
// //                 </p>

// //                 <p className="mt-1 text-sm">
// //                   Brand & Website Launch
// //                 </p>
// //               </div>

// //               <a
// //                 href={youtubeUrl}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-[9px] uppercase tracking-[0.25em] transition hover:bg-white hover:text-[#171614]"
// //               >
// //                 Open YouTube
// //                 <ExternalLink size={13} />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Activity */}
// //           <div className="flex min-h-[500px] flex-col border border-white/10 bg-[#1d1b19]">
// //             {/* Activity header */}
// //             <div className="border-b border-white/10 px-5 py-5">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-[9px] uppercase tracking-[0.3em] text-[#aaa397]">
// //                     Launch Activity
// //                   </p>

// //                   <h2 className="mt-2 font-serif text-2xl font-light">
// //                     In the room
// //                   </h2>
// //                 </div>

// //                 <Sparkles
// //                   size={18}
// //                   strokeWidth={1}
// //                   className="text-[#aaa397]"
// //                 />
// //               </div>

// //               <p className="mt-3 text-[10px] leading-5 text-[#77736c]">
// //                 Animated demo reactions — actual YouTube
// //                 engagement is shown on the live stream.
// //               </p>
// //             </div>

// //             {/* Reactions */}
// //             <div className="flex-1 overflow-hidden px-5 py-5">
// //               <AnimatePresence initial={false}>
// //                 {visibleReactions.map((reaction) => (
// //                   <motion.div
// //                     key={reaction.id}
// //                     initial={{
// //                       opacity: 0,
// //                       y: 15,
// //                     }}
// //                     animate={{
// //                       opacity: 1,
// //                       y: 0,
// //                     }}
// //                     exit={{
// //                       opacity: 0,
// //                       y: -10,
// //                     }}
// //                     transition={{
// //                       duration: 0.5,
// //                     }}
// //                     className="mb-3 border border-white/[0.07] bg-white/[0.025] p-4"
// //                   >
// //                     <div className="flex items-start justify-between gap-3">
// //                       <div>
// //                         <p className="text-[10px] uppercase tracking-[0.15em] text-[#aaa397]">
// //                           {reaction.name}
// //                         </p>

// //                         <p className="mt-2 text-sm text-[#ded9d0]">
// //                           {reaction.message}
// //                         </p>
// //                       </div>

// //                       <Heart
// //                         size={14}
// //                         strokeWidth={1}
// //                         className="shrink-0 text-[#aaa397]"
// //                       />
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </AnimatePresence>
// //             </div>

// //             {/* Bottom */}
// //             <div className="border-t border-white/10 px-5 py-5">
// //               <div className="flex items-center justify-between">
// //                 <span className="text-[9px] uppercase tracking-[0.25em] text-[#77736c]">
// //                   Streaming live
// //                 </span>

// //                 <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#aaa397]">
// //                   <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
// //                   Live
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom CTA */}
// //         <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
// //           <p className="max-w-lg text-xs leading-6 text-[#77736c]">
// //             Welcome to ASANG — a design studio shaping
// //             thoughtful spaces through architecture and interiors.
// //           </p>

// //           <a
// //             href={youtubeUrl}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="border border-[#f4f0e8]/20 px-6 py-3 text-[9px] uppercase tracking-[0.3em] transition hover:bg-[#f4f0e8] hover:text-[#171614]"
// //           >
// //             Watch on YouTube
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




















// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // ─── Configuration ────────────────────────────────────────────────────────────
// // Set NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID in your .env.local
// // e.g. NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID=dQw4w9WgXcQ
// const VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID ?? "";
// const YOUTUBE_EMBED_BASE = "https://www.youtube.com/embed/";
// const YOUTUBE_WATCH_BASE = "https://www.youtube.com/watch?v=";
// const YOUTUBE_LIVE_CHAT_BASE = "https://www.youtube.com/live_chat?v=";
// const ASANG_WEBSITE = "https://asang.in"; // update to actual domain

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface DemoReaction {
//   id: number;
//   name: string;
//   role: string;
//   message: string;
//   timestamp: string;
// }

// interface FloatingEmoji {
//   id: number;
//   emoji: string;
//   x: number;
// }

// // ─── Demo reactions — clearly labelled as animated demo, not real engagement ──
// const DEMO_REACTIONS: Omit<DemoReaction, "id" | "timestamp">[] = [
//   { name: "Design Enthusiast", role: "Studio Guest", message: "Beautiful launch." },
//   { name: "Architecture Lover", role: "Creative Community", message: "The space looks incredible." },
//   { name: "Studio Guest", role: "ASANG Supporter", message: "Love the ASANG identity." },
//   { name: "Creative Community", role: "Design Enthusiast", message: "This is beautiful." },
//   { name: "ASANG Supporter", role: "Architecture Lover", message: "Congratulations ASANG!" },
//   { name: "Design Enthusiast", role: "Studio Guest", message: "The presentation is amazing." },
//   { name: "Architecture Lover", role: "Creative Community", message: "Remarkable craftsmanship." },
//   { name: "Studio Guest", role: "Design Enthusiast", message: "An evening to remember." },
// ];

// const REACTION_EMOJIS = ["♥", "✦", "✸", "★"];

// function getTimestamp(): string {
//   return new Date().toLocaleTimeString("en-IN", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: false,
//   });
// }

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function GrainOverlay() {
//   return (
//     <svg
//       aria-hidden="true"
//       className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035]"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <filter id="noise">
//         <feTurbulence
//           type="fractalNoise"
//           baseFrequency="0.75"
//           numOctaves="4"
//           stitchTiles="stitch"
//         />
//         <feColorMatrix type="saturate" values="0" />
//       </filter>
//       <rect width="100%" height="100%" filter="url(#noise)" />
//     </svg>
//   );
// }

// function LiveBadge() {
//   return (
//     <span className="inline-flex items-center gap-1.5 rounded-none border border-red-500/60 bg-red-600/10 px-2.5 py-1">
//       <span className="relative flex h-1.5 w-1.5">
//         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
//         <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
//       </span>
//       <span
//         className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-red-400"
//         style={{ letterSpacing: "0.18em" }}
//       >
//         Live
//       </span>
//     </span>
//   );
// }

// function VideoPlayer({ videoId }: { videoId: string }) {
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const embedUrl = videoId
//     ? `${YOUTUBE_EMBED_BASE}${videoId}?autoplay=0&rel=0&modestbranding=1&color=white&fs=1&playsinline=1`
//     : "";

//   const toggleFullscreen = useCallback(async () => {
//     if (!document.fullscreenElement) {
//       await containerRef.current?.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       await document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   }, []);

//   useEffect(() => {
//     const handler = () => setIsFullscreen(!!document.fullscreenElement);
//     document.addEventListener("fullscreenchange", handler);
//     return () => document.removeEventListener("fullscreenchange", handler);
//   }, []);

//   return (
//     <div className="flex flex-col gap-3">
//       {/* Label row */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <LiveBadge />
//           <span className="font-sans text-[11px] tracking-widest text-[#8B7355] uppercase">
//             ASANG — Brand Launch
//           </span>
//         </div>
//         <button
//           onClick={toggleFullscreen}
//           aria-label="Toggle fullscreen"
//           className="group flex items-center gap-1.5 border border-[#3A3835] px-2.5 py-1 font-sans text-[10px] tracking-widest text-[#8B8680] uppercase transition hover:border-[#8B7355] hover:text-[#F0EDE8]"
//         >
//           {isFullscreen ? (
//             <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor">
//               <path d="M4 0H0v4h1V1h3V0zm3 0v1h3v3h1V0H7zm0 11v-1h3V7h1v4H7zM0 7v4h4v-1H1V7H0z" />
//             </svg>
//           ) : (
//             <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor">
//               <path d="M0 0v4h1V1h3V0H0zm7 0v1h3v3h1V0H7zm0 11h4V7h-1v3H7v1zM0 7v4h4v-1H1V7H0z" />
//             </svg>
//           )}
//           <span>{isFullscreen ? "Exit" : "Expand"}</span>
//         </button>
//       </div>

//       {/* Player */}
//       <div
//         ref={containerRef}
//         className="group relative w-full overflow-hidden border border-[#3A3835]"
//         style={{ aspectRatio: "16 / 9" }}
//       >
//         {videoId ? (
//           <iframe
//             src={embedUrl}
//             title="ASANG Brand Launch — Live Stream"
//             allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//             allowFullScreen
//             loading="eager"
//             className="absolute inset-0 h-full w-full"
//           />
//         ) : (
//           <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#1A1917]">
//             <div className="border border-[#3A3835] p-px">
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 40 40"
//                 fill="none"
//                 className="text-[#8B7355]"
//               >
//                 <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="0.75" />
//                 <polygon points="16,13 30,20 16,27" fill="currentColor" opacity="0.6" />
//               </svg>
//             </div>
//             <p className="font-sans text-xs tracking-widest text-[#6B6661] uppercase">
//               Set <code className="font-mono text-[#8B7355]">NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID</code>
//             </p>
//             <p className="font-sans text-[11px] text-[#4A4845]">
//               in <code className="font-mono">.env.local</code> to enable the stream
//             </p>
//           </div>
//         )}

//         {/* Corner mark */}
//         <div className="pointer-events-none absolute top-0 left-0 h-3 w-3 border-t border-l border-[#8B7355]/40" />
//         <div className="pointer-events-none absolute top-0 right-0 h-3 w-3 border-t border-r border-[#8B7355]/40" />
//         <div className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b border-l border-[#8B7355]/40" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-[#8B7355]/40" />
//       </div>

//       {/* Subline */}
//       <p className="font-sans text-[11px] tracking-[0.12em] text-[#6B6661] uppercase">
//         Live from the studio
//       </p>
//     </div>
//   );
// }

// function ActivityPanel() {
//   const [reactions, setReactions] = useState<DemoReaction[]>([]);
//   const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);
//   const nextId = useRef(0);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   // Add a new demo reaction at intervals
//   useEffect(() => {
//     const addReaction = () => {
//       const source = DEMO_REACTIONS[Math.floor(Math.random() * DEMO_REACTIONS.length)];
//       const entry: DemoReaction = {
//         ...source,
//         id: nextId.current++,
//         timestamp: getTimestamp(),
//       };
//       setReactions((prev) => [...prev.slice(-19), entry]);

//       // Occasionally spawn a floating emoji
//       if (Math.random() > 0.45) {
//         const emoji = REACTION_EMOJIS[Math.floor(Math.random() * REACTION_EMOJIS.length)];
//         const emojiId = nextId.current++;
//         setFloatingEmojis((prev) => [
//           ...prev,
//           { id: emojiId, emoji, x: 10 + Math.random() * 80 },
//         ]);
//         setTimeout(() => {
//           setFloatingEmojis((prev) => prev.filter((e) => e.id !== emojiId));
//         }, 3200);
//       }
//     };

//     // Seed a couple right away
//     addReaction();
//     const timeout1 = setTimeout(addReaction, 1200);
//     const timeout2 = setTimeout(addReaction, 2600);
//     const interval = setInterval(addReaction, 3800 + Math.random() * 2000);
//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//     };
//   }, []);

//   // Auto-scroll
//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [reactions]);

//   return (
//     <div className="relative flex flex-col border border-[#3A3835] bg-[#1E1C1A]" style={{ minHeight: 320 }}>
//       {/* Header */}
//       <div className="border-b border-[#3A3835] px-5 py-3.5">
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="font-sans text-[11px] font-semibold tracking-[0.16em] text-[#F0EDE8] uppercase">
//               Launch Activity
//             </p>
//             <p className="mt-0.5 font-sans text-[10px] tracking-wider text-[#6B6661]">
//               Animated demo reactions
//             </p>
//           </div>
//           <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8B7355]" />
//         </div>
//       </div>

//       {/* Floating emojis */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <AnimatePresence>
//           {floatingEmojis.map((e) => (
//             <motion.span
//               key={e.id}
//               initial={{ opacity: 0, y: "70%", scale: 0.7 }}
//               animate={{ opacity: [0, 0.7, 0.5, 0], y: ["70%", "10%"], scale: [0.7, 1, 1] }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 3, ease: "easeOut" }}
//               className="absolute text-base select-none text-[#8B7355]"
//               style={{ left: `${e.x}%` }}
//             >
//               {e.emoji}
//             </motion.span>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Feed */}
//       <div
//         ref={scrollRef}
//         className="flex-1 overflow-y-auto px-5 py-4"
//         style={{ maxHeight: 340, scrollbarWidth: "none" }}
//       >
//         <AnimatePresence initial={false}>
//           {reactions.map((r) => (
//             <motion.div
//               key={r.id}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="mb-4 last:mb-0"
//             >
//               <div className="flex items-baseline justify-between gap-2 mb-1">
//                 <span className="font-sans text-[11px] font-medium text-[#C8C2BA]">
//                   {r.name}
//                 </span>
//                 <span className="font-sans text-[10px] tabular-nums text-[#4A4845]">
//                   {r.timestamp}
//                 </span>
//               </div>
//               <p className="font-sans text-[12px] leading-relaxed text-[#8B8680]">
//                 {r.message}
//               </p>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Divider + Open Chat button */}
//       <div className="border-t border-[#3A3835] px-5 py-3.5">
//         <a
//           href={
//             VIDEO_ID
//               ? `${YOUTUBE_LIVE_CHAT_BASE}${VIDEO_ID}&embed_domain=${typeof window !== "undefined" ? window.location.hostname : ""}`
//               : "#"
//           }
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-disabled={!VIDEO_ID}
//           className={`flex w-full items-center justify-center gap-2 border px-4 py-2.5 font-sans text-[11px] tracking-widest uppercase transition ${
//             VIDEO_ID
//               ? "border-[#3A3835] text-[#8B8680] hover:border-[#8B7355] hover:text-[#F0EDE8]"
//               : "cursor-not-allowed border-[#2C2A27] text-[#3A3835]"
//           }`}
//         >
//           <svg
//             width="12"
//             height="12"
//             viewBox="0 0 12 12"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1"
//           >
//             <path d="M1 1h10v8H7l-3 2V9H1V1z" />
//           </svg>
//           Open Live Chat
//         </a>
//         <p className="mt-2 text-center font-sans text-[9px] tracking-wider text-[#3A3835] uppercase">
//           Opens actual YouTube live chat in a new tab
//         </p>
//       </div>
//     </div>
//   );
// }

// function CTARow({ videoId }: { videoId: string }) {
//   return (
//     <div className="flex flex-wrap items-center gap-3 pt-2">
//       {/* Watch Live — scrolls to video */}
//       <a
//         href="#asang-livestream-player"
//         className="inline-flex items-center gap-2 border border-[#8B7355] bg-[#8B7355]/10 px-5 py-2.5 font-sans text-[11px] tracking-widest text-[#C8B99A] uppercase transition hover:bg-[#8B7355]/20 hover:text-[#F0EDE8]"
//       >
//         <span className="relative flex h-1.5 w-1.5">
//           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
//           <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
//         </span>
//         Watch Live
//       </a>

//       {/* Open on YouTube */}
//       <a
//         href={videoId ? `${YOUTUBE_WATCH_BASE}${videoId}` : "https://www.youtube.com"}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 border border-[#3A3835] px-5 py-2.5 font-sans text-[11px] tracking-widest text-[#8B8680] uppercase transition hover:border-[#8B7355] hover:text-[#F0EDE8]"
//       >
//         <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor" className="text-[#8B7355]">
//           <path d="M11.745 1.41A1.507 1.507 0 0 0 10.695.35C9.76 0 6 0 6 0S2.24 0 1.305.35A1.507 1.507 0 0 0 .255 1.41C0 2.35 0 4.5 0 4.5s0 2.15.255 3.09c.14.52.528.912 1.05 1.06C2.24 9 6 9 6 9s3.76 0 4.695-.35a1.507 1.507 0 0 0 1.05-1.06C12 6.65 12 4.5 12 4.5s0-2.15-.255-3.09zM4.8 6.43V2.57L7.92 4.5 4.8 6.43z" />
//         </svg>
//         Open YouTube
//       </a>

//       {/* Visit ASANG */}
//       <a
//         href={ASANG_WEBSITE}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 border border-[#3A3835] px-5 py-2.5 font-sans text-[11px] tracking-widest text-[#8B8680] uppercase transition hover:border-[#8B7355] hover:text-[#F0EDE8]"
//       >
//         <svg
//           width="10"
//           height="10"
//           viewBox="0 0 10 10"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1"
//         >
//           <path d="M1 9 9 1M9 1H4M9 1v5" />
//         </svg>
//         Visit ASANG
//       </a>
//     </div>
//   );
// }

// // ─── Main component ───────────────────────────────────────────────────────────

// export default function LaunchLive() {
//   return (
//     <>
//       <GrainOverlay />

//       {/*
//         Add these Google Fonts to your <head> via next/font or _document:
//           Playfair Display — display serif
//           Inter — UI sans
//         e.g. in layout.tsx:
//           import { Playfair_Display, Inter } from "next/font/google"
//       */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap');
//         .font-serif-display { font-family: 'Playfair Display', Georgia, serif; }
//         .font-sans          { font-family: 'Inter', system-ui, sans-serif; }
//       `}</style>

//       <section
//         className="relative min-h-screen w-full overflow-hidden bg-[#17150F]"
//         aria-label="ASANG Brand Launch Live Stream"
//       >
//         {/* Subtle warm gradient wash */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(139,115,85,0.06) 0%, transparent 70%)",
//           }}
//         />

//         {/* Thin top rule */}
//         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B7355]/40 to-transparent" />

//         <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

//           {/* ── Header ─────────────────────────────────────────────────── */}
//           <motion.header
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//             className="mb-12 lg:mb-16"
//           >
//             {/* Eyebrow rule */}
//             <div className="mb-8 flex items-center gap-4">
//               <span className="h-px flex-1 max-w-[40px] bg-[#8B7355]/50" />
//               <span className="font-sans text-[10px] tracking-[0.22em] text-[#8B7355] uppercase">
//                 Live Brand Launch
//               </span>
//             </div>

//             {/* Logotype */}
//             <div className="mb-3">
//               <h1 className="font-serif-display text-[clamp(3rem,9vw,7rem)] font-normal leading-none tracking-tight text-[#F0EDE8]">
//                 ASANG
//               </h1>
//             </div>
//             <p className="mb-6 font-sans text-[12px] tracking-[0.22em] text-[#8B7355] uppercase">
//               Architecture &amp; Interiors
//             </p>
//             <p
//               className="max-w-lg font-serif-display text-[clamp(1.1rem,2vw,1.35rem)] font-normal italic leading-relaxed text-[#8B8680]"
//               style={{ fontStyle: "italic" }}
//             >
//               "An evening of architecture, interiors and ideas."
//             </p>

//             {/* Streaming status — no fake viewer count */}
//             <div className="mt-8 flex items-center gap-3">
//               <LiveBadge />
//               <span className="font-sans text-[11px] tracking-widest text-[#6B6661] uppercase">
//                 Streaming Live · Join the Launch
//               </span>
//             </div>
//           </motion.header>

//           {/* ── Main grid ──────────────────────────────────────────────── */}
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
//             id="asang-livestream-player"
//             className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]"
//           >
//             {/* Video */}
//             <div className="min-w-0">
//               <VideoPlayer videoId={VIDEO_ID} />

//               {/* CTA row — below video on all sizes */}
//               <div className="mt-6">
//                 <CTARow videoId={VIDEO_ID} />
//               </div>
//             </div>

//             {/* Activity panel */}
//             <div className="min-w-0">
//               <ActivityPanel />

//               {/* Fine print */}
//               <p className="mt-3 font-sans text-[10px] leading-relaxed text-[#3A3835]">
//                 Activity panel shows animated demo reactions for visual purposes only
//                 and does not represent actual YouTube engagement or viewer data.
//               </p>
//             </div>
//           </motion.div>

//           {/* ── Bottom rule ────────────────────────────────────────────── */}
//           <div className="mt-16 flex items-center gap-6">
//             <div className="h-px flex-1 bg-[#2C2A27]" />
//             <span className="font-sans text-[10px] tracking-[0.18em] text-[#4A4845] uppercase">
//               ASANG · {new Date().getFullYear()}
//             </span>
//             <div className="h-px flex-1 bg-[#2C2A27]" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }















// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // ─── Config ───────────────────────────────────────────────────────────────────
// const VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID ?? "";
// const LOGO_PATH = "/Asang-logo-trans-white.png"; // public/Asang-logo-trans-white.png
// const ASANG_WEBSITE = "https://www.asangdesignstudio.in/";
// const YT_WATCH = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
// const YT_EMBED = VIDEO_ID
//   ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&rel=0&modestbranding=1&color=white&fs=1&playsinline=1`
//   : "";
// const YT_CHAT = VIDEO_ID
//   ? `https://www.youtube.com/live_chat?v=${VIDEO_ID}&embed_domain=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`
//   : "#";

// // ─── Simulated live stats (animated, not real YouTube data) ───────────────────
// // These numbers animate upward to simulate live activity.
// // They are NOT real YouTube analytics.
// const BASE_VIEWERS  = 1247;
// const BASE_LIKES    = 342;
// const BASE_COMMENTS = 89;
// const BASE_SHARES   = 56;

// // ─── Indian demo comments (animated, clearly labelled as demo) ────────────────
// interface Comment {
//   id: number;
//   avatar: string;
//   name: string;
//   message: string;
//   time: string;
//   type: "comment" | "emoji" | "question" | "greeting" | "congrats";
// }

// const INDIAN_COMMENTS: Omit<Comment, "id" | "time">[] = [
//   // Greetings
//   { avatar: "🟠", name: "Priya Sharma",      message: "Hi everyone! 👋",                                         type: "greeting"  },
//   { avatar: "🟡", name: "Arjun Mehta",       message: "Helloo!! Excited for this 🎉",                           type: "greeting"  },
//   { avatar: "🔵", name: "Sneha Patel",       message: "Hi ASANG!! Finally!! 🙌",                                type: "greeting"  },
//   { avatar: "🟢", name: "Rahul Verma",       message: "Hello from Ahmedabad! 🌟",                               type: "greeting"  },
//   { avatar: "🟣", name: "Kavya Nair",        message: "Hi hi hi!! Watching from Kochi 🥰",                      type: "greeting"  },
//   { avatar: "🟤", name: "Rohit Gupta",       message: "Heyyyy! ASANG fans from day 1 here 🙏",                  type: "greeting"  },
//   // Congrats
//   { avatar: "🔴", name: "Anjali Singh",      message: "Congratulations ASANG!! 🎊🎊🎊",                         type: "congrats"  },
//   { avatar: "🟠", name: "Vikram Joshi",      message: "Badhai ho ASANG team! Bahut sundar! 🎉",                 type: "congrats"  },
//   { avatar: "🟡", name: "Meera Iyer",        message: "Congratulations!! This is incredible!! ✨",              type: "congrats"  },
//   { avatar: "🟢", name: "Deepak Rao",        message: "Bohot achha kaam hai bhai 🔥🔥",                         type: "congrats"  },
//   { avatar: "🔵", name: "Pooja Krishnan",    message: "Congratulations ASANG 🙌 From Bangalore! ❤️",           type: "congrats"  },
//   { avatar: "🟣", name: "Aakash Malhotra",   message: "This launch is 🔥 Congrats team!!",                      type: "congrats"  },
//   // Emoji-only / reactions
//   { avatar: "🔴", name: "Ritu Agarwal",      message: "❤️❤️❤️❤️❤️",                                            type: "emoji"     },
//   { avatar: "🟤", name: "Siddharth Kumar",   message: "🔥🔥🔥 ASANG 🔥🔥🔥",                                   type: "emoji"     },
//   { avatar: "🟠", name: "Nisha Pillai",      message: "✨✨✨✨✨✨✨",                                          type: "emoji"     },
//   { avatar: "🟡", name: "Karan Bhatt",       message: "👏👏👏👏",                                               type: "emoji"     },
//   { avatar: "🟢", name: "Divya Reddy",       message: "😍😍😍 Gorgeous!!",                                     type: "emoji"     },
//   { avatar: "🔵", name: "Manish Tiwari",     message: "🙌🙌🙌🙌🙌",                                            type: "emoji"     },
//   // Comments about the brand
//   { avatar: "🟣", name: "Shreya Desai",      message: "The logo is absolutely stunning 😍",                     type: "comment"   },
//   { avatar: "🟤", name: "Nikhil Jain",       message: "ASANG ka aesthetic is on another level 🔥",             type: "comment"   },
//   { avatar: "🔴", name: "Ananya Kapoor",     message: "This identity is so refined, love it ✨",               type: "comment"   },
//   { avatar: "🟠", name: "Suresh Nambiar",    message: "Interior design mein ASANG ka koi jawab nahi 🏆",       type: "comment"   },
//   { avatar: "🟡", name: "Tanvi Bhat",        message: "The colour palette is *chef's kiss* 🤌",               type: "comment"   },
//   { avatar: "🟢", name: "Gaurav Saxena",     message: "Yaar yeh branding dekh ke dil khush ho gaya! 💛",       type: "comment"   },
//   { avatar: "🔵", name: "Lakshmi Menon",     message: "Such an elegant launch. Worth the wait! 🙏",            type: "comment"   },
//   { avatar: "🟣", name: "Parth Trivedi",     message: "ASANG is going to change Indian interiors forever 🏛️",  type: "comment"   },
//   // Questions
//   { avatar: "🟤", name: "Priyanka Sharma",   message: "When will ASANG take projects from Pune? 🤔",           type: "question"  },
//   { avatar: "🔴", name: "Harish Chandra",    message: "Do you take residential projects? Interested! 🙋‍♂️",   type: "question"  },
//   { avatar: "🟠", name: "Aishwarya Menon",   message: "Can we book a consultation online? 😊",                 type: "question"  },
//   { avatar: "🟡", name: "Rajesh Batra",      message: "Website link please? 🙏",                               type: "question"  },
//   { avatar: "🟢", name: "Swati Kulkarni",    message: "Are you expanding to Delhi NCR soon?",                   type: "question"  },
//   { avatar: "🔵", name: "Dev Maheshwari",    message: "What software does ASANG use for visualisations? 👀",   type: "question"  },
// ];

// const FLOAT_EMOJIS = ["❤️","🔥","✨","🙌","👏","😍","🎉","💛","🏆","🌟","💫","🥰"];

// function ts() {
//   return new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false });
// }

// // ─── Grain ────────────────────────────────────────────────────────────────────
// function Grain() {
//   return (
//     <svg aria-hidden className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
//       <filter id="g"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
//       <rect width="100%" height="100%" filter="url(#g)"/>
//     </svg>
//   );
// }

// // ─── Live badge ───────────────────────────────────────────────────────────────
// function LiveBadge({ small = false }: { small?: boolean }) {
//   return (
//     <span className={`inline-flex items-center gap-1.5 border border-red-500/50 bg-red-600/10 ${small ? "px-2 py-0.5" : "px-2.5 py-1"}`}>
//       <span className="relative flex h-1.5 w-1.5">
//         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/>
//         <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"/>
//       </span>
//       <span className={`font-sans font-semibold uppercase tracking-[0.18em] text-red-400 ${small ? "text-[9px]" : "text-[10px]"}`}>Live</span>
//     </span>
//   );
// }

// // ─── Animated stats counter ───────────────────────────────────────────────────
// function AnimCount({ base, delta = 1, label, icon }: { base: number; delta?: number; label: string; icon: React.ReactNode }) {
//   const [count, setCount] = useState(base);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(c => c + Math.floor(Math.random() * delta + 1));
//     }, 4000 + Math.random() * 3000);
//     return () => clearInterval(id);
//   }, [delta]);
//   return (
//     <div className="flex flex-col items-center gap-1">
//       <div className="flex items-center gap-1.5">
//         <span className="text-[#8B7355]">{icon}</span>
//         <motion.span
//           key={count}
//           initial={{ y: -8, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="font-sans text-sm font-semibold tabular-nums text-[#F0EDE8]"
//         >
//           {count.toLocaleString("en-IN")}
//         </motion.span>
//       </div>
//       <span className="font-sans text-[9px] tracking-widest text-[#6B6661] uppercase">{label}</span>
//     </div>
//   );
// }

// // ─── Floating emoji layer ─────────────────────────────────────────────────────
// interface FEmoji { id: number; emoji: string; x: number; size: number }
// function FloatingLayer({ emojis }: { emojis: FEmoji[] }) {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden">
//       <AnimatePresence>
//         {emojis.map(e => (
//           <motion.span
//             key={e.id}
//             initial={{ opacity: 0, y: "92%", scale: 0.5 }}
//             animate={{ opacity: [0, 1, 0.8, 0], y: ["92%", "5%"], scale: [0.5, 1, 1.1, 0.9] }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 3.5, ease: "easeOut" }}
//             className="absolute select-none"
//             style={{ left: `${e.x}%`, fontSize: e.size }}
//           >
//             {e.emoji}
//           </motion.span>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ─── Share popup ──────────────────────────────────────────────────────────────
// function SharePopup({ onClose, videoId }: { onClose: () => void; videoId: string }) {
//   const shareUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : ASANG_WEBSITE;
//   const [copied, setCopied] = useState(false);
//   const copy = () => {
//     navigator.clipboard.writeText(shareUrl).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
//   };
//   const platforms = [
//     { name: "WhatsApp",  color: "#25D366", icon: "💬", href: `https://wa.me/?text=Watch%20ASANG%20Brand%20Launch%20LIVE%20%F0%9F%94%A5%20${encodeURIComponent(shareUrl)}` },
//     { name: "Twitter/X", color: "#1DA1F2", icon: "🐦", href: `https://twitter.com/intent/tweet?text=Watching%20%40ASANG%20brand%20launch%20LIVE%21%20✨&url=${encodeURIComponent(shareUrl)}` },
//     { name: "LinkedIn",  color: "#0A66C2", icon: "💼", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
//   ];
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.92, y: 10 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.9, y: 10 }}
//       className="absolute bottom-full right-0 mb-3 z-50 w-72 border border-[#3A3835] bg-[#1A1917] shadow-2xl shadow-black/60"
//     >
//       <div className="border-b border-[#3A3835] px-4 py-3 flex items-center justify-between">
//         <span className="font-sans text-[11px] tracking-widest text-[#F0EDE8] uppercase font-semibold">Share the Launch</span>
//         <button onClick={onClose} className="text-[#6B6661] hover:text-[#F0EDE8] transition text-sm">✕</button>
//       </div>
//       <div className="p-4 flex flex-col gap-3">
//         {platforms.map(p => (
//           <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
//             className="flex items-center gap-3 border border-[#2C2A27] px-3 py-2.5 hover:border-[#8B7355] transition">
//             <span className="text-base">{p.icon}</span>
//             <span className="font-sans text-[11px] text-[#C8C2BA]">{p.name}</span>
//           </a>
//         ))}
//         <button onClick={copy}
//           className="flex items-center gap-3 border border-[#2C2A27] px-3 py-2.5 hover:border-[#8B7355] transition w-full text-left">
//           <span className="text-base">{copied ? "✅" : "🔗"}</span>
//           <span className="font-sans text-[11px] text-[#C8C2BA]">{copied ? "Link Copied!" : "Copy Link"}</span>
//         </button>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Comment feed ─────────────────────────────────────────────────────────────
// function CommentFeed() {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [floats, setFloats] = useState<FEmoji[]>([]);
//   const nextId = useRef(0);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [showShare, setShowShare] = useState(false);
//   const [autoShareShown, setAutoShareShown] = useState(false);

//   const addComment = useCallback(() => {
//     const src = INDIAN_COMMENTS[Math.floor(Math.random() * INDIAN_COMMENTS.length)];
//     setComments(prev => [...prev.slice(-29), { ...src, id: nextId.current++, time: ts() }]);

//     // float emoji with ~50% chance
//     if (Math.random() > 0.45) {
//       const emoji = FLOAT_EMOJIS[Math.floor(Math.random() * FLOAT_EMOJIS.length)];
//       const fid = nextId.current++;
//       const fx = 5 + Math.random() * 85;
//       const fsize = 14 + Math.floor(Math.random() * 12);
//       setFloats(prev => [...prev, { id: fid, emoji, x: fx, size: fsize }]);
//       setTimeout(() => setFloats(prev => prev.filter(e => e.id !== fid)), 3600);
//     }
//   }, []);

//   useEffect(() => {
//     // seed 3 comments
//     addComment(); 
//     const t1 = setTimeout(addComment, 900);
//     const t2 = setTimeout(addComment, 1900);
//     const interval = setInterval(addComment, 2200 + Math.random() * 1500);

//     // auto-popup share after 8s, once
//     const shareTimer = setTimeout(() => {
//       if (!autoShareShown) { setShowShare(true); setAutoShareShown(true); }
//     }, 8000);

//     return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); clearTimeout(shareTimer); };
//   }, [addComment, autoShareShown]);

//   useEffect(() => {
//     if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//   }, [comments]);

//   const typeColor: Record<Comment["type"], string> = {
//     greeting: "text-blue-400",
//     congrats: "text-amber-400",
//     emoji:    "text-pink-400",
//     comment:  "text-[#C8C2BA]",
//     question: "text-emerald-400",
//   };

//   return (
//     <div className="relative flex flex-col h-full border border-[#2C2A27] bg-[#111009]">
//       <FloatingLayer emojis={floats} />

//       {/* Header */}
//       <div className="relative z-10 flex items-center justify-between border-b border-[#2C2A27] px-4 py-3 shrink-0">
//         <div>
//           <p className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[#F0EDE8] uppercase">Live Activity</p>
//           <p className="font-sans text-[9px] tracking-wider text-[#4A4845] mt-0.5">Animated demo · not real comments</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="h-1.5 w-1.5 rounded-full bg-[#8B7355] animate-pulse"/>
//           <span className="font-sans text-[9px] tracking-widest text-[#6B6661] uppercase">Simulated</span>
//         </div>
//       </div>

//       {/* Feed */}
//       <div ref={scrollRef} className="relative z-10 flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: "none" }}>
//         <AnimatePresence initial={false}>
//           {comments.map(c => (
//             <motion.div
//               key={c.id}
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.35, ease: "easeOut" }}
//               className="flex gap-2.5"
//             >
//               <span className="mt-0.5 shrink-0 text-sm leading-none">{c.avatar}</span>
//               <div className="min-w-0">
//                 <div className="flex items-baseline gap-1.5 mb-0.5">
//                   <span className="font-sans text-[10px] font-medium text-[#A89880] truncate">{c.name}</span>
//                   <span className="font-sans text-[9px] text-[#3A3835] tabular-nums shrink-0">{c.time}</span>
//                 </div>
//                 <p className={`font-sans text-[11px] leading-relaxed break-words ${typeColor[c.type]}`}>{c.message}</p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Action bar */}
//       <div className="relative z-10 shrink-0 border-t border-[#2C2A27] px-4 py-3 flex items-center gap-2">
//         <a
//           href={YT_CHAT}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 flex items-center justify-center gap-2 border border-[#2C2A27] py-2 font-sans text-[10px] tracking-widest text-[#8B8680] uppercase hover:border-[#8B7355] hover:text-[#F0EDE8] transition"
//         >
//           <svg width="11" height="10" viewBox="0 0 11 10" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 1h9v7H6.5l-2 1.5V8H1V1z"/></svg>
//           Open Chat
//         </a>
//         <div className="relative">
//           <button
//             onClick={() => setShowShare(s => !s)}
//             className="flex items-center gap-1.5 border border-[#2C2A27] px-3 py-2 font-sans text-[10px] tracking-widest text-[#8B8680] uppercase hover:border-[#8B7355] hover:text-[#F0EDE8] transition"
//           >
//             <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1">
//               <circle cx="8.5" cy="1.5" r="1"/><circle cx="8.5" cy="9.5" r="1"/><circle cx="1.5" cy="5.5" r="1"/>
//               <line x1="7.5" y1="2" x2="2.5" y2="5"/><line x1="7.5" y1="9" x2="2.5" y2="6"/>
//             </svg>
//             Share
//           </button>
//           <AnimatePresence>
//             {showShare && <SharePopup onClose={() => setShowShare(false)} videoId={VIDEO_ID}/>}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Stats bar ────────────────────────────────────────────────────────────────
// function StatsBar() {
//   return (
//     <div className="flex items-center justify-between gap-2 border border-[#2C2A27] bg-[#111009] px-4 py-3">
//       <div className="flex items-center gap-1.5 shrink-0">
//         <span className="relative flex h-1.5 w-1.5">
//           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/>
//           <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"/>
//         </span>
//         <span className="font-sans text-[9px] tracking-widest text-red-400 uppercase font-semibold">Demo Stats</span>
//       </div>
//       <div className="flex items-center gap-4 sm:gap-6">
//         <AnimCount base={BASE_VIEWERS}  delta={3} label="Watching" icon={<svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor"><path d="M5 0C2.5 0 .5 2 0 4c.5 2 2.5 4 5 4s4.5-2 5-4C9.5 2 7.5 0 5 0zm0 6.5A2.5 2.5 0 1 1 5 1.5a2.5 2.5 0 0 1 0 5z"/></svg>}/>
//         <AnimCount base={BASE_LIKES}    delta={2} label="Likes"    icon={<svg width="10" height="9" viewBox="0 0 10 9" fill="currentColor"><path d="M5 8.5S.5 5.5.5 2.8A2.3 2.3 0 0 1 5 1.6a2.3 2.3 0 0 1 4.5 1.2C9.5 5.5 5 8.5 5 8.5z"/></svg>}/>
//         <AnimCount base={BASE_COMMENTS} delta={1} label="Comments" icon={<svg width="10" height="9" viewBox="0 0 10 9" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 1h8v6H5.5l-2 1.5V7H1V1z"/></svg>}/>
//         <AnimCount base={BASE_SHARES}   delta={1} label="Shares"   icon={<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="8" cy="1.5" r=".8"/><circle cx="8" cy="8.5" r=".8"/><circle cx="1.5" cy="5" r=".8"/><line x1="7.3" y1="2" x2="2.2" y2="4.6"/><line x1="7.3" y1="8" x2="2.2" y2="5.4"/></svg>}/>
//       </div>
//     </div>
//   );
// }

// // ─── Video player ─────────────────────────────────────────────────────────────
// function VideoPlayer({ videoId }: { videoId: string }) {
//   const [fs, setFs] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   const toggleFs = useCallback(async () => {
//     if (!document.fullscreenElement) { await ref.current?.requestFullscreen(); setFs(true); }
//     else { await document.exitFullscreen(); setFs(false); }
//   }, []);

//   useEffect(() => {
//     const h = () => setFs(!!document.fullscreenElement);
//     document.addEventListener("fullscreenchange", h);
//     return () => document.removeEventListener("fullscreenchange", h);
//   }, []);

//   return (
//     <div className="flex flex-col gap-0">
//       {/* Top bar */}
//       <div className="flex items-center justify-between border border-b-0 border-[#2C2A27] bg-[#0D0B08] px-3 py-2">
//         <div className="flex items-center gap-2.5">
//           <LiveBadge small />
//           <span className="font-sans text-[10px] tracking-[0.15em] text-[#8B7355] uppercase">ASANG — Brand Launch</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="font-sans text-[9px] tracking-wider text-[#4A4845] uppercase">Live from the Studio</span>
//           <button onClick={toggleFs} aria-label="Fullscreen"
//             className="border border-[#2C2A27] p-1.5 text-[#6B6661] hover:border-[#8B7355] hover:text-[#F0EDE8] transition">
//             {fs
//               ? <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M3 0H0v3h1V1h2V0zm4 0v1h2v2h1V0H7zM0 7v3h3V9H1V7H0zm9 0v2H7v1h3V7H9z"/></svg>
//               : <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M0 0v3h1V1h2V0H0zm7 0v1h2v2h1V0H7zM0 7v3h3V9H1V7H0zm9 2H7v1h3V7H9v2z"/></svg>
//             }
//           </button>
//         </div>
//       </div>

//       {/* Iframe */}
//       <div ref={ref} className="relative w-full border border-[#2C2A27] bg-[#0A0906]" style={{ aspectRatio: "16/9" }}>
//         {videoId ? (
//           <iframe
//             src={YT_EMBED}
//             title="ASANG Brand Launch Live"
//             allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//             allowFullScreen
//             loading="eager"
//             className="absolute inset-0 h-full w-full"
//           />
//         ) : (
//           <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#0A0906]">
//             {/* Pulsing rings */}
//             <div className="relative flex h-16 w-16 items-center justify-center">
//               <span className="absolute h-16 w-16 animate-ping rounded-full border border-[#8B7355]/20"/>
//               <span className="absolute h-12 w-12 animate-ping rounded-full border border-[#8B7355]/30" style={{ animationDelay: "0.3s" }}/>
//               <div className="relative flex h-10 w-10 items-center justify-center border border-[#8B7355]/60">
//                 <svg width="16" height="18" viewBox="0 0 16 18" fill="#8B7355" opacity="0.8">
//                   <polygon points="0,0 16,9 0,18"/>
//                 </svg>
//               </div>
//             </div>
//             <div className="text-center space-y-1.5">
//               <p className="font-sans text-[11px] tracking-[0.2em] text-[#8B7355] uppercase">Awaiting Stream</p>
//               <p className="font-sans text-[10px] text-[#4A4845]">Set <code className="text-[#8B7355]">NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID</code> in .env.local</p>
//             </div>
//           </div>
//         )}
//         {/* Corner marks */}
//         {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls,i) => (
//           <div key={i} className={`pointer-events-none absolute ${cls} h-4 w-4 border-[#8B7355]/30`}/>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── CTA strip ────────────────────────────────────────────────────────────────
// function CTAStrip({ videoId }: { videoId: string }) {
//   return (
//     <div className="flex flex-wrap gap-2 mt-4">
//       <a href="#asang-hero-player" className="inline-flex items-center gap-2 border border-[#8B7355] bg-[#8B7355]/10 px-4 py-2.5 font-sans text-[10px] tracking-widest text-[#C8B99A] uppercase hover:bg-[#8B7355]/20 hover:text-[#F0EDE8] transition">
//         <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60"/><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500"/></span>
//         Watch Live
//       </a>
//       <a href={videoId ? `https://www.youtube.com/watch?v=${videoId}` : "https://www.youtube.com"} target="_blank" rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 border border-[#2C2A27] px-4 py-2.5 font-sans text-[10px] tracking-widest text-[#8B8680] uppercase hover:border-[#8B7355] hover:text-[#F0EDE8] transition">
//         <svg width="11" height="8" viewBox="0 0 11 8" fill="#8B7355"><path d="M10.75 1.29A1.38 1.38 0 0 0 9.79.32C8.94 0 5.5 0 5.5 0S2.06 0 1.21.32a1.38 1.38 0 0 0-.96.97C0 2.13 0 4 0 4s0 1.87.25 2.71a1.38 1.38 0 0 0 .96.97C2.06 8 5.5 8 5.5 8s3.44 0 4.29-.32a1.38 1.38 0 0 0 .96-.97C11 5.87 11 4 11 4s0-1.87-.25-2.71zM4.4 5.71V2.29L7.26 4 4.4 5.71z"/></svg>
//         Open YouTube
//       </a>
//       <a href={ASANG_WEBSITE} target="_blank" rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 border border-[#2C2A27] px-4 py-2.5 font-sans text-[10px] tracking-widest text-[#8B8680] uppercase hover:border-[#8B7355] hover:text-[#F0EDE8] transition">
//         <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 8 8 1M8 1H4M8 1v4"/></svg>
//         Visit ASANG
//       </a>
//     </div>
//   );
// }

// // ─── Auto notification popup ──────────────────────────────────────────────────
// const NOTIFS = [
//   { emoji: "👥", text: "1,247 people are watching the launch" },
//   { emoji: "🔥", text: "ASANG is trending in Design" },
//   { emoji: "✨", text: "Rahul just shared this stream" },
//   { emoji: "🎉", text: "500+ reactions in the last minute" },
//   { emoji: "💛", text: "Priya Sharma and 42 others liked this" },
// ];
// function NotifPopup() {
//   const [notif, setNotif] = useState<(typeof NOTIFS)[0] | null>(null);
//   const [visible, setVisible] = useState(false);
//   const idx = useRef(0);

//   useEffect(() => {
//     const show = () => {
//       setNotif(NOTIFS[idx.current % NOTIFS.length]);
//       idx.current++;
//       setVisible(true);
//       setTimeout(() => setVisible(false), 3500);
//     };
//     const t0 = setTimeout(show, 5000);
//     const interval = setInterval(show, 12000);
//     return () => { clearTimeout(t0); clearInterval(interval); };
//   }, []);

//   return (
//     <AnimatePresence>
//       {visible && notif && (
//         <motion.div
//           initial={{ opacity: 0, x: 40, scale: 0.95 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           exit={{ opacity: 0, x: 40, scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 300, damping: 28 }}
//           className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 border border-[#3A3835] bg-[#1A1917] px-4 py-3 shadow-2xl shadow-black/60 max-w-xs"
//         >
//           <span className="text-lg shrink-0">{notif.emoji}</span>
//           <div>
//             <p className="font-sans text-[10px] font-semibold tracking-wider text-[#F0EDE8] uppercase">ASANG Launch</p>
//             <p className="font-sans text-[11px] text-[#8B8680] mt-0.5">{notif.text}</p>
//           </div>
//           <p className="font-sans text-[8px] tracking-wider text-[#4A4845] uppercase shrink-0">Demo</p>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────
// export default function LaunchLive() {
//   return (
//     <>
//       <Grain />
//       <NotifPopup />

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap');
//         .font-serif-display { font-family: 'Playfair Display', Georgia, serif; }
//         .font-sans { font-family: 'Inter', system-ui, sans-serif; }
//         ::-webkit-scrollbar { display: none; }
//       `}</style>

//       <section
//         id="asang-hero-player"
//         aria-label="ASANG Brand Launch Live Stream"
//         className="relative min-h-screen w-full overflow-hidden bg-[#0D0B08]"
//       >
//         {/* Background warm glow */}
//         <div aria-hidden className="pointer-events-none absolute inset-0"
//           style={{ background: "radial-gradient(ellipse 80% 60% at 25% 35%, rgba(139,115,85,0.07) 0%, transparent 65%)" }}/>

//         {/* Top gold rule */}
//         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B7355]/50 to-transparent"/>

//         <div className="relative mx-auto max-w-[1440px] px-5 pt-10 pb-14 sm:px-8 lg:px-12 lg:pt-14 lg:pb-20">

//           {/* ── Hero header ── */}
//           <motion.header
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
//             className="mb-10 lg:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
//           >
//             {/* Left: Logo + title */}
//             <div>
//               {/* Eyebrow */}
//               <div className="flex items-center gap-3 mb-6">
//                 <span className="h-px w-8 bg-[#8B7355]/60"/>
//                 <LiveBadge />
//                 <span className="font-sans text-[10px] tracking-[0.22em] text-[#8B7355] uppercase">Brand Launch · 2025</span>
//               </div>

//               {/* Logo image */}
//               <div className="mb-3">
//                 <Image
//                   src={LOGO_PATH}
//                   alt="ASANG Architecture & Interiors"
//                   width={260}
//                   height={80}
//                   className="h-auto w-[180px] sm:w-[220px] lg:w-[260px] object-contain"
//                   priority
//                 />
//               </div>
//               <p className="font-sans text-[11px] tracking-[0.26em] text-[#8B7355] uppercase mb-5">
//                 Architecture &amp; Interiors
//               </p>
//               <p className="font-serif-display text-[clamp(1rem,1.8vw,1.25rem)] italic leading-relaxed text-[#6B6661] max-w-md">
//                 "An evening of architecture, interiors and ideas."
//               </p>
//             </div>

//             {/* Right: streaming status */}
//             <div className="flex flex-col items-start lg:items-end gap-2">
//               <div className="flex items-center gap-2">
//                 <span className="relative flex h-2 w-2">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/>
//                   <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"/>
//                 </span>
//                 <span className="font-sans text-[11px] tracking-widest text-[#8B8680] uppercase">Streaming Live</span>
//               </div>
//               <p className="font-sans text-[10px] text-[#4A4845] tracking-wider uppercase">Join the Launch · Watch Now</p>
//             </div>
//           </motion.header>

//           {/* ── Main content grid ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 22 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
//             className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]"
//           >
//             {/* Left: Video + stats + CTAs */}
//             <div className="min-w-0 flex flex-col gap-3">
//               <VideoPlayer videoId={VIDEO_ID} />
//               <StatsBar />
//               <CTAStrip videoId={VIDEO_ID} />
//             </div>

//             {/* Right: Comment feed — full height match */}
//             <div className="min-w-0 flex flex-col" style={{ minHeight: 460 }}>
//               <div className="flex-1 flex flex-col">
//                 <CommentFeed />
//               </div>
//               <p className="mt-2 font-sans text-[9px] leading-relaxed text-[#2C2A27]">
//                 All activity shown is animated demo content for visual purposes. Stats and comments do not represent real YouTube data.
//               </p>
//             </div>
//           </motion.div>

//           {/* ── Bottom rule ── */}
//           <div className="mt-16 flex items-center gap-6">
//             <div className="h-px flex-1 bg-[#1A1917]"/>
//             <span className="font-sans text-[9px] tracking-[0.2em] text-[#3A3835] uppercase">ASANG Design Studio · {new Date().getFullYear()}</span>
//             <div className="h-px flex-1 bg-[#1A1917]"/>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

















// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { LAUNCH_COMMENTS, FLOAT_EMOJIS, NOTIFS, type UserComment } from "../../lib/launchData";

// // ─── Config ───────────────────────────────────────────────────────────────────
// const VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID ?? "";
// const LOGO_PATH = "/Asang-logo-trans-white.png";
// const SITE_URL  = "https://www.asangdesignstudio.in/";
// const YT_WATCH  = VIDEO_ID ? `https://www.youtube.com/watch?v=${VIDEO_ID}` : "https://www.youtube.com";
// const YT_EMBED  = VIDEO_ID
//   ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&color=white&fs=1&playsinline=1&controls=1`
//   : "";
// const YT_CHAT   = VIDEO_ID
//   ? `https://www.youtube.com/live_chat?v=${VIDEO_ID}&embed_domain=${typeof window !== "undefined" ? window.location.hostname : "localhost"}`
//   : "#";

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface LiveComment extends UserComment {
//   id: number;
//   time: string;
//   isUser?: boolean;
// }
// interface FEmoji { id: number; emoji: string; x: number; size: number }

// function ts() {
//   return new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: false });
// }

// // ─── Grain overlay ────────────────────────────────────────────────────────────
// function Grain() {
//   return (
//     <svg aria-hidden className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.028]" xmlns="http://www.w3.org/2000/svg">
//       <filter id="g">
//         <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
//         <feColorMatrix type="saturate" values="0"/>
//       </filter>
//       <rect width="100%" height="100%" filter="url(#g)"/>
//     </svg>
//   );
// }

// // ─── Launch navbar ────────────────────────────────────────────────────────────
// function LaunchNavbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [showVisit, setShowVisit] = useState(false);

//   useEffect(() => {
//     const h = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", h, { passive: true });
//     return () => window.removeEventListener("scroll", h);
//   }, []);

//   // Auto-show visit popup after 15s
//   useEffect(() => {
//     const t = setTimeout(() => setShowVisit(true), 15000);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
//           scrolled ? "bg-[#0A0806]/95 backdrop-blur-md border-b border-[#2C2A27]" : "bg-transparent"
//         }`}
//       >
//         {/* Animated top ticker */}
//         <div className="overflow-hidden border-b border-[#8B7355]/30 bg-[#8B7355]/8 py-1.5">
//           <motion.div
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ duration: 28, ease: "linear", repeat: Infinity }}
//             className="flex gap-12 whitespace-nowrap"
//           >
//             {[...Array(4)].map((_, i) => (
//               <span key={i} className="flex items-center gap-8 font-sans text-[10px] tracking-[0.2em] text-[#8B7355] uppercase">
//                 <span className="flex items-center gap-2">
//                   <span className="relative flex h-1.5 w-1.5"><span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/><span className="relative h-1.5 w-1.5 rounded-full bg-red-500"/></span>
//                   Live Now
//                 </span>
//                 <span>✦</span>
//                 <span>ASANG Brand Launch 2025</span>
//                 <span>✦</span>
//                 <span>Architecture & Interiors</span>
//                 <span>✦</span>
//                 <span>asangdesignstudio.in</span>
//                 <span>✦</span>
//                 <span>Live from the Studio</span>
//                 <span>✦</span>
//               </span>
//             ))}
//           </motion.div>
//         </div>

//         {/* Main nav bar */}
//         <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
//           {/* Logo */}
//           <Image src={LOGO_PATH} alt="ASANG" width={120} height={36} className="h-8 w-auto object-contain" priority/>

//           {/* Nav links */}
//           <div className="hidden md:flex items-center gap-6">
//             {["Portfolio", "Services", "Insights", "About", "Contact"].map(l => (
//               <a key={l} href={`${SITE_URL}${l.toLowerCase()}`} target="_blank" rel="noopener noreferrer"
//                 className="font-sans text-[10px] tracking-[0.16em] text-[#6B6661] uppercase hover:text-[#F0EDE8] transition">
//                 {l}
//               </a>
//             ))}
//           </div>

//           {/* Right side */}
//           <div className="flex items-center gap-3">
//             <span className="hidden sm:flex items-center gap-1.5 border border-red-500/40 bg-red-600/8 px-2.5 py-1">
//               <span className="relative flex h-1.5 w-1.5"><span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/><span className="relative h-1.5 w-1.5 rounded-full bg-red-500"/></span>
//               <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-red-400 uppercase">Live</span>
//             </span>
//             <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
//               className="border border-[#8B7355] bg-[#8B7355]/10 px-3 py-1.5 font-sans text-[10px] tracking-widest text-[#C8B99A] uppercase hover:bg-[#8B7355]/25 hover:text-[#F0EDE8] transition">
//               Visit Website
//             </a>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Auto visit popup */}
//       <AnimatePresence>
//         {showVisit && (
//           <motion.div
//             initial={{ opacity: 0, y: 30, scale: 0.94 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 20, scale: 0.94 }}
//             transition={{ type: "spring", stiffness: 260, damping: 24 }}
//             className="fixed bottom-6 left-6 z-[100] w-80 border border-[#3A3835] bg-[#111009] shadow-2xl shadow-black/70 overflow-hidden"
//           >
//             {/* Top gold strip */}
//             <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#8B7355] to-transparent"/>
//             <div className="p-5">
//               <div className="flex items-start justify-between gap-3 mb-4">
//                 <div>
//                   <p className="font-serif-display text-base text-[#F0EDE8] mb-1">Explore ASANG</p>
//                   <p className="font-sans text-[11px] text-[#6B6661] leading-relaxed">
//                     Visit our portfolio of architectural spaces and refined interiors.
//                   </p>
//                 </div>
//                 <button onClick={() => setShowVisit(false)} className="shrink-0 mt-0.5 text-[#4A4845] hover:text-[#F0EDE8] transition text-sm">✕</button>
//               </div>
//               <Image src={LOGO_PATH} alt="ASANG" width={100} height={30} className="h-6 w-auto object-contain mb-4 opacity-60"/>
//               <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
//                 onClick={() => setShowVisit(false)}
//                 className="flex w-full items-center justify-center gap-2 border border-[#8B7355] bg-[#8B7355]/12 py-2.5 font-sans text-[10px] tracking-widest text-[#C8B99A] uppercase hover:bg-[#8B7355]/25 transition">
//                 <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 8 8 1M8 1H4M8 1v4"/></svg>
//                 Visit asangdesignstudio.in
//               </a>
//               <p className="mt-2 text-center font-sans text-[9px] text-[#3A3835]">Opens in a new tab</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// // ─── Floating emoji layer ─────────────────────────────────────────────────────
// function FloatingLayer({ emojis }: { emojis: FEmoji[] }) {
//   return (
//     <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
//       <AnimatePresence>
//         {emojis.map(e => (
//           <motion.span key={e.id}
//             initial={{ opacity: 0, y: "95%", scale: 0.4 }}
//             animate={{ opacity: [0, 1, 0.9, 0], y: ["95%", "2%"], scale: [0.4, 1.1, 1, 0.8] }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 3.8, ease: "easeOut" }}
//             className="absolute select-none"
//             style={{ left: `${e.x}%`, fontSize: e.size }}
//           >{e.emoji}</motion.span>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// // ─── Share popup ──────────────────────────────────────────────────────────────
// function SharePopup({ onClose }: { onClose: () => void }) {
//   const shareUrl = VIDEO_ID ? YT_WATCH : SITE_URL;
//   const [copied, setCopied] = useState(false);
//   const copy = () => { navigator.clipboard.writeText(shareUrl).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }); };
//   const platforms = [
//     { name: "WhatsApp",  icon: "💬", href: `https://wa.me/?text=Watch%20ASANG%20Brand%20Launch%20LIVE%20now%21%20🔥%20${encodeURIComponent(shareUrl)}` },
//     { name: "Twitter/X", icon: "🐦", href: `https://twitter.com/intent/tweet?text=Watching%20ASANG%20Brand%20Launch%20LIVE%21%20✨%20Amazing%20architecture%20%26%20interiors%20studio&url=${encodeURIComponent(shareUrl)}` },
//     { name: "LinkedIn",  icon: "💼", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
//     { name: "Instagram", icon: "📸", href: `https://www.instagram.com/` },
//   ];
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9, y: 8 }}
//       animate={{ opacity: 1, scale: 1, y: 0 }}
//       exit={{ opacity: 0, scale: 0.88, y: 8 }}
//       className="absolute bottom-full right-0 mb-3 z-50 w-72 border border-[#3A3835] bg-[#111009] shadow-2xl shadow-black/70"
//     >
//       <div className="h-0.5 bg-gradient-to-r from-transparent via-[#8B7355]/60 to-transparent"/>
//       <div className="border-b border-[#2C2A27] px-4 py-3 flex items-center justify-between">
//         <span className="font-sans text-[11px] tracking-widest text-[#F0EDE8] uppercase font-semibold">Share the Launch</span>
//         <button onClick={onClose} className="text-[#4A4845] hover:text-[#F0EDE8] transition">✕</button>
//       </div>
//       <div className="p-4 flex flex-col gap-2">
//         {platforms.map(p => (
//           <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
//             className="flex items-center gap-3 border border-[#2C2A27] px-3 py-2.5 hover:border-[#8B7355] hover:bg-[#8B7355]/5 transition">
//             <span className="text-base">{p.icon}</span>
//             <span className="font-sans text-[11px] text-[#C8C2BA]">{p.name}</span>
//           </a>
//         ))}
//         <button onClick={copy}
//           className="flex items-center gap-3 border border-[#2C2A27] px-3 py-2.5 hover:border-[#8B7355] hover:bg-[#8B7355]/5 transition w-full text-left">
//           <span className="text-base">{copied ? "✅" : "🔗"}</span>
//           <span className="font-sans text-[11px] text-[#C8C2BA]">{copied ? "Link Copied!" : "Copy Link"}</span>
//         </button>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Animated counter ─────────────────────────────────────────────────────────
// function AnimCount({ value, label, icon, onClick, active }: {
//   value: number; label: string; icon: React.ReactNode; onClick?: () => void; active?: boolean;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       disabled={!onClick}
//       className={`flex flex-col items-center gap-1 transition ${onClick ? "cursor-pointer hover:opacity-80 active:scale-95" : "cursor-default"}`}
//     >
//       <div className="flex items-center gap-1.5">
//         <span className={active ? "text-[#C8B99A]" : "text-[#8B7355]"}>{icon}</span>
//         <motion.span key={value} initial={{ y: -6, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
//           className={`font-sans text-sm font-semibold tabular-nums ${active ? "text-[#C8B99A]" : "text-[#F0EDE8]"}`}>
//           {value.toLocaleString("en-IN")}
//         </motion.span>
//       </div>
//       <span className="font-sans text-[9px] tracking-widest text-[#6B6661] uppercase">{label}</span>
//     </button>
//   );
// }

// // ─── Comment feed ─────────────────────────────────────────────────────────────
// function CommentFeed({
//   onLike, onShare, likes, shares, watching, comments: commentCount
// }: {
//   onLike: () => void; onShare: () => void;
//   likes: number; shares: number; watching: number; comments: number;
// }) {
//   const [feed, setFeed] = useState<LiveComment[]>([]);
//   const [floats, setFloats] = useState<FEmoji[]>([]);
//   const [userInput, setUserInput] = useState("");
//   const [showShare, setShowShare] = useState(false);
//   const [liked, setLiked] = useState(false);
//   const nextId = useRef(0);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const shareRef = useRef<HTMLDivElement>(null);

//   const spawnFloat = useCallback(() => {
//     const emoji = FLOAT_EMOJIS[Math.floor(Math.random() * FLOAT_EMOJIS.length)];
//     const fid = nextId.current++;
//     setFloats(p => [...p, { id: fid, emoji, x: 5 + Math.random() * 85, size: 14 + Math.floor(Math.random() * 12) }]);
//     setTimeout(() => setFloats(p => p.filter(e => e.id !== fid)), 4000);
//   }, []);

//   const addComment = useCallback(() => {
//     const src = LAUNCH_COMMENTS[Math.floor(Math.random() * LAUNCH_COMMENTS.length)];
//     setFeed(prev => [...prev.slice(-49), { ...src, id: nextId.current++, time: ts() }]);
//     if (Math.random() > 0.42) spawnFloat();
//   }, [spawnFloat]);

//   const submitUserComment = () => {
//     const msg = userInput.trim();
//     if (!msg) return;
//     setFeed(prev => [...prev.slice(-49), {
//       id: nextId.current++, time: ts(),
//       avatar: "🟦", name: "You", city: "",
//       message: msg, type: "comment", isUser: true,
//     }]);
//     setUserInput("");
//     spawnFloat();
//   };

//   const handleLike = () => {
//     if (!liked) { setLiked(true); onLike(); spawnFloat(); }
//   };

//   useEffect(() => {
//     addComment();
//     const t1 = setTimeout(addComment, 1100);
//     const t2 = setTimeout(addComment, 2300);
//     const t3 = setTimeout(addComment, 3600);
//     const interval = setInterval(addComment, 2400 + Math.random() * 1600);
//     return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
//   }, [addComment]);

//   useEffect(() => {
//     if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//   }, [feed]);

//   // Close share on outside click
//   useEffect(() => {
//     const h = (e: MouseEvent) => { if (shareRef.current && !shareRef.current.contains(e.target as Node)) setShowShare(false); };
//     document.addEventListener("mousedown", h);
//     return () => document.removeEventListener("mousedown", h);
//   }, []);

//   const typeColor: Record<UserComment["type"], string> = {
//     greeting: "text-blue-300",
//     congrats:  "text-amber-300",
//     emoji:     "text-pink-300",
//     comment:   "text-[#C8C2BA]",
//     question:  "text-emerald-300",
//   };

//   return (
//     <div className="relative flex flex-col border border-[#2C2A27] bg-[#0E0C0A] overflow-hidden" style={{ height: "100%" }}>
//       <FloatingLayer emojis={floats}/>

//       {/* Header with live stats */}
//       <div className="relative z-10 shrink-0 border-b border-[#2C2A27] bg-[#0A0806] px-4 py-3">
//         <div className="flex items-center justify-between mb-3">
//           <div className="flex items-center gap-2">
//             <span className="relative flex h-1.5 w-1.5"><span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/><span className="relative h-1.5 w-1.5 rounded-full bg-red-500"/></span>
//             <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-[#F0EDE8] uppercase">Live Activity</span>
//           </div>
//           <span className="font-sans text-[9px] tracking-wider text-[#8B7355]">
//             {watching.toLocaleString("en-IN")} watching
//           </span>
//         </div>
//         {/* Inline stat pills */}
//         <div className="flex items-center gap-3">
//           <button onClick={handleLike}
//             className={`flex items-center gap-1.5 border px-2.5 py-1 font-sans text-[10px] tracking-wider transition active:scale-95 ${
//               liked ? "border-[#C8B99A]/50 bg-[#8B7355]/15 text-[#C8B99A]" : "border-[#2C2A27] text-[#6B6661] hover:border-[#8B7355] hover:text-[#C8B99A]"
//             }`}>
//             <svg width="9" height="8" viewBox="0 0 9 8" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1">
//               <path d="M4.5 7.5S.5 5 .5 2.4A2 2 0 0 1 4.5 1a2 2 0 0 1 4 1.4C8.5 5 4.5 7.5 4.5 7.5z"/>
//             </svg>
//             {likes.toLocaleString("en-IN")}
//           </button>
//           <span className="font-sans text-[10px] text-[#3A3835]">·</span>
//           <span className="flex items-center gap-1.5 font-sans text-[10px] text-[#6B6661]">
//             <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 1h7v5.5H5l-1.5 1.5V6.5H1V1z"/></svg>
//             {commentCount.toLocaleString("en-IN")} comments
//           </span>
//           <span className="font-sans text-[10px] text-[#3A3835]">·</span>
//           <span className="flex items-center gap-1.5 font-sans text-[10px] text-[#6B6661]">
//             <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1">
//               <circle cx="7" cy="1.2" r=".7"/><circle cx="7" cy="7.8" r=".7"/><circle cx="1" cy="4.5" r=".7"/>
//               <line x1="6.3" y1="1.6" x2="1.7" y2="4.1"/><line x1="6.3" y1="7.4" x2="1.7" y2="4.9"/>
//             </svg>
//             {shares.toLocaleString("en-IN")} shares
//           </span>
//         </div>
//       </div>

//       {/* Feed scroll */}
//       <div ref={scrollRef} className="relative z-10 flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: "none" }}>
//         <AnimatePresence initial={false}>
//           {feed.map(c => (
//             <motion.div key={c.id}
//               initial={{ opacity: 0, x: -12 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className={`flex gap-2.5 ${c.isUser ? "flex-row-reverse" : ""}`}
//             >
//               <span className="mt-0.5 shrink-0 text-sm leading-none">{c.avatar}</span>
//               <div className={`min-w-0 ${c.isUser ? "items-end flex flex-col" : ""}`}>
//                 <div className={`flex items-baseline gap-1.5 mb-0.5 ${c.isUser ? "flex-row-reverse" : ""}`}>
//                   <span className={`font-sans text-[10px] font-medium truncate ${c.isUser ? "text-[#C8B99A]" : "text-[#A89880]"}`}>
//                     {c.name}{c.city && !c.isUser ? ` · ${c.city}` : ""}
//                   </span>
//                   <span className="font-sans text-[9px] text-[#3A3835] tabular-nums shrink-0">{c.time}</span>
//                 </div>
//                 <p className={`font-sans text-[11px] leading-relaxed break-words ${c.isUser ? "text-[#F0EDE8]" : typeColor[c.type]}`}>
//                   {c.message}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Comment input */}
//       <div className="relative z-10 shrink-0 border-t border-[#2C2A27] bg-[#0A0806] px-4 py-3">
//         <div className="flex gap-2 mb-3">
//           <input
//             type="text"
//             value={userInput}
//             onChange={e => setUserInput(e.target.value)}
//             onKeyDown={e => { if (e.key === "Enter") submitUserComment(); }}
//             placeholder="Write a comment..."
//             maxLength={120}
//             className="flex-1 border border-[#2C2A27] bg-[#111009] px-3 py-2 font-sans text-[11px] text-[#F0EDE8] placeholder-[#4A4845] outline-none focus:border-[#8B7355] transition"
//           />
//           <button onClick={submitUserComment}
//             className="border border-[#8B7355] bg-[#8B7355]/12 px-3 py-2 font-sans text-[10px] tracking-widest text-[#C8B99A] uppercase hover:bg-[#8B7355]/25 transition">
//             Send
//           </button>
//         </div>
//         {/* Actions row */}
//         <div className="flex items-center gap-2">
//           <button onClick={handleLike}
//             className={`flex flex-1 items-center justify-center gap-1.5 border py-2 font-sans text-[10px] tracking-wider uppercase transition active:scale-95 ${
//               liked ? "border-[#C8B99A]/40 text-[#C8B99A]" : "border-[#2C2A27] text-[#6B6661] hover:border-[#8B7355] hover:text-[#C8B99A]"
//             }`}>
//             <svg width="10" height="9" viewBox="0 0 10 9" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1">
//               <path d="M5 8.5S.5 5.5.5 2.8A2.3 2.3 0 0 1 5 1.6a2.3 2.3 0 0 1 4.5 1.2C9.5 5.5 5 8.5 5 8.5z"/>
//             </svg>
//             {liked ? "Liked" : "Like"}
//           </button>
//           <div ref={shareRef} className="relative flex-1">
//             <button onClick={() => { setShowShare(s => !s); onShare(); }}
//               className="flex w-full items-center justify-center gap-1.5 border border-[#2C2A27] py-2 font-sans text-[10px] tracking-wider text-[#6B6661] uppercase hover:border-[#8B7355] hover:text-[#C8B99A] transition">
//               <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
//                 <circle cx="8" cy="1.5" r=".8"/><circle cx="8" cy="8.5" r=".8"/><circle cx="1.5" cy="5" r=".8"/>
//                 <line x1="7.3" y1="2" x2="2.2" y2="4.6"/><line x1="7.3" y1="8" x2="2.2" y2="5.4"/>
//               </svg>
//               Share
//             </button>
//             <AnimatePresence>{showShare && <SharePopup onClose={() => setShowShare(false)}/>}</AnimatePresence>
//           </div>
//           <a href={YT_CHAT} target="_blank" rel="noopener noreferrer"
//             className="flex flex-1 items-center justify-center gap-1.5 border border-[#2C2A27] py-2 font-sans text-[10px] tracking-wider text-[#6B6661] uppercase hover:border-[#8B7355] hover:text-[#C8B99A] transition">
//             <svg width="10" height="9" viewBox="0 0 10 9" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 1h8v6H5.5l-2 1.5V7H1V1z"/></svg>
//             YT Chat
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Video player ─────────────────────────────────────────────────────────────
// function VideoPlayer({ videoId }: { videoId: string }) {
//   const [fs, setFs] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);
//   const toggleFs = useCallback(async () => {
//     if (!document.fullscreenElement) { await ref.current?.requestFullscreen(); setFs(true); }
//     else { await document.exitFullscreen(); setFs(false); }
//   }, []);
//   useEffect(() => {
//     const h = () => setFs(!!document.fullscreenElement);
//     document.addEventListener("fullscreenchange", h);
//     return () => document.removeEventListener("fullscreenchange", h);
//   }, []);

//   return (
//     <div className="flex flex-col">
//       <div className="flex items-center justify-between border border-b-0 border-[#2C2A27] bg-[#0A0806] px-3 py-2">
//         <div className="flex items-center gap-2.5">
//           <span className="inline-flex items-center gap-1.5 border border-red-500/40 bg-red-600/8 px-2 py-0.5">
//             <span className="relative flex h-1.5 w-1.5"><span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/><span className="relative h-1.5 w-1.5 rounded-full bg-red-500"/></span>
//             <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-red-400 uppercase">Live</span>
//           </span>
//           <span className="font-sans text-[10px] tracking-[0.14em] text-[#8B7355] uppercase">ASANG — Brand Launch</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="hidden sm:block font-sans text-[9px] tracking-wider text-[#4A4845] uppercase">Live from the Studio</span>
//           <button onClick={toggleFs} aria-label="Fullscreen"
//             className="border border-[#2C2A27] p-1.5 text-[#6B6661] hover:border-[#8B7355] hover:text-[#F0EDE8] transition">
//             {fs
//               ? <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M3 0H0v3h1V1h2V0zm4 0v1h2v2h1V0H7zM0 7v3h3V9H1V7H0zm9 0v2H7v1h3V7H9z"/></svg>
//               : <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M0 0v3h1V1h2V0H0zm7 0v1h2v2h1V0H7zM0 7v3h3V9H1V7H0zm9 2H7v1h3V7H9v2z"/></svg>
//             }
//           </button>
//         </div>
//       </div>
//       <div ref={ref} className="relative w-full border border-[#2C2A27] bg-[#080604]" style={{ aspectRatio: "16/9" }}>
//         {videoId ? (
//           <iframe src={YT_EMBED} title="ASANG Brand Launch Live"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//             allowFullScreen loading="eager" className="absolute inset-0 h-full w-full"/>
//         ) : (
//           <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#080604]">
//             <div className="relative flex h-16 w-16 items-center justify-center">
//               <span className="absolute h-16 w-16 animate-ping rounded-full border border-[#8B7355]/20"/>
//               <span className="absolute h-11 w-11 animate-ping rounded-full border border-[#8B7355]/30" style={{ animationDelay: "0.4s" }}/>
//               <div className="relative flex h-9 w-9 items-center justify-center border border-[#8B7355]/50">
//                 <svg width="14" height="16" viewBox="0 0 14 16" fill="#8B7355" opacity="0.7"><polygon points="0,0 14,8 0,16"/></svg>
//               </div>
//             </div>
//             <div className="text-center space-y-1.5">
//               <p className="font-sans text-[11px] tracking-[0.2em] text-[#8B7355] uppercase">Awaiting Stream</p>
//               <p className="font-sans text-[10px] text-[#4A4845]">Set <code className="text-[#8B7355]">NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID</code></p>
//             </div>
//           </div>
//         )}
//         {/* Corner accents */}
//         {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((c,i) => (
//           <div key={i} className={`pointer-events-none absolute ${c} h-4 w-4 border-[#8B7355]/25`}/>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─── Stats bar ────────────────────────────────────────────────────────────────
// function StatsBar({ watching, likes, comments, shares, onLike, onShare, liked }: {
//   watching: number; likes: number; comments: number; shares: number;
//   onLike: () => void; onShare: () => void; liked: boolean;
// }) {
//   return (
//     <div className="flex items-center justify-between border border-[#2C2A27] bg-[#0A0806] px-4 py-3">
//       <AnimCount value={watching} label="Watching" icon={
//         <svg width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
//           <path d="M5 0C2.5 0 .5 2 0 4c.5 2 2.5 4 5 4s4.5-2 5-4C9.5 2 7.5 0 5 0zm0 6A2 2 0 1 1 5 2a2 2 0 0 1 0 4z"/>
//         </svg>
//       }/>
//       <div className="h-4 w-px bg-[#2C2A27]"/>
//       <AnimCount value={likes} label="Likes" active={liked} onClick={onLike} icon={
//         <svg width="10" height="9" viewBox="0 0 10 9" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1">
//           <path d="M5 8.5S.5 5.5.5 2.8A2.3 2.3 0 0 1 5 1.6a2.3 2.3 0 0 1 4.5 1.2C9.5 5.5 5 8.5 5 8.5z"/>
//         </svg>
//       }/>
//       <div className="h-4 w-px bg-[#2C2A27]"/>
//       <AnimCount value={comments} label="Comments" icon={
//         <svg width="10" height="9" viewBox="0 0 10 9" fill="none" stroke="currentColor" strokeWidth="1">
//           <path d="M1 1h8v6H5.5l-2 1.5V7H1V1z"/>
//         </svg>
//       }/>
//       <div className="h-4 w-px bg-[#2C2A27]"/>
//       <AnimCount value={shares} label="Shares" onClick={onShare} icon={
//         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
//           <circle cx="8" cy="1.5" r=".8"/><circle cx="8" cy="8.5" r=".8"/><circle cx="1.5" cy="5" r=".8"/>
//           <line x1="7.3" y1="2" x2="2.2" y2="4.6"/><line x1="7.3" y1="8" x2="2.2" y2="5.4"/>
//         </svg>
//       }/>
//     </div>
//   );
// }

// // ─── CTA strip ────────────────────────────────────────────────────────────────
// function CTAStrip() {
//   return (
//     <div className="flex flex-wrap gap-2">
//       <a href={YT_WATCH} target="_blank" rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 border border-[#8B7355] bg-[#8B7355]/10 px-4 py-2.5 font-sans text-[10px] tracking-widest text-[#C8B99A] uppercase hover:bg-[#8B7355]/22 hover:text-[#F0EDE8] transition">
//         <svg width="11" height="8" viewBox="0 0 11 8" fill="#C8B99A"><path d="M10.75 1.29A1.38 1.38 0 0 0 9.79.32C8.94 0 5.5 0 5.5 0S2.06 0 1.21.32a1.38 1.38 0 0 0-.96.97C0 2.13 0 4 0 4s0 1.87.25 2.71a1.38 1.38 0 0 0 .96.97C2.06 8 5.5 8 5.5 8s3.44 0 4.29-.32a1.38 1.38 0 0 0 .96-.97C11 5.87 11 4 11 4s0-1.87-.25-2.71zM4.4 5.71V2.29L7.26 4 4.4 5.71z"/></svg>
//         Open YouTube
//       </a>
//       <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 border border-[#3A3835] px-4 py-2.5 font-sans text-[10px] tracking-widest text-[#8B8680] uppercase hover:border-[#8B7355] hover:text-[#F0EDE8] transition">
//         <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 8 8 1M8 1H4M8 1v4"/></svg>
//         asangdesignstudio.in
//       </a>
//     </div>
//   );
// }

// // ─── Notification popup ───────────────────────────────────────────────────────
// function NotifToast() {
//   const [notif, setNotif] = useState<typeof NOTIFS[0] | null>(null);
//   const [vis, setVis] = useState(false);
//   const idx = useRef(0);
//   useEffect(() => {
//     const show = () => {
//       setNotif(NOTIFS[idx.current % NOTIFS.length]);
//       idx.current++;
//       setVis(true);
//       setTimeout(() => setVis(false), 4000);
//     };
//     const t = setTimeout(show, 6000);
//     const iv = setInterval(show, 14000);
//     return () => { clearTimeout(t); clearInterval(iv); };
//   }, []);
//   return (
//     <AnimatePresence>
//       {vis && notif && (
//         <motion.div
//           initial={{ opacity: 0, x: 50, scale: 0.94 }}
//           animate={{ opacity: 1, x: 0, scale: 1 }}
//           exit={{ opacity: 0, x: 50, scale: 0.94 }}
//           transition={{ type: "spring", stiffness: 280, damping: 26 }}
//           className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 border border-[#3A3835] bg-[#111009] px-4 py-3 shadow-2xl shadow-black/70 max-w-[280px]"
//         >
//           <div className="h-full w-0.5 self-stretch bg-[#8B7355]/40 mr-1"/>
//           <span className="text-lg shrink-0">{notif.emoji}</span>
//           <div className="min-w-0">
//             <p className="font-sans text-[9px] font-semibold tracking-[0.18em] text-[#8B7355] uppercase mb-0.5">ASANG Launch</p>
//             <p className="font-sans text-[11px] text-[#A89880] leading-snug">{notif.text}</p>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // ─── Visit website attraction bar ─────────────────────────────────────────────
// function VisitBar() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 1.2 }}
//       className="border border-[#2C2A27] bg-[#0A0806] overflow-hidden"
//     >
//       <div className="flex items-center gap-4 px-4 py-3">
//         <div className="shrink-0">
//           <Image src={LOGO_PATH} alt="ASANG" width={80} height={24} className="h-5 w-auto object-contain opacity-70"/>
//         </div>
//         <div className="h-6 w-px bg-[#2C2A27] shrink-0"/>
//         <div className="flex-1 min-w-0">
//           <p className="font-sans text-[10px] text-[#6B6661] truncate">Portfolio · Architecture · Interiors</p>
//         </div>
//         <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
//           className="shrink-0 flex items-center gap-2 border border-[#8B7355]/60 bg-[#8B7355]/8 px-3 py-1.5 font-sans text-[10px] tracking-widest text-[#C8B99A] uppercase hover:bg-[#8B7355]/20 hover:border-[#8B7355] transition whitespace-nowrap">
//           <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1"><path d="M1 7 7 1M7 1H3M7 1v4"/></svg>
//           Explore
//         </a>
//       </div>
//     </motion.div>
//   );
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────
// export default function LaunchLive() {
//   const [watching,  setWatching]  = useState(1247);
//   const [likes,     setLikes]     = useState(342);
//   const [comments,  setComments]  = useState(89);
//   const [shares,    setShares]    = useState(56);
//   const [liked,     setLiked]     = useState(false);
//   const [showSharePopup, setShowSharePopup] = useState(false);

//   // Organic upward drift for all stats
//   useEffect(() => {
//     const watchIv = setInterval(() => setWatching(n => n + Math.floor(Math.random() * 4)),             5000);
//     const likeIv  = setInterval(() => setLikes(n => n + Math.floor(Math.random() * 3)),               6500);
//     const cmtIv   = setInterval(() => setComments(n => n + 1),                                          3200);
//     const shrIv   = setInterval(() => setShares(n => n + Math.floor(Math.random() * 2)),              9000);
//     return () => { clearInterval(watchIv); clearInterval(likeIv); clearInterval(cmtIv); clearInterval(shrIv); };
//   }, []);

//   const handleLike = useCallback(() => {
//     if (!liked) { setLiked(true); setLikes(n => n + 1); }
//   }, [liked]);

//   const handleShare = useCallback(() => {
//     setShares(n => n + 1);
//     setShowSharePopup(true);
//   }, []);

//   return (
//     <>
//       <Grain/>
//       <NotifToast/>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap');
//         .font-serif-display { font-family: 'Playfair Display', Georgia, serif; }
//         .font-sans { font-family: 'Inter', system-ui, sans-serif; }
//         * { scrollbar-width: none; }
//         *::-webkit-scrollbar { display: none; }
//       `}</style>

//       <LaunchNavbar/>

//       <section
//         id="asang-hero"
//         aria-label="ASANG Brand Launch"
//         className="relative min-h-screen w-full overflow-hidden bg-[#0D0B08] pt-[72px]"
//       >
//         {/* Warm glow */}
//         <div aria-hidden className="pointer-events-none absolute inset-0"
//           style={{ background: "radial-gradient(ellipse 75% 55% at 22% 30%, rgba(139,115,85,0.07) 0%, transparent 65%)" }}/>
//         <div className="absolute top-[72px] inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B7355]/40 to-transparent"/>

//         <div className="relative mx-auto max-w-[1440px] px-5 pt-8 pb-14 sm:px-8 lg:px-12 lg:pt-12 lg:pb-20">

//           {/* ── Hero header ── */}
//           <motion.header
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="mb-9 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5"
//           >
//             <div>
//               <div className="flex items-center gap-3 mb-5">
//                 <span className="h-px w-7 bg-[#8B7355]/50"/>
//                 <span className="inline-flex items-center gap-1.5 border border-red-500/40 bg-red-600/8 px-2.5 py-1">
//                   <span className="relative flex h-1.5 w-1.5"><span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/><span className="relative h-1.5 w-1.5 rounded-full bg-red-500"/></span>
//                   <span className="font-sans text-[9px] font-semibold tracking-[0.18em] text-red-400 uppercase">Live</span>
//                 </span>
//                 <span className="font-sans text-[10px] tracking-[0.2em] text-[#8B7355] uppercase">Brand Launch · 2025</span>
//               </div>
//               <div className="mb-2">
//                 <Image src={LOGO_PATH} alt="ASANG Architecture & Interiors"
//                   width={280} height={84}
//                   className="h-auto w-[160px] sm:w-[210px] lg:w-[260px] object-contain"
//                   priority/>
//               </div>
//               <p className="font-sans text-[11px] tracking-[0.26em] text-[#8B7355] uppercase mb-4">Architecture &amp; Interiors</p>
//               <p className="font-serif-display text-[clamp(1rem,1.7vw,1.2rem)] italic leading-relaxed text-[#5A5753] max-w-md">
//                 "An evening of architecture, interiors and ideas."
//               </p>
//             </div>
//             <div className="flex flex-col items-start lg:items-end gap-1.5">
//               <div className="flex items-center gap-2">
//                 <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"/><span className="relative h-2 w-2 rounded-full bg-red-500"/></span>
//                 <span className="font-sans text-[11px] tracking-widest text-[#8B8680] uppercase">Streaming Live</span>
//               </div>
//               <p className="font-sans text-[10px] text-[#4A4845] tracking-wider uppercase">Join the Launch · Watch Now</p>
//             </div>
//           </motion.header>

//           {/* ── Main grid ── */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//             className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]"
//           >
//             {/* Left col */}
//             <div className="flex flex-col gap-3 min-w-0">
//               <VideoPlayer videoId={VIDEO_ID}/>
//               <StatsBar
//                 watching={watching} likes={likes}
//                 comments={comments} shares={shares}
//                 onLike={handleLike} onShare={handleShare} liked={liked}
//               />
//               <VisitBar/>
//               <CTAStrip/>
//             </div>

//             {/* Right col */}
//             <div className="flex flex-col min-w-0" style={{ height: "clamp(460px, 70vh, 680px)" }}>
//               <CommentFeed
//                 onLike={handleLike} onShare={handleShare}
//                 likes={likes} shares={shares}
//                 watching={watching} comments={comments}
//               />
//             </div>
//           </motion.div>

//           {/* ── Bottom rule ── */}
//           <div className="mt-16 flex items-center gap-6">
//             <div className="h-px flex-1 bg-[#1A1917]"/>
//             <a href={SITE_URL} target="_blank" rel="noopener noreferrer"
//               className="font-sans text-[9px] tracking-[0.2em] text-[#3A3835] uppercase hover:text-[#8B7355] transition">
//               ASANG Design Studio · asangdesignstudio.in · {new Date().getFullYear()}
//             </a>
//             <div className="h-px flex-1 bg-[#1A1917]"/>
//           </div>
//         </div>
//       </section>

//       {/* Global share popup */}
//       <AnimatePresence>
//         {showSharePopup && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
//             onClick={() => setShowSharePopup(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               transition={{ type: "spring", stiffness: 280, damping: 26 }}
//               onClick={e => e.stopPropagation()}
//               className="w-[340px] border border-[#3A3835] bg-[#111009] shadow-2xl shadow-black/80 overflow-hidden"
//             >
//               <div className="h-0.5 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent"/>
//               <div className="border-b border-[#2C2A27] px-5 py-4 flex items-center justify-between">
//                 <div>
//                   <p className="font-serif-display text-base text-[#F0EDE8]">Share the Launch</p>
//                   <p className="font-sans text-[10px] text-[#6B6661] mt-0.5">Spread the word about ASANG</p>
//                 </div>
//                 <button onClick={() => setShowSharePopup(false)} className="text-[#4A4845] hover:text-[#F0EDE8] transition">✕</button>
//               </div>
//               <div className="p-5 flex flex-col gap-2.5">
//                 {[
//                   { name: "WhatsApp",  icon: "💬", href: `https://wa.me/?text=Watch%20ASANG%20Brand%20Launch%20LIVE%20now%21%20🔥%20${encodeURIComponent(VIDEO_ID ? YT_WATCH : SITE_URL)}` },
//                   { name: "Twitter/X", icon: "🐦", href: `https://twitter.com/intent/tweet?text=Watching%20ASANG%20Brand%20Launch%20LIVE%21%20✨&url=${encodeURIComponent(VIDEO_ID ? YT_WATCH : SITE_URL)}` },
//                   { name: "LinkedIn",  icon: "💼", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}` },
//                   { name: "Instagram", icon: "📸", href: "https://www.instagram.com/" },
//                 ].map(p => (
//                   <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" onClick={() => setShowSharePopup(false)}
//                     className="flex items-center gap-3 border border-[#2C2A27] px-4 py-3 hover:border-[#8B7355] hover:bg-[#8B7355]/5 transition">
//                     <span className="text-lg">{p.icon}</span>
//                     <span className="font-sans text-[12px] text-[#C8C2BA]">{p.name}</span>
//                   </a>
//                 ))}
//                 <button onClick={() => { navigator.clipboard.writeText(VIDEO_ID ? YT_WATCH : SITE_URL); setShowSharePopup(false); }}
//                   className="flex items-center gap-3 border border-[#2C2A27] px-4 py-3 hover:border-[#8B7355] hover:bg-[#8B7355]/5 transition w-full text-left">
//                   <span className="text-lg">🔗</span>
//                   <span className="font-sans text-[12px] text-[#C8C2BA]">Copy Link</span>
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
























"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LAUNCH_COMMENTS,
  FLOAT_EMOJIS,
  NOTIFS,
  type UserComment,
} from "../../lib/launchData";

// ─── Config ───────────────────────────────────────────────────────────────────

const VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID ?? "";

const LOGO_PATH = "/Asang-logo-trans-white.png";

const SITE_URL = "https://www.asangdesignstudio.in/";

const YT_WATCH = VIDEO_ID
  ? `https://www.youtube.com/watch?v=${VIDEO_ID}`
  : "https://www.youtube.com";

/*
 * IMPORTANT:
 *
 * Do NOT add mute=1 here.
 *
 * autoplay=1  → requests autoplay
 * playsinline=1 → keeps video inline on mobile
 * controls=1 → gives user YouTube controls including volume
 *
 * Browsers may still block autoplay WITH sound.
 * This is controlled by the browser, not the website.
 */
const YT_EMBED = VIDEO_ID
  ? `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&rel=0&modestbranding=1&color=white&fs=1&playsinline=1&controls=1`
  : "";

const YT_CHAT = VIDEO_ID
  ? `https://www.youtube.com/live_chat?v=${VIDEO_ID}&embed_domain=${
      typeof window !== "undefined"
        ? window.location.hostname
        : "localhost"
    }`
  : "#";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LiveComment extends UserComment {
  id: number;
  time: string;
  isUser?: boolean;
}

interface FEmoji {
  id: number;
  emoji: string;
  x: number;
  size: number;
}

function ts() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

// ─── Grain overlay ────────────────────────────────────────────────────────────

function Grain() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.028]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="g">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>

      <rect width="100%" height="100%" filter="url(#g)" />
    </svg>
  );
}

// ─── Launch navbar ────────────────────────────────────────────────────────────

function LaunchNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showVisit, setShowVisit] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", h, { passive: true });

    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowVisit(true), 15000);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#2C2A27] bg-[#0A0806]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Top ticker */}

        <div className="overflow-hidden border-b border-[#8B7355]/30 bg-[#8B7355]/8 py-1.5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-8 font-sans text-[10px] uppercase tracking-[0.2em] text-[#8B7355]"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
                  </span>

                  Live Now
                </span>

                <span>✦</span>
                <span>ASANG Brand Launch</span>
                <span>✦</span>
                <span>Architecture & Interiors</span>
                <span>✦</span>
                <span>asangdesignstudio.in</span>
                <span>✦</span>
                <span>Live from the Studio</span>
                <span>✦</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main nav */}

        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2.5 sm:px-8 sm:py-3 lg:px-12">
          <Image
            src={LOGO_PATH}
            alt="ASANG"
            width={120}
            height={36}
            className="h-7 w-auto object-contain sm:h-8"
            priority
          />

          <div className="hidden items-center gap-6 md:flex">
            {[
              "Portfolio",
              "Services",
              "Insights",
              "About",
              "Contact",
            ].map((l) => (
              <a
                key={l}
                href={`${SITE_URL}${l.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#6B6661] transition hover:text-[#F0EDE8]"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden items-center gap-1.5 border border-red-500/40 bg-red-600/8 px-2.5 py-1 sm:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
              </span>

              <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-red-400">
                Live
              </span>
            </span>

            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#8B7355] bg-[#8B7355]/10 px-2.5 py-1.5 font-sans text-[9px] uppercase tracking-widest text-[#C8B99A] transition hover:bg-[#8B7355]/25 hover:text-[#F0EDE8] sm:px-3 sm:text-[10px]"
            >
              Visit Website
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Visit popup */}

      <AnimatePresence>
        {showVisit && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.94,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
            }}
            className="fixed bottom-4 left-4 z-[100] w-[calc(100%-2rem)] max-w-80 overflow-hidden border border-[#3A3835] bg-[#111009] shadow-2xl shadow-black/70 sm:bottom-6 sm:left-6"
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#8B7355] to-transparent" />

            <div className="p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="mb-1 font-serif-display text-base text-[#F0EDE8]">
                    Explore ASANG
                  </p>

                  <p className="font-sans text-[11px] leading-relaxed text-[#6B6661]">
                    Visit our portfolio of architectural spaces and refined
                    interiors.
                  </p>
                </div>

                <button
                  onClick={() => setShowVisit(false)}
                  className="mt-0.5 shrink-0 text-sm text-[#4A4845] transition hover:text-[#F0EDE8]"
                >
                  ✕
                </button>
              </div>

              <Image
                src={LOGO_PATH}
                alt="ASANG"
                width={100}
                height={30}
                className="mb-4 h-6 w-auto object-contain opacity-60"
              />

              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowVisit(false)}
                className="flex w-full items-center justify-center gap-2 border border-[#8B7355] bg-[#8B7355]/12 py-2.5 font-sans text-[10px] uppercase tracking-widest text-[#C8B99A] transition hover:bg-[#8B7355]/25"
              >
                Visit asangdesignstudio.in
              </a>

              <p className="mt-2 text-center font-sans text-[9px] text-[#3A3835]">
                Opens in a new tab
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Floating emoji layer ─────────────────────────────────────────────────────

function FloatingLayer({ emojis }: { emojis: FEmoji[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <AnimatePresence>
        {emojis.map((e) => (
          <motion.span
            key={e.id}
            initial={{
              opacity: 0,
              y: "95%",
              scale: 0.4,
            }}
            animate={{
              opacity: [0, 1, 0.9, 0],
              y: ["95%", "2%"],
              scale: [0.4, 1.1, 1, 0.8],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 3.8,
              ease: "easeOut",
            }}
            className="absolute select-none"
            style={{
              left: `${e.x}%`,
              fontSize: e.size,
            }}
          >
            {e.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── Share popup ──────────────────────────────────────────────────────────────

function SharePopup({ onClose }: { onClose: () => void }) {
  const shareUrl = VIDEO_ID ? YT_WATCH : SITE_URL;

  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    });
  };

  const platforms = [
    {
      name: "WhatsApp",
      icon: "💬",
      href: `https://wa.me/?text=Watch%20ASANG%20Brand%20Launch%20LIVE%20now%21%20🔥%20${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter/X",
      icon: "🐦",
      href: `https://twitter.com/intent/tweet?text=Watching%20ASANG%20Brand%20Launch%20LIVE%21%20✨&url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Instagram",
      icon: "📸",
      href: "https://www.instagram.com/",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.88,
        y: 8,
      }}
      className="absolute bottom-full right-0 z-50 mb-3 w-72 border border-[#3A3835] bg-[#111009] shadow-2xl shadow-black/70"
    >
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#8B7355]/60 to-transparent" />

      <div className="flex items-center justify-between border-b border-[#2C2A27] px-4 py-3">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#F0EDE8]">
          Share the Launch
        </span>

        <button
          onClick={onClose}
          className="text-[#4A4845] transition hover:text-[#F0EDE8]"
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col gap-2 p-4">
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-[#2C2A27] px-3 py-2.5 transition hover:border-[#8B7355] hover:bg-[#8B7355]/5"
          >
            <span className="text-base">{p.icon}</span>

            <span className="font-sans text-[11px] text-[#C8C2BA]">
              {p.name}
            </span>
          </a>
        ))}

        <button
          onClick={copy}
          className="flex w-full items-center gap-3 border border-[#2C2A27] px-3 py-2.5 text-left transition hover:border-[#8B7355] hover:bg-[#8B7355]/5"
        >
          <span className="text-base">
            {copied ? "✅" : "🔗"}
          </span>

          <span className="font-sans text-[11px] text-[#C8C2BA]">
            {copied ? "Link Copied!" : "Copy Link"}
          </span>
        </button>
      </div>
    </motion.div>
  );
}

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimCount({
  value,
  label,
  icon,
  onClick,
  active,
}: {
  value: number;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`flex flex-col items-center gap-1 transition ${
        onClick
          ? "cursor-pointer hover:opacity-80 active:scale-95"
          : "cursor-default"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span
          className={
            active ? "text-[#C8B99A]" : "text-[#8B7355]"
          }
        >
          {icon}
        </span>

        <motion.span
          key={value}
          initial={{
            y: -6,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className={`font-sans text-sm font-semibold tabular-nums ${
            active ? "text-[#C8B99A]" : "text-[#F0EDE8]"
          }`}
        >
          {value.toLocaleString("en-IN")}
        </motion.span>
      </div>

      <span className="font-sans text-[9px] uppercase tracking-widest text-[#6B6661]">
        {label}
      </span>
    </button>
  );
}

// ─── Comment feed ─────────────────────────────────────────────────────────────

function CommentFeed({
  onLike,
  onShare,
  likes,
  shares,
  watching,
  comments: commentCount,
}: {
  onLike: () => void;
  onShare: () => void;
  likes: number;
  shares: number;
  watching: number;
  comments: number;
}) {
  const [feed, setFeed] = useState<LiveComment[]>([]);
  const [floats, setFloats] = useState<FEmoji[]>([]);
  const [userInput, setUserInput] = useState("");
  const [showShare, setShowShare] = useState(false);
  const [liked, setLiked] = useState(false);

  const nextId = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const shareRef = useRef<HTMLDivElement>(null);

  const spawnFloat = useCallback(() => {
    const emoji =
      FLOAT_EMOJIS[
        Math.floor(Math.random() * FLOAT_EMOJIS.length)
      ];

    const fid = nextId.current++;

    setFloats((p) => [
      ...p,
      {
        id: fid,
        emoji,
        x: 5 + Math.random() * 85,
        size: 14 + Math.floor(Math.random() * 12),
      },
    ]);

    setTimeout(() => {
      setFloats((p) =>
        p.filter((e) => e.id !== fid)
      );
    }, 4000);
  }, []);

  const addComment = useCallback(() => {
    const src =
      LAUNCH_COMMENTS[
        Math.floor(Math.random() * LAUNCH_COMMENTS.length)
      ];

    setFeed((prev) => [
      ...prev.slice(-49),
      {
        ...src,
        id: nextId.current++,
        time: ts(),
      },
    ]);

    if (Math.random() > 0.42) {
      spawnFloat();
    }
  }, [spawnFloat]);

  const submitUserComment = () => {
    const msg = userInput.trim();

    if (!msg) return;

    setFeed((prev) => [
      ...prev.slice(-49),
      {
        id: nextId.current++,
        time: ts(),
        avatar: "🟦",
        name: "You",
        city: "",
        message: msg,
        type: "comment",
        isUser: true,
      },
    ]);

    setUserInput("");

    spawnFloat();
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      onLike();
      spawnFloat();
    }
  };

  useEffect(() => {
    addComment();

    const t1 = setTimeout(addComment, 1100);
    const t2 = setTimeout(addComment, 2300);
    const t3 = setTimeout(addComment, 3600);

    const interval = setInterval(
      addComment,
      2400 + Math.random() * 1600
    );

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [addComment]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight;
    }
  }, [feed]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (
        shareRef.current &&
        !shareRef.current.contains(e.target as Node)
      ) {
        setShowShare(false);
      }
    };

    document.addEventListener("mousedown", h);

    return () =>
      document.removeEventListener("mousedown", h);
  }, []);

  const typeColor: Record<
    UserComment["type"],
    string
  > = {
    greeting: "text-blue-300",
    congrats: "text-amber-300",
    emoji: "text-pink-300",
    comment: "text-[#C8C2BA]",
    question: "text-emerald-300",
  };

  return (
    <div
      className="relative flex h-full flex-col overflow-hidden border border-[#2C2A27] bg-[#0E0C0A]"
    >
      <FloatingLayer emojis={floats} />

      {/* Header */}

      <div className="relative z-10 shrink-0 border-b border-[#2C2A27] bg-[#0A0806] px-4 py-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F0EDE8]">
              Live Activity
            </span>
          </div>

          <span className="font-sans text-[9px] tracking-wider text-[#8B7355]">
            {watching.toLocaleString("en-IN")} watching
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 border px-2.5 py-1 font-sans text-[10px] tracking-wider transition active:scale-95 ${
              liked
                ? "border-[#C8B99A]/50 bg-[#8B7355]/15 text-[#C8B99A]"
                : "border-[#2C2A27] text-[#6B6661] hover:border-[#8B7355] hover:text-[#C8B99A]"
            }`}
          >
            ❤️ {likes.toLocaleString("en-IN")}
          </button>

          <span className="font-sans text-[10px] text-[#3A3835]">
            ·
          </span>

          <span className="font-sans text-[10px] text-[#6B6661]">
            💬 {commentCount.toLocaleString("en-IN")}
          </span>

          <span className="font-sans text-[10px] text-[#3A3835]">
            ·
          </span>

          <span className="font-sans text-[10px] text-[#6B6661]">
            ↗ {shares.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Feed */}

      <div
        ref={scrollRef}
        className="relative z-10 flex-1 space-y-3 overflow-y-auto px-4 py-3"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <AnimatePresence initial={false}>
          {feed.map((c) => (
            <motion.div
              key={c.id}
              initial={{
                opacity: 0,
                x: -12,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className={`flex gap-2.5 ${
                c.isUser ? "flex-row-reverse" : ""
              }`}
            >
              <span className="mt-0.5 shrink-0 text-sm leading-none">
                {c.avatar}
              </span>

              <div
                className={`min-w-0 ${
                  c.isUser
                    ? "flex flex-col items-end"
                    : ""
                }`}
              >
                <div
                  className={`mb-0.5 flex items-baseline gap-1.5 ${
                    c.isUser
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >
                  <span
                    className={`truncate font-sans text-[10px] font-medium ${
                      c.isUser
                        ? "text-[#C8B99A]"
                        : "text-[#A89880]"
                    }`}
                  >
                    {c.name}
                    {c.city && !c.isUser
                      ? ` · ${c.city}`
                      : ""}
                  </span>

                  <span className="shrink-0 font-sans text-[9px] tabular-nums text-[#3A3835]">
                    {c.time}
                  </span>
                </div>

                <p
                  className={`break-words font-sans text-[11px] leading-relaxed ${
                    c.isUser
                      ? "text-[#F0EDE8]"
                      : typeColor[c.type]
                  }`}
                >
                  {c.message}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Comment input */}

      <div className="relative z-10 shrink-0 border-t border-[#2C2A27] bg-[#0A0806] px-4 py-3">
        <div className="mb-3 flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) =>
              setUserInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitUserComment();
              }
            }}
            placeholder="Write a comment..."
            maxLength={120}
            className="min-w-0 flex-1 border border-[#2C2A27] bg-[#111009] px-3 py-2 font-sans text-[11px] text-[#F0EDE8] outline-none transition placeholder:text-[#4A4845] focus:border-[#8B7355]"
          />

          <button
            onClick={submitUserComment}
            className="border border-[#8B7355] bg-[#8B7355]/12 px-3 py-2 font-sans text-[10px] uppercase tracking-widest text-[#C8B99A] transition hover:bg-[#8B7355]/25"
          >
            Send
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLike}
            className="flex flex-1 items-center justify-center gap-1.5 border border-[#2C2A27] py-2 font-sans text-[10px] uppercase tracking-wider text-[#6B6661] transition hover:border-[#8B7355] hover:text-[#C8B99A]"
          >
            {liked ? "Liked" : "Like"}
          </button>

          <div
            ref={shareRef}
            className="relative flex-1"
          >
            <button
              onClick={() => {
                setShowShare((s) => !s);
                onShare();
              }}
              className="flex w-full items-center justify-center gap-1.5 border border-[#2C2A27] py-2 font-sans text-[10px] uppercase tracking-wider text-[#6B6661] transition hover:border-[#8B7355] hover:text-[#C8B99A]"
            >
              Share
            </button>

            <AnimatePresence>
              {showShare && (
                <SharePopup
                  onClose={() => setShowShare(false)}
                />
              )}
            </AnimatePresence>
          </div>

          <a
            href={YT_CHAT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 border border-[#2C2A27] py-2 font-sans text-[10px] uppercase tracking-wider text-[#6B6661] transition hover:border-[#8B7355] hover:text-[#C8B99A]"
          >
            YT Chat
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Video player ─────────────────────────────────────────────────────────────

function VideoPlayer({
  videoId,
}: {
  videoId: string;
}) {
  const [fs, setFs] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const toggleFs = useCallback(async () => {
    if (!document.fullscreenElement) {
      await ref.current?.requestFullscreen();
      setFs(true);
    } else {
      await document.exitFullscreen();
      setFs(false);
    }
  }, []);

  useEffect(() => {
    const h = () => {
      setFs(!!document.fullscreenElement);
    };

    document.addEventListener(
      "fullscreenchange",
      h
    );

    return () =>
      document.removeEventListener(
        "fullscreenchange",
        h
      );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Video header */}

      <div className="flex items-center justify-between border border-b-0 border-[#2C2A27] bg-[#0A0806] px-3 py-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="inline-flex shrink-0 items-center gap-1.5 border border-red-500/40 bg-red-600/8 px-2 py-0.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>

            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-red-400">
              Live
            </span>
          </span>

          <span className="truncate font-sans text-[9px] uppercase tracking-[0.14em] text-[#8B7355] sm:text-[10px]">
            ASANG — Brand Launch
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden font-sans text-[9px] uppercase tracking-wider text-[#4A4845] sm:block">
            Live from the Studio
          </span>

          <button
            onClick={toggleFs}
            aria-label="Fullscreen"
            className="border border-[#2C2A27] p-1.5 text-[#6B6661] transition hover:border-[#8B7355] hover:text-[#F0EDE8]"
          >
            {fs ? (
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
              >
                <path d="M3 0H0v3h1V1h2V0zm4 0v1h2v2h1V0H7zM0 7v3h3V9H1V7H0zm9 0v2H7v1h3V7H9z" />
              </svg>
            ) : (
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="currentColor"
              >
                <path d="M0 0v3h1V1h2V0H0zm7 0v1h2v2h1V0H7zM0 7v3h3V9H1V7H0zm9 2H7v1h3V7H9v2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* YouTube video */}

      <div
        ref={ref}
        className="relative w-full overflow-hidden border border-[#2C2A27] bg-[#080604]"
        style={{
          aspectRatio: "16 / 9",
        }}
      >
        {videoId ? (
          <iframe
            src={YT_EMBED}
            title="ASANG Brand Launch Live"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            loading="eager"
            className="absolute inset-0 h-full w-full"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#080604] px-6 text-center">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute h-16 w-16 animate-ping rounded-full border border-[#8B7355]/20" />

              <span
                className="absolute h-11 w-11 animate-ping rounded-full border border-[#8B7355]/30"
                style={{
                  animationDelay: "0.4s",
                }}
              />

              <div className="relative flex h-9 w-9 items-center justify-center border border-[#8B7355]/50">
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="#8B7355"
                  opacity="0.7"
                >
                  <polygon points="0,0 14,8 0,16" />
                </svg>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#8B7355]">
                Awaiting Stream
              </p>

              <p className="font-sans text-[10px] text-[#4A4845]">
                Set{" "}
                <code className="text-[#8B7355]">
                  NEXT_PUBLIC_YOUTUBE_LIVE_VIDEO_ID
                </code>
              </p>
            </div>
          </div>
        )}

        {/* Corner accents */}

        {[
          "top-0 left-0 border-t border-l",
          "top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((c, i) => (
          <div
            key={i}
            className={`pointer-events-none absolute ${c} h-4 w-4 border-[#8B7355]/25`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

function StatsBar({
  watching,
  likes,
  comments,
  shares,
  onLike,
  onShare,
  liked,
}: {
  watching: number;
  likes: number;
  comments: number;
  shares: number;
  onLike: () => void;
  onShare: () => void;
  liked: boolean;
}) {
  return (
    <div className="grid grid-cols-4 items-center border border-[#2C2A27] bg-[#0A0806] px-2 py-3 sm:flex sm:justify-between sm:px-4">
      <AnimCount
        value={watching}
        label="Watching"
        icon={
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="currentColor"
          >
            <path d="M5 0C2.5 0 .5 2 0 4c.5 2 2.5 4 5 4s4.5-2 5-4C9.5 2 7.5 0 5 0zm0 6A2 2 0 1 1 5 2a2 2 0 0 1 0 4z" />
          </svg>
        }
      />

      <div className="hidden h-4 w-px bg-[#2C2A27] sm:block" />

      <AnimCount
        value={likes}
        label="Likes"
        active={liked}
        onClick={onLike}
        icon={
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M5 8.5S.5 5.5.5 2.8A2.3 2.3 0 0 1 5 1.6a2.3 2.3 0 0 1 4.5 1.2C9.5 5.5 5 8.5 5 8.5z" />
          </svg>
        }
      />

      <div className="hidden h-4 w-px bg-[#2C2A27] sm:block" />

      <AnimCount
        value={comments}
        label="Comments"
        icon={
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M1 1h8v6H5.5l-2 1.5V7H1V1z" />
          </svg>
        }
      />

      <div className="hidden h-4 w-px bg-[#2C2A27] sm:block" />

      <AnimCount
        value={shares}
        label="Shares"
        onClick={onShare}
        icon={
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="8" cy="1.5" r=".8" />
            <circle cx="8" cy="8.5" r=".8" />
            <circle cx="1.5" cy="5" r=".8" />
            <line
              x1="7.3"
              y1="2"
              x2="2.2"
              y2="4.6"
            />
            <line
              x1="7.3"
              y1="8"
              x2="2.2"
              y2="5.4"
            />
          </svg>
        }
      />
    </div>
  );
}

// ─── CTA strip ────────────────────────────────────────────────────────────────

function CTAStrip() {
  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={YT_WATCH}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-[#8B7355] bg-[#8B7355]/10 px-4 py-2.5 font-sans text-[10px] uppercase tracking-widest text-[#C8B99A] transition hover:bg-[#8B7355]/22 hover:text-[#F0EDE8]"
      >
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="#C8B99A"
        >
          <path d="M10.75 1.29A1.38 1.38 0 0 0 9.79.32C8.94 0 5.5 0 5.5 0S2.06 0 1.21.32a1.38 1.38 0 0 0-.96.97C0 2.13 0 4 0 4s0 1.87.25 2.71a1.38 1.38 0 0 0 .96.97C2.06 8 5.5 8 5.5 8s3.44 0 4.29-.32a1.38 1.38 0 0 0 .96-.97C11 5.87 11 4 11 4s0-1.87-.25-2.71zM4.4 5.71V2.29L7.26 4 4.4 5.71z" />
        </svg>

        Open YouTube
      </a>

      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-[#3A3835] px-4 py-2.5 font-sans text-[10px] uppercase tracking-widest text-[#8B8680] transition hover:border-[#8B7355] hover:text-[#F0EDE8]"
      >
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M1 8 8 1M8 1H4M8 1v4" />
        </svg>

        asangdesignstudio.in
      </a>
    </div>
  );
}

// ─── Notification popup ───────────────────────────────────────────────────────

function NotifToast() {
  const [notif, setNotif] =
    useState<(typeof NOTIFS)[0] | null>(null);

  const [vis, setVis] = useState(false);

  const idx = useRef(0);

  useEffect(() => {
    const show = () => {
      setNotif(
        NOTIFS[idx.current % NOTIFS.length]
      );

      idx.current++;

      setVis(true);

      setTimeout(() => setVis(false), 4000);
    };

    const t = setTimeout(show, 6000);

    const iv = setInterval(show, 14000);

    return () => {
      clearTimeout(t);
      clearInterval(iv);
    };
  }, []);

  return (
    <AnimatePresence>
      {vis && notif && (
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 50,
            scale: 0.94,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 26,
          }}
          className="fixed bottom-4 right-4 z-[100] flex max-w-[calc(100%-2rem)] items-center gap-3 border border-[#3A3835] bg-[#111009] px-4 py-3 shadow-2xl shadow-black/70 sm:bottom-6 sm:right-6 sm:max-w-[280px]"
        >
          <div className="mr-1 h-full w-0.5 self-stretch bg-[#8B7355]/40" />

          <span className="shrink-0 text-lg">
            {notif.emoji}
          </span>

          <div className="min-w-0">
            <p className="mb-0.5 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8B7355]">
              ASANG Launch
            </p>

            <p className="font-sans text-[11px] leading-snug text-[#A89880]">
              {notif.text}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Visit website attraction bar ─────────────────────────────────────────────

function VisitBar() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 1.2,
      }}
      className="overflow-hidden border border-[#2C2A27] bg-[#0A0806]"
    >
      <div className="flex items-center gap-3 px-3 py-3 sm:gap-4 sm:px-4">
        <div className="shrink-0">
          <Image
            src={LOGO_PATH}
            alt="ASANG"
            width={80}
            height={24}
            className="h-5 w-auto object-contain opacity-70"
          />
        </div>

        <div className="h-6 w-px shrink-0 bg-[#2C2A27]" />

        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[10px] text-[#6B6661]">
            Portfolio · Architecture · Interiors
          </p>
        </div>

        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap border border-[#8B7355]/60 bg-[#8B7355]/8 px-3 py-1.5 font-sans text-[10px] uppercase tracking-widest text-[#C8B99A] transition hover:border-[#8B7355] hover:bg-[#8B7355]/20"
        >
          Explore
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function LaunchLive() {
  const [watching, setWatching] = useState(1247);
  const [likes, setLikes] = useState(342);
  const [comments, setComments] = useState(89);
  const [shares, setShares] = useState(56);
  const [liked, setLiked] = useState(false);
  const [showSharePopup, setShowSharePopup] =
    useState(false);

  useEffect(() => {
    const watchIv = setInterval(
      () =>
        setWatching(
          (n) => n + Math.floor(Math.random() * 4)
        ),
      5000
    );

    const likeIv = setInterval(
      () =>
        setLikes(
          (n) => n + Math.floor(Math.random() * 3)
        ),
      6500
    );

    const cmtIv = setInterval(
      () => setComments((n) => n + 1),
      3200
    );

    const shrIv = setInterval(
      () =>
        setShares(
          (n) => n + Math.floor(Math.random() * 2)
        ),
      9000
    );

    return () => {
      clearInterval(watchIv);
      clearInterval(likeIv);
      clearInterval(cmtIv);
      clearInterval(shrIv);
    };
  }, []);

  const handleLike = useCallback(() => {
    if (!liked) {
      setLiked(true);
      setLikes((n) => n + 1);
    }
  }, [liked]);

  const handleShare = useCallback(() => {
    setShares((n) => n + 1);
    setShowSharePopup(true);
  }, []);

  return (
    <>
      <Grain />

      <NotifToast />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .font-serif-display {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .font-sans {
          font-family: 'Inter', system-ui, sans-serif;
        }

        * {
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
          background: #0D0B08;
        }

        iframe {
          border: 0;
        }
      `}</style>

      <LaunchNavbar />

      <section
        id="asang-hero"
        aria-label="ASANG Brand Launch"
        className="relative min-h-screen w-full overflow-hidden bg-[#0D0B08] pt-[68px] sm:pt-[72px]"
      >
        {/* Warm glow */}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 22% 30%, rgba(139,115,85,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="absolute inset-x-0 top-[68px] h-px bg-gradient-to-r from-transparent via-[#8B7355]/40 to-transparent sm:top-[72px]" />

        <div className="relative mx-auto max-w-[1440px] px-4 pb-12 pt-6 sm:px-8 sm:pb-14 sm:pt-8 lg:px-12 lg:pb-20 lg:pt-12">
          {/* Hero header */}

          <motion.header
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 flex flex-col gap-5 sm:mb-9 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-[#8B7355]/50" />

                <span className="inline-flex items-center gap-1.5 border border-red-500/40 bg-red-600/8 px-2.5 py-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
                  </span>

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-red-400">
                    Live
                  </span>
                </span>

                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#8B7355] sm:text-[10px]">
                  Brand Launch
                </span>
              </div>

              <div className="mb-2">
                <Image
                  src={LOGO_PATH}
                  alt="ASANG Architecture & Interiors"
                  width={280}
                  height={84}
                  className="h-auto w-[150px] object-contain sm:w-[210px] lg:w-[260px]"
                  priority
                />
              </div>

              <p className="mb-4 font-sans text-[10px] uppercase tracking-[0.26em] text-[#8B7355] sm:text-[11px]">
                Architecture &amp; Interiors
              </p>

              <p className="max-w-md font-serif-display text-[clamp(1rem,1.7vw,1.2rem)] italic leading-relaxed text-[#5A5753]">
                "An evening of architecture, interiors and ideas."
              </p>
            </div>

            <div className="flex flex-col items-start gap-1.5 lg:items-end">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-red-500" />
                </span>

                <span className="font-sans text-[10px] uppercase tracking-widest text-[#8B8680] sm:text-[11px]">
                  Streaming Live
                </span>
              </div>

              <p className="font-sans text-[9px] uppercase tracking-wider text-[#4A4845] sm:text-[10px]">
                Join the Launch · Watch Now
              </p>
            </div>
          </motion.header>

          {/* Main grid */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]"
          >
            {/* Video */}

            <div className="flex min-w-0 flex-col gap-3">
              <VideoPlayer videoId={VIDEO_ID} />

              <StatsBar
                watching={watching}
                likes={likes}
                comments={comments}
                shares={shares}
                onLike={handleLike}
                onShare={handleShare}
                liked={liked}
              />

              <VisitBar />

              <CTAStrip />
            </div>

            {/* Comments */}

            <div
              className="flex min-w-0 flex-col"
              style={{
                height:
                  "clamp(420px, 70vh, 680px)",
              }}
            >
              <CommentFeed
                onLike={handleLike}
                onShare={handleShare}
                likes={likes}
                shares={shares}
                watching={watching}
                comments={comments}
              />
            </div>
          </motion.div>

          {/* Bottom rule */}

          <div className="mt-12 flex items-center gap-4 sm:mt-16 sm:gap-6">
            <div className="h-px flex-1 bg-[#1A1917]" />

            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#3A3835] transition hover:text-[#8B7355] sm:text-[9px]"
            >
              ASANG Design Studio · asangdesignstudio.in ·{" "}
              {new Date().getFullYear()}
            </a>

            <div className="h-px flex-1 bg-[#1A1917]" />
          </div>
        </div>
      </section>

      {/* Global share popup */}

      <AnimatePresence>
        {showSharePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            onClick={() => setShowSharePopup(false)}
          >
            <motion.div
              initial={{
                scale: 0.9,
                y: 20,
              }}
              animate={{
                scale: 1,
                y: 0,
              }}
              exit={{
                scale: 0.9,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 26,
              }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[340px] overflow-hidden border border-[#3A3835] bg-[#111009] shadow-2xl shadow-black/80"
            >
              <div className="h-0.5 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent" />

              <div className="flex items-center justify-between border-b border-[#2C2A27] px-5 py-4">
                <div>
                  <p className="font-serif-display text-base text-[#F0EDE8]">
                    Share the Launch
                  </p>

                  <p className="mt-0.5 font-sans text-[10px] text-[#6B6661]">
                    Spread the word about ASANG
                  </p>
                </div>

                <button
                  onClick={() =>
                    setShowSharePopup(false)
                  }
                  className="text-[#4A4845] transition hover:text-[#F0EDE8]"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-2.5 p-5">
                {[
                  {
                    name: "WhatsApp",
                    icon: "💬",
                    href: `https://wa.me/?text=Watch%20ASANG%20Brand%20Launch%20LIVE%20now%21%20🔥%20${encodeURIComponent(
                      VIDEO_ID
                        ? YT_WATCH
                        : SITE_URL
                    )}`,
                  },
                  {
                    name: "Twitter/X",
                    icon: "🐦",
                    href: `https://twitter.com/intent/tweet?text=Watching%20ASANG%20Brand%20Launch%20LIVE%21%20✨&url=${encodeURIComponent(
                      VIDEO_ID
                        ? YT_WATCH
                        : SITE_URL
                    )}`,
                  },
                  {
                    name: "LinkedIn",
                    icon: "💼",
                    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      SITE_URL
                    )}`,
                  },
                  {
                    name: "Instagram",
                    icon: "📸",
                    href: "https://www.instagram.com/",
                  },
                ].map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      setShowSharePopup(false)
                    }
                    className="flex items-center gap-3 border border-[#2C2A27] px-4 py-3 transition hover:border-[#8B7355] hover:bg-[#8B7355]/5"
                  >
                    <span className="text-lg">
                      {p.icon}
                    </span>

                    <span className="font-sans text-[12px] text-[#C8C2BA]">
                      {p.name}
                    </span>
                  </a>
                ))}

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      VIDEO_ID
                        ? YT_WATCH
                        : SITE_URL
                    );

                    setShowSharePopup(false);
                  }}
                  className="flex w-full items-center gap-3 border border-[#2C2A27] px-4 py-3 text-left transition hover:border-[#8B7355] hover:bg-[#8B7355]/5"
                >
                  <span className="text-lg">
                    🔗
                  </span>

                  <span className="font-sans text-[12px] text-[#C8C2BA]">
                    Copy Link
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
