// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const testimonials = [
//   {
//     id: 1,
//     quote: "The studio transformed our space into a true sanctuary. Their attention to material details and spatial flow is completely unmatched.",
//     author: "Elena Rodriguez",
//     project: "Villa Nova Residency"
//   },
//   {
//     id: 2,
//     quote: "A seamless collaborative experience. They captured our exact vision for a minimalist yet incredibly warm and inviting environment.",
//     author: "James Harrington",
//     project: "Urban Loft Renovation"
//   },
//   {
//     id: 3,
//     quote: "A masterclass in balancing aesthetics and functionality. Every corner of our new home feels curated, intentional, and deeply personal.",
//     author: "Sophia Chen",
//     project: "Lakeside Estate"
//   }
// ];

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
//   };

//   return (
//     <section className="bg-[#e5dcc7] text-gray-900 py-32 px-8 md:px-24 overflow-hidden">
//       <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
//         {/* Section Header */}
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-xs tracking-[0.2em] uppercase mb-12 font-medium text-gray-600"
//         >
//           Client Voices
//         </motion.p>

//         {/* Carousel Container */}
//         <div className="relative w-full min-h-[250px] md:min-h-[200px] flex items-center justify-center">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               className="absolute w-full px-4"
//             >
//               <h3 className="text-2xl md:text-4xl font-serif leading-relaxed mb-8 text-gray-800">
//                 "{testimonials[currentIndex].quote}"
//               </h3>
//               <div className="flex flex-col items-center gap-1">
//                 <p className="font-serif text-lg">{testimonials[currentIndex].author}</p>
//                 <p className="text-xs tracking-widest uppercase text-gray-500">
//                   {testimonials[currentIndex].project}
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Navigation Controls */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="flex items-center gap-8 mt-12"
//         >
//           <button 
//             onClick={handlePrev}
//             className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
//             aria-label="Previous Testimonial"
//           >
//             {/* Minimalist Left Arrow SVG */}
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M19 12H5M5 12L12 19M5 12L12 5" />
//             </svg>
//           </button>
          
//           {/* Dot Indicators */}
//           <div className="flex gap-3">
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   idx === currentIndex ? 'bg-gray-900 w-6' : 'bg-gray-400'
//                 }`}
//                 aria-label={`Go to testimonial ${idx + 1}`}
//               />
//             ))}
//           </div>

//           <button 
//             onClick={handleNext}
//             className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
//             aria-label="Next Testimonial"
//           >
//             {/* Minimalist Right Arrow SVG */}
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M5 12H19M19 12L12 5M19 12L12 19" />
//             </svg>
//           </button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
















"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
// TESTIMONIAL DATA
// ============================================================

const testimonials = [
  {
    id: 1,
    quote:
      "ASANG understood exactly how we wanted our home to feel. The design beautifully brings together Indian warmth, natural materials and modern elegance. Every corner feels personal and thoughtfully considered.",
    author: "Ananya & Rohan Mehta",
    project: "Private Residence • Indore",
  },

  {
    id: 2,
    quote:
      "What impressed us most was their attention to detail. From the lighting and textures to the smallest finishes, everything was designed with purpose. Our home now feels calm, warm and timeless.",
    author: "Priya Sharma",
    project: "Luxury Residence • Mumbai",
  },

  {
    id: 3,
    quote:
      "The team created a space that feels contemporary without losing its Indian character. The balance of traditional materials, natural light and modern detailing is exceptional.",
    author: "Vikram & Neha Kapoor",
    project: "Villa Interior • Jaipur",
  },

  {
    id: 4,
    quote:
      "Working with ASANG was a truly collaborative experience. They listened carefully to our lifestyle and translated it into a home that is both beautiful and incredibly functional.",
    author: "Arjun Malhotra",
    project: "Modern Home • Delhi NCR",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ==========================================================
  // NEXT
  // ==========================================================

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  // ==========================================================
  // PREVIOUS
  // ==========================================================

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - 1
        : prevIndex - 1
    );
  };

  // ==========================================================
  // AUTOMATIC SLIDER
  // Changes every 5 seconds
  // ==========================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

        sm:px-8

        md:px-16
        md:py-28

        lg:px-24
        lg:py-32
      `}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND CIRCLES
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-[#8f9a9b]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-40
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-[#8f9a9b]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-[#8f9a9b]/10
        "
      />

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div className="relative mx-auto max-w-6xl">
        {/* ===================================================
            SECTION HEADER
            =================================================== */}

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
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-14 text-center md:mb-16"
        >
          {/* Small Label */}

          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#8f9a9b]" />

            <p
              className="
                font-[family-name:var(--font-montserrat)]
                text-[9px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#666158]
              "
            >
              Client Voices
            </p>

            <span className="h-px w-10 bg-[#8f9a9b]" />
          </div>

          {/* Heading */}

          <h2
            className="
              font-[family-name:var(--font-cormorant)]
              text-5xl
              font-medium
              leading-none
              text-[#231f20]

              sm:text-6xl

              md:text-7xl
            "
          >
            Stories Behind
            <br />

            <span className="italic text-[#6f7f80]">
              the Spaces.
            </span>
          </h2>

          {/* Intro */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-[family-name:var(--font-montserrat)]
              text-xs
              font-light
              leading-[1.9]
              tracking-[0.04em]
              text-[#6d685f]

              md:text-sm
            "
          >
            Every space has a story. Here are a few words
            from the people who trusted us to shape theirs.
          </p>
        </motion.div>

        {/* ===================================================
            TESTIMONIAL AREA
            =================================================== */}

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
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            border
            border-[#8f9a9b]/30
            bg-[#eee7d8]/50
          "
        >
          {/* =================================================
              TOP DECORATIVE LINE
              ================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-20
              -translate-x-1/2
              bg-[#c9b58a]
            "
          />

          {/* =================================================
              QUOTE MARK
              ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-6
              top-5
              font-[family-name:var(--font-cormorant)]
              text-8xl
              leading-none
              text-[#c9b58a]/30

              md:left-10
              md:top-7
              md:text-9xl
            "
          >
            “
          </div>

          {/* =================================================
              SLIDER
              ================================================= */}

          <div
            className="
              relative
              flex
              min-h-[430px]
              items-center
              justify-center
              px-8
              py-20

              sm:min-h-[400px]
              sm:px-12

              md:min-h-[390px]
              md:px-20
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -45,
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeInOut",
                }}
                className="w-full text-center"
              >
                {/* Quote */}

                <blockquote
                  className="
                    mx-auto
                    max-w-4xl
                    font-[family-name:var(--font-cormorant)]
                    text-2xl
                    font-medium
                    leading-[1.4]
                    text-[#332f2a]

                    sm:text-3xl

                    md:text-4xl

                    lg:text-[2.7rem]
                  "
                >
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* =================================================
                    AUTHOR
                    ================================================= */}

                <div className="mt-9 flex flex-col items-center">
                  {/* Small divider */}

                  <div
                    className="
                      mb-5
                      h-px
                      w-8
                      bg-[#8f9a9b]
                    "
                  />

                  <p
                    className="
                      font-[family-name:var(--font-cormorant)]
                      text-xl
                      font-medium
                      text-[#231f20]
                    "
                  >
                    {testimonials[currentIndex].author}
                  </p>

                  <p
                    className="
                      mt-2
                      font-[family-name:var(--font-montserrat)]
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-[#777168]
                    "
                  >
                    {testimonials[currentIndex].project}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              BOTTOM SLIDER CONTROLS
              ================================================= */}

          <div
            className="
              absolute
              bottom-7
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-6
            "
          >
            {/* Previous */}

            <button
              onClick={handlePrev}
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#8f9a9b]/50
                text-[#666158]
                transition-all
                duration-300
                hover:border-[#231f20]
                hover:bg-[#231f20]
                hover:text-white
              "
              aria-label="Previous Testimonial"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />

                <path d="M5 12L12 19" />

                <path d="M5 12L12 5" />
              </svg>
            </button>

            {/* =================================================
                DOT INDICATORS
                ================================================= */}

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() =>
                    setCurrentIndex(idx)
                  }
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500

                    ${
                      idx === currentIndex
                        ? "w-8 bg-[#231f20]"
                        : "w-1.5 bg-[#9c9589]"
                    }
                  `}
                  aria-label={`Go to testimonial ${
                    idx + 1
                  }`}
                />
              ))}
            </div>

            {/* Next */}

            <button
              onClick={handleNext}
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#8f9a9b]/50
                text-[#666158]
                transition-all
                duration-300
                hover:border-[#231f20]
                hover:bg-[#231f20]
                hover:text-white
              "
              aria-label="Next Testimonial"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12H19" />

                <path d="M19 12L12 5" />

                <path d="M19 12L12 19" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM BRAND STATEMENT
            =================================================== */}

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
            delay: 0.3,
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
          "
        >
          <p
            className="
              font-[family-name:var(--font-montserrat)]
              text-[8px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#777168]
            "
          >
            People • Spaces • Emotions
          </p>

          <p
            className="
              font-[family-name:var(--font-cormorant)]
              text-xl
              italic
              text-[#4d4841]

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