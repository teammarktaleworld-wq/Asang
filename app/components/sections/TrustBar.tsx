// "use client";

// import { motion } from "framer-motion";
// import { Cormorant_Garamond, Montserrat } from "next/font/google";

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

// const trustItems = [
//   {
//     number: "4.9",
//     symbol: "★",
//     title: "Google Rating",
//     description: "Highly Rated by Clients",
//   },
//   {
//     number: "50+",
//     symbol: "",
//     title: "Projects",
//     description: "Thoughtfully Designed Spaces",
//   },
//   {
//     number: "10+",
//     symbol: "",
//     title: "Years",
//     description: "Of Design Experience",
//   },
//   {
//     number: "3",
//     symbol: "",
//     title: "Countries",
//     description: "India • UAE • Malaysia",
//   },
// ];

// export default function TrustBar() {
//   return (
//     <section
//       className={`
//         ${cormorant.variable}
//         ${montserrat.variable}
//         relative
//         w-full
//         overflow-hidden
//         bg-[#171512]
//         px-5
//         py-12
//         sm:px-8
//         md:px-12
//         lg:px-16
//         lg:py-16
//       `}
//     >
//       {/* Subtle background glow */}

//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[#c9b58a]/5 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl">
//         {/* Main bordered container */}

//         <div
//           className="
//             overflow-hidden
//             rounded-[14px]
//             border
//             border-[#c9b58a]/40
//             bg-[#171512]
//           "
//         >
//           <div
//             className="
//               grid
//               grid-cols-1
//               divide-y
//               divide-[#c9b58a]/20

//               md:grid-cols-2
//               md:divide-x
//               md:divide-y-0

//               lg:grid-cols-4
//             "
//           >
//             {trustItems.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.3,
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.1,
//                   ease: "easeOut",
//                 }}
//                 className="
//                   group
//                   flex
//                   min-h-[190px]
//                   flex-col
//                   items-center
//                   justify-center
//                   px-6
//                   py-10
//                   text-center
//                   transition-all
//                   duration-500
//                   hover:bg-white/[0.025]
//                   sm:min-h-[200px]
//                 "
//               >
//                 {/* Number */}

//                 <div className="flex items-center justify-center">
//                   {item.symbol && (
//                     <span
//                       className="
//                         mr-2
//                         font-[family-name:var(--font-montserrat)]
//                         text-lg
//                         text-[#c9b58a]
//                       "
//                     >
//                       {item.symbol}
//                     </span>
//                   )}

//                   <span
//                     className="
//                       font-[family-name:var(--font-cormorant)]
//                       text-5xl
//                       font-medium
//                       leading-none
//                       text-[#e1cfaa]
//                       sm:text-6xl
//                     "
//                   >
//                     {item.number}
//                   </span>
//                 </div>

//                 {/* Small gold divider */}

//                 <div
//                   className="
//                     my-4
//                     h-px
//                     w-10
//                     bg-[#c9b58a]/60
//                     transition-all
//                     duration-500
//                     group-hover:w-16
//                   "
//                 />

//                 {/* Title */}

//                 <h3
//                   className="
//                     font-[family-name:var(--font-montserrat)]
//                     text-[11px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.18em]
//                     text-white
//                   "
//                 >
//                   {item.title}
//                 </h3>

//                 {/* Description */}

//                 <p
//                   className="
//                     mt-3
//                     max-w-[220px]
//                     font-[family-name:var(--font-montserrat)]
//                     text-[10px]
//                     font-light
//                     leading-relaxed
//                     tracking-[0.08em]
//                     text-white/55
//                   "
//                 >
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















// my-asang\app\components\sections\TrustBar.tsx



"use client";

import { motion } from "framer-motion";
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
// TRUST DATA
// ============================================================

const trustItems = [
  {
    number: "4.9",
    symbol: "★",
    title: "Google Rating",
    description: "Highly Rated by Our Clients",
  },
  {
    number: "30+",
    symbol: "",
    title: "Projects Delivered",
    description: "Thoughtfully Designed Spaces",
  },
  {
    number: "10+",
    symbol: "",
    title: "Years of Experience",
    description: "Expertise Shaped by Experience",
  },
  {
    number: "100%",
    symbol: "",
    title: "Design Commitment",
    description: "Every Detail, Thoughtfully Considered",
  },
];

// ============================================================
// TRUST BAR
// ============================================================

export default function TrustBar() {
  return (
    <section
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        relative
        w-full
        overflow-hidden
        bg-[#171512]
        px-5
        py-14
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-20
      `}
    >
      {/* ======================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Central ambient glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[320px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-[#c9b58a]/[0.045]
            blur-[100px]
          "
        />

        {/* Left architectural line */}
        <div
          className="
            absolute
            left-0
            top-1/2
            h-px
            w-[18%]
            bg-gradient-to-r
            from-transparent
            to-[#c9b58a]/10
          "
        />

        {/* Right architectural line */}
        <div
          className="
            absolute
            right-0
            top-1/2
            h-px
            w-[18%]
            bg-gradient-to-l
            from-transparent
            to-[#c9b58a]/10
          "
        />

        {/* Decorative circle */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#c9b58a]/[0.035]
          "
        />

        <div
          className="
            absolute
            -left-48
            -bottom-48
            h-[480px]
            w-[480px]
            rounded-full
            border
            border-[#c9b58a]/[0.025]
          "
        />
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-10 text-center lg:mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#c9b58a]/40" />

            <span
              className="
                font-[family-name:var(--font-montserrat)]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-[#c9b58a]
              "
            >
              The ASANG Standard
            </span>

            <span className="h-px w-8 bg-[#c9b58a]/40" />
          </div>

          <h2
            className="
              font-[family-name:var(--font-cormorant)]
              text-3xl
              font-medium
              tracking-tight
              text-[#e1cfaa]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Built on Experience. Defined by Detail.
          </h2>
        </motion.div>

        {/* ==================================================
            MAIN TRUST CONTAINER
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[18px]
            border
            border-[#c9b58a]/30
            bg-[#1b1916]/80
            backdrop-blur-sm
          "
        >
          {/* Top highlight */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-px
              w-[60%]
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#c9b58a]/50
              to-transparent
            "
          />

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={item.title}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  flex
                  min-h-[220px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-12
                  text-center
                  transition-all
                  duration-700
                  hover:bg-[#c9b58a]/[0.025]
                  sm:min-h-[235px]

                  ${
                    index !== 0
                      ? "border-t border-[#c9b58a]/15 md:border-t-0 md:border-l"
                      : ""
                  }

                  ${
                    index === 2
                      ? "lg:border-l"
                      : ""
                  }
                `}
              >
                {/* ==================================================
                    TOP INDEX
                ================================================== */}

                <span
                  className="
                    absolute
                    left-6
                    top-5
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-medium
                    tracking-[0.2em]
                    text-[#c9b58a]/30
                  "
                >
                  0{index + 1}
                </span>

                {/* ==================================================
                    NUMBER
                ================================================== */}

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    flex
                    items-baseline
                    justify-center
                    transition-transform
                    duration-500
                  "
                >
                  {item.symbol && (
                    <span
                      className="
                        mr-2
                        translate-y-[-3px]
                        font-[family-name:var(--font-montserrat)]
                        text-lg
                        font-medium
                        text-[#c9b58a]
                      "
                    >
                      {item.symbol}
                    </span>
                  )}

                  <span
                    className="
                      font-[family-name:var(--font-cormorant)]
                      text-[4rem]
                      font-medium
                      leading-none
                      tracking-[-0.03em]
                      text-[#e1cfaa]
                      transition-colors
                      duration-500
                      group-hover:text-[#f0dfbb]
                      sm:text-[4.5rem]
                    "
                  >
                    {item.number}
                  </span>
                </motion.div>

                {/* ==================================================
                    GOLD DIVIDER
                ================================================== */}

                <div
                  className="
                    relative
                    my-5
                    h-px
                    w-10
                    overflow-hidden
                    bg-[#c9b58a]/30
                    transition-all
                    duration-700
                    group-hover:w-20
                  "
                >
                  <span
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-1/2
                      bg-[#c9b58a]
                      opacity-70
                    "
                  />
                </div>

                {/* ==================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white
                    transition-colors
                    duration-500
                    group-hover:text-[#e1cfaa]
                  "
                >
                  {item.title}
                </h3>

                {/* ==================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mt-3
                    max-w-[210px]
                    font-[family-name:var(--font-montserrat)]
                    text-[10px]
                    font-light
                    leading-[1.8]
                    tracking-[0.07em]
                    text-white/45
                    transition-colors
                    duration-500
                    group-hover:text-white/60
                  "
                >
                  {item.description}
                </p>

                {/* ==================================================
                    BOTTOM DECORATIVE DOT
                ================================================== */}

                <span
                  className="
                    absolute
                    bottom-5
                    h-1
                    w-1
                    rounded-full
                    bg-[#c9b58a]/30
                    transition-all
                    duration-500
                    group-hover:w-6
                    group-hover:rounded-full
                    group-hover:bg-[#c9b58a]/60
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================
            BOTTOM BRAND STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span className="h-px w-6 bg-[#c9b58a]/20" />

          <p
            className="
              font-[family-name:var(--font-montserrat)]
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Architecture · Interiors · Design
          </p>

          <span className="h-px w-6 bg-[#c9b58a]/20" />
        </motion.div>
      </div>
    </section>
  );
}