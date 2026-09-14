// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   Cormorant_Garamond,
//   Montserrat,
// } from "next/font/google";

// // ============================================================
// // ASANG BRAND FONTS
// // ============================================================

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


// const PROJECT_FOLDER = "/images/Projects";

// const serviceApartmentImages = [
//   {
//     number: "01",
//     file: "image1.jpg",
//     title: "Living Space",
//   },
//   {
//     number: "02",
//     file: "image2.jpg",
//     title: "Interior Composition",
//   },
//   {
//     number: "03",
//     file: "image3.jpg",
//     title: "Material & Texture",
//   },
//   {
//     number: "04",
//     file: "image4.jpg",
//     title: "Living Environment",
//   },
//   {
//     number: "05",
//     file: "image5.jpg",
//     title: "Spatial Detail",
//   },
//   {
//     number: "06",
//     file: "image6.jpg",
//     title: "Dining Space",
//   },
//   {
//     number: "07",
//     file: "image7.jpg",
//     title: "Architectural Detail",
//   },
//   {
//     number: "08",
//     file: "image8.jpg",
//     title: "Material Palette",
//   },
//   {
//     number: "09",
//     file: "image9.jpg",
//     title: "Perspective",
//   },
//   {
//     number: "10",
//     file: "image10.jpg",
//     title: "Atmosphere",
//   },
//   {
//     number: "11",
//     file: "image11.jpg",
//     title: "Living Detail",
//   },
//   {
//     number: "12",
//     file: "image12.jpg",
//     title: "Quiet Corner",
//   },
//   {
//     number: "13",
//     file: "image13.jpg",
//     title: "Contemporary Living",
//   },
//   {
//     number: "14",
//     file: "image14.jpg",
//     title: "Craft & Detail",
//   },
//   {
//     number: "15",
//     file: "image15.jpg",
//     title: "Light & Shadow",
//   },
//   {
//     number: "16",
//     file: "image16.jpg",
//     title: "Spatial Rhythm",
//   },
//   {
//     number: "17",
//     file: "image17.jpg",
//     title: "Texture Study",
//   },
//   {
//     number: "18",
//     file: "image18.jpg",
//     title: "Living Architecture",
//   },
//   {
//     number: "19",
//     file: "image19.jpg",
//     title: "Final Composition",
//   },
//   {
//     number: "20",
//     file: "image20.jpg",
//     title: "A Place to Belong",
//   },
//   {
//     number: "21",
//     file: "imagedoor.jpg",
//     title: "Entrance Detail",
//   },
// ];

// const getImagePath = (file: string) =>
//   `${PROJECT_FOLDER}/${file}`;
// // ============================================================
// // ANIMATION
// // ============================================================

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// // ============================================================
// // PAGE
// // ============================================================

// export default function PortfolioPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [isPaused, setIsPaused] = useState(false);

//   const [selectedImage, setSelectedImage] =
//     useState<string | null>(null);

//   const currentImage =
//     serviceApartmentImages[currentIndex];

//   // ==========================================================
//   // NEXT IMAGE
//   // ==========================================================

//   const nextImage = useCallback(() => {
//     setCurrentIndex((previous) =>
//       previous === serviceApartmentImages.length - 1
//         ? 0
//         : previous + 1
//     );
//   }, []);

//   // ==========================================================
//   // PREVIOUS IMAGE
//   // ==========================================================

//   const previousImage = useCallback(() => {
//     setCurrentIndex((previous) =>
//       previous === 0
//         ? serviceApartmentImages.length - 1
//         : previous - 1
//     );
//   }, []);

//   // ==========================================================
//   // AUTOMATIC SLIDER
//   // ==========================================================

//   useEffect(() => {
//     if (isPaused || selectedImage) {
//       return;
//     }

//     const interval = setInterval(() => {
//       nextImage();
//     }, 4500);

//     return () => clearInterval(interval);
//   }, [isPaused, selectedImage, nextImage]);

//   // ==========================================================
//   // KEYBOARD CONTROLS
//   // ==========================================================

//   useEffect(() => {
//     const handleKeyboard = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setSelectedImage(null);
//       }

//       if (event.key === "ArrowRight") {
//         nextImage();
//       }

//       if (event.key === "ArrowLeft") {
//         previousImage();
//       }
//     };

//     window.addEventListener(
//       "keydown",
//       handleKeyboard
//     );

//     return () => {
//       window.removeEventListener(
//         "keydown",
//         handleKeyboard
//       );
//     };
//   }, [nextImage, previousImage]);

//   // ==========================================================
//   // OPEN IMAGE
//   // ==========================================================

//   const openImage = (src: string) => {
//     setSelectedImage(src);
//   };

//   return (
//     <main
//       className={`
//         ${cormorant.variable}
//         ${montserrat.variable}
//         min-h-screen
//         overflow-hidden
//         bg-[#F7F4EE]
//         text-[#231F20]
//       `}
//     >
//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="relative min-h-[88vh] overflow-hidden bg-[#231F20]">
//         {/* Background */}

//         <motion.div
//           initial={{
//             scale: 1.08,
//           }}
//           animate={{
//             scale: 1,
//           }}
//           transition={{
//             duration: 2,
//             ease: "easeOut",
//           }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={getImagePath("image1.jpg")}
//             alt="ASANG Design Studio Portfolio"
//             fill
//             priority
//             quality={75}
//             sizes="100vw"
//             className="object-cover"
//           />
//         </motion.div>

//         {/* Dark overlay */}

//         <div className="absolute inset-0 bg-black/50" />

//         <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

//         {/* Decorative circle */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.8,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 1.4,
//             delay: 0.4,
//           }}
//           className="
//             pointer-events-none
//             absolute
//             -right-32
//             top-24
//             h-[420px]
//             w-[420px]
//             rounded-full
//             border
//             border-[#DCC9A8]/20
//             md:h-[600px]
//             md:w-[600px]
//           "
//         />

//         {/* Hero content */}

//         <div className="relative z-10 flex min-h-[88vh] items-end px-6 pb-14 sm:px-10 md:px-16 lg:px-24 lg:pb-20">
//           <div className="mx-auto w-full max-w-7xl">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={stagger}
//             >
//               {/* Small label */}

//               <motion.div
//                 variants={fadeUp}
//                 className="mb-6 flex items-center gap-4"
//               >
//                 <span className="h-px w-10 bg-[#DCC9A8]" />

//                 <span
//                   className="
//                     font-[family-name:var(--font-montserrat)]
//                     text-[9px]
//                     font-medium
//                     uppercase
//                     tracking-[0.4em]
//                     text-[#DCC9A8]
//                   "
//                 >
//                   ASANG DESIGN STUDIO
//                 </span>
//               </motion.div>

//               {/* Main heading */}

//               <motion.h1
//                 variants={fadeUp}
//                 className="
//                   max-w-5xl
//                   font-[family-name:var(--font-cormorant)]
//                   text-[4.5rem]
//                   font-medium
//                   leading-[0.78]
//                   tracking-[-0.03em]
//                   text-white
//                   sm:text-[6.5rem]
//                   md:text-[8rem]
//                   lg:text-[10rem]
//                 "
//               >
//                 Our
//                 <br />

//                 <span className="italic text-[#DCC9A8]">
//                   Portfolio
//                 </span>
//               </motion.h1>

//               {/* Description */}

//               <motion.div
//                 variants={fadeUp}
//                 className="
//                   mt-8
//                   flex
//                   flex-col
//                   gap-8
//                   md:flex-row
//                   md:items-end
//                   md:justify-between
//                 "
//               >
//                 <p
//                   className="
//                     max-w-xl
//                     font-[family-name:var(--font-montserrat)]
//                     text-xs
//                     font-light
//                     leading-[2]
//                     tracking-[0.02em]
//                     text-white/65
//                     md:text-sm
//                   "
//                 >
//                   A curated collection of spaces shaped by
//                   thoughtful design, timeless materials and
//                   a deeper understanding of how people live.
//                 </p>

//                 <a
//                   href="#service-apartment"
//                   className="
//                     group
//                     flex
//                     w-fit
//                     items-center
//                     gap-4
//                     rounded-full
//                     border
//                     border-white/30
//                     px-5
//                     py-3
//                     transition-all
//                     duration-500
//                     hover:border-[#DCC9A8]
//                     hover:bg-[#DCC9A8]
//                     hover:text-[#231F20]
//                   "
//                 >
//                   <span
//                     className="
//                       font-[family-name:var(--font-montserrat)]
//                       text-[8px]
//                       font-medium
//                       uppercase
//                       tracking-[0.25em]
//                       text-white
//                       transition-colors
//                       group-hover:text-[#231F20]
//                     "
//                   >
//                     Explore Projects
//                   </span>

//                   <svg
//                     className="
//                       h-4
//                       w-4
//                       text-[#DCC9A8]
//                       transition-transform
//                       duration-500
//                       group-hover:translate-y-1
//                       group-hover:text-[#231F20]
//                     "
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       d="M12 5v14"
//                       strokeLinecap="round"
//                     />

//                     <path
//                       d="m7 14 5 5 5-5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </a>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Side numbers */}

//         <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 md:flex lg:right-10">
//           {[1, 2, 3, 4].map((item, index) => (
//             <div
//               key={item}
//               className="flex items-center gap-3"
//             >
//               <span
//                 className={`
//                   font-[family-name:var(--font-montserrat)]
//                   text-[9px]
//                   tracking-[0.2em]
//                   ${
//                     index === 0
//                       ? "text-[#DCC9A8]"
//                       : "text-white/30"
//                   }
//                 `}
//               >
//                 0{item}
//               </span>

//               <span
//                 className={`
//                   h-6
//                   w-px
//                   ${
//                     index === 0
//                       ? "bg-[#DCC9A8]"
//                       : "bg-white/20"
//                   }
//                 `}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Bottom left scroll */}

//         <div className="absolute bottom-7 left-6 flex items-center gap-4 sm:left-10 md:left-16 lg:left-24">
//           <div
//             className="
//               flex
//               h-10
//               w-10
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-white/30
//             "
//           >
//             <svg
//               className="h-4 w-4 text-[#DCC9A8]"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//             >
//               <path
//                 d="M12 5v14"
//                 strokeLinecap="round"
//               />

//               <path
//                 d="m7 14 5 5 5-5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>

//           <span
//             className="
//               font-[family-name:var(--font-montserrat)]
//               text-[8px]
//               uppercase
//               tracking-[0.3em]
//               text-white/40
//             "
//           >
//             Scroll to explore
//           </span>
//         </div>
//       </section>

//       {/* =====================================================
//           INTRO / PROJECT CATEGORIES
//       ===================================================== */}

//       <section className="bg-[#F7F4EE] px-6 py-20 sm:px-10 md:px-16 md:py-24 lg:px-24">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           variants={stagger}
//           className="mx-auto max-w-7xl"
//         >
//           <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
//             <motion.div variants={fadeUp}>
//               <p
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-[9px]
//                   font-medium
//                   uppercase
//                   tracking-[0.35em]
//                   text-[#8F9A9B]
//                 "
//               >
//                 Our Work
//               </p>

//               <h2
//                 className="
//                   mt-5
//                   font-[family-name:var(--font-cormorant)]
//                   text-5xl
//                   font-medium
//                   leading-[0.9]
//                   text-[#231F20]
//                   sm:text-6xl
//                 "
//               >
//                 Projects
//                 <br />

//                 <span className="italic text-[#8F9A9B]">
//                   Across Lifestyles
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.div variants={fadeUp}>
//               <p
//                 className="
//                   max-w-2xl
//                   font-[family-name:var(--font-montserrat)]
//                   text-xs
//                   font-light
//                   leading-[2]
//                   text-[#777168]
//                   md:text-sm
//                 "
//               >
//                 From intimate residences to thoughtfully
//                 crafted interiors, our work explores the
//                 relationship between people, space,
//                 material and light.
//               </p>

//               {/* Category list */}

//               <div className="mt-8 flex flex-wrap gap-3">
//                 {[
//                   "Residential",
//                   "Villas",
//                   "Commercial",
//                   "Industrial",
//                   "Hospitality",
//                   "Service Apartment",
//                 ].map((category, index) => (
//                   <span
//                     key={category}
//                     className={`
//                       rounded-full
//                       border
//                       px-4
//                       py-2
//                       font-[family-name:var(--font-montserrat)]
//                       text-[8px]
//                       uppercase
//                       tracking-[0.15em]
//                       ${
//                         index === 5
//                           ? "border-[#231F20] bg-[#231F20] text-white"
//                           : "border-[#231F20]/15 text-[#777168]"
//                       }
//                     `}
//                   >
//                     {category}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* =====================================================
//           SERVICE APARTMENT FEATURED PROJECT
//       ===================================================== */}

//       <section
//         id="service-apartment"
//         className="bg-[#EAE4D9] px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:px-24"
//       >
//         <div className="mx-auto max-w-7xl">
//           {/* Project heading */}

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             variants={stagger}
//             className="mb-10 grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:items-end"
//           >
//             <motion.div variants={fadeUp}>
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#8F9A9B]" />

//                 <span
//                   className="
//                     font-[family-name:var(--font-montserrat)]
//                     text-[9px]
//                     font-medium
//                     uppercase
//                     tracking-[0.35em]
//                     text-[#777168]
//                   "
//                 >
//                   Featured Project
//                 </span>
//               </div>

//               <h2
//                 className="
//                   mt-5
//                   font-[family-name:var(--font-cormorant)]
//                   text-6xl
//                   font-medium
//                   leading-[0.8]
//                   text-[#231F20]
//                   sm:text-7xl
//                   md:text-8xl
//                 "
//               >
//                 Service
//                 <br />

//                 <span className="italic text-[#777168]">
//                   Apartment
//                 </span>
//               </h2>
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               className="md:pb-2"
//             >
//               <p
//                 className="
//                   max-w-xl
//                   font-[family-name:var(--font-montserrat)]
//                   text-xs
//                   font-light
//                   leading-[2]
//                   text-[#777168]
//                   md:text-sm
//                 "
//               >
//                 A contemporary living environment designed
//                 around comfort, functionality and modern
//                 urban lifestyles — brought together through
//                 warm materials, refined proportions and
//                 thoughtful detailing.
//               </p>

//               <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
//                 <ProjectMeta
//                   label="Typology"
//                   value="Residential"
//                 />

//                 <ProjectMeta
//                   label="Design"
//                   value="Interiors"
//                 />

//                 <ProjectMeta
//                   label="Style"
//                   value="Contemporary"
//                 />

//                 <ProjectMeta
//                   label="Views"
//                   value="22"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* =================================================
//               CAROUSEL
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.15,
//             }}
//             transition={{
//               duration: 0.9,
//             }}
//           >
//             {/* Main image */}

//             <div
//               className="relative"
//               onMouseEnter={() =>
//                 setIsPaused(true)
//               }
//               onMouseLeave={() =>
//                 setIsPaused(false)
//               }
//             >
//               <div className="relative aspect-[16/9] overflow-hidden rounded-[4px] bg-[#D7D0C4] md:aspect-[2/1]">
//                 <AnimatePresence mode="wait">
//                   <motion.button
//                     key={currentImage.file}
//                     type="button"
//                     onClick={() =>
//                       openImage(
//                         getImagePath(
//                           currentImage.file
//                         )
//                       )
//                     }
//                     initial={{
//                       opacity: 0,
//                       scale: 1.035,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       scale: 0.99,
//                     }}
//                     transition={{
//                       duration: 0.7,
//                       ease: "easeOut",
//                     }}
//                     className="
//                       absolute
//                       inset-0
//                       h-full
//                       w-full
//                       cursor-zoom-in
//                       text-left
//                     "
//                   >
//                     <Image
//                       src={getImagePath(
//                         currentImage.file
//                       )}
//                       alt={`${currentImage.title} — ASANG Design Studio`}
//                       fill
//                       priority={currentIndex === 0}
//                       quality={75}
//                       sizes="(max-width: 768px) 100vw, 1200px"
//                       className="
//                         object-cover
//                         transition-transform
//                         duration-[1.5s]
//                         hover:scale-[1.025]
//                       "
//                     />

//                     {/* Image overlay */}

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

//                     {/* Image number */}

//                     <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10">
//                       <div className="flex items-center gap-4">
//                         <span
//                           className="
//                             font-[family-name:var(--font-cormorant)]
//                             text-5xl
//                             leading-none
//                             text-white
//                             md:text-6xl
//                           "
//                         >
//                           {currentImage.number}
//                         </span>

//                         <span className="h-px w-12 bg-[#DCC9A8]" />

//                         <div>
//                           <p
//                             className="
//                               font-[family-name:var(--font-cormorant)]
//                               text-2xl
//                               text-white
//                               md:text-3xl
//                             "
//                           >
//                             {currentImage.title}
//                           </p>

//                           <p
//                             className="
//                               mt-1
//                               font-[family-name:var(--font-montserrat)]
//                               text-[8px]
//                               uppercase
//                               tracking-[0.25em]
//                               text-white/50
//                             "
//                           >
//                             Service Apartment
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* View icon */}

//                     <div
//                       className="
//                         absolute
//                         right-6
//                         top-6
//                         flex
//                         h-11
//                         w-11
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-white/40
//                         bg-black/10
//                         backdrop-blur-md
//                         sm:right-8
//                         sm:top-8
//                       "
//                     >
//                       <svg
//                         className="h-4 w-4 text-white"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="1.4"
//                       >
//                         <path
//                           d="M8 3H3v5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />

//                         <path
//                           d="M16 3h5v5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />

//                         <path
//                           d="M21 16v5h-5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />

//                         <path
//                           d="M3 16v5h5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </motion.button>
//                 </AnimatePresence>

//                 {/* Previous */}

//                 <button
//                   type="button"
//                   onClick={previousImage}
//                   aria-label="Previous image"
//                   className="
//                     absolute
//                     left-4
//                     top-1/2
//                     z-20
//                     flex
//                     h-11
//                     w-11
//                     -translate-y-1/2
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/30
//                     bg-black/20
//                     text-white
//                     backdrop-blur-md
//                     transition-all
//                     duration-300
//                     hover:border-[#DCC9A8]
//                     hover:bg-[#DCC9A8]
//                     hover:text-[#231F20]
//                     md:left-6
//                   "
//                 >
//                   <svg
//                     className="h-4 w-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       d="m15 18-6-6 6-6"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>

//                 {/* Next */}

//                 <button
//                   type="button"
//                   onClick={nextImage}
//                   aria-label="Next image"
//                   className="
//                     absolute
//                     right-4
//                     top-1/2
//                     z-20
//                     flex
//                     h-11
//                     w-11
//                     -translate-y-1/2
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/30
//                     bg-black/20
//                     text-white
//                     backdrop-blur-md
//                     transition-all
//                     duration-300
//                     hover:border-[#DCC9A8]
//                     hover:bg-[#DCC9A8]
//                     hover:text-[#231F20]
//                     md:right-6
//                   "
//                 >
//                   <svg
//                     className="h-4 w-4"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       d="m9 18 6-6-6-6"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Progress */}

//               <div className="mt-5 flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <span
//                     className="
//                       font-[family-name:var(--font-cormorant)]
//                       text-2xl
//                       text-[#231F20]
//                     "
//                   >
//                     {currentImage.number}
//                   </span>

//                   <span className="h-px w-8 bg-[#231F20]/20" />

//                   <span
//                     className="
//                       font-[family-name:var(--font-montserrat)]
//                       text-[8px]
//                       uppercase
//                       tracking-[0.2em]
//                       text-[#8F9A9B]
//                     "
//                   >
//                     {String(
//                       serviceApartmentImages.length
//                     ).padStart(2, "0")}{" "}
//                     Views
//                   </span>
//                 </div>

//                 <div className="hidden items-center gap-3 sm:flex">
//                   <span
//                     className="
//                       font-[family-name:var(--font-montserrat)]
//                       text-[8px]
//                       uppercase
//                       tracking-[0.2em]
//                       text-[#8F9A9B]
//                     "
//                   >
//                     {isPaused
//                       ? "Paused"
//                       : "Auto Play"}
//                   </span>

//                   <span
//                     className={`
//                       h-1.5
//                       w-1.5
//                       rounded-full
//                       ${
//                         isPaused
//                           ? "bg-[#8F9A9B]"
//                           : "bg-[#231F20]"
//                       }
//                     `}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 THUMBNAILS
//             ================================================= */}

//             <div className="mt-6">
//               <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin">
//                 {serviceApartmentImages.map(
//                   (image, index) => {
//                     const isActive =
//                       index === currentIndex;

//                     return (
//                       <button
//                         key={image.file}
//                         type="button"
//                         onClick={() =>
//                           setCurrentIndex(index)
//                         }
//                         className={`
//                           group
//                           relative
//                           h-20
//                           w-28
//                           flex-shrink-0
//                           overflow-hidden
//                           rounded-[3px]
//                           transition-all
//                           duration-300
//                           sm:h-24
//                           sm:w-32
//                           ${
//                             isActive
//                               ? "ring-2 ring-[#231F20] ring-offset-2 ring-offset-[#EAE4D9]"
//                               : "opacity-55 hover:opacity-100"
//                           }
//                         `}
//                         aria-label={`View ${image.title}`}
//                       >
//                         <Image
//                           src={getImagePath(
//                             image.file
//                           )}
//                           alt={image.title}
//                           fill
//                           sizes="128px"
//                           quality={70}
//                           className="
//                             object-cover
//                             transition-transform
//                             duration-500
//                             group-hover:scale-105
//                           "
//                         />

//                         <div
//                           className={`
//                             absolute
//                             inset-0
//                             transition-colors
//                             ${
//                               isActive
//                                 ? "bg-black/10"
//                                 : "bg-black/25"
//                             }
//                           `}
//                         />

//                         <span
//                           className="
//                             absolute
//                             bottom-2
//                             left-2
//                             font-[family-name:var(--font-montserrat)]
//                             text-[8px]
//                             tracking-[0.15em]
//                             text-white
//                             drop-shadow
//                           "
//                         >
//                           {image.number}
//                         </span>
//                       </button>
//                     );
//                   }
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================================
//           DESIGN PHILOSOPHY STRIP
//       ===================================================== */}

//       <section className="bg-[#231F20] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.25,
//             }}
//             variants={stagger}
//             className="grid gap-12 md:grid-cols-[1fr_1.5fr]"
//           >
//             <motion.div variants={fadeUp}>
//               <p
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-[9px]
//                   font-medium
//                   uppercase
//                   tracking-[0.35em]
//                   text-[#DCC9A8]
//                 "
//               >
//                 Design Approach
//               </p>
//             </motion.div>

//             <motion.div variants={fadeUp}>
//               <h2
//                 className="
//                   font-[family-name:var(--font-cormorant)]
//                   text-5xl
//                   font-medium
//                   leading-[0.9]
//                   text-[#F7F4EE]
//                   sm:text-6xl
//                   md:text-7xl
//                 "
//               >
//                 Thoughtful spaces,
//                 <br />

//                 <span className="italic text-[#DCC9A8]">
//                   meaningful living.
//                 </span>
//               </h2>

//               <p
//                 className="
//                   mt-8
//                   max-w-xl
//                   font-[family-name:var(--font-montserrat)]
//                   text-xs
//                   font-light
//                   leading-[2]
//                   text-white/45
//                   md:text-sm
//                 "
//               >
//                 We believe good design is not about
//                 excess. It is about creating a thoughtful
//                 relationship between light, material,
//                 proportion, functionality and the people
//                 who inhabit a space.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Philosophy items */}

//           <div className="mt-20 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
//             <PhilosophyItem
//               number="01"
//               title="Context"
//               text="Design rooted in place and people."
//             />

//             <PhilosophyItem
//               number="02"
//               title="Material"
//               text="Honest materials with lasting character."
//             />

//             <PhilosophyItem
//               number="03"
//               title="Light"
//               text="Natural light shaping atmosphere."
//             />

//             <PhilosophyItem
//               number="04"
//               title="Living"
//               text="Spaces designed around everyday life."
//             />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section className="bg-[#DCC9A8] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.9,
//           }}
//           className="mx-auto max-w-7xl"
//         >
//           <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
//             <div>
//               <p
//                 className="
//                   mb-6
//                   font-[family-name:var(--font-montserrat)]
//                   text-[9px]
//                   font-medium
//                   uppercase
//                   tracking-[0.35em]
//                   text-[#6C665D]
//                 "
//               >
//                 Start a Conversation
//               </p>

//               <h2
//                 className="
//                   max-w-4xl
//                   font-[family-name:var(--font-cormorant)]
//                   text-6xl
//                   font-medium
//                   leading-[0.8]
//                   text-[#231F20]
//                   sm:text-7xl
//                   md:text-8xl
//                 "
//               >
//                 Inspired by what
//                 <br />

//                 <span className="italic">
//                   you see?
//                 </span>
//               </h2>

//               <p
//                 className="
//                   mt-8
//                   max-w-lg
//                   font-[family-name:var(--font-montserrat)]
//                   text-xs
//                   font-light
//                   leading-[2]
//                   text-[#5F5951]
//                   md:text-sm
//                 "
//               >
//                 Let's create a space that is uniquely
//                 yours.
//               </p>
//             </div>

//             <a
//               href="/contact"
//               className="
//                 group
//                 flex
//                 w-fit
//                 items-center
//                 gap-5
//                 rounded-full
//                 border
//                 border-[#231F20]
//                 px-7
//                 py-4
//                 transition-all
//                 duration-500
//                 hover:bg-[#231F20]
//                 hover:text-[#F7F4EE]
//               "
//             >
//               <span
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-[9px]
//                   font-medium
//                   uppercase
//                   tracking-[0.25em]
//                 "
//               >
//                 Get in Touch
//               </span>

//               <svg
//                 className="
//                   h-4
//                   w-4
//                   transition-transform
//                   duration-500
//                   group-hover:translate-x-1
//                 "
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               >
//                 <path
//                   d="M5 12h14"
//                   strokeLinecap="round"
//                 />

//                 <path
//                   d="m13 6 6 6-6 6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </a>
//           </div>
//         </motion.div>
//       </section>

//       {/* =====================================================
//           FULLSCREEN IMAGE VIEWER
//       ===================================================== */}

//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             className="
//               fixed
//               inset-0
//               z-[9999]
//               flex
//               items-center
//               justify-center
//               bg-[#11100F]/95
//               p-4
//               backdrop-blur-xl
//               sm:p-8
//               md:p-12
//             "
//             onClick={() => setSelectedImage(null)}
//           >
//             {/* Top label */}

//             <div className="absolute left-6 top-6 z-20 flex items-center gap-4 sm:left-8 sm:top-8">
//               <span
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-[8px]
//                   uppercase
//                   tracking-[0.3em]
//                   text-[#DCC9A8]
//                 "
//               >
//                 ASANG
//               </span>

//               <span className="h-px w-8 bg-white/20" />

//               <span
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-[8px]
//                   uppercase
//                   tracking-[0.25em]
//                   text-white/40
//                 "
//               >
//                 Service Apartment
//               </span>
//             </div>

//             {/* Close */}

//             <button
//               type="button"
//               onClick={() =>
//                 setSelectedImage(null)
//               }
//               aria-label="Close image"
//               className="
//                 absolute
//                 right-6
//                 top-6
//                 z-30
//                 flex
//                 h-11
//                 w-11
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/20
//                 bg-white/5
//                 text-white
//                 backdrop-blur-md
//                 transition-all
//                 duration-300
//                 hover:border-[#DCC9A8]
//                 hover:bg-[#DCC9A8]
//                 hover:text-[#231F20]
//                 sm:right-8
//                 sm:top-8
//               "
//             >
//               <svg
//                 className="h-5 w-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.4"
//               >
//                 <path
//                   d="M6 6l12 12"
//                   strokeLinecap="round"
//                 />

//                 <path
//                   d="M18 6L6 18"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>

//             {/* Image */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.94,
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 0.94,
//               }}
//               transition={{
//                 duration: 0.4,
//               }}
//               className="
//                 relative
//                 h-[78vh]
//                 w-full
//                 max-w-7xl
//               "
//               onClick={(event) =>
//                 event.stopPropagation()
//               }
//             >
//               <Image
//                 src={selectedImage}
//                 alt="ASANG Service Apartment"
//                 fill
//                 quality={75}
//                 sizes="95vw"
//                 className="object-contain"
//               />
//             </motion.div>

//             {/* Bottom */}

//             <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
//               <span
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-[8px]
//                   uppercase
//                   tracking-[0.25em]
//                   text-white/30
//                 "
//               >
//                 ← → Navigate &nbsp;&nbsp; ESC Close
//               </span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

// // ============================================================
// // PROJECT META
// // ============================================================

// function ProjectMeta({
//   label,
//   value,
// }: {
//   label: string;
//   value: string;
// }) {
//   return (
//     <div>
//       <p
//         className="
//           font-[family-name:var(--font-montserrat)]
//           text-[7px]
//           uppercase
//           tracking-[0.25em]
//           text-[#8F9A9B]
//         "
//       >
//         {label}
//       </p>

//       <p
//         className="
//           mt-1
//           font-[family-name:var(--font-cormorant)]
//           text-lg
//           text-[#231F20]
//         "
//       >
//         {value}
//       </p>
//     </div>
//   );
// }

// // ============================================================
// // PHILOSOPHY ITEM
// // ============================================================

// function PhilosophyItem({
//   number,
//   title,
//   text,
// }: {
//   number: string;
//   title: string;
//   text: string;
// }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 20,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.3,
//       }}
//       transition={{
//         duration: 0.7,
//       }}
//       className="
//         border-b
//         border-white/10
//         px-0
//         py-8
//         sm:px-6
//         lg:border-b-0
//         lg:border-r
//         lg:px-8
//         lg:py-0
//         first:lg:pl-0
//         last:lg:border-r-0
//       "
//     >
//       <span
//         className="
//           font-[family-name:var(--font-montserrat)]
//           text-[8px]
//           tracking-[0.2em]
//           text-[#DCC9A8]
//         "
//       >
//         {number}
//       </span>

//       <h3
//         className="
//           mt-5
//           font-[family-name:var(--font-cormorant)]
//           text-3xl
//           text-[#F7F4EE]
//         "
//       >
//         {title}
//       </h3>

//       <p
//         className="
//           mt-3
//           max-w-xs
//           font-[family-name:var(--font-montserrat)]
//           text-[9px]
//           font-light
//           leading-[1.8]
//           text-white/40
//         "
//       >
//         {text}
//       </p>
//     </motion.div>
//   );
// }





























"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

// ============================================================
// ASANG BRAND FONTS
// ============================================================

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


const PROJECT_FOLDER = "/images/Projects";

const serviceApartmentImages = [
  {
    number: "01",
    file: "image1.jpg",
    title: "Living Space",
  },
  {
    number: "02",
    file: "image2.jpg",
    title: "Interior Composition",
  },
  {
    number: "03",
    file: "image3.jpg",
    title: "Material & Texture",
  },
  {
    number: "04",
    file: "image4.jpg",
    title: "Living Environment",
  },
  {
    number: "05",
    file: "image5.jpg",
    title: "Spatial Detail",
  },
  {
    number: "06",
    file: "image6.jpg",
    title: "Dining Space",
  },
  {
    number: "07",
    file: "image7.jpg",
    title: "Architectural Detail",
  },
  {
    number: "08",
    file: "image8.jpg",
    title: "Material Palette",
  },
  {
    number: "09",
    file: "image9.jpg",
    title: "Perspective",
  },
  {
    number: "10",
    file: "image10.jpg",
    title: "Atmosphere",
  },
  {
    number: "11",
    file: "image11.jpg",
    title: "Living Detail",
  },
  {
    number: "12",
    file: "image12.jpg",
    title: "Quiet Corner",
  },
  {
    number: "13",
    file: "image13.jpg",
    title: "Contemporary Living",
  },
  {
    number: "14",
    file: "image14.jpg",
    title: "Craft & Detail",
  },
  {
    number: "15",
    file: "image15.jpg",
    title: "Light & Shadow",
  },
  {
    number: "16",
    file: "image16.jpg",
    title: "Spatial Rhythm",
  },
  {
    number: "17",
    file: "image17.jpg",
    title: "Texture Study",
  },
  {
    number: "18",
    file: "image18.jpg",
    title: "Living Architecture",
  },
  {
    number: "19",
    file: "image19.jpg",
    title: "Final Composition",
  },
  {
    number: "20",
    file: "image20.jpg",
    title: "A Place to Belong",
  },
  {
    number: "21",
    file: "imagedoor.jpg",
    title: "Entrance Detail",
  },
];

const getImagePath = (file: string) =>
  `${PROJECT_FOLDER}/${file}`;
// ============================================================
// ANIMATION
// ============================================================

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ============================================================
// PAGE
// ============================================================

export default function PortfolioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const currentImage =
    serviceApartmentImages[currentIndex];

  // ==========================================================
  // NEXT IMAGE
  // ==========================================================

  const nextImage = useCallback(() => {
    setCurrentIndex((previous) =>
      previous === serviceApartmentImages.length - 1
        ? 0
        : previous + 1
    );
  }, []);

  // ==========================================================
  // PREVIOUS IMAGE
  // ==========================================================

  const previousImage = useCallback(() => {
    setCurrentIndex((previous) =>
      previous === 0
        ? serviceApartmentImages.length - 1
        : previous - 1
    );
  }, []);

  // ==========================================================
  // AUTOMATIC SLIDER
  // ==========================================================

  useEffect(() => {
    if (isPaused || selectedImage) {
      return;
    }

    const interval = setInterval(() => {
      nextImage();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, selectedImage, nextImage]);

  // ==========================================================
  // KEYBOARD CONTROLS
  // ==========================================================

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [nextImage, previousImage]);

  // ==========================================================
  // OPEN IMAGE
  // ==========================================================

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <main
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        min-h-screen
        overflow-hidden
        bg-[#F7F4EE]
        text-[#231F20]
      `}
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden bg-[#231F20]">
        {/* Background */}

        <motion.div
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={getImagePath("image1.jpg")}
            alt="ASANG Design Studio Portfolio"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

        {/* Decorative circle */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 0.4,
          }}
          className="
            pointer-events-none
            absolute
            -right-32
            top-24
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#DCC9A8]/20
            md:h-[600px]
            md:w-[600px]
          "
        />

        {/* Hero content */}

        <div className="relative z-10 flex min-h-[88vh] items-end px-6 pb-14 sm:px-10 md:px-16 lg:px-24 lg:pb-20">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Small label */}

              <motion.div
                variants={fadeUp}
                className="mb-6 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-[#DCC9A8]" />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.4em]
                    text-[#DCC9A8]
                  "
                >
                  ASANG DESIGN STUDIO
                </span>
              </motion.div>

              {/* Main heading */}

              <motion.h1
                variants={fadeUp}
                className="
                  max-w-5xl
                  font-[family-name:var(--font-cormorant)]
                  text-[4.5rem]
                  font-medium
                  leading-[0.78]
                  tracking-[-0.03em]
                  text-white
                  sm:text-[6.5rem]
                  md:text-[8rem]
                  lg:text-[10rem]
                "
              >
                Our
                <br />

                <span className="italic text-[#DCC9A8]">
                  Portfolio
                </span>
              </motion.h1>

              {/* Description */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-8
                  flex
                  flex-col
                  gap-8
                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >
                <p
                  className="
                    max-w-xl
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-light
                    leading-[2]
                    tracking-[0.02em]
                    text-white/65
                    md:text-sm
                  "
                >
                  A curated collection of spaces shaped by
                  thoughtful design, timeless materials and
                  a deeper understanding of how people live.
                </p>

                <a
                  href="#service-apartment"
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-4
                    rounded-full
                    border
                    border-white/30
                    px-5
                    py-3
                    transition-all
                    duration-500
                    hover:border-[#DCC9A8]
                    hover:bg-[#DCC9A8]
                    hover:text-[#231F20]
                  "
                >
                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-white
                      transition-colors
                      group-hover:text-[#231F20]
                    "
                  >
                    Explore Projects
                  </span>

                  <svg
                    className="
                      h-4
                      w-4
                      text-[#DCC9A8]
                      transition-transform
                      duration-500
                      group-hover:translate-y-1
                      group-hover:text-[#231F20]
                    "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M12 5v14"
                      strokeLinecap="round"
                    />

                    <path
                      d="m7 14 5 5 5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Side numbers */}

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-5 md:flex lg:right-10">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <span
                className={`
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  tracking-[0.2em]
                  ${
                    index === 0
                      ? "text-[#DCC9A8]"
                      : "text-white/30"
                  }
                `}
              >
                0{item}
              </span>

              <span
                className={`
                  h-6
                  w-px
                  ${
                    index === 0
                      ? "bg-[#DCC9A8]"
                      : "bg-white/20"
                  }
                `}
              />
            </div>
          ))}
        </div>

        {/* Bottom left scroll */}

        <div className="absolute bottom-7 left-6 flex items-center gap-4 sm:left-10 md:left-16 lg:left-24">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/30
            "
          >
            <svg
              className="h-4 w-4 text-[#DCC9A8]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 5v14"
                strokeLinecap="round"
              />

              <path
                d="m7 14 5 5 5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span
            className="
              font-[family-name:var(--font-montserrat)]
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Scroll to explore
          </span>
        </div>
      </section>

      {/* =====================================================
          INTRO / PROJECT CATEGORIES
      ===================================================== */}

      <section className="bg-[#F7F4EE] px-6 py-20 sm:px-10 md:px-16 md:py-24 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={stagger}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <motion.div variants={fadeUp}>
              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#8F9A9B]
                "
              >
                Our Work
              </p>

              <h2
                className="
                  mt-5
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.9]
                  text-[#231F20]
                  sm:text-6xl
                "
              >
                Projects
                <br />

                <span className="italic text-[#8F9A9B]">
                  Across Lifestyles
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p
                className="
                  max-w-2xl
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2]
                  text-[#777168]
                  md:text-sm
                "
              >
                From intimate residences to thoughtfully
                crafted interiors, our work explores the
                relationship between people, space,
                material and light.
              </p>

              {/* Category list */}

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Residential",
                  "Villas",
                  "Commercial",
                  "Industrial",
                  "Hospitality",
                  "Service Apartment",
                ].map((category, index) => (
                  <span
                    key={category}
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.15em]
                      ${
                        index === 5
                          ? "border-[#231F20] bg-[#231F20] text-white"
                          : "border-[#231F20]/15 text-[#777168]"
                      }
                    `}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          SERVICE APARTMENT FEATURED PROJECT
      ===================================================== */}

      <section
        id="service-apartment"
        className="bg-[#EAE4D9] px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:px-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Project heading */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="mb-10 grid gap-8 md:grid-cols-[0.65fr_1.35fr] md:items-end"
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F9A9B]" />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#777168]
                  "
                >
                  Featured Project
                </span>
              </div>

              <h2
                className="
                  mt-5
                  font-[family-name:var(--font-cormorant)]
                  text-6xl
                  font-medium
                  leading-[0.8]
                  text-[#231F20]
                  sm:text-7xl
                  md:text-8xl
                "
              >
                Service
                <br />

                <span className="italic text-[#777168]">
                  Apartment
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="md:pb-2"
            >
              <p
                className="
                  max-w-xl
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2]
                  text-[#777168]
                  md:text-sm
                "
              >
                A contemporary living environment designed
                around comfort, functionality and modern
                urban lifestyles — brought together through
                warm materials, refined proportions and
                thoughtful detailing.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                <ProjectMeta
                  label="Typology"
                  value="Residential"
                />

                <ProjectMeta
                  label="Design"
                  value="Interiors"
                />

                <ProjectMeta
                  label="Style"
                  value="Contemporary"
                />

                <ProjectMeta
                  label="Views"
                  value="22"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              CAROUSEL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            {/* Main image */}

            <div
              className="relative"
              onMouseEnter={() =>
                setIsPaused(true)
              }
              onMouseLeave={() =>
                setIsPaused(false)
              }
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[4px] bg-[#D7D0C4] md:aspect-[2/1]">
                <AnimatePresence mode="wait">
                  <motion.button
                    key={currentImage.file}
                    type="button"
                    onClick={() =>
                      openImage(
                        getImagePath(
                          currentImage.file
                        )
                      )
                    }
                    initial={{
                      opacity: 0,
                      scale: 1.035,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.99,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      cursor-zoom-in
                      text-left
                    "
                  >
                    <Image
                      src={getImagePath(
                        currentImage.file
                      )}
                      alt={`${currentImage.title} — ASANG Design Studio`}
                      fill
                      priority={currentIndex === 0}
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="
                        object-cover
                        transition-transform
                        duration-[1.5s]
                        hover:scale-[1.025]
                      "
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                    {/* Image number */}

                    <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10">
                      <div className="flex items-center gap-4">
                        <span
                          className="
                            font-[family-name:var(--font-cormorant)]
                            text-5xl
                            leading-none
                            text-white
                            md:text-6xl
                          "
                        >
                          {currentImage.number}
                        </span>

                        <span className="h-px w-12 bg-[#DCC9A8]" />

                        <div>
                          <p
                            className="
                              font-[family-name:var(--font-cormorant)]
                              text-2xl
                              text-white
                              md:text-3xl
                            "
                          >
                            {currentImage.title}
                          </p>

                          <p
                            className="
                              mt-1
                              font-[family-name:var(--font-montserrat)]
                              text-[8px]
                              uppercase
                              tracking-[0.25em]
                              text-white/50
                            "
                          >
                            Service Apartment
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* View icon */}

                    <div
                      className="
                        absolute
                        right-6
                        top-6
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/40
                        bg-black/10
                        backdrop-blur-md
                        sm:right-8
                        sm:top-8
                      "
                    >
                      <svg
                        className="h-4 w-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <path
                          d="M8 3H3v5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M16 3h5v5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M21 16v5h-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M3 16v5h5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </motion.button>
                </AnimatePresence>

                {/* Previous */}

                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="
                    absolute
                    left-4
                    top-1/2
                    z-20
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/20
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#DCC9A8]
                    hover:bg-[#DCC9A8]
                    hover:text-[#231F20]
                    md:left-6
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="m15 18-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Next */}

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="
                    absolute
                    right-4
                    top-1/2
                    z-20
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/20
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#DCC9A8]
                    hover:bg-[#DCC9A8]
                    hover:text-[#231F20]
                    md:right-6
                  "
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="m9 18 6-6-6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Progress */}

              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      font-[family-name:var(--font-cormorant)]
                      text-2xl
                      text-[#231F20]
                    "
                  >
                    {currentImage.number}
                  </span>

                  <span className="h-px w-8 bg-[#231F20]/20" />

                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-[#8F9A9B]
                    "
                  >
                    {String(
                      serviceApartmentImages.length
                    ).padStart(2, "0")}{" "}
                    Views
                  </span>
                </div>

                <div className="hidden items-center gap-3 sm:flex">
                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-[#8F9A9B]
                    "
                  >
                    {isPaused
                      ? "Paused"
                      : "Auto Play"}
                  </span>

                  <span
                    className={`
                      h-1.5
                      w-1.5
                      rounded-full
                      ${
                        isPaused
                          ? "bg-[#8F9A9B]"
                          : "bg-[#231F20]"
                      }
                    `}
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                THUMBNAILS
            ================================================= */}

            <div className="mt-6">
              <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin">
                {serviceApartmentImages.map(
                  (image, index) => {
                    const isActive =
                      index === currentIndex;

                    return (
                      <button
                        key={image.file}
                        type="button"
                        onClick={() =>
                          setCurrentIndex(index)
                        }
                        className={`
                          group
                          relative
                          h-20
                          w-28
                          flex-shrink-0
                          overflow-hidden
                          rounded-[3px]
                          transition-all
                          duration-300
                          sm:h-24
                          sm:w-32
                          ${
                            isActive
                              ? "ring-2 ring-[#231F20] ring-offset-2 ring-offset-[#EAE4D9]"
                              : "opacity-55 hover:opacity-100"
                          }
                        `}
                        aria-label={`View ${image.title}`}
                      >
                        <Image
                          src={getImagePath(
                            image.file
                          )}
                          alt={image.title}
                          fill
                          sizes="128px"
                          quality={70}
                          className="
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                          "
                        />

                        <div
                          className={`
                            absolute
                            inset-0
                            transition-colors
                            ${
                              isActive
                                ? "bg-black/10"
                                : "bg-black/25"
                            }
                          `}
                        />

                        <span
                          className="
                            absolute
                            bottom-2
                            left-2
                            font-[family-name:var(--font-montserrat)]
                            text-[8px]
                            tracking-[0.15em]
                            text-white
                            drop-shadow
                          "
                        >
                          {image.number}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DESIGN PHILOSOPHY STRIP
      ===================================================== */}

      <section className="bg-[#231F20] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={stagger}
            className="grid gap-12 md:grid-cols-[1fr_1.5fr]"
          >
            <motion.div variants={fadeUp}>
              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#DCC9A8]
                "
              >
                Design Approach
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.9]
                  text-[#F7F4EE]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Thoughtful spaces,
                <br />

                <span className="italic text-[#DCC9A8]">
                  meaningful living.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-xl
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2]
                  text-white/45
                  md:text-sm
                "
              >
                We believe good design is not about
                excess. It is about creating a thoughtful
                relationship between light, material,
                proportion, functionality and the people
                who inhabit a space.
              </p>
            </motion.div>
          </motion.div>

          {/* Philosophy items */}

          <div className="mt-20 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <PhilosophyItem
              number="01"
              title="Context"
              text="Design rooted in place and people."
            />

            <PhilosophyItem
              number="02"
              title="Material"
              text="Honest materials with lasting character."
            />

            <PhilosophyItem
              number="03"
              title="Light"
              text="Natural light shaping atmosphere."
            />

            <PhilosophyItem
              number="04"
              title="Living"
              text="Spaces designed around everyday life."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#DCC9A8] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
          }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p
                className="
                  mb-6
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#6C665D]
                "
              >
                Start a Conversation
              </p>

              <h2
                className="
                  max-w-4xl
                  font-[family-name:var(--font-cormorant)]
                  text-6xl
                  font-medium
                  leading-[0.8]
                  text-[#231F20]
                  sm:text-7xl
                  md:text-8xl
                "
              >
                Inspired by what
                <br />

                <span className="italic">
                  you see?
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-lg
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2]
                  text-[#5F5951]
                  md:text-sm
                "
              >
                Let's create a space that is uniquely
                yours.
              </p>
            </div>

            <a
              href="/contact"
              className="
                group
                flex
                w-fit
                items-center
                gap-5
                rounded-full
                border
                border-[#231F20]
                px-7
                py-4
                transition-all
                duration-500
                hover:bg-[#231F20]
                hover:text-[#F7F4EE]
              "
            >
              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                "
              >
                Get in Touch
              </span>

              <svg
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M5 12h14"
                  strokeLinecap="round"
                />

                <path
                  d="m13 6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          FULLSCREEN IMAGE VIEWER
      ===================================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-[#11100F]/95
              p-4
              backdrop-blur-xl
              sm:p-8
              md:p-12
            "
            onClick={() => setSelectedImage(null)}
          >
            {/* Top label */}

            <div className="absolute left-6 top-6 z-20 flex items-center gap-4 sm:left-8 sm:top-8">
              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-[#DCC9A8]
                "
              >
                ASANG
              </span>

              <span className="h-px w-8 bg-white/20" />

              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                Service Apartment
              </span>
            </div>

            {/* Close */}

            <button
              type="button"
              onClick={() =>
                setSelectedImage(null)
              }
              aria-label="Close image"
              className="
                absolute
                right-6
                top-6
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#DCC9A8]
                hover:bg-[#DCC9A8]
                hover:text-[#231F20]
                sm:right-8
                sm:top-8
              "
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path
                  d="M6 6l12 12"
                  strokeLinecap="round"
                />

                <path
                  d="M18 6L6 18"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                h-[78vh]
                w-full
                max-w-7xl
              "
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <Image
                src={selectedImage}
                alt="ASANG Service Apartment"
                fill
                quality={75}
                sizes="95vw"
                className="object-contain"
              />
            </motion.div>

            {/* Bottom */}

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                ← → Navigate &nbsp;&nbsp; ESC Close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// ============================================================
// PROJECT META
// ============================================================

function ProjectMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p
        className="
          font-[family-name:var(--font-montserrat)]
          text-[7px]
          uppercase
          tracking-[0.25em]
          text-[#8F9A9B]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          font-[family-name:var(--font-cormorant)]
          text-lg
          text-[#231F20]
        "
      >
        {value}
      </p>
    </div>
  );
}

// ============================================================
// PHILOSOPHY ITEM
// ============================================================

function PhilosophyItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        border-b
        border-white/10
        px-0
        py-8
        sm:px-6
        lg:border-b-0
        lg:border-r
        lg:px-8
        lg:py-0
        first:lg:pl-0
        last:lg:border-r-0
      "
    >
      <span
        className="
          font-[family-name:var(--font-montserrat)]
          text-[8px]
          tracking-[0.2em]
          text-[#DCC9A8]
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-5
          font-[family-name:var(--font-cormorant)]
          text-3xl
          text-[#F7F4EE]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          max-w-xs
          font-[family-name:var(--font-montserrat)]
          text-[9px]
          font-light
          leading-[1.8]
          text-white/40
        "
      >
        {text}
      </p>
    </motion.div>
  );
}