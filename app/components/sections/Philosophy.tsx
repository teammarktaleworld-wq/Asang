// 'use client';

// import { motion } from 'framer-motion';

// export default function Philosophy() {
//   return (
//     <section className="bg-[#e5dcc7] text-gray-900 py-24 px-8 md:px-24 border-b border-white overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
//         {/* Left Column */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="pr-12"
//         >
//           <p className="text-xs tracking-widest uppercase mb-4 font-medium text-gray-600">
//             Our Philosophy
//           </p>
//           <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
//             SPACES FOR A BETTER LIVING
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-sm">
//             We are saen-a dolor sit greet ameson for architecture, smdia'laon ohort flows.
//           </p>
//         </motion.div>

//         {/* Right Column - Staggered with a slight delay */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           className="flex h-full items-center"
//         >
//           <p className="text-gray-600 leading-relaxed text-sm md:border-l border-gray-400 md:pl-12 py-4">
//             We pronate a the record design to might consdeware and collaborative experience overcoming thandrun.
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// }















"use client";

import { motion } from "framer-motion";
import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

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

const philosophies = [
  {
    number: "01",
    title: "Rooted in India",
    description:
      "Our spaces draw from India's rich architectural heritage, responding thoughtfully to local culture, climate, context and the way people truly live.",
    keywords: "CULTURE • CONTEXT • CLIMATE",
  },
  {
    number: "02",
    title: "Craft & Material",
    description:
      "We celebrate honest materials and Indian craftsmanship, bringing together natural textures, artisanal details and contemporary design.",
    keywords: "CRAFT • TEXTURE • DETAIL",
  },
  {
    number: "03",
    title: "Light, Air & Nature",
    description:
      "Natural light, ventilation, greenery and thoughtful spatial planning come together to create homes that feel calm, connected and alive.",
    keywords: "LIGHT • AIR • NATURE",
  },
  {
    number: "04",
    title: "Timeless Living",
    description:
      "We design beyond passing trends, creating refined spaces that feel relevant today, meaningful tomorrow and personal for generations.",
    keywords: "TIMELESS • PERSONAL • ENDURING",
  },
];

export default function Philosophy() {
  return (
    <section
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        relative
        overflow-hidden
        bg-[#e5dcc7]
        px-6
        py-24
        text-[#231f20]
        md:px-12
        md:py-28
        lg:px-20
        lg:py-32
      `}
    >
      {/* =====================================================
          SUBTLE DECORATIVE ELEMENT
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-96
          w-96
          rounded-full
          border
          border-[#8f9a9b]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          border
          border-[#8f9a9b]/10
        "
      />

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            INTRO
            ===================================================== */}

        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="mb-5 flex items-center gap-4">
              <span
                className="
                  h-px
                  w-10
                  bg-[#8f9a9b]
                "
              />

              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#5f5a52]
                "
              >
                Our Philosophy
              </p>
            </div>

            <h2
              className="
                max-w-xl
                font-[family-name:var(--font-cormorant)]
                text-5xl
                font-medium
                leading-[0.95]
                text-[#231f20]
                sm:text-6xl
                md:text-7xl
              "
            >
              Spaces for
              <br />
              a Better Living
            </h2>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="
              flex
              items-end
              lg:pb-2
            "
          >
            <div
              className="
                max-w-2xl
                border-l
                border-[#8f9a9b]/50
                pl-7
                md:pl-10
              "
            >
              <p
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  leading-relaxed
                  text-[#3e3934]
                  md:text-3xl
                "
              >
                Thoughtful design for modern living,
                rooted in the richness of India.
              </p>

              <p
                className="
                  mt-5
                  max-w-xl
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[1.9]
                  tracking-[0.04em]
                  text-[#666158]
                  md:text-sm
                "
              >
                We believe a meaningful space is more than
                what meets the eye. It is shaped by culture,
                material, light, nature and the people who
                call it home.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PHILOSOPHY GRID
            ===================================================== */}

        <div
          className="
            border-t
            border-[#8f9a9b]/40
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {philosophies.map((philosophy, index) => (
              <motion.article
                key={philosophy.number}
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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  min-h-[330px]
                  border-b
                  border-[#8f9a9b]/40
                  px-6
                  py-10
                  transition-colors
                  duration-500
                  hover:bg-[#ded3bc]
                  md:border-r
                  md:px-8
                  lg:min-h-[360px]
                  lg:border-b-0
                  lg:px-9
                "
              >
                {/* Number */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[10px]
                      font-medium
                      tracking-[0.2em]
                      text-[#777168]
                    "
                  >
                    {philosophy.number}
                  </span>

                  {/* Decorative line */}

                  <span
                    className="
                      h-px
                      w-10
                      bg-[#8f9a9b]/50
                      transition-all
                      duration-500
                      group-hover:w-16
                      group-hover:bg-[#8f9a9b]
                    "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-16
                    font-[family-name:var(--font-cormorant)]
                    text-3xl
                    font-medium
                    leading-tight
                    text-[#231f20]
                    md:text-4xl
                  "
                >
                  {philosophy.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-5
                    font-[family-name:var(--font-montserrat)]
                    text-[11px]
                    font-light
                    leading-[1.9]
                    tracking-[0.02em]
                    text-[#666158]
                  "
                >
                  {philosophy.description}
                </p>

                {/* Keywords */}

                <div
                  className="
                    absolute
                    bottom-8
                    left-6
                    right-6
                    md:left-8
                    md:right-8
                    lg:left-9
                    lg:right-9
                  "
                >
                  <p
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      font-medium
                      tracking-[0.2em]
                      text-[#8f9a9b]
                    "
                  >
                    {philosophy.keywords}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM BRAND STATEMENT
            ===================================================== */}

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
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-5
            md:flex-row
          "
        >
          <p
            className="
              font-[family-name:var(--font-montserrat)]
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#777168]
            "
          >
            Architecture • Interiors
          </p>

          <div
            className="
              hidden
              h-px
              flex-1
              bg-[#8f9a9b]/30
              md:mx-8
              md:block
            "
          />

          <p
            className="
              font-[family-name:var(--font-cormorant)]
              text-xl
              italic
              text-[#3e3934]
              md:text-2xl
            "
          >
            Design that feels like home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}