









// "use client";

// import Image from "next/image";
// import { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion, type Variants } from "framer-motion";
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

// const fadeUp: Variants = {
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

// const stagger: Variants = {
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
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-[0.4em]
//                     text-[#DCC9A8]
//                     md:text-sm
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
//                     text-sm
//                     font-medium
//                     leading-[2]
//                     tracking-[0.02em]
//                     text-white/80
//                     md:text-base
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
//                     border-white/40
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
//                       text-xs
//                       font-semibold
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
//                   text-xs
//                   font-semibold
//                   tracking-[0.2em]
//                   ${
//                     index === 0
//                       ? "text-[#DCC9A8]"
//                       : "text-white/60"
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
//                       : "bg-white/40"
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
//               border-white/40
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
//               text-xs
//               font-semibold
//               uppercase
//               tracking-[0.3em]
//               text-white/70
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
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.35em]
//                   text-[#8F9A9B]
//                   md:text-sm
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
//                   text-sm
//                   font-medium
//                   leading-[2]
//                   text-[#514d45]
//                   md:text-base
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
//                       text-xs
//                       font-semibold
//                       uppercase
//                       tracking-[0.15em]
//                       ${
//                         index === 5
//                           ? "border-[#231F20] bg-[#231F20] text-white"
//                           : "border-[#231F20]/20 text-[#514d45]"
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
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-[0.35em]
//                     text-[#777168]
//                     md:text-sm
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
//                   text-sm
//                   font-medium
//                   leading-[2]
//                   text-[#514d45]
//                   md:text-base
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
//                               text-xs
//                               font-semibold
//                               uppercase
//                               tracking-[0.25em]
//                               text-white/80
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
//                     border-white/40
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
//                     border-white/40
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
//                       text-xs
//                       font-semibold
//                       uppercase
//                       tracking-[0.2em]
//                       text-[#5f5a52]
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
//                       text-xs
//                       font-semibold
//                       uppercase
//                       tracking-[0.2em]
//                       text-[#5f5a52]
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
//                               : "opacity-60 hover:opacity-100"
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
//                             text-xs
//                             font-semibold
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
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.35em]
//                   text-[#DCC9A8]
//                   md:text-sm
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
//                   text-sm
//                   font-medium
//                   leading-[2]
//                   text-white/70
//                   md:text-base
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

//           <div className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
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
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.35em]
//                   text-[#6C665D]
//                   md:text-sm
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
//                   text-sm
//                   font-medium
//                   leading-[2]
//                   text-[#4b453e]
//                   md:text-base
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
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.25em]
//                   sm:text-sm
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
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.3em]
//                   text-[#DCC9A8]
//                 "
//               >
//                 ASANG
//               </span>

//               <span className="h-px w-8 bg-white/40" />

//               <span
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-xs
//                   font-medium
//                   uppercase
//                   tracking-[0.25em]
//                   text-white/80
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
//                 border-white/40
//                 bg-white/10
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
//                   text-xs
//                   font-medium
//                   uppercase
//                   tracking-[0.25em]
//                   text-white/60
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
//           text-xs
//           font-semibold
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
//           text-xl
//           font-medium
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
//         border-white/20
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
//           text-xs
//           font-semibold
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
//           text-sm
//           font-medium
//           leading-[1.8]
//           text-white/70
//         "
//       >
//         {text}
//       </p>
//     </motion.div>
//   );
// }










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
//       <ParallaxGallery />
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
// // 2. FULL COVER DYNAMIC EDITORIAL SECTION
// // ============================================================

// // ============================================================
// // 2. FULL COVER EDITORIAL SCROLL SECTION
// // ============================================================

// // ============================================================
// // 2. CURTAIN REVEAL EDITORIAL SECTION
// // ============================================================

// function EditorialSliderSection() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({ target: containerRef });

//   // Dark curtain slides from LEFT to RIGHT (0% = covers all, 100% = fully gone right)
//   // We move it by translating its X from 0vw to 100vw
//   const curtainX = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);

//   // Which stage is active based on scroll (0→0.33 = stage 0, 0.33→0.66 = stage 1, 0.66→1 = stage 2)
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

//         {/* ── BACKGROUND: Full bleed image, always visible underneath ── */}
//         <div className="absolute inset-0 z-0">
//           <Image
//             src={getImagePath("image4.jpg")}
//             alt="Editorial Interior"
//             fill
//             priority
//             quality={95}
//             className="object-cover"
//           />
//           {/* Base very subtle tint — image is mostly bright under revealed area */}
//           <div className="absolute inset-0 bg-black/10" />
//         </div>

//         {/* ── DARK CURTAIN: slides LEFT → RIGHT ── 
//             Full screen dark overlay. As scroll progresses it exits screen to the right.
//             Behind it = bright image + active text */}
//         <motion.div
//           style={{ x: curtainX }}
//           className="absolute inset-0 z-20 bg-[#0E0E0E]/60 backdrop-blur-[2px]" />

//         {/* ── HEADER LABELS (always visible, above curtain) ── */}
//         <div className="absolute left-6 top-10 z-30 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8] md:left-10">
//           ASANG Design Studio
//         </div>
//         <div className="absolute right-6 top-10 z-30 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]/50 md:right-10">
//           SCROLL TO DISCOVER
//         </div>

//         {/* ── ACTIVE STAGE TEXT: Rendered BELOW curtain (in bright revealed zone) ── */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
//           {/* Bright overlay on the revealed image area for readability */}
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
//                 {/* Stage marker */}
//                 <div className="mb-8 flex items-center gap-4">
//                   <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#DCC9A8]">
//                     {slides[activeStage].stage}
//                   </span>
//                   <div className="h-[1px] w-12 bg-[#DCC9A8]/40" />
//                   <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30">
//                     {slides[activeStage].label}
//                   </span>
//                 </div>

//                 {/* Main quote */}
//                 <h2 className="font-[family-name:var(--font-cormorant)] text-[10vw] md:text-[7vw] lg:text-[6vw] font-medium leading-[0.9] tracking-tight text-white">
//                   {slides[activeStage].quote}
//                 </h2>
//                 <h2 className="font-[family-name:var(--font-cormorant)] text-[10vw] md:text-[7vw] lg:text-[6vw] font-medium italic leading-[0.9] tracking-tight text-[#DCC9A8]">
//                   {slides[activeStage].quoteItalic}
//                 </h2>

//                 {/* Sub text */}
//                 <p className="mt-8 max-w-sm font-[family-name:var(--font-montserrat)] text-[11px] uppercase leading-loose tracking-[0.15em] text-white/50 md:text-[10px]">
//                   {slides[activeStage].sub}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* ── STAGE DOTS (fixed bottom right, above curtain) ── */}
//         <div className="absolute bottom-10 right-6 z-30 flex flex-col gap-2 md:right-10">
//           {slides.map((_, i) => (
//             <div
//               key={i}
//               className={`h-[1px] w-8 transition-all duration-500 ${i === activeStage ? "bg-[#DCC9A8] w-14" : "bg-white/20"
//                 }`}
//             />
//           ))}
//         </div>

//         {/* ── PROGRESS BAR (fixed bottom, above curtain) ── */}
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
// // 3. PARALLAX CREATIVE GALLERY
// // ============================================================

// function ParallaxGallery() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   // Split images into 3 columns for masonry effect
//   const col1 = serviceApartmentImages.slice(6, 10);
//   const col2 = serviceApartmentImages.slice(10, 14);
//   const col3 = serviceApartmentImages.slice(14, 18);

//   // Different translation speeds for each column
//   const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
//   const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-40%"]);
//   const y3 = useTransform(scrollYProgress, [0, 1], ["-10%", "-20%"]);

//   return (
//     <section ref={containerRef} className="relative overflow-hidden bg-[#F4F1EB] px-6 py-32 sm:px-10 md:px-16 lg:px-24">

//       <div className="mx-auto mb-20 max-w-7xl text-center">
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-4 block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-[#6E7F68]"
//         >
//           Archive
//         </motion.span>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="font-[family-name:var(--font-cormorant)] text-5xl font-medium text-[#0E0E0E] md:text-7xl"
//         >
//           Visual <span className="italic text-[#8F9A9B]">Symphony</span>
//         </motion.h2>
//       </div>

//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-10 h-[150vh] md:h-[200vh] overflow-hidden items-start">

//         {/* Column 1 */}
//         <motion.div style={{ y: y1 }} className="flex flex-col gap-6 md:gap-10">
//           {col1.map((img, i) => (
//             <GalleryItem key={i} img={img} />
//           ))}
//         </motion.div>

//         {/* Column 2 */}
//         <motion.div style={{ y: y2 }} className="flex flex-col gap-6 md:gap-10 mt-10 md:mt-24">
//           {col2.map((img, i) => (
//             <GalleryItem key={i} img={img} />
//           ))}
//         </motion.div>

//         {/* Column 3 */}
//         <motion.div style={{ y: y3 }} className="flex flex-col gap-6 md:gap-10 mt-5 md:mt-12 hidden md:flex">
//           {col3.map((img, i) => (
//             <GalleryItem key={i} img={img} />
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// function GalleryItem({ img }: { img: any }) {
//   return (
//     <div className="group relative overflow-hidden rounded-sm bg-[#D7D0C4] aspect-[4/5] w-full">
//       <Image
//         src={getImagePath(img.file)}
//         alt={img.title}
//         fill
//         sizes="(max-width: 768px) 100vw, 33vw"
//         className="object-cover transition-transform duration-700 group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//       <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//         <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold tracking-widest text-[#DCC9A8]">
//           {img.number}
//         </span>
//         <h4 className="font-[family-name:var(--font-cormorant)] text-2xl text-white">
//           {img.title}
//         </h4>
//       </div>
//     </div>
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
//             We strip away the unnecessary so the essential may speak. Our designs are driven by an obsession with context, a reverence for natural materials, and the belief that the spaces we inhabit shape the lives we lead.
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
// 3. HORIZONTAL SCROLL CARD GALLERY
// ============================================================

// Card data — alternating tall / wide aspect ratios for visual rhythm
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

  // Translate the card strip horizontally as user scrolls vertically
  // We'll compute the exact pixel distance after mount
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        // Total scrollable width minus one viewport width
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
      // Height controls how much scroll travel we get — more = slower/longer
      className="relative bg-[#0E0E0E]"
      style={{ height: `${galleryCards.length * 55}vh` }}
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        {/* ── Section header ── */}
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

          {/* Scroll hint arrow */}
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

        {/* ── Horizontal scrolling card strip ── */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 px-6 md:gap-6 md:px-16 lg:gap-8 lg:px-24 will-change-transform"
        >
          {galleryCards.map((card, i) => (
            <GalleryCard key={i} card={card} index={i} />
          ))}

          {/* End spacer card — decorative text */}
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

        {/* ── Bottom progress bar ── */}
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
      {/* Image */}
      <Image
        src={getImagePath(card.file)}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 70vw, 30vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Permanent subtle gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Top-left index number */}
      <div className="absolute left-4 top-4 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
        {card.number}
      </div>

      {/* Category pill — top right */}
      <div className="absolute right-4 top-4 rounded-full border border-white/10 px-3 py-1 backdrop-blur-sm">
        <span className="font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-[0.25em] text-white/50">
          {card.category}
        </span>
      </div>

      {/* Bottom info — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <h4 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-tight text-white md:text-3xl">
          {card.title}
        </h4>
        {/* Reveal line on hover */}
        <div className="mt-3 flex items-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-[1px] w-6 bg-[#DCC9A8]" />
          <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#DCC9A8]">
            View Project
          </span>
        </div>
      </div>

      {/* Hover overlay tint */}
      <div className="absolute inset-0 bg-[#DCC9A8]/0 transition-colors duration-500 group-hover:bg-[#DCC9A8]/5" />
    </motion.div>
  );
}

// ============================================================
// 4. DESIGN PHILOSOPHY
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
// 5. FOOTER CTA
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