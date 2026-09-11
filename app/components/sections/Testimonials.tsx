'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "The studio transformed our space into a true sanctuary. Their attention to material details and spatial flow is completely unmatched.",
    author: "Elena Rodriguez",
    project: "Villa Nova Residency"
  },
  {
    id: 2,
    quote: "A seamless collaborative experience. They captured our exact vision for a minimalist yet incredibly warm and inviting environment.",
    author: "James Harrington",
    project: "Urban Loft Renovation"
  },
  {
    id: 3,
    quote: "A masterclass in balancing aesthetics and functionality. Every corner of our new home feels curated, intentional, and deeply personal.",
    author: "Sophia Chen",
    project: "Lakeside Estate"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="bg-[#e5dcc7] text-gray-900 py-32 px-8 md:px-24 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase mb-12 font-medium text-gray-600"
        >
          Client Voices
        </motion.p>

        {/* Carousel Container */}
        <div className="relative w-full min-h-[250px] md:min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full px-4"
            >
              <h3 className="text-2xl md:text-4xl font-serif leading-relaxed mb-8 text-gray-800">
                "{testimonials[currentIndex].quote}"
              </h3>
              <div className="flex flex-col items-center gap-1">
                <p className="font-serif text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-xs tracking-widest uppercase text-gray-500">
                  {testimonials[currentIndex].project}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-8 mt-12"
        >
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            aria-label="Previous Testimonial"
          >
            {/* Minimalist Left Arrow SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>
          
          {/* Dot Indicators */}
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-gray-900 w-6' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            aria-label="Next Testimonial"
          >
            {/* Minimalist Right Arrow SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}