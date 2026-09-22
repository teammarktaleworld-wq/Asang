"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

// ─────────────────────────────────────────────
// FONTS
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// ANIMATION EASING
// ─────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_EXIT = [0.4, 0, 1, 1] as const;

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const BASE = "/images/asang main images";

type CatImage = {
  src: string;
  title: string;
};

type Cat = {
  id: string;
  label: string;
  sub: string;
  count: number;
  accent: string;
  images: [CatImage, CatImage, CatImage];
};

// Luxury is index 0 — default
const CATS: Cat[] = [
  {
    id: "luxury",
    label: "Luxury",
    sub: "Material precision · Spatial calm",
    count: 15,
    accent: "#c9b58a",
    images: [
      {
        src: `${BASE}/Luxury/image1.webp`,
        title: "Luxury 01",
      },
      {
        src: `${BASE}/Luxury/image4.webp`,
        title: "Luxury 04",
      },
      {
        src: `${BASE}/Luxury/image7.webp`,
        title: "Luxury 07",
      },
    ],
  },

  {
    id: "penthouse",
    label: "Penthouse",
    sub: "Open volumes · Curated views",
    count: 8,
    accent: "#b0a07a",
    images: [
      {
        src: `${BASE}/Penthouse/image1.webp`,
        title: "Penthouse 01",
      },
      {
        src: `${BASE}/Penthouse/image3.webp`,
        title: "Penthouse 03",
      },
      {
        src: `${BASE}/Penthouse/image5.webp`,
        title: "Penthouse 05",
      },
    ],
  },

  {
    id: "commercial",
    label: "Commercial",
    sub: "Architecture as statement",
    count: 10,
    accent: "#9e8e78",
    images: [
      {
        src: `${BASE}/commercial/image1.webp`,
        title: "Commercial 01",
      },
      {
        src: `${BASE}/commercial/image4.webp`,
        title: "Commercial 04",
      },
      {
        src: `${BASE}/commercial/image7.webp`,
        title: "Commercial 07",
      },
    ],
  },

  {
    id: "service-apartment",
    label: "Service Apt",
    sub: "Compact · Complete · Considered",
    count: 10,
    accent: "#b8a882",
    images: [
      {
        src: `${BASE}/Service apartment/image1.webp`,
        title: "Service Apt 01",
      },
      {
        src: `${BASE}/Service apartment/image4.webp`,
        title: "Service Apt 04",
      },
      {
        src: `${BASE}/Service apartment/image7.webp`,
        title: "Service Apt 07",
      },
    ],
  },
];

const INTERVAL = 4500;

// ─────────────────────────────────────────────
// SLIDE ANIMATION
// ─────────────────────────────────────────────

function slideVariants(dir: number): Variants {
  return {
    enter: {
      x: dir > 0 ? "30%" : "-30%",
      opacity: 0,
      scale: 1.04,
    },

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: EASE,
      },
    },

    exit: {
      x: dir > 0 ? "-20%" : "20%",
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.45,
        ease: EASE_EXIT,
      },
    },
  };
}

// ─────────────────────────────────────────────
// PARALLAX IMAGE
// ─────────────────────────────────────────────

function ParallaxImg({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-5%", "5%"]
  );

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        loading="lazy"
        className="
          absolute -inset-y-[6%] inset-x-0
          h-[112%] w-full object-cover
          transition-transform duration-[1.1s] ease-out
          group-hover:scale-[1.05]
        "
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// MAGNETIC CTA
// ─────────────────────────────────────────────

function MagneticCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, {
    stiffness: 180,
    damping: 14,
  });

  const sy = useSpring(y, {
    stiffness: 180,
    damping: 14,
  });

  return (
    <motion.div
      style={{
        x: sx,
        y: sy,
      }}
      className="inline-block"
    >
      <Link
        href="/portfolio"
        onPointerMove={(e) => {
          const b =
            e.currentTarget.getBoundingClientRect();

          x.set(
            (e.clientX - b.left - b.width / 2) * 0.3
          );

          y.set(
            (e.clientY - b.top - b.height / 2) * 0.3
          );
        }}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="
          group inline-flex items-center gap-4
          rounded-full
          border border-[#c9b58a]/40
          px-7 py-3
          font-[family-name:var(--font-montserrat)]
          text-[10px] font-semibold uppercase
          tracking-[0.22em] text-[#ddc99a]
          transition-all duration-300
          hover:border-[#c9b58a]
          hover:bg-[#c9b58a]
          hover:text-[#1a1714]
        "
      >
        View All Projects

        <svg
          className="
            h-3.5 w-3.5
            transition-transform duration-300
            group-hover:translate-x-1
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14m-6-6 6 6-6 6"
          />
        </svg>
      </Link>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function SelectedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const timerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─────────────────────────────────────────────
  // CHANGE SLIDE
  // ─────────────────────────────────────────────

  const go = useCallback(
    (next: number) => {
      const clamped =
        (next + CATS.length) % CATS.length;

      setDir(
        clamped > activeIdx ||
          (activeIdx === CATS.length - 1 &&
            clamped === 0)
          ? 1
          : -1
      );

      setActiveIdx(clamped);
    },
    [activeIdx]
  );

  // ─────────────────────────────────────────────
  // AUTO ADVANCE
  // ─────────────────────────────────────────────

  useEffect(() => {
    if (paused) return;

    timerRef.current = setTimeout(() => {
      go(activeIdx + 1);
    }, INTERVAL);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIdx, paused, go]);

  const cat = CATS[activeIdx];
  const vars = slideVariants(dir);

  return (
    <section
      ref={sectionRef}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      className={`
        ${cormorant.variable}
        ${montserrat.variable}

        relative overflow-hidden
        bg-[#1a1714]
        text-white

        px-5 py-14
        sm:px-8 sm:py-16
        md:px-12 md:py-20
        lg:px-16 lg:py-24
      `}
    >
      <div className="relative mx-auto max-w-[1360px]">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            mb-10
            flex flex-col gap-6
            sm:flex-row
            sm:items-end
            sm:justify-between
            md:mb-12
          "
        >
          {/* LEFT HEADER */}

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-4 flex items-center gap-4"
            >
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                style={{
                  transformOrigin: "left",
                }}
                className="
                  block h-px w-9
                  bg-[#c9b58a]
                "
              />

              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#c9b58a]
                "
              >
                Selected Works
              </span>
            </motion.div>

            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                font-medium
                leading-[0.93]
                tracking-tight
                text-[#f0ebe0]
                text-[clamp(2.4rem,6vw,4.5rem)]
              "
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{
                    y: "110%",
                  }}
                  whileInView={{
                    y: "0%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.85,
                    ease: EASE,
                  }}
                  className="block"
                >
                  Spaces that
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  initial={{
                    y: "110%",
                  }}
                  whileInView={{
                    y: "0%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.1,
                    ease: EASE,
                  }}
                  className="
                    block
                    italic
                    text-[#c9b58a]
                  "
                >
                  speak for themselves.
                </motion.span>
              </span>
            </h2>
          </div>

          {/* CATEGORY TABS */}

          <div
            className="
              flex items-end
              gap-6
              overflow-x-auto
              pb-0.5
              scrollbar-none
              sm:gap-8
            "
          >
            {CATS.map((c, i) => {
              const isActive = i === activeIdx;

              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setDir(
                      i > activeIdx ? 1 : -1
                    );
                    setActiveIdx(i);
                  }}
                  className="
                    group relative shrink-0
                    flex flex-col
                    items-start
                    gap-1
                    pb-3
                    focus-visible:outline-none
                  "
                >
                  <motion.div
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    style={{
                      transformOrigin: "left",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: EASE,
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-[1px]
                      bg-[#c9b58a]
                    "
                  />

                  <span
                    className={`
                      font-[family-name:var(--font-montserrat)]
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "text-white"
                          : "text-white/30 group-hover:text-white/60"
                      }
                    `}
                  >
                    {c.label}
                  </span>

                  <span
                    className={`
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      transition-colors
                      duration-300

                      ${
                        isActive
                          ? "text-[#c9b58a]"
                          : "text-white/15"
                      }
                    `}
                  >
                    {String(c.count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            MAIN GRID
        ================================================== */}

        <AnimatePresence
          mode="popLayout"
          custom={dir}
        >
          <motion.div
            key={cat.id}
            custom={dir}
            variants={vars}
            initial="enter"
            animate="center"
            exit="exit"
            className="
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-2
              md:gap-4
              lg:grid-cols-[1fr_1fr_220px]
            "
          >
            {/* ==================================================
                IMAGE 1 — TALL HERO
            ================================================== */}

            <div
              className="
                group
                relative
                row-span-2
                overflow-hidden
                bg-[#1c1917]
              "
              style={{
                aspectRatio: "3/4",
              }}
            >
              <ParallaxImg
                src={cat.images[0].src}
                alt={cat.images[0].title}
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/65
                  via-transparent
                  to-transparent
                "
              />

              {/* Number */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                "
              >
                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-white/50
                  "
                >
                  01
                </span>
              </div>

              {/* Category badge */}

              <div
                className="
                  absolute
                  right-4
                  top-4
                "
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${cat.id}-badge`}
                    initial={{
                      opacity: 0,
                      y: -4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 4,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      rounded-full
                      border
                      border-white/25
                      bg-black/25
                      px-3 py-1
                      backdrop-blur-sm

                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white
                    "
                  >
                    {cat.label}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Bottom title */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  translate-y-1
                  p-5
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={`${cat.id}-title`}
                    initial={{
                      y: "80%",
                      opacity: 0,
                    }}
                    animate={{
                      y: "0%",
                      opacity: 1,
                    }}
                    exit={{
                      y: "-40%",
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                    }}
                    className="
                      font-[family-name:var(--font-cormorant)]
                      text-2xl
                      font-medium
                      text-white
                      sm:text-3xl
                    "
                  >
                    {cat.label}
                  </motion.h3>
                </AnimatePresence>

                <p
                  className="
                    mt-1
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                  "
                >
                  {cat.sub}
                </p>
              </div>

              {/* Expand icon */}

              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  flex items-center
                  justify-center
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    flex
                    h-12 w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/15
                    backdrop-blur-sm
                  "
                >
                  <svg
                    className="
                      h-4 w-4
                      text-white
                    "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <path
                      d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* ==================================================
                IMAGE 2 — SQUARE
            ================================================== */}

            <div
              className="
                group
                relative
                overflow-hidden
                bg-[#1c1917]
              "
              style={{
                aspectRatio: "1/1",
              }}
            >
              <ParallaxImg
                src={cat.images[1].src}
                alt={cat.images[1].title}
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-transparent
                  to-black/40
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  absolute
                  left-4
                  top-4
                "
              >
                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  02
                </span>
              </div>
            </div>

            {/* ==================================================
                IMAGE 3 — LANDSCAPE
            ================================================== */}

            <div
              className="
                group
                relative
                overflow-hidden
                bg-[#1c1917]
              "
              style={{
                aspectRatio: "16/9",
              }}
            >
              <ParallaxImg
                src={cat.images[2].src}
                alt={cat.images[2].title}
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/50
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  absolute
                  left-4
                  top-4
                "
              >
                <span
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  03
                </span>
              </div>
            </div>

            {/* ==================================================
                INFO PANEL — DESKTOP
            ================================================== */}

            <div
              className="
                hidden
                flex-col
                justify-between
                row-span-2
                border-l
                border-white/8
                py-1
                pl-6
                lg:flex
              "
            >
              {/* Active category */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${cat.id}-panel`}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: EASE,
                  }}
                >
                  <p
                    className="
                      mb-4
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.35em]
                      text-white/30
                    "
                  >
                    Currently viewing
                  </p>

                  <h3
                    className="
                      mb-2
                      font-[family-name:var(--font-cormorant)]
                      text-3xl
                      font-medium
                      leading-none
                    "
                    style={{
                      color: cat.accent,
                    }}
                  >
                    {cat.label}
                  </h3>

                  <p
                    className="
                      mb-6
                      font-[family-name:var(--font-montserrat)]
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      leading-loose
                      text-white/40
                    "
                  >
                    {cat.sub}
                  </p>

                  <div
                    className="
                      mb-6
                      h-px
                      w-full
                      bg-white/8
                    "
                  />

                  <p
                    className="
                      mb-1
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/25
                    "
                  >
                    Works
                  </p>

                  <p
                    className="
                      font-[family-name:var(--font-cormorant)]
                      text-5xl
                      font-medium
                      leading-none
                    "
                    style={{
                      color: cat.accent,
                    }}
                  >
                    {String(cat.count).padStart(2, "0")}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress + navigation */}

              <div>
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      font-[family-name:var(--font-montserrat)]
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/25
                    "
                  >
                    {String(activeIdx + 1).padStart(
                      2,
                      "0"
                    )}{" "}
                    /{" "}
                    {String(CATS.length).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        go(activeIdx - 1)
                      }
                      className="
                        flex
                        h-8 w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/12
                        text-white/35
                        transition-colors
                        duration-200
                        hover:border-white/35
                        hover:text-white
                      "
                      aria-label="Previous"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10 2L4 8l6 6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        go(activeIdx + 1)
                      }
                      className="
                        flex
                        h-8 w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/12
                        text-white/35
                        transition-colors
                        duration-200
                        hover:border-white/35
                        hover:text-white
                      "
                      aria-label="Next"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 2l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* ==================================================
                    FIXED PROGRESS BAR
                    Only ONE style prop
                ================================================== */}

                <div
                  className="
                    h-[1px]
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-white/8
                  "
                >
                  <motion.div
                    key={`${cat.id}-bar`}
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: paused
                        ? undefined
                        : 1,
                    }}
                    transition={{
                      duration: INTERVAL / 1000,
                      ease: "linear",
                    }}
                    style={{
                      background: cat.accent,
                      transformOrigin: "left",
                    }}
                    className="
                      h-full
                      rounded-full
                    "
                  />
                </div>

                <div className="mt-6">
                  <MagneticCTA />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ==================================================
            MOBILE / TABLET BOTTOM BAR
        ================================================== */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            lg:hidden
          "
        >
          {/* Dot progress */}

          <div className="flex items-center gap-2">
            {CATS.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setDir(
                    i > activeIdx ? 1 : -1
                  );
                  setActiveIdx(i);
                }}
                aria-label={`Go to ${c.label}`}
                className="
                  focus-visible:outline-none
                "
              >
                <motion.div
                  animate={{
                    width:
                      i === activeIdx ? 20 : 5,
                    opacity:
                      i === activeIdx ? 1 : 0.28,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: EASE,
                  }}
                  className="
                    h-[2px]
                    rounded-full
                    bg-[#c9b58a]
                  "
                />
              </button>
            ))}
          </div>

          {/* Prev / next */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <button
              type="button"
              onClick={() =>
                go(activeIdx - 1)
              }
              className="
                flex
                h-9 w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/40
                transition-colors
                duration-200
                hover:border-white/40
                hover:text-white
              "
              aria-label="Previous"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 2L4 8l6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() =>
                go(activeIdx + 1)
              }
              className="
                flex
                h-9 w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                text-white/40
                transition-colors
                duration-200
                hover:border-white/40
                hover:text-white
              "
              aria-label="Next"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 2l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ==================================================
            FOOTER ROW
        ================================================== */}

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
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-10
            flex
            flex-col
            items-start
            justify-between
            gap-5
            border-t
            border-white/8
            pt-8

            sm:flex-row
            sm:items-center

            md:mt-12
            md:pt-10

            lg:hidden
          "
        >
          <div>
            <p
              className="
                font-[family-name:var(--font-cormorant)]
                text-xl
                italic
                text-white/75
                sm:text-2xl
              "
            >
              Design beyond spaces.
            </p>

            <p
              className="
                mt-1.5
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white/30
              "
            >
              People · Spaces · Emotions
            </p>
          </div>

          <MagneticCTA />
        </motion.div>
      </div>
    </section>
  );
}