'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants for the stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function SelectedProjects() {
  return (
    <section className="bg-white text-gray-900 py-24 px-8 md:px-24">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        
        {/* Column 1: Architecture Feature */}
        <motion.div variants={itemVariants} className="flex flex-col group cursor-pointer">
          <div className="relative w-full h-[250px] mb-8 overflow-hidden bg-gray-100">
            {/* Replace src with your actual image path */}
            <img 
              src="/architecture-preview.jpg" 
              alt="Architecture" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Subtle Logo A Placeholder */}
          <h4 className="text-3xl font-serif font-light mb-4">Λ</h4>
          <h3 className="text-sm tracking-widest uppercase font-medium mb-3">
            Architecture
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </motion.div>

        {/* Column 2: Interiors Feature */}
        <motion.div variants={itemVariants} className="flex flex-col group cursor-pointer md:border-l border-gray-200 md:pl-12">
          <div className="relative w-full h-[250px] mb-8 overflow-hidden bg-gray-100">
            {/* Replace src with your actual image path */}
            <img 
              src="/interiors-preview.jpg" 
              alt="Interiors" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Subtle Logo A Placeholder */}
          <h4 className="text-3xl font-serif font-light mb-4">Λ</h4>
          <h3 className="text-sm tracking-widest uppercase font-medium mb-3">
            Interiors
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed pr-4">
            Curated materials of unxy cumsmns conteria sit, euismod cuamod incidunt ut labore et dolore.
          </p>
        </motion.div>

        {/* Column 3: Selected Projects List */}
        <motion.div variants={itemVariants} className="flex flex-col md:border-l border-gray-200 md:pl-12">
          <h3 className="text-sm tracking-widest uppercase font-medium mb-8">
            Selected Projects
          </h3>
          
          <div className="flex flex-col gap-6">
            {/* Project List Item 1 */}
            <Link href="/projects/villa-nova" className="group flex gap-4 items-center">
              <div className="w-24 h-20 overflow-hidden bg-gray-100 shrink-0">
                <img 
                  src="/project-thumb-1.jpg" 
                  alt="Villa Nova" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg group-hover:text-gray-500 transition-colors">Villa Nova</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Residential</p>
              </div>
            </Link>

            {/* Project List Item 2 */}
            <Link href="/projects/minimal-workspace" className="group flex gap-4 items-center">
              <div className="w-24 h-20 overflow-hidden bg-gray-100 shrink-0">
                <img 
                  src="/project-thumb-2.jpg" 
                  alt="Minimal Workspace" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg group-hover:text-gray-500 transition-colors">Minimal Workspace</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Commercial</p>
              </div>
            </Link>

             {/* Project List Item 3 */}
             <Link href="/projects/urban-loft" className="group flex gap-4 items-center">
              <div className="w-24 h-20 overflow-hidden bg-gray-100 shrink-0">
                <img 
                  src="/project-thumb-3.jpg" 
                  alt="Urban Loft" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg group-hover:text-gray-500 transition-colors">Urban Loft</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Interiors</p>
              </div>
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}