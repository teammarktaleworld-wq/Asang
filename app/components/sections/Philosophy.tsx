// my-asang/app/components/sections/Philosophy.tsx

"use client";

import { memo } from "react";

import {
  motion,
  type Variants,
} from "framer-motion";

import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

/* ============================================================
   ASANG BRAND FONTS
============================================================ */

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

/* ============================================================
   SHARED EASING
   `as const` prevents TypeScript from converting this into
   a generic number[].
============================================================ */

const EASE = [
  0.16,
  1,
  0.3,
  1,
] as const;

/* ============================================================
   PHILOSOPHIES
============================================================ */

const philosophies = [
  {
    number: "01",

    title: "Rooted in India",

    description:
      "Our spaces draw from India's rich architectural heritage, responding thoughtfully to local culture, climate, context and the way people truly live.",

    keywords:
      "CULTURE · CONTEXT · CLIMATE",
  },

  {
    number: "02",

    title: "Craft & Material",

    description:
      "We celebrate honest materials and Indian craftsmanship, bringing together natural textures, artisanal details and contemporary design.",

    keywords:
      "CRAFT · TEXTURE · DETAIL",
  },

  {
    number: "03",

    title: "Light, Air & Nature",

    description:
      "Natural light, ventilation, greenery and thoughtful spatial planning come together to create homes that feel calm, connected and alive.",

    keywords:
      "LIGHT · AIR · NATURE",
  },

  {
    number: "04",

    title: "Timeless Living",

    description:
      "We design beyond passing trends, creating refined spaces that feel relevant today, meaningful tomorrow and personal for generations.",

    keywords:
      "TIMELESS · PERSONAL · ENDURING",
  },
];

/* ============================================================
   ANIMATIONS
============================================================ */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      delay,
      ease: EASE,
    },
  }),
};

const fadeX = (
  dir: "left" | "right"
): Variants => ({
  hidden: {
    opacity: 0,
    x:
      dir === "left"
        ? -28
        : 28,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
});

/* ============================================================
   PHILOSOPHY CARD
============================================================ */

const PhilosophyCard = memo(
  function PhilosophyCard({
    philosophy,
    index,
  }: {
    philosophy: (typeof philosophies)[0];
    index: number;
  }) {
    return (
      <motion.article
        variants={fadeUp}
        custom={index * 0.08}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-60px",
        }}
        className="
          group
          flex
          flex-col
          border-b
          border-[#8f9a9b]/40
          px-6
          py-10
          transition-colors
          duration-500
          hover:bg-[#ded3bc]
          md:border-r
          md:px-8
          lg:border-b-0
          lg:px-9
        "
      >
        {/* ==================================================
            NUMBER + DECORATIVE LINE
        ================================================== */}

        <div className="flex items-center justify-between">

          <span
            className="
              font-[family-name:var(--font-montserrat)]
              text-sm
              font-semibold
              tracking-[0.2em]
              text-[#5f5a52]
            "
          >
            {philosophy.number}
          </span>

          <span
            className="
              h-px
              w-10
              bg-[#8f9a9b]/70
              transition-all
              duration-500
              group-hover:w-16
              group-hover:bg-[#5f5a52]
            "
          />

        </div>

        {/* ==================================================
            TITLE
        ================================================== */}

        <h3
          className="
            mt-10
            font-[family-name:var(--font-cormorant)]
            text-3xl
            font-bold
            leading-tight
            text-[#231f20]
            md:text-4xl
          "
        >
          {philosophy.title}
        </h3>

        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        <p
          className="
            mt-5
            flex-1
            font-[family-name:var(--font-montserrat)]
            text-sm
            font-medium
            leading-[1.75]
            tracking-[0.01em]
            text-[#3e3934]
            md:text-base
          "
        >
          {philosophy.description}
        </p>

        {/* ==================================================
            KEYWORDS
        ================================================== */}

        <p
          className="
            mt-8
            font-[family-name:var(--font-montserrat)]
            text-xs
            font-semibold
            tracking-[0.15em]
            text-[#5f5a52]
          "
        >
          {philosophy.keywords}
        </p>
      </motion.article>
    );
  }
);

/* ============================================================
   MAIN SECTION
============================================================ */

export default function Philosophy() {
  return (
    <section
      className={`
        ${cormorant.variable}
        ${montserrat.variable}

        relative
        overflow-hidden

        bg-[#e5dcc7]
        text-[#231f20]

        px-6
        py-24

        md:px-12
        md:py-28

        lg:px-20
        lg:py-32
      `}
    >

      {/* ======================================================
          DECORATIVE RINGS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-96
          w-96
          rounded-full
          border
          border-[#8f9a9b]/20
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-72
          w-72
          rounded-full
          border
          border-[#8f9a9b]/20
        "
      />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ====================================================
            INTRO GRID
        ==================================================== */}

        <div
          className="
            mb-16
            grid
            grid-cols-1
            gap-10

            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >

          {/* ==================================================
              LEFT — HEADING
          ================================================== */}

          <motion.div
            variants={fadeX("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
            }}
          >

            <div className="mb-5 flex items-center gap-4">

              <span
                className="
                  h-px
                  w-10
                  bg-[#5f5a52]
                "
              />

              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#3e3934]
                  md:text-sm
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

          {/* ==================================================
              RIGHT — BODY COPY
          ================================================== */}

          <motion.div
            variants={fadeX("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-80px",
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
                border-[#8f9a9b]/60
                pl-7
                md:pl-10
              "
            >

              <p
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  leading-relaxed
                  text-[#231f20]
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
                  text-base
                  font-medium
                  leading-[1.8]
                  tracking-[0.02em]
                  text-[#3e3934]
                  md:text-lg
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

        {/* ====================================================
            PHILOSOPHY CARDS
        ==================================================== */}

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

            {philosophies.map(
              (
                philosophy,
                index
              ) => (
                <PhilosophyCard
                  key={philosophy.number}
                  philosophy={philosophy}
                  index={index}
                />
              )
            )}

          </div>

        </div>

        {/* ====================================================
            BOTTOM BRAND STATEMENT
        ==================================================== */}

        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
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
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#3e3934]
              md:text-sm
            "
          >
            Architecture • Interiors
          </p>

          <div
            className="
              hidden
              h-px
              flex-1
              bg-[#8f9a9b]/50

              md:mx-8
              md:block
            "
          />

          <p
            className="
              font-[family-name:var(--font-cormorant)]
              text-xl
              italic
              font-medium
              text-[#231f20]
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