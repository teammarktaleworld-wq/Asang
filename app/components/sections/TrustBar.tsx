"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

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

const trustItems = [
  {
    number: "4.9",
    symbol: "★",
    title: "Google Rating",
    description: "Highly Rated by Clients",
  },
  {
    number: "50+",
    symbol: "",
    title: "Projects",
    description: "Thoughtfully Designed Spaces",
  },
  {
    number: "10+",
    symbol: "",
    title: "Years",
    description: "Of Design Experience",
  },
  {
    number: "3",
    symbol: "",
    title: "Countries",
    description: "India • UAE • Malaysia",
  },
];

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
        py-12
        sm:px-8
        md:px-12
        lg:px-16
        lg:py-16
      `}
    >
      {/* Subtle background glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[#c9b58a]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main bordered container */}

        <div
          className="
            overflow-hidden
            rounded-[14px]
            border
            border-[#c9b58a]/40
            bg-[#171512]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              divide-y
              divide-[#c9b58a]/20

              md:grid-cols-2
              md:divide-x
              md:divide-y-0

              lg:grid-cols-4
            "
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={item.title}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="
                  group
                  flex
                  min-h-[190px]
                  flex-col
                  items-center
                  justify-center
                  px-6
                  py-10
                  text-center
                  transition-all
                  duration-500
                  hover:bg-white/[0.025]
                  sm:min-h-[200px]
                "
              >
                {/* Number */}

                <div className="flex items-center justify-center">
                  {item.symbol && (
                    <span
                      className="
                        mr-2
                        font-[family-name:var(--font-montserrat)]
                        text-lg
                        text-[#c9b58a]
                      "
                    >
                      {item.symbol}
                    </span>
                  )}

                  <span
                    className="
                      font-[family-name:var(--font-cormorant)]
                      text-5xl
                      font-medium
                      leading-none
                      text-[#e1cfaa]
                      sm:text-6xl
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* Small gold divider */}

                <div
                  className="
                    my-4
                    h-px
                    w-10
                    bg-[#c9b58a]/60
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                {/* Title */}

                <h3
                  className="
                    font-[family-name:var(--font-montserrat)]
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    max-w-[220px]
                    font-[family-name:var(--font-montserrat)]
                    text-[10px]
                    font-light
                    leading-relaxed
                    tracking-[0.08em]
                    text-white/55
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}