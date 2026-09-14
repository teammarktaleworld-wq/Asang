





// "use client";

// import { motion, type Variants } from "framer-motion";
// import Link from "next/link";
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

// // ============================================================
// // PROJECT DATA
// // ============================================================

// const projectsData = [
//   {
//     id: 1,
//     title: "Apex Tech Park",
//     vertical: "Commercial",
//     category: "Architecture",
//     slug: "apex-tech-park",
//     image:
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1400",
//   },
//   {
//     id: 2,
//     title: "Serene Villa",
//     vertical: "Residential",
//     category: "Interiors",
//     slug: "serene-villa",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=85&w=1400",
//   },
//   {
//     id: 3,
//     title: "Ironclad Facility",
//     vertical: "Industrial",
//     category: "Architecture",
//     slug: "ironclad-facility",
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=85&w=1400",
//   },
//   {
//     id: 4,
//     title: "Urban Workspace",
//     vertical: "Commercial",
//     category: "Interiors",
//     slug: "urban-workspace",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=85&w=1400",
//   },
// ];

// // ============================================================
// // ANIMATION VARIANTS
// // ============================================================

// const headerVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
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

// const containerVariants: Variants = {
//   hidden: {
//     opacity: 0,
//   },

//   visible: {
//     opacity: 1,

//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.15,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
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

// // ============================================================
// // PROJECT CARD
// // ============================================================

// function ProjectCard({
//   project,
//   index,
// }: {
//   project: (typeof projectsData)[number];
//   index: number;
// }) {
//   return (
//     <motion.article
//       variants={itemVariants}
//       className={`
//         group
//         relative
//         overflow-hidden
//         ${
//           index === 0
//             ? "md:col-span-2"
//             : ""
//         }
//       `}
//     >
//       <Link
//         href={`/projects/${project.slug}`}
//         className="block"
//       >
//         {/* ==================================================
//             IMAGE
//             ================================================== */}

//         <div
//           className={`
//             relative
//             overflow-hidden
//             bg-[#2a2825]
//             ${
//               index === 0
//                 ? "aspect-[16/9] md:aspect-[16/8]"
//                 : "aspect-[4/5]"
//             }
//           `}
//         >
//           {/* Image */}

//           <motion.img
//             src={project.image}
//             alt={`${project.title} - ${project.category}`}
//             className="
//               absolute
//               inset-0
//               h-full
//               w-full
//               object-cover
//               transition-transform
//               duration-[1.2s]
//               ease-out
//               group-hover:scale-105
//             "
//             loading={index === 0 ? "eager" : "lazy"}
//           />

//           {/* Dark overlay */}

//           <div
//             className="
//               absolute
//               inset-0
//               bg-gradient-to-t
//               from-black/75
//               via-black/10
//               to-black/5
//               opacity-80
//               transition-opacity
//               duration-700
//               group-hover:opacity-95
//             "
//           />

//           {/* Top gradient */}

//           <div
//             className="
//               absolute
//               inset-x-0
//               top-0
//               h-32
//               bg-gradient-to-b
//               from-black/35
//               to-transparent
//             "
//           />

//           {/* ==================================================
//               PROJECT NUMBER
//               ================================================== */}

//           <div
//             className="
//               absolute
//               left-6
//               top-6
//               z-10
//               flex
//               items-center
//               gap-3
//               sm:left-8
//               sm:top-8
//             "
//           >
//             <span
//               className="
//                 font-[family-name:var(--font-montserrat)]
//                 text-[9px]
//                 font-medium
//                 tracking-[0.25em]
//                 text-white/80
//               "
//             >
//               0{index + 1}
//             </span>

//             <span
//               className="
//                 h-px
//                 w-8
//                 bg-[#c9b58a]/70
//               "
//             />
//           </div>

//           {/* ==================================================
//               CATEGORY
//               ================================================== */}

//           <div
//             className="
//               absolute
//               right-6
//               top-6
//               z-10
//               sm:right-8
//               sm:top-8
//             "
//           >
//             <span
//               className="
//                 rounded-full
//                 border
//                 border-white/30
//                 bg-black/20
//                 px-3
//                 py-1.5
//                 font-[family-name:var(--font-montserrat)]
//                 text-[8px]
//                 font-medium
//                 uppercase
//                 tracking-[0.18em]
//                 text-white
//                 backdrop-blur-md
//               "
//             >
//               {project.category}
//             </span>
//           </div>

//           {/* ==================================================
//               BOTTOM CONTENT
//               ================================================== */}

//           <div
//             className="
//               absolute
//               bottom-0
//               left-0
//               right-0
//               z-10
//               p-6
//               sm:p-8
//             "
//           >
//             {/* Vertical */}

//             <p
//               className="
//                 mb-2
//                 font-[family-name:var(--font-montserrat)]
//                 text-[9px]
//                 font-medium
//                 uppercase
//                 tracking-[0.25em]
//                 text-[#d7c39b]
//               "
//             >
//               {project.vertical}
//             </p>

//             {/* Title */}

//             <div className="flex items-end justify-between gap-5">
//               <h3
//                 className="
//                   font-[family-name:var(--font-cormorant)]
//                   text-3xl
//                   font-medium
//                   leading-none
//                   text-white
//                   sm:text-4xl
//                   md:text-5xl
//                 "
//               >
//                 {project.title}
//               </h3>

//               {/* Arrow */}

//               <div
//                 className="
//                   flex
//                   h-11
//                   w-11
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-white/40
//                   bg-white/5
//                   backdrop-blur-md
//                   transition-all
//                   duration-500
//                   group-hover:border-[#d7c39b]
//                   group-hover:bg-[#d7c39b]
//                 "
//               >
//                 <svg
//                   className="
//                     h-4
//                     w-4
//                     text-white
//                     transition-all
//                     duration-500
//                     group-hover:translate-x-0.5
//                     group-hover:text-[#231f20]
//                   "
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M5 12h14"
//                   />

//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m13 6 6 6-6 6"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.article>
//   );
// }

// // ============================================================
// // MAIN COMPONENT
// // ============================================================

// export default function SelectedProjects() {
//   return (
//     <section
//       className={`
//         ${cormorant.variable}
//         ${montserrat.variable}

//         relative
//         overflow-hidden
//         bg-[#231f20]
//         px-6
//         py-24
//         text-white

//         sm:px-8

//         md:px-12
//         md:py-28

//         lg:px-20
//         lg:py-32
//       `}
//     >
//       {/* ======================================================
//           DECORATIVE BACKGROUND
//           ====================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-40
//           top-20
//           h-[500px]
//           w-[500px]
//           rounded-full
//           border
//           border-[#c9b58a]/5
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-20
//           top-40
//           h-[350px]
//           w-[350px]
//           rounded-full
//           border
//           border-[#c9b58a]/5
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-0
//           top-1/2
//           h-px
//           w-32
//           bg-gradient-to-r
//           from-[#c9b58a]/20
//           to-transparent
//         "
//       />

//       {/* ======================================================
//           CONTAINER
//           ====================================================== */}

//       <div className="relative mx-auto max-w-7xl">
//         {/* ====================================================
//             SECTION HEADER
//             ==================================================== */}

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             margin: "-100px",
//           }}
//           variants={headerVariants}
//           className="
//             mb-16
//             flex
//             flex-col
//             justify-between
//             gap-8

//             md:mb-20
//             md:flex-row
//             md:items-end
//           "
//         >
//           {/* Left */}

//           <div>
//             {/* Eyebrow */}

//             <div
//               className="
//                 mb-5
//                 flex
//                 items-center
//                 gap-4
//               "
//             >
//               <span
//                 className="
//                   h-px
//                   w-10
//                   bg-[#c9b58a]
//                 "
//               />

//               <span
//                 className="
//                   font-[family-name:var(--font-montserrat)]
//                   text-[9px]
//                   font-medium
//                   uppercase
//                   tracking-[0.3em]
//                   text-[#c9b58a]
//                 "
//               >
//                 Selected Works
//               </span>
//             </div>

//             {/* Heading */}

//             <h2
//               className="
//                 max-w-3xl
//                 font-[family-name:var(--font-cormorant)]
//                 text-5xl
//                 font-medium
//                 leading-[0.95]
//                 tracking-tight
//                 text-[#f7f3ea]

//                 sm:text-6xl

//                 md:text-7xl

//                 lg:text-8xl
//               "
//             >
//               Spaces that
//               <br />

//               <span className="italic text-[#c9b58a]">
//                 speak for themselves.
//               </span>
//             </h2>
//           </div>

//           {/* Right */}

//           <div
//             className="
//               max-w-sm
//               border-l
//               border-[#c9b58a]/30
//               pl-6
//               md:mb-2
//               md:pl-8
//             "
//           >
//             <p
//               className="
//                 font-[family-name:var(--font-montserrat)]
//                 text-xs
//                 font-light
//                 leading-[1.9]
//                 tracking-[0.04em]
//                 text-white/55

//                 md:text-sm
//               "
//             >
//               A collection of thoughtfully designed
//               spaces where architecture, interiors,
//               material and emotion come together.
//             </p>
//           </div>
//         </motion.div>

//         {/* ====================================================
//             PROJECT GRID
//             ==================================================== */}

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             margin: "-100px",
//           }}
//           className="
//             grid
//             grid-cols-1
//             gap-5

//             md:grid-cols-2
//             md:gap-6
//           "
//         >
//           {projectsData.map((project, index) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               index={index}
//             />
//           ))}
//         </motion.div>

//         {/* ====================================================
//             BOTTOM CTA
//             ==================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.2,
//           }}
//           className="
//             mt-16
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-7

//             border-t
//             border-white/10
//             pt-10

//             md:flex-row
//             md:pt-12
//           "
//         >
//           {/* Left statement */}

//           <div>
//             <p
//               className="
//                 font-[family-name:var(--font-cormorant)]
//                 text-2xl
//                 italic
//                 text-white/75

//                 md:text-3xl
//               "
//             >
//               Design beyond spaces.
//             </p>

//             <p
//               className="
//                 mt-2
//                 font-[family-name:var(--font-montserrat)]
//                 text-[9px]
//                 uppercase
//                 tracking-[0.25em]
//                 text-white/35
//               "
//             >
//               People • Spaces • Emotions
//             </p>
//           </div>

//           {/* CTA */}

//           <Link
//             href="/portfolio"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-5
//               rounded-full
//               border
//               border-[#c9b58a]/50
//               px-7
//               py-4

//               font-[family-name:var(--font-montserrat)]
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.2em]
//               text-[#e1cfaa]

//               transition-all
//               duration-300

//               hover:border-[#c9b58a]
//               hover:bg-[#c9b58a]
//               hover:text-[#231f20]
//             "
//           >
//             <span>View All Projects</span>

//             <svg
//               className="
//                 h-4
//                 w-4
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1.5
//               "
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M5 12h14"
//               />

//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m13 6 6 6-6 6"
//               />
//             </svg>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }















"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
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

// ============================================================
// PROJECT DATA
// ============================================================
//
// Images are taken directly from:
//
// public/images/Projects/
//

const projectsData = [
  {
    id: 1,
    title: "Service Apartment",
    subtitle: "Living Space",
    vertical: "Residential",
    category: "Interiors",
    slug: "service-apartment",
    image: "/images/Projects/image1.jpg",
  },

  {
    id: 2,
    title: "Service Apartment",
    subtitle: "Dining & Living",
    vertical: "Residential",
    category: "Interiors",
    slug: "service-apartment",
    image: "/images/Projects/image6.jpg",
  },

  {
    id: 3,
    title: "Service Apartment",
    subtitle: "Material & Detail",
    vertical: "Residential",
    category: "Interiors",
    slug: "service-apartment",
    image: "/images/Projects/image12.jpg",
  },

  {
    id: 4,
    title: "Service Apartment",
    subtitle: "Spatial Composition",
    vertical: "Residential",
    category: "Interiors",
    slug: "service-apartment",
    image: "/images/Projects/image18.jpg",
  },
];

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
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

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={itemVariants}
      className={`
        group
        relative
        overflow-hidden
        ${
          index === 0
            ? "md:col-span-2"
            : ""
        }
      `}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block"
      >
        {/* ==================================================
            IMAGE
        ================================================== */}

        <div
          className={`
            relative
            overflow-hidden
            bg-[#2a2825]

            ${
              index === 0
                ? "aspect-[16/9] md:aspect-[16/8]"
                : "aspect-[4/5]"
            }
          `}
        >
          {/* IMAGE */}

          <motion.img
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover

              transition-transform
              duration-[1.4s]
              ease-out

              group-hover:scale-[1.06]
            "
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* ==================================================
              IMAGE OVERLAY
          ================================================== */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/80
              via-black/15
              to-black/5

              opacity-75

              transition-opacity
              duration-700

              group-hover:opacity-95
            "
          />

          {/* TOP GRADIENT */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-40

              bg-gradient-to-b
              from-black/45
              to-transparent
            "
          />

          {/* ==================================================
              PROJECT NUMBER
          ================================================== */}

          <div
            className="
              absolute
              left-6
              top-6
              z-10

              flex
              items-center
              gap-3

              sm:left-8
              sm:top-8
            "
          >
            <span
              className="
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                tracking-[0.25em]
                text-white/80
              "
            >
              0{index + 1}
            </span>

            <span
              className="
                h-px
                w-8
                bg-[#c9b58a]/70
              "
            />
          </div>

          {/* ==================================================
              CATEGORY
          ================================================== */}

          <div
            className="
              absolute
              right-6
              top-6
              z-10

              sm:right-8
              sm:top-8
            "
          >
            <span
              className="
                rounded-full
                border
                border-white/30

                bg-black/20

                px-3
                py-1.5

                font-[family-name:var(--font-montserrat)]
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]

                text-white

                backdrop-blur-md
              "
            >
              {project.category}
            </span>
          </div>

          {/* ==================================================
              CENTER VIEW INDICATOR
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10

              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                scale-75
                items-center
                justify-center

                rounded-full

                border
                border-white/40

                bg-black/10

                opacity-0
                backdrop-blur-md

                transition-all
                duration-700

                group-hover:scale-100
                group-hover:opacity-100
              "
            >
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
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
          </div>

          {/* ==================================================
              BOTTOM CONTENT
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-20

              p-6

              sm:p-8
            "
          >
            {/* Vertical */}

            <p
              className="
                mb-2

                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]

                text-[#d7c39b]
              "
            >
              {project.vertical}
            </p>

            {/* TITLE */}

            <div className="flex items-end justify-between gap-5">
              <div>
                <h3
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-3xl
                    font-medium
                    leading-none
                    text-white

                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-2

                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-light
                    uppercase
                    tracking-[0.2em]

                    text-white/55
                  "
                >
                  {project.subtitle}
                </p>
              </div>

              {/* ARROW */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/40

                  bg-white/5

                  backdrop-blur-md

                  transition-all
                  duration-500

                  group-hover:border-[#d7c39b]
                  group-hover:bg-[#d7c39b]
                "
              >
                <svg
                  className="
                    h-4
                    w-4
                    text-white

                    transition-all
                    duration-500

                    group-hover:translate-x-0.5
                    group-hover:text-[#231f20]
                  "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m13 6 6 6-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function SelectedProjects() {
  return (
    <section
      className={`
        ${cormorant.variable}
        ${montserrat.variable}

        relative
        overflow-hidden

        bg-[#231f20]

        px-6
        py-24

        text-white

        sm:px-8

        md:px-12
        md:py-28

        lg:px-20
        lg:py-32
      `}
    >
      {/* ======================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20

          h-[500px]
          w-[500px]

          rounded-full

          border
          border-[#c9b58a]/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-40

          h-[350px]
          w-[350px]

          rounded-full

          border
          border-[#c9b58a]/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2

          h-px
          w-32

          bg-gradient-to-r
          from-[#c9b58a]/20
          to-transparent
        "
      />

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          variants={headerVariants}
          className="
            mb-16

            flex
            flex-col
            justify-between

            gap-8

            md:mb-20
            md:flex-row
            md:items-end
          "
        >
          {/* LEFT */}

          <div>

            {/* EYEBROW */}

            <div
              className="
                mb-5

                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-10
                  bg-[#c9b58a]
                "
              />

              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]

                  text-[#c9b58a]
                "
              >
                Selected Works
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-3xl

                font-[family-name:var(--font-cormorant)]

                text-5xl
                font-medium
                leading-[0.95]

                tracking-tight

                text-[#f7f3ea]

                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Spaces that
              <br />

              <span className="italic text-[#c9b58a]">
                speak for themselves.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div
            className="
              max-w-sm

              border-l
              border-[#c9b58a]/30

              pl-6

              md:mb-2
              md:pl-8
            "
          >
            <p
              className="
                font-[family-name:var(--font-montserrat)]

                text-xs
                font-light
                leading-[1.9]

                tracking-[0.04em]

                text-white/55

                md:text-sm
              "
            >
              A glimpse into our approach to residential
              interiors — where material, light, proportion
              and everyday living come together.
            </p>
          </div>
        </motion.div>

        {/* ====================================================
            PROJECT GRID
        ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="
            grid
            grid-cols-1

            gap-5

            md:grid-cols-2
            md:gap-6
          "
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${project.image}`}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* ====================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-16

            flex
            flex-col
            items-center
            justify-between

            gap-7

            border-t
            border-white/10

            pt-10

            md:flex-row
            md:pt-12
          "
        >
          {/* LEFT STATEMENT */}

          <div>
            <p
              className="
                font-[family-name:var(--font-cormorant)]

                text-2xl
                italic

                text-white/75

                md:text-3xl
              "
            >
              Design beyond spaces.
            </p>

            <p
              className="
                mt-2

                font-[family-name:var(--font-montserrat)]

                text-[9px]
                uppercase
                tracking-[0.25em]

                text-white/35
              "
            >
              People • Spaces • Emotions
            </p>
          </div>

          {/* CTA */}

          <Link
            href="/portfolio"
            className="
              group

              inline-flex
              items-center

              gap-5

              rounded-full

              border
              border-[#c9b58a]/50

              px-7
              py-4

              font-[family-name:var(--font-montserrat)]

              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]

              text-[#e1cfaa]

              transition-all
              duration-300

              hover:border-[#c9b58a]
              hover:bg-[#c9b58a]
              hover:text-[#231f20]
            "
          >
            <span>
              View All Projects
            </span>

            <svg
              className="
                h-4
                w-4

                transition-transform
                duration-300

                group-hover:translate-x-1.5
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m13 6 6 6-6 6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}