







"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

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

// Change these image paths if your actual files have different names.
const ABOUT_IMAGES = {
  hero: "/images/Projects/image1.jpg",
  story: "/images/Projects/image4.jpg",
  philosophy: "/images/Projects/image8.jpg",
  detail: "/images/Projects/image15.jpg",
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
      duration: 1,
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
// FOUNDER DATA
// ============================================================

const founders = [
  {
    number: "01",
    name: "Surya Sinha",
    role: "Founder",
    description:
      "Leading ASANG with a vision to create thoughtful spaces that balance character, functionality and timeless design.",
  },

  {
    number: "02",
    name: "Suchit Sinha",
    role: "Co-founder",
    description:
      "Bringing a thoughtful design perspective to create refined environments where material, proportion and everyday living come together.",
  },
];

// ============================================================
// PAGE
// ============================================================

export default function AboutPage() {
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

      <section className="relative min-h-[78vh] overflow-hidden bg-[#231F20] sm:min-h-[88vh]">
        {/* Background image */}

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={ABOUT_IMAGES.hero}
            alt="ASANG Design Studio"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Overlays */}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/35" />

        {/* Decorative circle */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}
          className="
            pointer-events-none
            absolute
            -right-24
            top-24
            h-[280px]
            w-[280px]
            rounded-full
            border
            border-[#DCC9A8]/20
            sm:h-[420px]
            sm:w-[420px]
            md:h-[650px]
            md:w-[650px]
          "
        />

        {/* Hero content */}

        <div className="relative z-10 flex min-h-[78vh] items-end px-5 pb-12 sm:min-h-[88vh] sm:px-10 sm:pb-16 md:px-16 lg:px-24 lg:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto w-full max-w-7xl"
          >
            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3 sm:mb-7 sm:gap-4"
            >
              <span className="h-px w-10 bg-[#DCC9A8]" />

              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-[#DCC9A8]
                  md:text-sm
                "
              >
                ASANG DESIGN STUDIO
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="
                max-w-6xl
                font-[family-name:var(--font-cormorant)]
                text-[3.8rem]
                font-medium
                leading-[0.78]
                tracking-[-0.035em]
                text-white
                sm:text-[6.5rem]
                md:text-[8rem]
                lg:text-[10rem]
              "
            >
              About
              <br />

              <span className="italic text-[#DCC9A8]">
                ASANG
              </span>
            </motion.h1>

            {/* Description */}

            <motion.div
              variants={fadeUp}
              className="
                mt-8
                flex
                flex-col
                gap-6 sm:gap-8
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <p
                className="
                  max-w-xl
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2]
                  tracking-[0.01em]
                  text-white/80
                  md:text-base
                "
              >
                A design studio creating thoughtful spaces
                where architecture, interiors, materials and
                everyday life come together.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-4xl
                    text-[#DCC9A8]
                  "
                >
                  2022
                </span>

                <span
                  className="
                    h-px
                    w-14
                    bg-white/40
                  "
                />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-white/70
                  "
                >
                  Founded
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-5 py-20 sm:px-10 sm:py-24 md:px-16 md:py-32 lg:px-24">
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
          <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr]">

            {/* Left */}

            <motion.div variants={fadeUp}>
              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#8F9A9B]
                  md:text-sm
                "
              >
                Who We Are
              </p>

              <div className="mt-6 h-px w-16 bg-[#231F20]/30" />
            </motion.div>

            {/* Right */}

            <motion.div variants={fadeUp}>
              <h2
                className="
                  max-w-5xl
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  font-medium
                  leading-[0.92]
                  sm:text-5xl
                  tracking-[-0.02em]
                  text-[#231F20]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Designing spaces
                <br />

                <span className="italic text-[#8F9A9B]">
                  with meaning.
                </span>
              </h2>

              <p
                className="
                  mt-9
                  max-w-2xl
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2.1]
                  text-[#514d45]
                  md:text-base
                "
              >
                ASANG Design Studio was founded in 2022
                with a shared vision to create spaces that
                feel considered, authentic and deeply
                connected to the people who experience them.
              </p>

              <p
                className="
                  mt-5
                  max-w-2xl
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2.1]
                  text-[#514d45]
                  md:text-base
                "
              >
                We believe that great interiors are not
                defined by excess. They are shaped by
                proportion, material, light, functionality
                and the small details that make a space feel
                like home.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ======================================================
          STORY IMAGE + TEXT
      ====================================================== */}

      <section className="bg-[#EAE4D9] px-5 py-16 sm:px-10 sm:py-20 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={ABOUT_IMAGES.story}
                alt="ASANG interior design"
                fill
                quality={75}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-[1.5s] hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6">
                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-white/90
                  "
                >
                  EST. 2022
                </span>
              </div>
            </motion.div>

            {/* Text */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <p
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-[#8F9A9B]
                    md:text-sm
                  "
                >
                  Our Beginning
                </p>

                <h2
                  className="
                    mt-6
                    font-[family-name:var(--font-cormorant)]
                    text-4xl
                    font-medium
                    leading-[0.9]
                    text-[#231F20]
                    sm:text-4xl
                    md:text-5xl
                    md:text-6xl
                  "
                >
                  A vision
                  <br />

                  <span className="italic text-[#777168]">
                    became ASANG.
                  </span>
                </h2>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="
                  mt-8
                  max-w-lg
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2]
                  text-[#514d45]
                  md:text-base
                "
              >
                In 2022, Surya Sinha and Suchit Sinha
                came together with a common belief:
                design should make everyday life better.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="
                  mt-5
                  max-w-lg
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2]
                  text-[#514d45]
                  md:text-base
                "
              >
                That belief became the foundation of ASANG —
                a studio where ideas are translated into
                carefully considered spaces with a strong
                sense of identity.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-[#8F9A9B]" />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#777168]
                  "
                >
                  Since 2022
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FOUNDERS
      ====================================================== */}

      <section className="bg-[#231F20] px-5 py-20 sm:px-10 sm:py-24 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]"
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#DCC9A8]" />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-[#DCC9A8]
                    md:text-sm
                  "
                >
                  The Founders
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  font-medium
                  leading-[0.9]
                  text-[#F7F4EE]
                  sm:text-5xl
                  md:text-6xl
                  md:text-7xl
                "
              >
                A shared vision.
                <br />

                <span className="italic text-[#DCC9A8]">
                  Thoughtfully designed.
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-2xl
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2]
                  text-white/70
                  md:text-base
                "
              >
                ASANG was founded by Surya Sinha and
                Suchit Sinha with a shared passion for
                thoughtful design, meaningful spaces and
                lasting ideas.
              </p>
            </motion.div>
          </motion.div>

          {/* Founder cards */}

          <div className="mt-14 grid border-t border-white/20 sm:mt-16 md:mt-20 md:grid-cols-2">

            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="
                  group
                  border-b
                  border-white/20
                  py-10
                  md:border-b-0
                  md:border-r
                  md:px-10
                  md:py-12
                  first:md:pl-0
                  last:md:border-r-0
                  last:md:pr-0
                "
              >
                {/* Number + Role */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-xs
                      font-semibold
                      tracking-[0.25em]
                      text-[#DCC9A8]
                    "
                  >
                    {founder.number}
                  </span>

                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-white/60
                    "
                  >
                    {founder.role}
                  </span>
                </div>

                {/* Name */}

                <h3
                  className="
                    mt-10
                    font-[family-name:var(--font-cormorant)]
                    text-3xl
                    font-medium
                    text-[#F7F4EE]
                    transition-colors
                    duration-500
                    group-hover:text-[#DCC9A8]
                    sm:text-5xl
                  "
                >
                  {founder.name}
                </h3>

                {/* Line */}

                <div className="mt-6 h-px w-10 bg-white/30 transition-all duration-500 group-hover:w-20 group-hover:bg-[#DCC9A8]" />

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-sm
                    font-[family-name:var(--font-montserrat)]
                    text-sm
                    font-medium
                    leading-[1.9]
                    text-white/70
                  "
                >
                  {founder.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ======================================================
          TEAM / ASSOCIATE
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-5 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 lg:px-24">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]"
          >
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#8F9A9B]" />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-[#777168]
                    md:text-sm
                  "
                >
                  Our Team
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  font-medium
                  leading-[0.9]
                  text-[#231F20]
                  sm:text-5xl
                  md:text-6xl
                  md:text-7xl
                "
              >
                People behind
                <br />

                <span className="italic text-[#8F9A9B]">
                  the ideas.
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-2xl
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2]
                  text-[#514d45]
                  md:text-base
                "
              >
                ASANG is supported by a team that brings
                different perspectives, skills and attention
                to detail to every project.
              </p>
            </motion.div>
          </motion.div>

          {/* Associate */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              mt-16
              border-t
              border-[#231F20]/20
              pt-8
              md:mt-20
              md:flex
              md:items-end
              md:justify-between
              md:gap-10
            "
          >
            <div>
              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8F9A9B]
                "
              >
                Associate
              </p>

              <h3
                className="
                  mt-5
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  font-medium
                  text-[#231F20]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Manoj Kumar
              </h3>
            </div>

            <p
              className="
                mt-6
                max-w-xl
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                leading-[2]
                text-[#514d45]
                md:mt-0
                md:text-base
              "
            >
              An associate and valued part of the ASANG
              team, contributing to the studio's design
              process and the development of thoughtful
              spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          PHILOSOPHY
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-5 py-20 sm:px-10 sm:py-24 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
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
                duration: 1,
                ease: "easeOut",
              }}
              className="relative aspect-[3/4] max-w-md overflow-hidden lg:mx-auto lg:w-full"
            >
              <Image
                src={ABOUT_IMAGES.philosophy}
                alt="ASANG design detail"
                fill
                quality={75}
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <span
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-5xl
                    text-white
                  "
                >
                  01
                </span>

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/90
                  "
                >
                  Design Philosophy
                </span>
              </div>
            </motion.div>

            {/* Philosophy */}

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
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#8F9A9B]
                  md:text-sm
                "
              >
                What We Believe
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="
                  mt-6
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.88]
                  text-[#231F20]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Design should
                <br />

                <span className="italic text-[#8F9A9B]">
                  feel effortless.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mt-9
                  max-w-xl
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2]
                  text-[#514d45]
                  md:text-base
                "
              >
                We approach every project by first
                understanding the people, context and purpose
                behind it. From there, we carefully shape
                materials, light, colour and proportion into a
                cohesive experience.
              </motion.p>

              {/* Principles */}

              <motion.div
                variants={fadeUp}
                className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-7"
              >
                <Principle
                  number="01"
                  title="Context"
                  text="Design that responds to place, people and purpose."
                />

                <Principle
                  number="02"
                  title="Material"
                  text="Materials selected for character, texture and longevity."
                />

                <Principle
                  number="03"
                  title="Light"
                  text="Natural and artificial light shaping atmosphere."
                />

                <Principle
                  number="04"
                  title="Living"
                  text="Spaces created around real everyday experiences."
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          JOURNEY / 2022
      ====================================================== */}

      <section className="bg-[#EAE4D9] px-5 py-20 sm:px-10 sm:py-24 md:px-16 md:py-32 lg:px-24">
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
              className="flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#8F9A9B]" />

              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#777168]
                  md:text-sm
                "
              >
                Our Journey
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-10 md:grid-cols-[0.65fr_1.35fr]"
            >
              <h2
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-6xl
                  font-medium
                  leading-[0.8]
                  text-[#231F20]
                  sm:text-7xl
                  md:text-8xl
                "
              >
                Since
                <br />

                <span className="italic text-[#777168]">
                  2022
                </span>
              </h2>

              <div className="md:pt-3">
                <p
                  className="
                    max-w-2xl
                    font-[family-name:var(--font-montserrat)]
                    text-sm
                    font-medium
                    leading-[2]
                    text-[#514d45]
                    md:text-base
                  "
                >
                  From our beginning in 2022, ASANG has been
                  guided by a simple ambition — to create
                  interiors that remain relevant beyond
                  passing trends.
                </p>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    font-[family-name:var(--font-montserrat)]
                    text-sm
                    font-medium
                    leading-[2]
                    text-[#514d45]
                    md:text-base
                  "
                >
                  Every project is an opportunity to explore
                  new ideas while staying grounded in the
                  fundamentals of good design.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}

          <div className="mt-14 border-t border-[#231F20]/25 sm:mt-20">
            <TimelineItem
              year="2022"
              title="The Beginning"
              text="ASANG Design Studio begins with a shared vision for meaningful design."
            />

            <TimelineItem
              year="01"
              title="Ideas Into Spaces"
              text="Concepts evolve through material, proportion, light and functionality."
            />

            <TimelineItem
              year="NOW"
              title="Looking Forward"
              text="Continuing to create spaces that feel personal, timeless and considered."
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          IMAGE STRIP
      ====================================================== */}

      <section className="bg-[#231F20] px-6 py-20 sm:px-10 md:px-16 md:py-24 lg:px-24">
        <div className="mx-auto max-w-7xl">

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative aspect-[4/3] overflow-hidden sm:aspect-[2/1]"
          >
            <Image
              src={ABOUT_IMAGES.detail}
              alt="ASANG interior design"
              fill
              quality={75}
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <p
                className="
                  max-w-4xl
                  font-[family-name:var(--font-cormorant)]
                  text-3xl
                  font-medium
                  leading-[1]
                  sm:text-4xl
                  text-white
                  sm:text-5xl
                  md:text-7xl
                "
              >
                “The spaces we create should
                <br />

                <span className="italic text-[#DCC9A8]">
                  become part of the lives within them.
                </span>
                ”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="bg-[#DCC9A8] px-5 py-20 sm:px-10 sm:py-24 md:px-16 md:py-32 lg:px-24">
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
            amount: 0.3,
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
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#6C665D]
                  md:text-sm
                "
              >
                Start a Conversation
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
                Have a space
                <br />

                <span className="italic">
                  in mind?
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-lg
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-[2]
                  text-[#4b453e]
                  md:text-base
                "
              >
                Let's turn your ideas into a space that
                reflects who you are and how you want to live.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                sm:w-fit
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
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  sm:text-sm
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
            </Link>

          </div>
        </motion.div>
      </section>
    </main>
  );
}

// ============================================================
// PRINCIPLE
// ============================================================

function Principle({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-[#231F20]/20 pt-5">

      <div className="flex items-center gap-4">
        <span
          className="
            font-[family-name:var(--font-montserrat)]
            text-xs
            font-semibold
            tracking-[0.2em]
            text-[#8F9A9B]
          "
        >
          {number}
        </span>

        <h3
          className="
            font-[family-name:var(--font-cormorant)]
            text-xl
            font-medium
            sm:text-2xl
            text-[#231F20]
          "
        >
          {title}
        </h3>
      </div>

      <p
        className="
          mt-3
          max-w-xs
          font-[family-name:var(--font-montserrat)]
          text-sm
          font-medium
          leading-[1.8]
          text-[#514d45]
        "
      >
        {text}
      </p>
    </div>
  );
}

// ============================================================
// TIMELINE ITEM
// ============================================================

function TimelineItem({
  year,
  title,
  text,
}: {
  year: string;
  title: string;
  text: string;
}) {
  return (
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        grid
        gap-5
        border-b
        border-[#231F20]/25
        py-7
        md:grid-cols-[0.25fr_0.5fr_1.25fr]
        md:items-center
        md:gap-8
      "
    >
      <span
        className="
          font-[family-name:var(--font-cormorant)]
          text-3xl
          text-[#777168]
        "
      >
        {year}
      </span>

      <h3
        className="
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
          max-w-xl
          font-[family-name:var(--font-montserrat)]
          text-sm
          font-medium
          leading-[1.9]
          text-[#514d45]
          md:text-base
        "
      >
        {text}
      </p>
    </motion.div>
  );
}