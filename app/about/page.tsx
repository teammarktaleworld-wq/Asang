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
    name: "Suchit Sinha",
    role: "Founder",
    description:
      "Driven by a vision for creating spaces that balance character, functionality and timeless design.",
  },
  {
    number: "02",
    name: "Surya Sinha",
    role: "Founder",
    description:
      "Focused on creating thoughtful environments where material, proportion and everyday living come together.",
  },
  {
    number: "03",
    name: "Manoj Kumar",
    role: "Founder",
    description:
      "Bringing a practical and detail-oriented approach to transforming ideas into meaningful spaces.",
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

      <section className="relative min-h-[88vh] overflow-hidden bg-[#231F20]">
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
            -right-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#DCC9A8]/20
            md:h-[650px]
            md:w-[650px]
          "
        />

        {/* Hero content */}

        <div className="relative z-10 flex min-h-[88vh] items-end px-6 pb-16 sm:px-10 md:px-16 lg:px-24 lg:pb-20">
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
                ASANG DESIGN STUDIO
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="
                max-w-6xl
                font-[family-name:var(--font-cormorant)]
                text-[4.5rem]
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
                  tracking-[0.01em]
                  text-white/65
                  md:text-sm
                "
              >
                A design studio creating thoughtful spaces
                where architecture, interiors, materials and
                everyday life come together.
              </p>

              <div className="flex items-center gap-4">
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
                    bg-white/25
                  "
                />

                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  Founded
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-7 right-6 hidden items-center gap-4 sm:right-10 md:flex">
          <span
            className="
              font-[family-name:var(--font-montserrat)]
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            Scroll to explore
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
            <svg
              className="h-4 w-4 text-[#DCC9A8]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
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
          <div className="grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
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
                Who We Are
              </p>

              <div className="mt-6 h-px w-16 bg-[#231F20]/20" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2
                className="
                  max-w-5xl
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  leading-[0.9]
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
                  text-xs
                  font-light
                  leading-[2.1]
                  text-[#777168]
                  md:text-sm
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
                  text-xs
                  font-light
                  leading-[2.1]
                  text-[#777168]
                  md:text-sm
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

      <section className="bg-[#EAE4D9] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24">
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
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/75
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
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#8F9A9B]
                  "
                >
                  Our Beginning
                </p>

                <h2
                  className="
                    mt-6
                    font-[family-name:var(--font-cormorant)]
                    text-5xl
                    font-medium
                    leading-[0.88]
                    text-[#231F20]
                    sm:text-6xl
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
                  text-xs
                  font-light
                  leading-[2]
                  text-[#777168]
                  md:text-sm
                "
              >
                In 2022, three founders came together with
                a common belief: design should make everyday
                life better.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="
                  mt-5
                  max-w-lg
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2]
                  text-[#777168]
                  md:text-sm
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
                    text-[8px]
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

      <section className="bg-[#231F20] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
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
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#DCC9A8]
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
                  text-5xl
                  font-medium
                  leading-[0.88]
                  text-[#F7F4EE]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Three minds.
                <br />
                <span className="italic text-[#DCC9A8]">
                  One vision.
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-2xl
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-light
                  leading-[2]
                  text-white/45
                  md:text-sm
                "
              >
                ASANG was born from the collaboration of
                three founders who share a passion for
                thoughtful design, meaningful spaces and
                lasting ideas.
              </p>
            </motion.div>
          </motion.div>

          {/* Founder cards */}

          <div className="mt-20 grid border-t border-white/10 md:grid-cols-3">
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
                  border-white/10
                  py-10
                  md:border-b-0
                  md:border-r
                  md:px-8
                  md:py-12
                  first:md:pl-0
                  last:md:border-r-0
                  last:md:pr-0
                "
              >
                {/* Number */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      tracking-[0.25em]
                      text-[#DCC9A8]
                    "
                  >
                    {founder.number}
                  </span>

                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/25
                    "
                  >
                    {founder.role}
                  </span>
                </div>

                {/* Name */}

                <h3
                  className="
                    mt-14
                    font-[family-name:var(--font-cormorant)]
                    text-4xl
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

                <div className="mt-6 h-px w-10 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#DCC9A8]" />

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-sm
                    font-[family-name:var(--font-montserrat)]
                    text-[10px]
                    font-light
                    leading-[1.9]
                    text-white/40
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
          PHILOSOPHY
      ====================================================== */}

      <section className="bg-[#F7F4EE] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-24">
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
                    text-[7px]
                    uppercase
                    tracking-[0.25em]
                    text-white/60
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
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-[#8F9A9B]
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
                  text-xs
                  font-light
                  leading-[2]
                  text-[#777168]
                  md:text-sm
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
                className="mt-12 grid gap-7 sm:grid-cols-2"
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
              className="flex items-center gap-4"
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
                    text-xs
                    font-light
                    leading-[2]
                    text-[#777168]
                    md:text-sm
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
                    text-xs
                    font-light
                    leading-[2]
                    text-[#777168]
                    md:text-sm
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

          <div className="mt-20 border-t border-[#231F20]/15">
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
            className="relative aspect-[2/1] overflow-hidden"
          >
            <Image
              src={ABOUT_IMAGES.detail}
              alt="ASANG interior design"
              fill
              quality={75}
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <p
                className="
                  max-w-4xl
                  font-[family-name:var(--font-cormorant)]
                  text-4xl
                  font-medium
                  leading-[0.95]
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
                  text-xs
                  font-light
                  leading-[2]
                  text-[#5F5951]
                  md:text-sm
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
    <div className="border-t border-[#231F20]/15 pt-5">
      <div className="flex items-center gap-4">
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

        <h3
          className="
            font-[family-name:var(--font-cormorant)]
            text-2xl
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
          text-[9px]
          font-light
          leading-[1.8]
          text-[#777168]
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
        border-[#231F20]/15
        py-8
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
          text-[10px]
          font-light
          leading-[1.9]
          text-[#777168]
          md:text-xs
        "
      >
        {text}
      </p>
    </motion.div>
  );
}