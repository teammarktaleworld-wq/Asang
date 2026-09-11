'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="bg-[#e5dcc7] text-gray-900 py-24 px-8 md:px-24 border-b border-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pr-12"
        >
          <p className="text-xs tracking-widest uppercase mb-4 font-medium text-gray-600">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-800">
            SPACES FOR A BETTER LIVING
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            We are saen-a dolor sit greet ameson for architecture, smdia'laon ohort flows.
          </p>
        </motion.div>

        {/* Right Column - Staggered with a slight delay */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex h-full items-center"
        >
          <p className="text-gray-600 leading-relaxed text-sm md:border-l border-gray-400 md:pl-12 py-4">
            We pronate a the record design to might consdeware and collaborative experience overcoming thandrun.
          </p>
        </motion.div>

      </div>
    </section>
  );
}