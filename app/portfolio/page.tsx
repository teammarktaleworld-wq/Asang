

// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   useScroll,
//   useTransform,
//   Variants,
// } from "framer-motion";
// import { Cormorant_Garamond, Montserrat } from "next/font/google";

// // ============================================================
// // FONTS
// // ============================================================

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-cormorant",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-montserrat",
// });

// // ============================================================
// // DATA
// // ============================================================

// const PROJECT_FOLDER = "/images/Projects";

// const serviceApartmentImages = [
//   { number: "01", file: "image1.jpg", title: "Living Space" },
//   { number: "02", file: "image2.jpg", title: "Interior Composition" },
//   { number: "03", file: "image3.jpg", title: "Material & Texture" },
//   { number: "04", file: "image4.jpg", title: "Living Environment" },
//   { number: "05", file: "image5.jpg", title: "Spatial Detail" },
//   { number: "06", file: "image6.jpg", title: "Dining Space" },
//   { number: "07", file: "image7.jpg", title: "Architectural Detail" },
//   { number: "08", file: "image8.jpg", title: "Material Palette" },
//   { number: "09", file: "image9.jpg", title: "Perspective" },
//   { number: "10", file: "image10.jpg", title: "Atmosphere" },
//   { number: "11", file: "image11.jpg", title: "Living Detail" },
//   { number: "12", file: "image12.jpg", title: "Quiet Corner" },
//   { number: "13", file: "image13.jpg", title: "Contemporary Living" },
//   { number: "14", file: "image14.jpg", title: "Craft & Detail" },
//   { number: "15", file: "image15.jpg", title: "Light & Shadow" },
//   { number: "16", file: "image16.jpg", title: "Spatial Rhythm" },
//   { number: "17", file: "image17.jpg", title: "Texture Study" },
//   { number: "18", file: "image18.jpg", title: "Living Architecture" },
// ];

// const getImagePath = (file: string) => `${PROJECT_FOLDER}/${file}`;

// const textReveal: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const staggerContainer: Variants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.15 },
//   },
// };

// // ============================================================
// // MAIN PAGE
// // ============================================================

// export default function PortfolioPage() {
//   return (
//     <main
//       className={`
//         ${cormorant.variable}
//         ${montserrat.variable}
//         min-h-screen
//         bg-[#F4F1EB]
//         text-[#0E0E0E]
//         selection:bg-[#DCC9A8] selection:text-[#0E0E0E]
//       `}
//     >
//       <DynamicHero />
//       <EditorialSliderSection />
//       <HorizontalCardGallery />
//       <DesignPhilosophy />
//       <FooterCTA />
//     </main>
//   );
// }

// // ============================================================
// // 1. DYNAMIC HERO SECTION
// // ============================================================

// function DynamicHero() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const heroSlides = serviceApartmentImages.slice(0, 3);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [heroSlides.length]);

//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-[#0E0E0E]">
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={activeSlide}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={getImagePath(heroSlides[activeSlide].file)}
//             alt={heroSlides[activeSlide].title}
//             fill
//             priority
//             quality={90}
//             className="object-cover opacity-70"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-10 md:px-16 lg:px-24">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-7xl mx-auto">
//           <div className="overflow-hidden pb-4">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSlide}
//                 variants={staggerContainer}
//                 initial="hidden"
//                 animate="visible"
//                 exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
//                 className="max-w-3xl"
//               >
//                 <motion.span
//                   variants={textReveal}
//                   className="mb-4 block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]"
//                 >
//                   ASANG Design Studio
//                 </motion.span>
//                 <motion.h1
//                   variants={textReveal}
//                   className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1.1] text-white sm:text-7xl md:text-8xl lg:text-[140px]"
//                 >
//                   {heroSlides[activeSlide].title.split(" ").map((word, i) => (
//                     <span key={i} className={i % 2 !== 0 ? "italic text-[#DCC9A8]" : ""}>
//                       {word}{" "}
//                     </span>
//                   ))}
//                 </motion.h1>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="mt-8 flex gap-3 md:mt-0 md:pb-6">
//             {heroSlides.map((_, i) => (
//               <div key={i} className="relative h-[2px] w-12 overflow-hidden bg-white/20">
//                 {activeSlide === i && (
//                   <motion.div
//                     initial={{ width: "0%" }}
//                     animate={{ width: "100%" }}
//                     transition={{ duration: 5, ease: "linear" }}
//                     className="absolute left-0 top-0 h-full bg-[#DCC9A8]"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ============================================================
// // 2. CURTAIN REVEAL EDITORIAL SECTION
// // ============================================================

// function EditorialSliderSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: containerRef });
//   const curtainX = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);
//   const [activeStage, setActiveStage] = useState(0);

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       if (v < 0.33) setActiveStage(0);
//       else if (v < 0.66) setActiveStage(1);
//       else setActiveStage(2);
//     });
//     return unsubscribe;
//   }, [scrollYProgress]);

//   const slides = [
//     {
//       stage: "01",
//       label: "Soul",
//       quote: "Space is not just where you live —",
//       quoteItalic: "it is how you feel.",
//       sub: "We design interiors that breathe with intention, where every material choice is a quiet declaration.",
//     },
//     {
//       stage: "02",
//       label: "Culture",
//       quote: "Great design does not follow",
//       quoteItalic: "trends. It sets them.",
//       sub: "Architecture rooted in context, material, and the stories of those who inhabit it.",
//     },
//     {
//       stage: "03",
//       label: "Legacy",
//       quote: "Simplicity is not absence —",
//       quoteItalic: "it is precision.",
//       sub: "Strip away the unnecessary. What remains is the essential — and the essential endures.",
//     },
//   ];

//   return (
//     <section ref={containerRef} className="relative h-[400vh] bg-[#0E0E0E]">
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={getImagePath("image4.jpg")}
//             alt="Editorial Interior"
//             fill
//             priority
//             quality={95}
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/10" />
//         </div>

//         <motion.div
//           style={{ x: curtainX }}
//           className="absolute inset-0 z-20 bg-[#0E0E0E]/60 backdrop-blur-[2px]"
//         />

//         <div className="absolute left-6 top-10 z-30 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8] md:left-10">
//           ASANG Design Studio
//         </div>
//         <div className="absolute right-6 top-10 z-30 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]/50 md:right-10">
//           SCROLL TO DISCOVER
//         </div>

//         <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
//           <div className="relative z-10 max-w-7xl mx-auto w-full">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeStage}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//               >
//                 <div className="mb-8 flex items-center gap-4">
//                   <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#DCC9A8]">
//                     {slides[activeStage].stage}
//                   </span>
//                   <div className="h-[1px] w-12 bg-[#DCC9A8]/40" />
//                   <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30">
//                     {slides[activeStage].label}
//                   </span>
//                 </div>
//                 <h2 className="font-[family-name:var(--font-cormorant)] text-[10vw] md:text-[7vw] lg:text-[6vw] font-medium leading-[0.9] tracking-tight text-white">
//                   {slides[activeStage].quote}
//                 </h2>
//                 <h2 className="font-[family-name:var(--font-cormorant)] text-[10vw] md:text-[7vw] lg:text-[6vw] font-medium italic leading-[0.9] tracking-tight text-[#DCC9A8]">
//                   {slides[activeStage].quoteItalic}
//                 </h2>
//                 <p className="mt-8 max-w-sm font-[family-name:var(--font-montserrat)] text-[11px] uppercase leading-loose tracking-[0.15em] text-white/50 md:text-[10px]">
//                   {slides[activeStage].sub}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         <div className="absolute bottom-10 right-6 z-30 flex flex-col gap-2 md:right-10">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`h-[1px] transition-all duration-500 ${
//                 i === activeStage ? "bg-[#DCC9A8] w-14" : "bg-white/20 w-8"
//               }`}
//             />
//           ))}
//         </div>

//         <div className="absolute bottom-10 left-6 right-20 z-30 flex items-center gap-6 md:left-10 md:right-20">
//           <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]">
//             OUR PHILOSOPHY
//           </span>
//           <div className="h-[1px] flex-1 bg-white/10">
//             <motion.div
//               style={{ scaleX: scrollYProgress, originX: 0 }}
//               className="h-full bg-[#DCC9A8]/60"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ============================================================
// // 3. HORIZONTAL SCROLL CARD GALLERY
// // ============================================================

// // Card data — alternating tall / wide aspect ratios for visual rhythm
// const galleryCards = [
//   { ...serviceApartmentImages[3],  aspect: "tall",  category: "Living"      },
//   { ...serviceApartmentImages[6],  aspect: "wide",  category: "Architecture" },
//   { ...serviceApartmentImages[9],  aspect: "tall",  category: "Atmosphere"  },
//   { ...serviceApartmentImages[1],  aspect: "wide",  category: "Interiors"   },
//   { ...serviceApartmentImages[12], aspect: "tall",  category: "Craft"       },
//   { ...serviceApartmentImages[5],  aspect: "wide",  category: "Dining"      },
//   { ...serviceApartmentImages[14], aspect: "tall",  category: "Light"       },
//   { ...serviceApartmentImages[10], aspect: "wide",  category: "Detail"      },
// ];

// function HorizontalCardGallery() {
//   const containerRef  = useRef<HTMLDivElement>(null);
//   const trackRef      = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({ target: containerRef });

//   // Translate the card strip horizontally as user scrolls vertically
//   // We'll compute the exact pixel distance after mount
//   const [trackWidth, setTrackWidth] = useState(0);

//   useEffect(() => {
//     const measure = () => {
//       if (trackRef.current) {
//         // Total scrollable width minus one viewport width
//         setTrackWidth(trackRef.current.scrollWidth - window.innerWidth);
//       }
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   const x = useTransform(scrollYProgress, [0, 1], [0, -trackWidth]);

//   return (
//     <section
//       ref={containerRef}
//       // Height controls how much scroll travel we get — more = slower/longer
//       className="relative bg-[#0E0E0E]"
//       style={{ height: `${galleryCards.length * 55}vh` }}
//     >
//       {/* ── Sticky viewport ── */}
//       <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

//         {/* ── Section header ── */}
//         <div className="relative z-10 mb-10 flex items-end justify-between px-6 md:px-16 lg:px-24">
//           <div>
//             <motion.span
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="mb-2 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#DCC9A8]"
//             >
//               Selected Works
//             </motion.span>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 }}
//               className="font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-none text-white md:text-6xl"
//             >
//               The <span className="italic text-[#DCC9A8]">Archive</span>
//             </motion.h2>
//           </div>

//           {/* Scroll hint arrow */}
//           <motion.div
//             initial={{ opacity: 0, x: -10 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="hidden items-center gap-3 md:flex"
//           >
//             <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-white/30">
//               Scroll to explore
//             </span>
//             <div className="flex gap-1">
//               {[0, 1, 2].map((i) => (
//                 <motion.div
//                   key={i}
//                   animate={{ x: [0, 6, 0] }}
//                   transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
//                   className="h-[1px] w-4 bg-[#DCC9A8]/50"
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* ── Horizontal scrolling card strip ── */}
//         <motion.div
//           ref={trackRef}
//           style={{ x }}
//           className="flex gap-4 px-6 md:gap-6 md:px-16 lg:gap-8 lg:px-24 will-change-transform"
//         >
//           {galleryCards.map((card, i) => (
//             <GalleryCard key={i} card={card} index={i} />
//           ))}

//           {/* End spacer card — decorative text */}
//           <div className="flex w-[30vw] flex-shrink-0 flex-col items-center justify-center gap-6 pr-8">
//             <div className="h-[1px] w-16 bg-[#DCC9A8]/30" />
//             <p className="font-[family-name:var(--font-cormorant)] text-center text-3xl italic leading-snug text-white/20 md:text-4xl">
//               Every space<br />tells a story.
//             </p>
//             <a
//               href="/projects"
//               className="group relative overflow-hidden rounded-full border border-white/10 px-6 py-3"
//             >
//               <span className="relative z-10 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 group-hover:text-[#0E0E0E]">
//                 View All
//               </span>
//               <div className="absolute inset-0 -translate-y-full bg-[#DCC9A8] transition-transform duration-500 ease-out group-hover:translate-y-0" />
//             </a>
//           </div>
//         </motion.div>

//         {/* ── Bottom progress bar ── */}
//         <div className="absolute bottom-8 left-6 right-6 flex items-center gap-4 md:left-16 md:right-16 lg:left-24 lg:right-24">
//           <div className="h-[1px] flex-1 bg-white/10">
//             <motion.div
//               style={{ scaleX: scrollYProgress, originX: 0 }}
//               className="h-full bg-[#DCC9A8]/70"
//             />
//           </div>
//           <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-white/20">
//             {galleryCards.length} works
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// function GalleryCard({ card, index }: { card: typeof galleryCards[0]; index: number }) {
//   const isTall = card.aspect === "tall";

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "0px -200px 0px 0px" }}
//       transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
//       className={`
//         group relative flex-shrink-0 overflow-hidden rounded-sm bg-[#1A1A18] cursor-pointer
//         ${isTall
//           ? "w-[52vw] md:w-[28vw] lg:w-[22vw]"
//           : "w-[70vw] md:w-[38vw] lg:w-[30vw]"
//         }
//       `}
//       style={{ height: isTall ? "65vh" : "48vh" }}
//     >
//       {/* Image */}
//       <Image
//         src={getImagePath(card.file)}
//         alt={card.title}
//         fill
//         sizes="(max-width: 768px) 70vw, 30vw"
//         className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
//       />

//       {/* Permanent subtle gradient at bottom */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//       {/* Top-left index number */}
//       <div className="absolute left-4 top-4 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
//         {card.number}
//       </div>

//       {/* Category pill — top right */}
//       <div className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 backdrop-blur-sm">
//         <span className="font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-[0.25em] text-white/50">
//           {card.category}
//         </span>
//       </div>

//       {/* Bottom info — slides up on hover */}
//       <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 transition-transform duration-500 ease-out group-hover:translate-y-0">
//         <h4 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-tight text-white md:text-3xl">
//           {card.title}
//         </h4>
//         {/* Reveal line on hover */}
//         <div className="mt-3 flex items-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
//           <div className="h-[1px] w-6 bg-[#DCC9A8]" />
//           <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#DCC9A8]">
//             View Project
//           </span>
//         </div>
//       </div>

//       {/* Hover overlay tint */}
//       <div className="absolute inset-0 bg-[#DCC9A8]/0 transition-colors duration-500 group-hover:bg-[#DCC9A8]/5" />
//     </motion.div>
//   );
// }

// // ============================================================
// // 4. DESIGN PHILOSOPHY
// // ============================================================

// function DesignPhilosophy() {
//   return (
//     <section className="bg-[#DCC9A8] px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-24 z-20 relative">
//       <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
//         <div>
//           <motion.h2
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-medium leading-[0.9] text-[#0E0E0E]"
//           >
//             Simplicity is <br />
//             <span className="italic text-white">complex.</span>
//           </motion.h2>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <p className="font-[family-name:var(--font-montserrat)] text-base md:text-lg leading-relaxed text-[#0E0E0E]/80">
//             We strip away the unnecessary so the essential may speak. Our designs are driven
//             by an obsession with context, a reverence for natural materials, and the belief
//             that the spaces we inhabit shape the lives we lead.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ============================================================
// // 5. FOOTER CTA
// // ============================================================

// function FooterCTA() {
//   return (
//     <section className="bg-[#0E0E0E] px-6 py-32 sm:px-10 md:px-16 lg:px-24 text-center z-20 relative">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//         className="mx-auto max-w-4xl flex flex-col items-center"
//       >
//         <span className="mb-8 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.4em] text-[#6E7F68]">
//           Initiate a Project
//         </span>
//         <h2 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl lg:text-9xl text-white leading-none hover:italic transition-all duration-500 cursor-pointer">
//           Let's Talk.
//         </h2>

//         <a
//           href="/contact"
//           className="mt-16 group relative flex items-center gap-4 overflow-hidden rounded-full border border-white/20 px-8 py-4 transition-colors hover:border-[#DCC9A8]"
//         >
//           <span className="relative z-10 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-widest text-white group-hover:text-[#0E0E0E] transition-colors duration-300">
//             CONTACT STUDIO
//           </span>
//           <div className="absolute inset-0 -translate-y-full bg-[#DCC9A8] transition-transform duration-500 ease-out group-hover:translate-y-0" />
//         </a>
//       </motion.div>
//     </section>
//   );
// }















"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

// ============================================================
// FONTS
// ============================================================

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

// ============================================================
// DATA
// ============================================================

const PROJECT_FOLDER = "/images/Projects";

const serviceApartmentImages = [
  { number: "01", file: "image1.jpg", title: "Living Space" },
  { number: "02", file: "image2.jpg", title: "Interior Composition" },
  { number: "03", file: "image3.jpg", title: "Material & Texture" },
  { number: "04", file: "image4.jpg", title: "Living Environment" },
  { number: "05", file: "image5.jpg", title: "Spatial Detail" },
  { number: "06", file: "image6.jpg", title: "Dining Space" },
  { number: "07", file: "image7.jpg", title: "Architectural Detail" },
  { number: "08", file: "image8.jpg", title: "Material Palette" },
  { number: "09", file: "image9.jpg", title: "Perspective" },
  { number: "10", file: "image10.jpg", title: "Atmosphere" },
  { number: "11", file: "image11.jpg", title: "Living Detail" },
  { number: "12", file: "image12.jpg", title: "Quiet Corner" },
  { number: "13", file: "image13.jpg", title: "Contemporary Living" },
  { number: "14", file: "image14.jpg", title: "Craft & Detail" },
  { number: "15", file: "image15.jpg", title: "Light & Shadow" },
  { number: "16", file: "image16.jpg", title: "Spatial Rhythm" },
  { number: "17", file: "image17.jpg", title: "Texture Study" },
  { number: "18", file: "image18.jpg", title: "Living Architecture" },
];

const getImagePath = (file: string) => `${PROJECT_FOLDER}/${file}`;

const textReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

// ============================================================
// CATEGORIZED PORTFOLIO DATA
// ============================================================

const BASE = "/images/asang main images";

type PortfolioImage = { src: string; title: string };

const portfolioCategories = [
  {
    id: "commercial",
    label: "Commercial",
    description: "Spaces built for commerce — designed to command presence and inspire confidence.",
    folder: `${BASE}/commercial`,
    count: 10,
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `${BASE}/commercial/image${i + 1}.webp`,
      title: `Commercial ${String(i + 1).padStart(2, "0")}`,
    })) as PortfolioImage[],
  },
  {
    id: "luxury",
    label: "Luxury",
    description: "Residences where material precision and spatial calm define everyday luxury.",
    folder: `${BASE}/Luxury`,
    count: 15,
    images: Array.from({ length: 15 }, (_, i) => ({
      src: `${BASE}/Luxury/image${i + 1}.webp`,
      title: `Luxury ${String(i + 1).padStart(2, "0")}`,
    })) as PortfolioImage[],
  },
  {
    id: "penthouse",
    label: "Penthouse",
    description: "Sky-level living — open volumes, curated views, and refined detail.",
    folder: `${BASE}/Penthouse`,
    count: 8,
    images: Array.from({ length: 8 }, (_, i) => ({
      src: `${BASE}/Penthouse/image${i + 1}.webp`,
      title: `Penthouse ${String(i + 1).padStart(2, "0")}`,
    })) as PortfolioImage[],
  },
  {
    id: "service-apartment",
    label: "Service Apartment",
    description: "Thoughtful short-stay environments — compact, complete, considered.",
    folder: `${BASE}/Service apartment`,
    count: 10,
    images: Array.from({ length: 10 }, (_, i) => ({
      src: `${BASE}/Service apartment/image${i + 1}.webp`,
      title: `Service Apt ${String(i + 1).padStart(2, "0")}`,
    })) as PortfolioImage[],
  },
];

// ============================================================
// MAIN PAGE
// ============================================================

export default function PortfolioPage() {
  return (
    <main
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        min-h-screen
        bg-[#F4F1EB]
        text-[#0E0E0E]
        selection:bg-[#DCC9A8] selection:text-[#0E0E0E]
      `}
    >
      <DynamicHero />
      <EditorialSliderSection />
      <HorizontalCardGallery />
      <CategorizedPortfolio />
      <DesignPhilosophy />
      <FooterCTA />
    </main>
  );
}

// ============================================================
// 1. DYNAMIC HERO SECTION
// ============================================================

function DynamicHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSlides = serviceApartmentImages.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0E0E0E]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={getImagePath(heroSlides[activeSlide].file)}
            alt={heroSlides[activeSlide].title}
            fill
            priority
            quality={90}
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full max-w-7xl mx-auto">
          <div className="overflow-hidden pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
                className="max-w-3xl"
              >
                <motion.span
                  variants={textReveal}
                  className="mb-4 block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]"
                >
                  ASANG Design Studio
                </motion.span>
                <motion.h1
                  variants={textReveal}
                  className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1.1] text-white sm:text-7xl md:text-8xl lg:text-[140px]"
                >
                  {heroSlides[activeSlide].title.split(" ").map((word, i) => (
                    <span key={i} className={i % 2 !== 0 ? "italic text-[#DCC9A8]" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </motion.h1>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex gap-3 md:mt-0 md:pb-6">
            {heroSlides.map((_, i) => (
              <div key={i} className="relative h-[2px] w-12 overflow-hidden bg-white/20">
                {activeSlide === i && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute left-0 top-0 h-full bg-[#DCC9A8]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 2. CURTAIN REVEAL EDITORIAL SECTION
// ============================================================

function EditorialSliderSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const curtainX = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.33) setActiveStage(0);
      else if (v < 0.66) setActiveStage(1);
      else setActiveStage(2);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const slides = [
    {
      stage: "01",
      label: "Soul",
      quote: "Space is not just where you live —",
      quoteItalic: "it is how you feel.",
      sub: "We design interiors that breathe with intention, where every material choice is a quiet declaration.",
    },
    {
      stage: "02",
      label: "Culture",
      quote: "Great design does not follow",
      quoteItalic: "trends. It sets them.",
      sub: "Architecture rooted in context, material, and the stories of those who inhabit it.",
    },
    {
      stage: "03",
      label: "Legacy",
      quote: "Simplicity is not absence —",
      quoteItalic: "it is precision.",
      sub: "Strip away the unnecessary. What remains is the essential — and the essential endures.",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0E0E0E]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("image4.jpg")}
            alt="Editorial Interior"
            fill
            priority
            quality={95}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <motion.div
          style={{ x: curtainX }}
          className="absolute inset-0 z-20 bg-[#0E0E0E]/60 backdrop-blur-[2px]"
        />

        <div className="absolute left-6 top-10 z-30 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8] md:left-10">
          ASANG Design Studio
        </div>
        <div className="absolute right-6 top-10 z-30 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]/50 md:right-10">
          SCROLL TO DISCOVER
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#DCC9A8]">
                    {slides[activeStage].stage}
                  </span>
                  <div className="h-[1px] w-12 bg-[#DCC9A8]/40" />
                  <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30">
                    {slides[activeStage].label}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-cormorant)] text-[10vw] md:text-[7vw] lg:text-[6vw] font-medium leading-[0.9] tracking-tight text-white">
                  {slides[activeStage].quote}
                </h2>
                <h2 className="font-[family-name:var(--font-cormorant)] text-[10vw] md:text-[7vw] lg:text-[6vw] font-medium italic leading-[0.9] tracking-tight text-[#DCC9A8]">
                  {slides[activeStage].quoteItalic}
                </h2>
                <p className="mt-8 max-w-sm font-[family-name:var(--font-montserrat)] text-[11px] uppercase leading-loose tracking-[0.15em] text-white/50 md:text-[10px]">
                  {slides[activeStage].sub}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 z-30 flex flex-col gap-2 md:right-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-[1px] transition-all duration-500 ${
                i === activeStage ? "bg-[#DCC9A8] w-14" : "bg-white/20 w-8"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-6 right-20 z-30 flex items-center gap-6 md:left-10 md:right-20">
          <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]">
            OUR PHILOSOPHY
          </span>
          <div className="h-[1px] flex-1 bg-white/10">
            <motion.div
              style={{ scaleX: scrollYProgress, originX: 0 }}
              className="h-full bg-[#DCC9A8]/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 3. HORIZONTAL SCROLL CARD GALLERY (UNCHANGED)
// ============================================================

const galleryCards = [
  { ...serviceApartmentImages[3],  aspect: "tall",  category: "Living"      },
  { ...serviceApartmentImages[6],  aspect: "wide",  category: "Architecture" },
  { ...serviceApartmentImages[9],  aspect: "tall",  category: "Atmosphere"  },
  { ...serviceApartmentImages[1],  aspect: "wide",  category: "Interiors"   },
  { ...serviceApartmentImages[12], aspect: "tall",  category: "Craft"       },
  { ...serviceApartmentImages[5],  aspect: "wide",  category: "Dining"      },
  { ...serviceApartmentImages[14], aspect: "tall",  category: "Light"       },
  { ...serviceApartmentImages[10], aspect: "wide",  category: "Detail"      },
];

function HorizontalCardGallery() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const trackRef      = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -trackWidth]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0E0E0E]"
      style={{ height: `${galleryCards.length * 55}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="relative z-10 mb-10 flex items-end justify-between px-6 md:px-16 lg:px-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#DCC9A8]"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-none text-white md:text-6xl"
            >
              The <span className="italic text-[#DCC9A8]">Archive</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden items-center gap-3 md:flex"
          >
            <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-white/30">
              Scroll to explore
            </span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
                  className="h-[1px] w-4 bg-[#DCC9A8]/50"
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 px-6 md:gap-6 md:px-16 lg:gap-8 lg:px-24 will-change-transform"
        >
          {galleryCards.map((card, i) => (
            <GalleryCard key={i} card={card} index={i} />
          ))}

          <div className="flex w-[30vw] flex-shrink-0 flex-col items-center justify-center gap-6 pr-8">
            <div className="h-[1px] w-16 bg-[#DCC9A8]/30" />
            <p className="font-[family-name:var(--font-cormorant)] text-center text-3xl italic leading-snug text-white/20 md:text-4xl">
              Every space<br />tells a story.
            </p>
            <a
              href="/projects"
              className="group relative overflow-hidden rounded-full border border-white/10 px-6 py-3"
            >
              <span className="relative z-10 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 group-hover:text-[#0E0E0E]">
                View All
              </span>
              <div className="absolute inset-0 -translate-y-full bg-[#DCC9A8] transition-transform duration-500 ease-out group-hover:translate-y-0" />
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-6 right-6 flex items-center gap-4 md:left-16 md:right-16 lg:left-24 lg:right-24">
          <div className="h-[1px] flex-1 bg-white/10">
            <motion.div
              style={{ scaleX: scrollYProgress, originX: 0 }}
              className="h-full bg-[#DCC9A8]/70"
            />
          </div>
          <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-white/20">
            {galleryCards.length} works
          </span>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ card, index }: { card: typeof galleryCards[0]; index: number }) {
  const isTall = card.aspect === "tall";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px -200px 0px 0px" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`
        group relative flex-shrink-0 overflow-hidden rounded-sm bg-[#1A1A18] cursor-pointer
        ${isTall
          ? "w-[52vw] md:w-[28vw] lg:w-[22vw]"
          : "w-[70vw] md:w-[38vw] lg:w-[30vw]"
        }
      `}
      style={{ height: isTall ? "65vh" : "48vh" }}
    >
      <Image
        src={getImagePath(card.file)}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 70vw, 30vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute left-4 top-4 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
        {card.number}
      </div>
      <div className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 backdrop-blur-sm">
        <span className="font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-[0.25em] text-white/50">
          {card.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <h4 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-tight text-white md:text-3xl">
          {card.title}
        </h4>
        <div className="mt-3 flex items-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-[1px] w-6 bg-[#DCC9A8]" />
          <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#DCC9A8]">
            View Project
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-[#DCC9A8]/0 transition-colors duration-500 group-hover:bg-[#DCC9A8]/5" />
    </motion.div>
  );
}

// ============================================================
// 4. CATEGORIZED PORTFOLIO SECTION
// ============================================================

function CategorizedPortfolio() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const category = portfolioCategories[activeCategory];

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null)
        setLightboxIndex((p) => Math.min((p ?? 0) + 1, category.images.length - 1));
      if (e.key === "ArrowLeft" && lightboxIndex !== null)
        setLightboxIndex((p) => Math.max((p ?? 0) - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, category.images.length]);

  return (
    <section className="bg-[#F4F1EB] relative z-10">
      {/* ── Section header ── */}
      <div className="px-6 pt-24 pb-0 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#0E0E0E]/40"
          >
            Complete Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-medium leading-[0.9] text-[#0E0E0E]"
          >
            Work by <span className="italic text-[#8C7A5E]">Category</span>
          </motion.h2>

          {/* ── Category tabs ── */}
          <div className="mt-12 flex flex-wrap gap-0 border-b border-[#0E0E0E]/10">
            {portfolioCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(i)}
                className="relative pb-4 pr-8 text-left group"
              >
                <span
                  className={`font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 ${
                    i === activeCategory
                      ? "text-[#0E0E0E]"
                      : "text-[#0E0E0E]/30 group-hover:text-[#0E0E0E]/60"
                  }`}
                >
                  {cat.label}
                </span>
                <span
                  className={`ml-2 font-[family-name:var(--font-montserrat)] text-[9px] transition-colors duration-300 ${
                    i === activeCategory ? "text-[#8C7A5E]" : "text-[#0E0E0E]/20"
                  }`}
                >
                  {String(cat.count).padStart(2, "0")}
                </span>
                {i === activeCategory && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-8 h-[1.5px] bg-[#0E0E0E]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category description + image count ── */}
      <div className="px-6 pt-8 pb-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={category.id + "-desc"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-[family-name:var(--font-montserrat)] text-[11px] uppercase tracking-[0.15em] leading-loose text-[#0E0E0E]/50 max-w-md"
            >
              {category.description}
            </motion.p>
          </AnimatePresence>
          <a
            href={`/projects/${category.id}`}
            className="group flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-[#0E0E0E]/40 hover:text-[#0E0E0E] transition-colors duration-300"
          >
            <span>Full Project View</span>
            <div className="h-[1px] w-8 bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </div>
      </div>

      {/* ── Masonry-style image grid ── */}
      <div className="px-6 pb-24 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
            >
              {category.images.map((img, i) => (
                <CategoryImageCard
                  key={img.src}
                  img={img}
                  index={i}
                  onClick={() => setLightboxIndex(i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={category.images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((p) => Math.max((p ?? 0) - 1, 0))}
            onNext={() =>
              setLightboxIndex((p) => Math.min((p ?? 0) + 1, category.images.length - 1))
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function CategoryImageCard({
  img,
  index,
  onClick,
}: {
  img: PortfolioImage;
  index: number;
  onClick: () => void;
}) {
  // Alternate tall/short for masonry visual rhythm
  const isTall = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group relative mb-3 md:mb-4 break-inside-avoid overflow-hidden cursor-pointer bg-[#E8E2D6]"
      style={{ aspectRatio: isTall ? "3/4" : "4/3" }}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#0E0E0E]/0 transition-colors duration-500 group-hover:bg-[#0E0E0E]/30" />

      {/* Index number top-left */}
      <div className="absolute left-3 top-3 font-[family-name:var(--font-montserrat)] text-[8px] font-semibold uppercase tracking-[0.3em] text-white/0 group-hover:text-white/60 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Expand icon center — appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1h5M1 1v5M13 13h-5M13 13v-5M1 13l12-12" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Title bottom — hover reveal */}
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        <p className="font-[family-name:var(--font-cormorant)] text-sm font-medium text-white">
          {img.title}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================
// LIGHTBOX
// ============================================================

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: PortfolioImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0E0E]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl px-16"
        style={{ height: "80vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].title}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </motion.div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.35em] text-white/30">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Image title */}
      <div className="absolute bottom-6 right-6 font-[family-name:var(--font-cormorant)] text-base italic text-white/30">
        {images[index].title}
      </div>
    </motion.div>
  );
}

// ============================================================
// 5. DESIGN PHILOSOPHY
// ============================================================

function DesignPhilosophy() {
  return (
    <section className="bg-[#DCC9A8] px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-24 z-20 relative">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-medium leading-[0.9] text-[#0E0E0E]"
          >
            Simplicity is <br />
            <span className="italic text-white">complex.</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-[family-name:var(--font-montserrat)] text-base md:text-lg leading-relaxed text-[#0E0E0E]/80">
            We strip away the unnecessary so the essential may speak. Our designs are driven
            by an obsession with context, a reverence for natural materials, and the belief
            that the spaces we inhabit shape the lives we lead.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// 6. FOOTER CTA
// ============================================================

function FooterCTA() {
  return (
    <section className="bg-[#0E0E0E] px-6 py-32 sm:px-10 md:px-16 lg:px-24 text-center z-20 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-4xl flex flex-col items-center"
      >
        <span className="mb-8 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.4em] text-[#6E7F68]">
          Initiate a Project
        </span>
        <h2 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl lg:text-9xl text-white leading-none hover:italic transition-all duration-500 cursor-pointer">
          Let's Talk.
        </h2>

        <a
          href="/contact"
          className="mt-16 group relative flex items-center gap-4 overflow-hidden rounded-full border border-white/20 px-8 py-4 transition-colors hover:border-[#DCC9A8]"
        >
          <span className="relative z-10 font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-widest text-white group-hover:text-[#0E0E0E] transition-colors duration-300">
            CONTACT STUDIO
          </span>
          <div className="absolute inset-0 -translate-y-full bg-[#DCC9A8] transition-transform duration-500 ease-out group-hover:translate-y-0" />
        </a>
      </motion.div>
    </section>
  );
}