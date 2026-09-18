"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
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

// Cards now animate in with a clip-path wipe rather than a
// plain fade/slide, so each project reveals like a curtain
// lifting on the frame rather than just drifting into place.
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    clipPath: "inset(0% 0% 100% 0%)",
  },

  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",

    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
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
  const cardRef = useRef<HTMLDivElement>(null);

  // ----------------------------------------------------------
  // SCROLL-LINKED PARALLAX
  //
  // Tracks this card's own progress through the viewport and
  // drifts the image inside its frame — the classic "premium"
  // editorial parallax where the photo moves slower than the
  // page around it.
  // ----------------------------------------------------------

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.55, 0.85, 0.55]
  );

  // ----------------------------------------------------------
  // POINTER TILT
  //
  // A restrained 3D tilt that follows the cursor, springed so
  // it settles rather than snaps — gives the card weight.
  // ----------------------------------------------------------

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const bounds = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - bounds.left) / bounds.width - 0.5;
    const py = (e.clientY - bounds.top) / bounds.height - 0.5;

    rotateY.set(px * 6);
    rotateX.set(py * -6);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      variants={itemVariants}
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1200,
      }}
      className={`
        group
        relative
        overflow-hidden
        will-change-transform
        ${
          index === 0
            ? "md:col-span-2"
            : ""
        }
      `}
    >
      <div className="block">
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
          {/* IMAGE — parallaxed, oversized so the drift never
              exposes an edge */}

          <motion.img
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            style={{ y: imageY }}
            className="
              absolute
              -inset-y-[10%]
              inset-x-0
              h-[120%]
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
              IMAGE OVERLAY — breathes gently with scroll
              progress instead of sitting static
          ================================================== */}

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/90
              via-black/25
              to-black/5

              transition-opacity
              duration-700

              group-hover:opacity-100
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
              from-black/60
              to-transparent
            "
          />

          {/* ==================================================
              PROJECT NUMBER — the divider line now draws in
              from left to right rather than appearing at once
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
                text-xs
                font-semibold
                tracking-[0.25em]
                text-white/90
              "
            >
              0{index + 1}
            </span>

            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
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
                border-white/40

                bg-black/30

                px-3
                py-1.5

                font-[family-name:var(--font-montserrat)]
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]

                text-white

                backdrop-blur-md
                sm:text-xs
              "
            >
              {project.category}
            </span>
          </div>

          {/* ==================================================
              CENTER VIEW INDICATOR — rotates open on hover
              instead of a plain scale/opacity pop
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
                rotate-45
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

                ease-[cubic-bezier(0.16,1,0.3,1)]

                group-hover:scale-100
                group-hover:rotate-0
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
              BOTTOM CONTENT — title/subtitle lift on hover so
              the frame feels responsive to the cursor, not just
              the image
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-20

              p-6

              transition-transform
              duration-500
              ease-out

              group-hover:-translate-y-1

              sm:p-8
            "
          >
            {/* Vertical */}

            <p
              className="
                mb-2

                font-[family-name:var(--font-montserrat)]
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]

                text-[#d7c39b]
              "
            >
              {project.vertical}
            </p>

            {/* TITLE */}

            <div className="flex items-end justify-between gap-5">
              <div className="overflow-hidden">
                <motion.h3
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
                </motion.h3>

                <p
                  className="
                    mt-2

                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.2em]

                    text-white/80
                    sm:text-sm
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
      </div>
    </motion.article>
  );
}

// ============================================================
// MAGNETIC CTA
//
// The "View All Projects" pill nudges toward the cursor within
// a small radius, then springs back — a single deliberate
// interactive moment rather than a hover effect repeated on
// every element.
// ============================================================

function MagneticCTA() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  function handlePointerMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - bounds.left - bounds.width / 2) * 0.35);
    y.set((e.clientY - bounds.top - bounds.height / 2) * 0.35);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        href="/portfolio"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
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

          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]

          text-[#e1cfaa]

          transition-colors
          duration-300

          hover:border-[#c9b58a]
          hover:bg-[#c9b58a]
          hover:text-[#231f20]

          sm:text-sm
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
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function SelectedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  // Section-wide scroll progress drives the vertical "thread"
  // beside the heading and a slow drift on the decorative rings
  // — one orchestrated background motion for the whole block,
  // rather than effects scattered on every element.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const threadScale = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  return (
    <section
      ref={sectionRef}
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
          DECORATIVE BACKGROUND — rotates slowly with scroll
      ====================================================== */}

      <motion.div
        style={{ rotate: ringRotate }}
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

      <motion.div
        style={{ rotate: ringRotate }}
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

      {/* Vertical thread beside the heading, drawing downward
          as the section scrolls through view */}

      <motion.div
        style={{ scaleY: threadScale }}
        className="
          pointer-events-none
          absolute
          left-0
          top-32
          bottom-32

          w-px

          origin-top

          bg-gradient-to-b
          from-[#c9b58a]/40
          via-[#c9b58a]/10
          to-transparent

          hidden
          lg:block
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
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="
                  h-px
                  w-10
                  bg-[#c9b58a]
                "
              />

              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  text-[#c9b58a]
                  md:text-sm
                "
              >
                Selected Works
              </span>
            </div>

            {/* HEADING — each line rises into place separately
                so the reveal reads as one deliberate motion */}

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
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Spaces that
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="block italic text-[#c9b58a]"
                >
                  speak for themselves.
                </motion.span>
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

                text-base
                font-medium
                leading-[1.8]

                tracking-[0.04em]

                text-white/80

                md:text-lg
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
            border-white/20

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

                text-white/90

                md:text-3xl
              "
            >
              Design beyond spaces.
            </p>

            <p
              className="
                mt-2

                font-[family-name:var(--font-montserrat)]

                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]

                text-white/60
              "
            >
              People • Spaces • Emotions
            </p>
          </div>

          {/* CTA — magnetic */}

          <MagneticCTA />
        </motion.div>
      </div>
    </section>
  );
}