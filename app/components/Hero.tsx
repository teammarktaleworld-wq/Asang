"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

/* =========================================================
   ASANG BRAND FONTS
   Primary: Cormorant Garamond
   Secondary: Montserrat
   ========================================================= */

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

/* =========================================================
   DYNAMIC HEADLINE PHRASES
   ========================================================= */

const dynamicPhrases = [
  "SPACES FOR A BETTER LIVING",
  "CRAFTING BEAUTIFUL INTERIORS",
  "REDEFINING ARCHITECTURE",
  "ELEVATING YOUR LIFESTYLE",
];

/* =========================================================
   WHATSAPP CONFIGURATION
   Uses NEXT_PUBLIC_WHATSAPP_PHONE from .env.local
   ========================================================= */

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE ||
  "919205040314";

const whatsappMessage =
  "Hi ASANG Design Studio, I came across your website and would like to discuss a project. I’m interested in your architecture and interior design services. Could you please share more details?";

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

/* =========================================================
   HERO COMPONENT
   ========================================================= */

export default function Hero() {
  const [
    currentPhraseIndex,
    setCurrentPhraseIndex,
  ] = useState(0);

  /* =======================================================
     ROTATE TEXT EVERY 3.5 SECONDS
     ======================================================= */

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          dynamicPhrases.length
      );
    }, 3500);

    return () =>
      clearInterval(intervalId);
  }, []);

  return (
    <section
      className={`
        ${cormorant.variable}
        ${montserrat.variable}

        relative
        flex
        h-screen
        min-h-[600px]
        w-full
        items-center
        justify-center
        overflow-hidden
      `}
    >
      {/* ==================================================
          HERO BACKGROUND IMAGE
          ================================================== */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-india.webp"
          alt="Asang Design Studio - Architecture and Interiors"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ==================================================
          HERO CONTENT
          ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-5xl
          flex-col
          items-center
          px-6
          text-center
          text-white
          md:px-8
        "
      >
        {/* ==================================================
            BRAND / LOGO
            ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mb-4
            flex
            flex-col
            items-center
            md:mb-6
          "
        >
          <Image
            src="/Asang-logo-trans-white.png"
            alt="Asang Logo"
            width={400}
            height={150}
            priority
            className="
              h-auto
              w-64
              drop-shadow-lg
              sm:w-80
              md:w-96
              lg:w-[400px]
            "
          />
        </motion.div>

        {/* ==================================================
            DYNAMIC HEADLINE
            ================================================== */}

        <div
          className="
            mb-10
            flex
            min-h-[60px]
            items-center
            justify-center
            md:mb-12
            md:min-h-[80px]
          "
        >
          <AnimatePresence mode="wait">
            <motion.h3
              key={currentPhraseIndex}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="
                font-[family-name:var(--font-cormorant)]
                text-2xl
                leading-tight
                drop-shadow-xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              {dynamicPhrases[
                currentPhraseIndex
              ]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* ==================================================
            ACTION BUTTONS
            ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
            sm:gap-6
          "
        >
          {/* ==================================================
              WHATSAPP BUTTON
              ================================================== */}

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with ASANG Design Studio on WhatsApp"
            className="
              group
              relative
              flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white/20
              bg-white/10
              px-7
              py-4
              font-[family-name:var(--font-montserrat)]
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/40
              hover:bg-white/20
            "
          >
            {/* Shine effect */}

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform
                duration-700
                ease-out
                group-hover:translate-x-full
              "
            />

            {/* WhatsApp Icon */}

            <svg
              className="
                relative
                z-10
                h-5
                w-5
                text-green-400
              "
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            <span
              className="
                relative
                z-10
                text-xs
                font-semibold
                uppercase
                tracking-widest
              "
            >
              WhatsApp Us
            </span>
          </Link>

          {/* ==================================================
              BOOK CONSULTATION BUTTON
              ================================================== */}

          <Link
            href="/contact"
            className="
              group
              relative
              flex
              items-center
              gap-3
              overflow-hidden
              rounded-full
              border
              border-white/30
              bg-black/30
              px-7
              py-4
              font-[family-name:var(--font-montserrat)]
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/50
              hover:bg-black/50
              hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
            "
          >
            <span
              className="
                relative
                z-10
                text-xs
                font-semibold
                uppercase
                tracking-widest
              "
            >
              Book Consultation
            </span>

            {/* Arrow */}

            <svg
              className="
                relative
                z-10
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1.5
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}