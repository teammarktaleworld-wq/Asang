// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, type Variants } from "framer-motion";
// import { Cormorant_Garamond, Montserrat } from "next/font/google";
// import { useEffect, useState } from "react";

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

// // ============================================================
// // IMAGES
// // ============================================================

// const IMAGES = {
//   hero: "/images/Projects/image1.jpg",
//   residential: "/images/Projects/image4.jpg",
//   material: "/images/Projects/image8.jpg",
//   detail: "/images/Projects/image15.jpg",
//   final: "/images/Projects/image20.jpg",
// };

// // ============================================================
// // ANIMATIONS
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

// const fadeIn: Variants = {
//   hidden: {
//     opacity: 0,
//   },

//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.9,
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
// // SERVICES
// // ============================================================

// const services = [
//   {
//     number: "01",
//     title: "Interior Design",
//     short: "Complete interior design from concept to final space.",
//     description:
//       "We develop interiors around the people who use them. Every project is carefully considered through space planning, materiality, proportion, colour, furniture and lighting.",
//     tags: [
//       "Concept Design",
//       "Space Planning",
//       "Interior Styling",
//       "Material Palette",
//     ],
//   },

//   {
//     number: "02",
//     title: "Space Planning",
//     short: "Making every square foot work beautifully.",
//     description:
//       "We study movement, functionality, proportions and everyday routines to create layouts that feel natural while making the most of the available space.",
//     tags: [
//       "Layout Planning",
//       "Furniture Planning",
//       "Circulation",
//       "Zoning",
//     ],
//   },

//   {
//     number: "03",
//     title: "3D Visualization",
//     short: "See your space before it becomes reality.",
//     description:
//       "Our visualisation process helps you understand the proposed space through detailed 3D views, materials, furniture, lighting and atmosphere before execution begins.",
//     tags: [
//       "3D Views",
//       "Design Visualization",
//       "Material Visualization",
//       "Lighting Studies",
//     ],
//   },

//   {
//     number: "04",
//     title: "Material & Finishes",
//     short: "A considered palette of textures and materials.",
//     description:
//       "From flooring and stone to wood, fabrics, paint and surfaces, we curate materials that create a cohesive visual language and lasting character.",
//     tags: [
//       "Material Selection",
//       "Textures",
//       "Surface Finishes",
//       "Colour Palette",
//     ],
//   },

//   {
//     number: "05",
//     title: "Custom Furniture",
//     short: "Furniture designed specifically for your space.",
//     description:
//       "We design custom furniture pieces that respond to the architecture, proportions and lifestyle of each project.",
//     tags: [
//       "Custom Furniture",
//       "Built-ins",
//       "Storage",
//       "Joinery",
//     ],
//   },

//   {
//     number: "06",
//     title: "Lighting Design",
//     short: "Light that shapes mood and atmosphere.",
//     description:
//       "We carefully consider ambient, task and accent lighting to create spaces that transform throughout the day.",
//     tags: [
//       "Ambient Lighting",
//       "Task Lighting",
//       "Accent Lighting",
//       "Lighting Layout",
//     ],
//   },

//   {
//     number: "07",
//     title: "Execution Support",
//     short: "Design translated carefully into the real world.",
//     description:
//       "We coordinate design intent with on-site requirements, helping ensure that materials, details, proportions and finishes remain aligned with the approved design.",
//     tags: [
//       "Site Coordination",
//       "Design Supervision",
//       "Detail Checks",
//       "Execution Support",
//     ],
//   },

//   {
//     number: "08",
//     title: "Renovation & Transformation",
//     short: "Giving existing spaces a new identity.",
//     description:
//       "We reimagine existing interiors through strategic planning, new materials, furniture, lighting and spatial improvements.",
//     tags: [
//       "Renovation",
//       "Space Transformation",
//       "Restyling",
//       "Upgrades",
//     ],
//   },
// ];

// // ============================================================
// // PROJECT TYPES
// // ============================================================

// const projectTypes = [
//   {
//     number: "01",
//     title: "Residential",
//     text: "Homes, apartments, villas and private residences designed around the way you live.",
//   },

//   {
//     number: "02",
//     title: "Commercial",
//     text: "Workspaces, offices, retail environments and commercial interiors built around identity and function.",
//   },

//   {
//     number: "03",
//     title: "Hospitality",
//     text: "Hotels, service apartments, restaurants and guest spaces designed to create memorable experiences.",
//   },

//   {
//     number: "04",
//     title: "Special Projects",
//     text: "Unique spaces that require a tailored design approach, from concept through completion.",
//   },
// ];

// // ============================================================
// // PAGE
// // ============================================================

// export default function ServicesPage() {
//   const [buildStep, setBuildStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBuildStep((previous) => (previous + 1) % 6);
//     }, 2200);

//     return () => clearInterval(interval);
//   }, []);

//   const steps = [
//     "Blueprint",
//     "Structure",
//     "Materials",
//     "Furniture",
//     "Lighting",
//     "Complete",
//   ];

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
//       {/* ======================================================
//           HERO
//       ====================================================== */}

//       <section className="relative min-h-screen overflow-hidden bg-[#231F20]">
//         {/* Real interior background */}

//         <motion.div
//           initial={{
//             scale: 1.08,
//             opacity: 0,
//           }}
//           animate={{
//             scale: 1,
//             opacity: buildStep === 5 ? 0.5 : 0.18,
//           }}
//           transition={{
//             duration: 1.2,
//             ease: "easeOut",
//           }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={IMAGES.hero}
//             alt="ASANG interior design"
//             fill
//             priority
//             quality={75}
//             sizes="100vw"
//             className="object-cover"
//           />
//         </motion.div>

//         {/* Blueprint grid */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             opacity-[0.08]
//           "
//           style={{
//             backgroundImage: `
//               linear-gradient(#DCC9A8 1px, transparent 1px),
//               linear-gradient(90deg, #DCC9A8 1px, transparent 1px)
//             `,
//             backgroundSize: "50px 50px",
//           }}
//         />

//         {/* Dark overlays */}

//         <div className="absolute inset-0 bg-[#11100F]/75" />

//         <div className="absolute inset-0 bg-gradient-to-b from-[#11100F]/30 via-transparent to-[#11100F]" />

//         {/* Decorative circles */}

//         <div className="pointer-events-none absolute -right-48 top-20 h-[600px] w-[600px] rounded-full border border-[#DCC9A8]/10" />

//         <div className="pointer-events-none absolute -right-28 top-40 h-[350px] w-[350px] rounded-full border border-[#DCC9A8]/10" />

//         {/* ==================================================
//             ANIMATED BUILDING
//         ================================================== */}

//         <div className="absolute inset-0 flex items-center justify-center px-6 pt-24">
//           <div className="relative h-[390px] w-full max-w-5xl md:h-[500px]">
//             {/* Floor */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scaleX: 0.4,
//               }}
//               animate={{
//                 opacity: buildStep >= 1 ? 0.9 : 0.12,
//                 scaleX: buildStep >= 1 ? 1 : 0.4,
//               }}
//               transition={{
//                 duration: 0.9,
//                 ease: "easeOut",
//               }}
//               className="
//                 absolute
//                 bottom-10
//                 left-1/2
//                 h-px
//                 w-[85%]
//                 -translate-x-1/2
//                 bg-[#DCC9A8]
//                 shadow-[0_0_20px_rgba(220,201,168,0.35)]
//               "
//             />

//             {/* Back wall */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scaleY: 0,
//               }}
//               animate={{
//                 opacity: buildStep >= 1 ? 0.8 : 0,
//                 scaleY: buildStep >= 1 ? 1 : 0,
//               }}
//               transition={{
//                 duration: 0.9,
//                 ease: "easeOut",
//               }}
//               className="
//                 absolute
//                 bottom-10
//                 left-1/2
//                 h-[72%]
//                 w-[68%]
//                 -translate-x-1/2
//                 origin-bottom
//                 border-x
//                 border-t
//                 border-[#DCC9A8]/50
//               "
//             />

//             {/* Left wall */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 80,
//               }}
//               animate={{
//                 opacity: buildStep >= 1 ? 0.7 : 0,
//                 x: buildStep >= 1 ? 0 : 80,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.15,
//                 ease: "easeOut",
//               }}
//               className="
//                 absolute
//                 bottom-10
//                 left-[16%]
//                 h-[72%]
//                 w-px
//                 bg-[#DCC9A8]/60
//               "
//             />

//             {/* Right wall */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -80,
//               }}
//               animate={{
//                 opacity: buildStep >= 1 ? 0.7 : 0,
//                 x: buildStep >= 1 ? 0 : -80,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.15,
//                 ease: "easeOut",
//               }}
//               className="
//                 absolute
//                 bottom-10
//                 right-[16%]
//                 h-[72%]
//                 w-px
//                 bg-[#DCC9A8]/60
//               "
//             />

//             {/* Window */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.7,
//               }}
//               animate={{
//                 opacity: buildStep >= 2 ? 0.8 : 0,
//                 scale: buildStep >= 2 ? 1 : 0.7,
//               }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//               }}
//               className="
//                 absolute
//                 left-1/2
//                 top-[22%]
//                 h-[32%]
//                 w-[30%]
//                 -translate-x-1/2
//                 border
//                 border-[#DCC9A8]/60
//               "
//             >
//               <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#DCC9A8]/40" />

//               <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#DCC9A8]/40" />
//             </motion.div>

//             {/* Floor material */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.6,
//               }}
//               animate={{
//                 opacity: buildStep >= 2 ? 0.65 : 0,
//                 scale: buildStep >= 2 ? 1 : 0.6,
//               }}
//               transition={{
//                 duration: 0.8,
//                 ease: "easeOut",
//               }}
//               className="
//                 absolute
//                 bottom-10
//                 left-1/2
//                 h-[25%]
//                 w-[68%]
//                 -translate-x-1/2
//                 bg-gradient-to-t
//                 from-[#DCC9A8]/15
//                 to-transparent
//               "
//             />

//             {/* Sofa */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 70,
//               }}
//               animate={{
//                 opacity: buildStep >= 3 ? 1 : 0,
//                 y: buildStep >= 3 ? 0 : 70,
//               }}
//               transition={{
//                 duration: 0.9,
//                 ease: "easeOut",
//               }}
//               className="absolute bottom-[20%] left-[27%] w-[38%]"
//             >
//               <div className="h-12 rounded-t-xl border border-[#DCC9A8]/50 bg-[#DCC9A8]/10 md:h-16" />

//               <div className="mx-2 h-5 border-x border-b border-[#DCC9A8]/40 bg-[#DCC9A8]/5" />

//               <div className="flex justify-between px-2">
//                 <span className="h-8 w-px bg-[#DCC9A8]/50" />
//                 <span className="h-8 w-px bg-[#DCC9A8]/50" />
//               </div>
//             </motion.div>

//             {/* Table */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 50,
//               }}
//               animate={{
//                 opacity: buildStep >= 3 ? 0.9 : 0,
//                 y: buildStep >= 3 ? 0 : 50,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.15,
//                 ease: "easeOut",
//               }}
//               className="absolute bottom-[18%] right-[27%] w-[16%]"
//             >
//               <div className="h-2 rounded-full border border-[#DCC9A8]/50 bg-[#DCC9A8]/10" />

//               <div className="mx-auto h-16 w-px bg-[#DCC9A8]/50" />
//             </motion.div>

//             {/* Lamp */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: -30,
//               }}
//               animate={{
//                 opacity: buildStep >= 4 ? 1 : 0,
//                 y: buildStep >= 4 ? 0 : -30,
//               }}
//               transition={{
//                 duration: 0.7,
//                 ease: "easeOut",
//               }}
//               className="absolute bottom-[25%] right-[18%]"
//             >
//               <div className="mx-auto h-16 w-px bg-[#DCC9A8]/60" />

//               <div className="h-7 w-14 rounded-t-full border border-[#DCC9A8]/60 bg-[#DCC9A8]/10" />

//               <div className="absolute left-1/2 top-5 h-20 w-20 -translate-x-1/2 rounded-full bg-[#DCC9A8]/10 blur-xl" />
//             </motion.div>

//             {/* Plants / decorative object */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.5,
//               }}
//               animate={{
//                 opacity: buildStep >= 4 ? 0.8 : 0,
//                 scale: buildStep >= 4 ? 1 : 0.5,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.15,
//                 ease: "easeOut",
//               }}
//               className="absolute bottom-[18%] left-[20%]"
//             >
//               <div className="mx-auto h-16 w-1 bg-[#DCC9A8]/40" />

//               <div className="absolute -left-4 top-0 h-8 w-8 rounded-full border border-[#DCC9A8]/40" />

//               <div className="absolute left-1 top-4 h-7 w-7 rounded-full border border-[#DCC9A8]/30" />
//             </motion.div>

//             {/* Final glow */}

//             <motion.div
//               animate={{
//                 opacity: buildStep === 5 ? 1 : 0,
//               }}
//               transition={{
//                 duration: 1.2,
//               }}
//               className="
//                 absolute
//                 left-1/2
//                 top-1/2
//                 h-[300px]
//                 w-[500px]
//                 -translate-x-1/2
//                 -translate-y-1/2
//                 rounded-full
//                 bg-[#DCC9A8]/10
//                 blur-[100px]
//               "
//             />
//           </div>
//         </div>

//         {/* ==================================================
//             HERO TEXT
//         ================================================== */}

//         <div className="relative z-20 flex min-h-screen items-end px-6 pb-12 sm:px-10 md:px-16 lg:px-24 lg:pb-16">
//           <div className="mx-auto w-full max-w-7xl">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={stagger}
//             >
//               <motion.div
//                 variants={fadeUp}
//                 className="mb-5 flex items-center gap-4"
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
//                   What We Do
//                 </span>
//               </motion.div>

//               <motion.h1
//                 variants={fadeUp}
//                 className="
//                   max-w-5xl
//                   font-[family-name:var(--font-cormorant)]
//                   text-[4.3rem]
//                   font-medium
//                   leading-[0.78]
//                   tracking-[-0.035em]
//                   text-white
//                   sm:text-[6rem]
//                   md:text-[8rem]
//                   lg:text-[9.5rem]
//                 "
//               >
//                 From space
//                 <br />
//                 <span className="italic text-[#DCC9A8]">
//                   to experience.
//                 </span>
//               </motion.h1>

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
//                     text-white/80
//                     md:text-base
//                   "
//                 >
//                   We bring together design, materials,
//                   furniture, lighting and execution to create
//                   interiors that feel complete.
//                 </p>

//                 {/* Step indicator */}

//                 <div className="min-w-[240px]">
//                   <div className="mb-3 flex items-center justify-between">
//                     <span
//                       className="
//                         font-[family-name:var(--font-montserrat)]
//                         text-xs
//                         font-semibold
//                         uppercase
//                         tracking-[0.25em]
//                         text-white/70
//                       "
//                     >
//                       Building a space
//                     </span>

//                     <span
//                       className="
//                         font-[family-name:var(--font-cormorant)]
//                         text-xl
//                         text-[#DCC9A8]
//                       "
//                     >
//                       0{buildStep + 1}
//                     </span>
//                   </div>

//                   <div className="h-px w-full bg-white/15">
//                     <motion.div
//                       animate={{
//                         width: `${((buildStep + 1) / 6) * 100}%`,
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         ease: "easeOut",
//                       }}
//                       className="h-px bg-[#DCC9A8]"
//                     />
//                   </div>

//                   <p
//                     className="
//                       mt-3
//                       font-[family-name:var(--font-montserrat)]
//                       text-xs
//                       font-semibold
//                       uppercase
//                       tracking-[0.25em]
//                       text-white/70
//                     "
//                   >
//                     {steps[buildStep]}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Side label */}

//         <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 rotate-90 md:block lg:right-10">
//           <span
//             className="
//               font-[family-name:var(--font-montserrat)]
//               text-xs
//               font-semibold
//               uppercase
//               tracking-[0.35em]
//               text-white/60
//             "
//           >
//             Design · Detail · Living
//           </span>
//         </div>
//       </section>

//       {/* ======================================================
//           INTRO
//       ====================================================== */}

//       <section className="bg-[#F7F4EE] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           variants={stagger}
//           className="mx-auto max-w-7xl"
//         >
//           <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
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
//                 Our Services
//               </p>

//               <div className="mt-6 h-px w-14 bg-[#231F20]/20" />
//             </motion.div>

//             <motion.div variants={fadeUp}>
//               <h2
//                 className="
//                   max-w-5xl
//                   font-[family-name:var(--font-cormorant)]
//                   text-5xl
//                   font-medium
//                   leading-[0.88]
//                   text-[#231F20]
//                   sm:text-6xl
//                   md:text-7xl
//                 "
//               >
//                 Everything a space
//                 <br />
//                 <span className="italic text-[#8F9A9B]">
//                   needs to become complete.
//                 </span>
//               </h2>

//               <p
//                 className="
//                   mt-9
//                   max-w-2xl
//                   font-[family-name:var(--font-montserrat)]
//                   text-sm
//                   font-medium
//                   leading-[2.1]
//                   text-[#514d45]
//                   md:text-base
//                 "
//               >
//                 From the first sketch to the smallest
//                 finishing detail, ASANG provides a considered
//                 design approach across the entire journey of
//                 a project.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ======================================================
//           SERVICES LIST
//       ====================================================== */}

//       <section className="bg-[#EAE4D9] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="border-t border-[#231F20]/15">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.number}
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.12,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.03,
//                   ease: "easeOut",
//                 }}
//                 className="
//                   group
//                   border-b
//                   border-[#231F20]/15
//                   py-9
//                   md:py-12
//                 "
//               >
//                 <div className="grid gap-7 md:grid-cols-[0.15fr_0.65fr_1fr] md:items-start">
//                   {/* Number */}

//                   <span
//                     className="
//                       font-[family-name:var(--font-montserrat)]
//                       text-xs
//                       font-semibold
//                       tracking-[0.25em]
//                       text-[#8F9A9B]
//                     "
//                   >
//                     {service.number}
//                   </span>

//                   {/* Title */}

//                   <div>
//                     <h3
//                       className="
//                         font-[family-name:var(--font-cormorant)]
//                         text-4xl
//                         font-medium
//                         leading-none
//                         text-[#231F20]
//                         transition-transform
//                         duration-500
//                         group-hover:translate-x-2
//                         sm:text-5xl
//                       "
//                     >
//                       {service.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-3
//                         font-[family-name:var(--font-montserrat)]
//                         text-sm
//                         font-semibold
//                         uppercase
//                         tracking-[0.12em]
//                         text-[#8F9A9B]
//                       "
//                     >
//                       {service.short}
//                     </p>
//                   </div>

//                   {/* Description */}

//                   <div>
//                     <p
//                       className="
//                         max-w-xl
//                         font-[family-name:var(--font-montserrat)]
//                         text-sm
//                         font-medium
//                         leading-[1.9]
//                         text-[#514d45]
//                         md:text-base
//                       "
//                     >
//                       {service.description}
//                     </p>

//                     <div className="mt-6 flex flex-wrap gap-2">
//                       {service.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="
//                             rounded-full
//                             border
//                             border-[#231F20]/20
//                             px-4
//                             py-2
//                             font-[family-name:var(--font-montserrat)]
//                             text-xs
//                             font-semibold
//                             uppercase
//                             tracking-[0.14em]
//                             text-[#777168]
//                             transition-colors
//                             duration-300
//                             group-hover:border-[#231F20]/40
//                           "
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======================================================
//           DESIGN PROCESS
//       ====================================================== */}

//       <section className="bg-[#231F20] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             variants={stagger}
//           >
//             <motion.div variants={fadeUp}>
//               <div className="flex items-center gap-4">
//                 <span className="h-px w-10 bg-[#DCC9A8]" />

//                 <span
//                   className="
//                     font-[family-name:var(--font-montserrat)]
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-[0.35em]
//                     text-[#DCC9A8]
//                     md:text-sm
//                   "
//                 >
//                   How We Work
//                 </span>
//               </div>

//               <h2
//                 className="
//                   mt-7
//                   max-w-4xl
//                   font-[family-name:var(--font-cormorant)]
//                   text-5xl
//                   font-medium
//                   leading-[0.88]
//                   text-[#F7F4EE]
//                   sm:text-6xl
//                   md:text-7xl
//                 "
//               >
//                 From the first idea
//                 <br />
//                 <span className="italic text-[#DCC9A8]">
//                   to the final detail.
//                 </span>
//               </h2>
//             </motion.div>

//             {/* Process */}

//             <div className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-5">
//               <ProcessItem
//                 number="01"
//                 title="Discover"
//                 text="We understand your needs, lifestyle, space and aspirations."
//               />

//               <ProcessItem
//                 number="02"
//                 title="Concept"
//                 text="Ideas become a visual direction through layouts, mood and material."
//               />

//               <ProcessItem
//                 number="03"
//                 title="Design"
//                 text="We develop the details, furniture, lighting and complete interior."
//               />

//               <ProcessItem
//                 number="04"
//                 title="Execute"
//                 text="Design moves from drawings and visuals into the physical space."
//               />

//               <ProcessItem
//                 number="05"
//                 title="Complete"
//                 text="Every detail comes together to create the finished experience."
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ======================================================
//           PROJECT TYPES
//       ====================================================== */}

//       <section className="bg-[#F7F4EE] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
//             {/* Image */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.96,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.2,
//               }}
//               transition={{
//                 duration: 0.9,
//                 ease: "easeOut",
//               }}
//               className="relative aspect-[4/5] overflow-hidden"
//             >
//               <Image
//                 src={IMAGES.residential}
//                 alt="ASANG residential interior"
//                 fill
//                 quality={75}
//                 sizes="(max-width: 1024px) 100vw, 40vw"
//                 className="object-cover transition-transform duration-[1.5s] hover:scale-[1.025]"
//               />

//               <div className="absolute inset-0 bg-black/10" />

//               <div className="absolute bottom-6 left-6">
//                 <span
//                   className="
//                     font-[family-name:var(--font-montserrat)]
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-[0.3em]
//                     text-white/90
//                   "
//                 >
//                   Spaces We Design
//                 </span>
//               </div>
//             </motion.div>

//             {/* Types */}

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{
//                 once: true,
//                 amount: 0.2,
//               }}
//               variants={stagger}
//             >
//               {/* <motion.p
//                 variants={fadeUp}
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
//                 Project Types
//               </p> */}






//               <motion.p
//                 variants={fadeUp}
//                 className="
//     font-[family-name:var(--font-montserrat)]
//     text-xs
//     font-semibold
//     uppercase
//     tracking-[0.35em]
//     text-[#8F9A9B]
//     md:text-sm
//   "
//               >
//                 Project Types
//               </motion.p>

//               <motion.h2
//                 variants={fadeUp}
//                 className="
//                   mt-6
//                   font-[family-name:var(--font-cormorant)]
//                   text-5xl
//                   font-medium
//                   leading-[0.88]
//                   text-[#231F20]
//                   sm:text-6xl
//                   md:text-7xl
//                 "
//               >
//                 Different spaces.
//                 <br />
//                 <span className="italic text-[#8F9A9B]">
//                   Same attention.
//                 </span>
//               </motion.h2>

//               <div className="mt-12 border-t border-[#231F20]/20">
//                 {projectTypes.map((type) => (
//                   <motion.div
//                     key={type.number}
//                     variants={fadeUp}
//                     className="
//                       grid
//                       gap-4
//                       border-b
//                       border-[#231F20]/15
//                       py-7
//                       sm:grid-cols-[80px_1fr]
//                     "
//                   >
//                     <span
//                       className="
//                         font-[family-name:var(--font-montserrat)]
//                         text-xs
//                         font-semibold
//                         tracking-[0.2em]
//                         text-[#8F9A9B]
//                       "
//                     >
//                       {type.number}
//                     </span>

//                     <div>
//                       <h3
//                         className="
//                           font-[family-name:var(--font-cormorant)]
//                           text-3xl
//                           font-medium
//                           text-[#231F20]
//                         "
//                       >
//                         {type.title}
//                       </h3>

//                       <p
//                         className="
//                           mt-2
//                           max-w-lg
//                           font-[family-name:var(--font-montserrat)]
//                           text-sm
//                           font-medium
//                           leading-[1.8]
//                           text-[#514d45]
//                           md:text-base
//                         "
//                       >
//                         {type.text}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ======================================================
//           WHAT YOU GET
//       ====================================================== */}

//       <section className="bg-[#EAE4D9] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             variants={stagger}
//           >
//             <motion.div
//               variants={fadeUp}
//               className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]"
//             >
//               <div>
//                 <p
//                   className="
//                     font-[family-name:var(--font-montserrat)]
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-[0.35em]
//                     text-[#8F9A9B]
//                     md:text-sm
//                   "
//                 >
//                   The ASANG Approach
//                 </p>
//               </div>

//               <h2
//                 className="
//                   font-[family-name:var(--font-cormorant)]
//                   text-5xl
//                   font-medium
//                   leading-[0.88]
//                   text-[#231F20]
//                   sm:text-6xl
//                   md:text-7xl
//                 "
//               >
//                 More than a design.
//                 <br />
//                 <span className="italic text-[#777168]">
//                   A complete experience.
//                 </span>
//               </h2>
//             </motion.div>

//             <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//               <Benefit
//                 number="01"
//                 title="Personalised Design"
//                 text="Every project begins with understanding you, your space and your way of living."
//               />

//               <Benefit
//                 number="02"
//                 title="Thoughtful Details"
//                 text="We focus on the details that make an interior feel intentional rather than simply decorated."
//               />

//               <Benefit
//                 number="03"
//                 title="Material Direction"
//                 text="A carefully developed material and colour language keeps the entire project cohesive."
//               />

//               <Benefit
//                 number="04"
//                 title="Visual Clarity"
//                 text="3D visualisation helps you understand the design before major execution decisions are made."
//               />

//               <Benefit
//                 number="05"
//                 title="Functional Spaces"
//                 text="Beauty is balanced with storage, movement, usability and the realities of everyday life."
//               />

//               <Benefit
//                 number="06"
//                 title="Design Continuity"
//                 text="From concept to execution, we work to keep the original design intent intact."
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ======================================================
//           STATEMENT
//       ====================================================== */}

//       <section className="relative overflow-hidden bg-[#231F20] px-6 py-28 sm:px-10 md:px-16 md:py-36 lg:px-24">
//         <div className="absolute inset-0">
//           <Image
//             src={IMAGES.detail}
//             alt=""
//             fill
//             quality={70}
//             sizes="100vw"
//             className="object-cover opacity-30"
//           />

//           <div className="absolute inset-0 bg-[#231F20]/80" />
//         </div>

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//           }}
//           className="relative z-10 mx-auto max-w-6xl text-center"
//         >
//           <p
//             className="
//               font-[family-name:var(--font-montserrat)]
//               text-xs
//               font-semibold
//               uppercase
//               tracking-[0.4em]
//               text-[#DCC9A8]
//               md:text-sm
//             "
//           >
//             Our Belief
//           </p>

//           <h2
//             className="
//               mt-8
//               font-[family-name:var(--font-cormorant)]
//               text-5xl
//               font-medium
//               leading-[0.9]
//               text-[#F7F4EE]
//               sm:text-6xl
//               md:text-8xl
//             "
//           >
//             A beautiful space
//             <br />
//             <span className="italic text-[#DCC9A8]">
//               should also feel right.
//             </span>
//           </h2>

//           <p
//             className="
//               mx-auto
//               mt-8
//               max-w-2xl
//               font-[family-name:var(--font-montserrat)]
//               text-sm
//               font-medium
//               leading-[2]
//               text-white/80
//               md:text-base
//             "
//           >
//             We design interiors that are visually refined,
//             functionally considered and deeply connected to
//             the people who inhabit them.
//           </p>
//         </motion.div>
//       </section>

//       {/* ======================================================
//           CTA
//       ====================================================== */}

//       <section className="bg-[#DCC9A8] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 0.9,
//             ease: "easeOut",
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
//                 Start Your Project
//               </p>

//               <h2
//                 className="
//                   max-w-5xl
//                   font-[family-name:var(--font-cormorant)]
//                   text-6xl
//                   font-medium
//                   leading-[0.8]
//                   tracking-[-0.025em]
//                   text-[#231F20]
//                   sm:text-7xl
//                   md:text-8xl
//                 "
//               >
//                 Have a space
//                 <br />
//                 <span className="italic">
//                   waiting to happen?
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
//                   text-[#514d45]
//                   md:text-base
//                 "
//               >
//                 Tell us about your project and let's explore
//                 what we can create together.
//               </p>
//             </div>

//             <Link
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
//                 Discuss Your Project
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
//             </Link>
//           </div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }

// // ============================================================
// // PROCESS ITEM
// // ============================================================

// function ProcessItem({
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
//       variants={fadeUp}
//       className="
//         border-b
//         border-white/20
//         px-0
//         py-8
//         sm:px-6
//         lg:border-b-0
//         lg:border-r
//         lg:px-7
//         lg:py-0
//         first:lg:pl-0
//         last:lg:border-r-0
//         last:lg:pr-0
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
//           mt-6
//           font-[family-name:var(--font-cormorant)]
//           text-3xl
//           font-medium
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
//           text-white/80
//         "
//       >
//         {text}
//       </p>
//     </motion.div>
//   );
// }

// // ============================================================
// // BENEFIT
// // ============================================================

// function Benefit({
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
//       variants={fadeUp}
//       className="
//         group
//         border-t
//         border-[#231F20]/20
//         pt-6
//       "
//     >
//       <div className="flex items-center justify-between">
//         <span
//           className="
//             font-[family-name:var(--font-montserrat)]
//             text-xs
//             font-semibold
//             tracking-[0.2em]
//             text-[#8F9A9B]
//           "
//         >
//           {number}
//         </span>

//         <span className="h-px w-8 bg-[#231F20]/20 transition-all duration-500 group-hover:w-14 group-hover:bg-[#231F20]/50" />
//       </div>

//       <h3
//         className="
//           mt-8
//           font-[family-name:var(--font-cormorant)]
//           text-3xl
//           font-medium
//           text-[#231F20]
//         "
//       >
//         {title}
//       </h3>

//       <p
//         className="
//           mt-3
//           max-w-sm
//           font-[family-name:var(--font-montserrat)]
//           text-sm
//           font-medium
//           leading-[1.9]
//           text-[#514d45]
//           md:text-base
//         "
//       >
//         {text}
//       </p>
//     </motion.div>
//   );
// }





















"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

// ============================================================
// FONTS
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

// ============================================================
// IMAGES
// ============================================================

const IMAGES = {
  hero:        "/images/Projects/image1.jpg",
  residential: "/images/Projects/image4.jpg",
  material:    "/images/Projects/image8.jpg",
  detail:      "/images/Projects/image15.jpg",
  final:       "/images/Projects/image20.jpg",
};

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const wordReveal: Variants = {
  hidden:  { clipPath: "inset(100% 0% 0% 0%)", y: 30, opacity: 0 },
  visible: (i: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ============================================================
// DATA — SERVICES
// ============================================================

const services = [
  {
    number: "01",
    title: "Interior Design",
    short: "Complete interior design from concept to final space.",
    description:
      "We develop interiors around the people who use them. Every project is carefully considered through space planning, materiality, proportion, colour, furniture and lighting.",
    tags: ["Concept Design", "Space Planning", "Interior Styling", "Material Palette"],
  },
  {
    number: "02",
    title: "Space Planning",
    short: "Making every square foot work beautifully.",
    description:
      "We study movement, functionality, proportions and everyday routines to create layouts that feel natural while making the most of the available space.",
    tags: ["Layout Planning", "Furniture Planning", "Circulation", "Zoning"],
  },
  {
    number: "03",
    title: "3D Visualization",
    short: "See your space before it becomes reality.",
    description:
      "Our visualisation process helps you understand the proposed space through detailed 3D views, materials, furniture, lighting and atmosphere before execution begins.",
    tags: ["3D Views", "Design Visualization", "Material Visualization", "Lighting Studies"],
  },
  {
    number: "04",
    title: "Material & Finishes",
    short: "A considered palette of textures and materials.",
    description:
      "From flooring and stone to wood, fabrics, paint and surfaces, we curate materials that create a cohesive visual language and lasting character.",
    tags: ["Material Selection", "Textures", "Surface Finishes", "Colour Palette"],
  },
  {
    number: "05",
    title: "Custom Furniture",
    short: "Furniture designed specifically for your space.",
    description:
      "We design custom furniture pieces that respond to the architecture, proportions and lifestyle of each project.",
    tags: ["Custom Furniture", "Built-ins", "Storage", "Joinery"],
  },
  {
    number: "06",
    title: "Lighting Design",
    short: "Light that shapes mood and atmosphere.",
    description:
      "We carefully consider ambient, task and accent lighting to create spaces that transform throughout the day.",
    tags: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Lighting Layout"],
  },
  {
    number: "07",
    title: "Execution Support",
    short: "Design translated carefully into the real world.",
    description:
      "We coordinate design intent with on-site requirements, helping ensure that materials, details, proportions and finishes remain aligned with the approved design.",
    tags: ["Site Coordination", "Design Supervision", "Detail Checks", "Execution Support"],
  },
  {
    number: "08",
    title: "Renovation & Transformation",
    short: "Giving existing spaces a new identity.",
    description:
      "We reimagine existing interiors through strategic planning, new materials, furniture, lighting and spatial improvements.",
    tags: ["Renovation", "Space Transformation", "Restyling", "Upgrades"],
  },
];

// ============================================================
// DATA — PROJECT TYPES
// ============================================================

const projectTypes = [
  {
    number: "01",
    title: "Residential",
    text: "Homes, apartments, villas and private residences designed around the way you live.",
  },
  {
    number: "02",
    title: "Commercial",
    text: "Workspaces, offices, retail environments and commercial interiors built around identity and function.",
  },
  {
    number: "03",
    title: "Hospitality",
    text: "Hotels, service apartments, restaurants and guest spaces designed to create memorable experiences.",
  },
  {
    number: "04",
    title: "Special Projects",
    text: "Unique spaces that require a tailored design approach, from concept through completion.",
  },
];

// ============================================================
// PAGE
// ============================================================

export default function ServicesPage() {
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
      <ServicesHero />
      <IntroSection />
      <ServicesListSection />
      <DesignProcessSection />
      <ProjectTypesSection />
      <BenefitsSection />
      <StatementSection />
      <CTASection />
    </main>
  );
}

// ============================================================
// 1. HERO — KINETIC SPLIT SCREEN
// ============================================================

function ServicesHero() {
  const [mousePos, setMousePos]           = useState({ x: 0, y: 0 });
  const [cycleWord, setCycleWord]         = useState(0);
  const [countersStarted, setCounters]    = useState(false);

  const cycleWords  = ["Space.", "Light.", "Form.", "Soul."];
  const marqueeText = [
    "Interior Design", "·", "Space Planning", "·",
    "3D Visualization", "·", "Material & Finishes", "·",
    "Custom Furniture", "·", "Lighting Design", "·",
    "Execution Support", "·", "Renovation", "·",
  ];
  const stats = [
    { value: 120, suffix: "+",   label: "Projects Delivered"  },
    { value: 8,   suffix: " yrs", label: "Studio Experience"   },
    { value: 98,  suffix: "%",   label: "Client Satisfaction" },
  ];

  // Rotating word
  useEffect(() => {
    const id = setInterval(() => setCycleWord((p) => (p + 1) % cycleWords.length), 2000);
    return () => clearInterval(id);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth  - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 12,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // Trigger counters
  useEffect(() => {
    const id = setTimeout(() => setCounters(true), 800);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0E0E0E]">

      {/* ── Blueprint grid ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(#DCC9A8 1px, transparent 1px),
            linear-gradient(90deg, #DCC9A8 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Parallax image — right half ── */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="absolute right-0 top-0 z-0 h-full w-full md:w-[55%]"
      >
        <Image
          src={IMAGES.hero}
          alt="ASANG interior"
          fill
          priority
          quality={80}
          className="object-cover scale-[1.08]"
        />
        {/* Bleed into dark left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/70 to-transparent md:via-[#0E0E0E]/30" />
        <div className="absolute inset-0 bg-black/25" />
      </motion.div>

      {/* ── Thin vertical divider ── */}
      <motion.div
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[45%] top-0 z-10 hidden h-full w-px bg-white/5 md:block"
      />

      {/* ── Main content ── */}
      <div className="relative z-20 flex min-h-screen flex-col justify-between px-6 py-12 sm:px-10 md:px-16 lg:px-24">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#DCC9A8]" />
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.4em] text-[#DCC9A8]">
              What We Do
            </span>
          </div>
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.3em] text-white/20">
            ASANG Studio
          </span>
        </motion.div>

        {/* Headline block */}
        <div className="mt-auto max-w-2xl">

          {/* Cycling word — slides up/down */}
          <div className="mb-5 h-9 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={cycleWord}
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0,  opacity: 1 }}
                exit={{   y: -36, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block font-[family-name:var(--font-cormorant)] text-2xl italic text-[#DCC9A8] md:text-3xl"
              >
                {cycleWords[cycleWord]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Word-by-word clip reveal */}
          <motion.div initial="hidden" animate="visible" className="overflow-hidden">
            {["From", "space", "to"].map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={wordReveal}
                className="mr-4 inline-block font-[family-name:var(--font-cormorant)] text-[14vw] font-medium leading-[0.82] text-white md:text-[8.5vw] lg:text-[7.5vw]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              custom={3}
              variants={wordReveal}
              className="inline-block font-[family-name:var(--font-cormorant)] text-[14vw] font-medium italic leading-[0.82] text-[#DCC9A8] md:text-[8.5vw] lg:text-[7.5vw]"
            >
              experience.
            </motion.span>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 h-px w-full bg-white/10"
          />

          {/* Sub copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-xs font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[2] text-white/50">
              We bring together design, materials, furniture,
              lighting and execution to create interiors that
              feel complete.
            </p>
            <Link
              href="/contact"
              className="group relative flex w-fit items-center gap-4 overflow-hidden rounded-full border border-white/15 px-7 py-4"
            >
              <span className="relative z-10 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-300 group-hover:text-[#0E0E0E]">
                Start a Project
              </span>
              <div className="absolute inset-0 -translate-y-full bg-[#DCC9A8] transition-transform duration-500 ease-out group-hover:translate-y-0" />
            </Link>
          </motion.div>
        </div>

        {/* Stat counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                started={countersStarted}
                delay={i * 0.2}
              />
              <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.25em] text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Marquee strip ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-white/5 bg-[#DCC9A8]/5 py-3 backdrop-blur-sm">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-8 whitespace-nowrap"
        >
          {[...marqueeText, ...marqueeText].map((word, i) => (
            <span
              key={i}
              className={`font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.3em] ${
                word === "·" ? "text-[#DCC9A8]" : "text-white/30"
              }`}
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Right vertical label ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 rotate-90 md:block lg:right-10"
      >
        <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.4em] text-white/20">
          Design · Detail · Living
        </span>
      </motion.div>
    </section>
  );
}

// ============================================================
// COUNT UP
// ============================================================

function CountUp({
  target,
  suffix,
  started,
  delay,
}: {
  target: number;
  suffix: string;
  started: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      let current = 0;
      const duration  = 1800;
      const step      = 16;
      const increment = target / (duration / step);
      const id = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(id);
        } else {
          setCount(Math.floor(current));
        }
      }, step);
      return () => clearInterval(id);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [started, target, delay]);

  return (
    <span className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-white md:text-4xl">
      {count}
      <span className="text-[#DCC9A8]">{suffix}</span>
    </span>
  );
}

// ============================================================
// 2. INTRO
// ============================================================

function IntroSection() {
  return (
    <section className="bg-[#F7F4EE] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
          <motion.div variants={fadeUp}>
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.35em] text-[#8F9A9B] md:text-sm">
              Our Services
            </p>
            <div className="mt-6 h-px w-14 bg-[#231F20]/20" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="max-w-5xl font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.88] text-[#231F20] sm:text-6xl md:text-7xl">
              Everything a space
              <br />
              <span className="italic text-[#8F9A9B]">
                needs to become complete.
              </span>
            </h2>
            <p className="mt-9 max-w-2xl font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[2.1] text-[#514d45] md:text-base">
              From the first sketch to the smallest finishing detail, ASANG
              provides a considered design approach across the entire journey
              of a project.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================
// 3. SERVICES LIST
// ============================================================

function ServicesListSection() {
  return (
    <section className="bg-[#EAE4D9] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-[#231F20]/15">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.7, delay: index * 0.03, ease: "easeOut" }}
              className="group border-b border-[#231F20]/15 py-9 md:py-12"
            >
              <div className="grid gap-7 md:grid-cols-[0.15fr_0.65fr_1fr] md:items-start">
                <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.25em] text-[#8F9A9B]">
                  {service.number}
                </span>

                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-none text-[#231F20] transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.12em] text-[#8F9A9B]">
                    {service.short}
                  </p>
                </div>

                <div>
                  <p className="max-w-xl font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[1.9] text-[#514d45] md:text-base">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#231F20]/20 px-4 py-2 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.14em] text-[#777168] transition-colors duration-300 group-hover:border-[#231F20]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 4. DESIGN PROCESS
// ============================================================

function DesignProcessSection() {
  return (
    <section className="bg-[#231F20] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#DCC9A8]" />
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.35em] text-[#DCC9A8] md:text-sm">
                How We Work
              </span>
            </div>
            <h2 className="mt-7 max-w-4xl font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.88] text-[#F7F4EE] sm:text-6xl md:text-7xl">
              From the first idea
              <br />
              <span className="italic text-[#DCC9A8]">to the final detail.</span>
            </h2>
          </motion.div>

          <div className="mt-20 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { number: "01", title: "Discover", text: "We understand your needs, lifestyle, space and aspirations." },
              { number: "02", title: "Concept",  text: "Ideas become a visual direction through layouts, mood and material." },
              { number: "03", title: "Design",   text: "We develop the details, furniture, lighting and complete interior." },
              { number: "04", title: "Execute",  text: "Design moves from drawings and visuals into the physical space." },
              { number: "05", title: "Complete", text: "Every detail comes together to create the finished experience." },
            ].map((item) => (
              <ProcessItem key={item.number} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// 5. PROJECT TYPES
// ============================================================

function ProjectTypesSection() {
  return (
    <section className="bg-[#F7F4EE] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={IMAGES.residential}
              alt="ASANG residential interior"
              fill
              quality={75}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-[1.5s] hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 left-6">
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                Spaces We Design
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.35em] text-[#8F9A9B] md:text-sm"
            >
              Project Types
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-6 font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.88] text-[#231F20] sm:text-6xl md:text-7xl"
            >
              Different spaces.
              <br />
              <span className="italic text-[#8F9A9B]">Same attention.</span>
            </motion.h2>

            <div className="mt-12 border-t border-[#231F20]/20">
              {projectTypes.map((type) => (
                <motion.div
                  key={type.number}
                  variants={fadeUp}
                  className="grid gap-4 border-b border-[#231F20]/15 py-7 sm:grid-cols-[80px_1fr]"
                >
                  <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] text-[#8F9A9B]">
                    {type.number}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#231F20]">
                      {type.title}
                    </h3>
                    <p className="mt-2 max-w-lg font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[1.8] text-[#514d45] md:text-base">
                      {type.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// 6. BENEFITS
// ============================================================

function BenefitsSection() {
  return (
    <section className="bg-[#EAE4D9] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]"
          >
            <div>
              <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.35em] text-[#8F9A9B] md:text-sm">
                The ASANG Approach
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.88] text-[#231F20] sm:text-6xl md:text-7xl">
              More than a design.
              <br />
              <span className="italic text-[#777168]">A complete experience.</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { number: "01", title: "Personalised Design",  text: "Every project begins with understanding you, your space and your way of living." },
              { number: "02", title: "Thoughtful Details",   text: "We focus on the details that make an interior feel intentional rather than simply decorated." },
              { number: "03", title: "Material Direction",   text: "A carefully developed material and colour language keeps the entire project cohesive." },
              { number: "04", title: "Visual Clarity",       text: "3D visualisation helps you understand the design before major execution decisions are made." },
              { number: "05", title: "Functional Spaces",    text: "Beauty is balanced with storage, movement, usability and the realities of everyday life." },
              { number: "06", title: "Design Continuity",    text: "From concept to execution, we work to keep the original design intent intact." },
            ].map((b) => (
              <Benefit key={b.number} {...b} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// 7. STATEMENT
// ============================================================

function StatementSection() {
  return (
    <section className="relative overflow-hidden bg-[#231F20] px-6 py-28 sm:px-10 md:px-16 md:py-36 lg:px-24">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.detail}
          alt=""
          fill
          quality={70}
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#231F20]/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >
        <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.4em] text-[#DCC9A8] md:text-sm">
          Our Belief
        </p>
        <h2 className="mt-8 font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[0.9] text-[#F7F4EE] sm:text-6xl md:text-8xl">
          A beautiful space
          <br />
          <span className="italic text-[#DCC9A8]">should also feel right.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[2] text-white/80 md:text-base">
          We design interiors that are visually refined, functionally considered
          and deeply connected to the people who inhabit them.
        </p>
      </motion.div>
    </section>
  );
}

// ============================================================
// 8. CTA
// ============================================================

function CTASection() {
  return (
    <section className="bg-[#DCC9A8] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto max-w-7xl"
      >
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-6 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.35em] text-[#6C665D] md:text-sm">
              Start Your Project
            </p>
            <h2 className="max-w-5xl font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[0.8] tracking-[-0.025em] text-[#231F20] sm:text-7xl md:text-8xl">
              Have a space
              <br />
              <span className="italic">waiting to happen?</span>
            </h2>
            <p className="mt-8 max-w-lg font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[2] text-[#514d45] md:text-base">
              Tell us about your project and let's explore what we can create together.
            </p>
          </div>

          <Link
            href="/contact"
            className="group flex w-fit items-center gap-5 rounded-full border border-[#231F20] px-7 py-4 transition-all duration-500 hover:bg-[#231F20] hover:text-[#F7F4EE]"
          >
            <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm">
              Discuss Your Project
            </span>
            <svg
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14" strokeLinecap="round" />
              <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================
// PROCESS ITEM
// ============================================================

function ProcessItem({
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
      variants={fadeUp}
      className="border-b border-white/20 px-0 py-8 sm:px-6 lg:border-b-0 lg:border-r lg:px-7 lg:py-0 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
    >
      <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] text-[#DCC9A8]">
        {number}
      </span>
      <h3 className="mt-6 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#F7F4EE]">
        {title}
      </h3>
      <p className="mt-3 max-w-xs font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[1.8] text-white/80">
        {text}
      </p>
    </motion.div>
  );
}

// ============================================================
// BENEFIT CARD
// ============================================================

function Benefit({
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
      variants={fadeUp}
      className="group border-t border-[#231F20]/20 pt-6"
    >
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-[0.2em] text-[#8F9A9B]">
          {number}
        </span>
        <span className="h-px w-8 bg-[#231F20]/20 transition-all duration-500 group-hover:w-14 group-hover:bg-[#231F20]/50" />
      </div>
      <h3 className="mt-8 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[#231F20]">
        {title}
      </h3>
      <p className="mt-3 max-w-sm font-[family-name:var(--font-montserrat)] text-sm font-medium leading-[1.9] text-[#514d45] md:text-base">
        {text}
      </p>
    </motion.div>
  );
}