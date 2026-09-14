"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { useMemo, useState } from "react";

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
// IMAGES
// ============================================================

const IMAGES = {
  hero: "/images/Projects/image20.jpg",
  featured: "/images/Projects/image1.jpg",
  material: "/images/Projects/image8.jpg",
  lighting: "/images/Projects/image15.jpg",
  living: "/images/Projects/image4.jpg",
  detail: "/images/Projects/image11.jpg",
  texture: "/images/Projects/image17.jpg",
  architecture: "/images/Projects/image7.jpg",
};

// ============================================================
// ANIMATIONS
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

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ============================================================
// CATEGORIES
// ============================================================

const categories = [
  "All",
  "Design",
  "Materials",
  "Living",
  "Lighting",
  "Architecture",
  "Projects",
];

// ============================================================
// INSIGHTS
// ============================================================

const insights = [
  {
    id: 1,
    number: "01",
    category: "Design",
    title: "The Art of Designing Spaces That Feel Like Home",
    excerpt:
      "Good interiors are not simply beautiful. They respond to the people, routines and emotions that make a space meaningful.",
    date: "14 SEP 2026",
    readTime: "5 MIN READ",
    image: IMAGES.featured,
    featured: true,
  },

  {
    id: 2,
    number: "02",
    category: "Materials",
    title: "Why Material Selection Changes Everything",
    excerpt:
      "Stone, wood, fabric and metal each bring a different character to a room. The right combination creates depth and balance.",
    date: "08 SEP 2026",
    readTime: "4 MIN READ",
    image: IMAGES.material,
  },

  {
    id: 3,
    number: "03",
    category: "Lighting",
    title: "Light Is More Than Illumination",
    excerpt:
      "The right lighting can transform proportion, mood and the way materials are experienced throughout the day.",
    date: "02 SEP 2026",
    readTime: "6 MIN READ",
    image: IMAGES.lighting,
  },

  {
    id: 4,
    number: "04",
    category: "Living",
    title: "Designing for the Way You Actually Live",
    excerpt:
      "The best spaces begin with real routines, not trends. Understanding everyday life is at the heart of meaningful design.",
    date: "27 AUG 2026",
    readTime: "5 MIN READ",
    image: IMAGES.living,
  },

  {
    id: 5,
    number: "05",
    category: "Design",
    title: "The Quiet Power of Proportion",
    excerpt:
      "When proportions are carefully considered, a space can feel balanced even before furniture and decoration enter the room.",
    date: "19 AUG 2026",
    readTime: "4 MIN READ",
    image: IMAGES.detail,
  },

  {
    id: 6,
    number: "06",
    category: "Materials",
    title: "Texture: The Layer That Makes a Room Feel Alive",
    excerpt:
      "Texture creates visual depth and tactile character. It is often the difference between a room that looks finished and one that feels finished.",
    date: "11 AUG 2026",
    readTime: "5 MIN READ",
    image: IMAGES.texture,
  },

  {
    id: 7,
    number: "07",
    category: "Architecture",
    title: "Where Architecture Meets Interior",
    excerpt:
      "Interior design becomes stronger when it responds to the architectural language of the building rather than competing with it.",
    date: "04 AUG 2026",
    readTime: "7 MIN READ",
    image: IMAGES.architecture,
  },

  {
    id: 8,
    number: "08",
    category: "Projects",
    title: "Inside an ASANG Design Process",
    excerpt:
      "A look at how an initial idea develops into a complete interior through concept, material, detailing and execution.",
    date: "28 JUL 2026",
    readTime: "8 MIN READ",
    image: IMAGES.hero,
  },
];

// ============================================================
// PAGE
// ============================================================

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = useMemo(() => {
    if (activeCategory === "All") {
      return insights;
    }

    return insights.filter(
      (insight) => insight.category === activeCategory
    );
  }, [activeCategory]);

  const featured = insights[0];

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
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[82vh] overflow-hidden bg-[#231F20]">
        {/* Background */}

        <motion.div
          initial={{
            scale: 1.08,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES.hero}
            alt="ASANG Design Journal"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />

        {/* Decorative circles */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 0.3,
          }}
          className="
            pointer-events-none
            absolute
            -right-36
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#DCC9A8]/20
            md:h-[650px]
            md:w-[650px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.04]
          "
          style={{
            backgroundImage: `
              linear-gradient(#DCC9A8 1px, transparent 1px),
              linear-gradient(90deg, #DCC9A8 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}

        <div className="relative z-10 flex min-h-[82vh] items-end px-6 pb-14 sm:px-10 md:px-16 lg:px-24 lg:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto w-full max-w-7xl"
          >
            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-4"
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
                ASANG JOURNAL
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="
                max-w-6xl
                font-[family-name:var(--font-cormorant)]
                text-[4.4rem]
                font-medium
                leading-[0.78]
                tracking-[-0.035em]
                text-white
                sm:text-[6rem]
                md:text-[8rem]
                lg:text-[9.5rem]
              "
            >
              Ideas for
              <br />
              <span className="italic text-[#DCC9A8]">
                better spaces.
              </span>
            </motion.h1>

            {/* Bottom */}

            <motion.div
              variants={fadeUp}
              className="
                mt-9
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
                  text-white/55
                  md:text-sm
                "
              >
                A collection of thoughts, observations and
                ideas about interiors, architecture, materials
                and the way we experience space.
              </p>

              <div className="flex items-center gap-4">
                <span
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-4xl
                    text-[#DCC9A8]
                  "
                >
                  2022—
                </span>

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Ideas in progress
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Side text */}

        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 md:block lg:right-10">
          <span
            className="
              font-[family-name:var(--font-montserrat)]
              text-[8px]
              uppercase
              tracking-[0.35em]
              text-white/25
            "
          >
            Design · Materials · Living
          </span>
        </div>
      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={stagger}
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
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
                From The Studio
              </p>

              <div className="mt-6 h-px w-14 bg-[#231F20]/20" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2
                className="
                  max-w-5xl
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.88]
                  text-[#231F20]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Design is not just
                <br />
                <span className="italic text-[#8F9A9B]">
                  what we see.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-2xl
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2.1]
                  text-[#777168]
                  md:text-sm
                "
              >
                It is how a space makes us feel, how easily
                we move through it, how light changes across
                the day and how materials become part of our
                everyday experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ======================================================
          FEATURED INSIGHT
      ====================================================== */}

      <section className="bg-[#EAE4D9] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >
            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#8F9A9B]" />

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
                Featured Insight
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                grid
                overflow-hidden
                bg-[#231F20]
                lg:grid-cols-[1.15fr_0.85fr]
              "
            >
              {/* Image */}

              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[570px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1.5s]
                    hover:scale-[1.03]
                  "
                />

                <div className="absolute inset-0 bg-black/15" />

                <div className="absolute bottom-6 left-6">
                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/60
                    "
                  >
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div className="flex flex-col justify-between p-8 sm:p-10 md:p-12 lg:p-14">
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-[family-name:var(--font-cormorant)]
                        text-4xl
                        text-[#DCC9A8]
                      "
                    >
                      {featured.number}
                    </span>

                    <span
                      className="
                        font-[family-name:var(--font-montserrat)]
                        text-[7px]
                        uppercase
                        tracking-[0.25em]
                        text-white/30
                      "
                    >
                      {featured.date}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-14
                      font-[family-name:var(--font-cormorant)]
                      text-4xl
                      font-medium
                      leading-[0.9]
                      text-[#F7F4EE]
                      sm:text-5xl
                      md:text-6xl
                    "
                  >
                    {featured.title}
                  </h3>

                  <p
                    className="
                      mt-7
                      max-w-lg
                      font-[family-name:var(--font-montserrat)]
                      text-xs
                      font-light
                      leading-[2]
                      text-white/45
                    "
                  >
                    {featured.excerpt}
                  </p>
                </div>

                <div className="mt-12">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="h-px w-10 bg-[#DCC9A8]" />

                    <span
                      className="
                        font-[family-name:var(--font-montserrat)]
                        text-[8px]
                        uppercase
                        tracking-[0.25em]
                        text-white/35
                      "
                    >
                      {featured.readTime}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-full
                      border
                      border-white/25
                      px-5
                      py-3
                      text-white
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
                      "
                    >
                      Read Insight
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
                      strokeWidth="1.4"
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
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CATEGORIES
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-6 py-16 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
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
                Explore Topics
              </p>

              <h2
                className="
                  mt-3
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  font-medium
                  text-[#231F20]
                "
              >
                Browse the journal.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`
                      rounded-full
                      border
                      px-4
                      py-2.5
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.15em]
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-[#231F20] bg-[#231F20] text-white"
                          : "border-[#231F20]/15 text-[#777168] hover:border-[#231F20]/40"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ARTICLE GRID
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-6 pb-24 sm:px-10 md:px-16 md:pb-32 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredInsights
              .filter((insight) => !insight.featured)
              .map((insight, index) => (
                <motion.article
                  layout
                  key={insight.id}
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
                    duration: 0.65,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  className="group"
                >
                  {/* Image */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE4D9]">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-[1.2s]
                        group-hover:scale-[1.04]
                      "
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                    {/* Number */}

                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/10 backdrop-blur-md">
                      <span
                        className="
                          font-[family-name:var(--font-cormorant)]
                          text-lg
                          text-white
                        "
                      >
                        {insight.number}
                      </span>
                    </div>

                    {/* Category */}

                    <div className="absolute bottom-5 left-5">
                      <span
                        className="
                          rounded-full
                          border
                          border-white/30
                          bg-black/10
                          px-3
                          py-1.5
                          font-[family-name:var(--font-montserrat)]
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-white
                          backdrop-blur-md
                        "
                      >
                        {insight.category}
                      </span>
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        absolute
                        bottom-5
                        right-5
                        flex
                        h-10
                        w-10
                        translate-y-3
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/30
                        bg-black/10
                        opacity-0
                        backdrop-blur-md
                        transition-all
                        duration-500
                        group-hover:translate-y-0
                        group-hover:opacity-100
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
                          d="M5 12h14"
                          strokeLinecap="round"
                        />

                        <path
                          d="m13 6 6 6-6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text */}

                  <div className="pt-6">
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          font-[family-name:var(--font-montserrat)]
                          text-[7px]
                          uppercase
                          tracking-[0.2em]
                          text-[#8F9A9B]
                        "
                      >
                        {insight.date}
                      </span>

                      <span
                        className="
                          font-[family-name:var(--font-montserrat)]
                          text-[7px]
                          uppercase
                          tracking-[0.15em]
                          text-[#8F9A9B]
                        "
                      >
                        {insight.readTime}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-4
                        font-[family-name:var(--font-cormorant)]
                        text-3xl
                        font-medium
                        leading-[0.95]
                        text-[#231F20]
                        transition-colors
                        duration-300
                        group-hover:text-[#777168]
                      "
                    >
                      {insight.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        font-[family-name:var(--font-montserrat)]
                        text-[10px]
                        font-light
                        leading-[1.9]
                        text-[#777168]
                      "
                    >
                      {insight.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px w-7 bg-[#231F20]/20 transition-all duration-500 group-hover:w-12 group-hover:bg-[#231F20]/50" />

                      <span
                        className="
                          font-[family-name:var(--font-montserrat)]
                          text-[7px]
                          font-medium
                          uppercase
                          tracking-[0.2em]
                          text-[#777168]
                        "
                      >
                        Read More
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
          </motion.div>

          {/* No results */}

          {filteredInsights.filter(
            (insight) => !insight.featured
          ).length === 0 && (
            <div className="py-24 text-center">
              <p
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  text-[#231F20]
                "
              >
                More insights coming soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================
          DESIGN NOTE
      ====================================================== */}

      <section className="bg-[#231F20] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={IMAGES.texture}
                alt="Interior material detail"
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-6 left-6">
                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/60
                  "
                >
                  Material Study
                </span>
              </div>
            </motion.div>

            {/* Quote */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#DCC9A8]
                "
              >
                A Thought From ASANG
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="
                  mt-7
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.88]
                  text-[#F7F4EE]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                The smallest
                <br />
                <span className="italic text-[#DCC9A8]">
                  details matter.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mt-9
                  max-w-xl
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2]
                  text-white/45
                  md:text-sm
                "
              >
                A handle, a shadow gap, the edge of a stone
                surface, the temperature of a light — small
                decisions can change the character of an
                entire room.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-[#DCC9A8]" />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                  "
                >
                  Detail creates character
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          JOURNAL CATEGORIES
      ====================================================== */}

      <section className="bg-[#EAE4D9] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]"
            >
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
                Keep Exploring
              </p>

              <h2
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.88]
                  text-[#231F20]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                There is always
                <br />
                <span className="italic text-[#777168]">
                  more to discover.
                </span>
              </h2>
            </motion.div>

            <div className="mt-16 grid border-t border-[#231F20]/15 sm:grid-cols-2 lg:grid-cols-4">
              <JournalCategory
                number="01"
                title="Design"
                text="Ideas about proportion, composition and creating meaningful interiors."
              />

              <JournalCategory
                number="02"
                title="Materials"
                text="Exploring stone, wood, fabric, finishes, textures and materiality."
              />

              <JournalCategory
                number="03"
                title="Living"
                text="Thoughts about comfort, routines and how people experience space."
              />

              <JournalCategory
                number="04"
                title="Projects"
                text="Stories and observations from the spaces we create."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="bg-[#DCC9A8] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.9,
            ease: "easeOut",
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
                Have An Idea?
              </p>

              <h2
                className="
                  max-w-5xl
                  font-[family-name:var(--font-cormorant)]
                  text-6xl
                  font-medium
                  leading-[0.8]
                  tracking-[-0.025em]
                  text-[#231F20]
                  sm:text-7xl
                  md:text-8xl
                "
              >
                Let's turn the
                <br />
                <span className="italic">
                  idea into space.
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
                Inspired by something you've read? Tell us
                about your project and let's start a
                conversation.
              </p>
            </div>

            <Link
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
                Start a Project
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
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// ============================================================
// JOURNAL CATEGORY
// ============================================================

function JournalCategory({
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
      className="
        group
        border-b
        border-[#231F20]/15
        px-0
        py-9
        sm:px-6
        lg:border-b-0
        lg:border-r
        lg:px-7
        first:lg:pl-0
        last:lg:border-r-0
        last:lg:pr-0
      "
    >
      <div className="flex items-center justify-between">
        <span
          className="
            font-[family-name:var(--font-montserrat)]
            text-[8px]
            tracking-[0.2em]
            text-[#8F9A9B]
          "
        >
          {number}
        </span>

        <span className="h-px w-6 bg-[#231F20]/15 transition-all duration-500 group-hover:w-10 group-hover:bg-[#231F20]/40" />
      </div>

      <h3
        className="
          mt-9
          font-[family-name:var(--font-cormorant)]
          text-3xl
          font-medium
          text-[#231F20]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4
          max-w-xs
          font-[family-name:var(--font-montserrat)]
          text-[9px]
          font-light
          leading-[1.9]
          text-[#777168]
        "
      >
        {text}
      </p>
    </motion.div>
  );
}