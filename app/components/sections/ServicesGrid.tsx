'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Service data - easily expandable
const services = [
  {
    id: '01',
    title: 'ARCHITECTURE',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod rion.',
    image: '/architecture-img.jpg', // Replace with your actual image path
  },
  {
    id: '02',
    title: 'INTERIORS',
    description: 'Curated materials of unxy cumsmns conteria sit, euismod curmod incidunt.',
    image: '/interiors-img.jpg', // Replace with your actual image path
  }
];

// Framer Motion variants for the staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delays each child animation by 0.2s
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

export default function ServicesGrid() {
  return (
    <section className="bg-white w-full border-b border-gray-300">
      {/* 
        Using CSS Grid to match the reference image's strict structural lines.
        Divides into 3 columns on desktop (2 for services, 1 for next section transition if needed).
      */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service) => (
          <motion.div 
            key={service.id} 
            variants={cardVariants}
            className="p-8 md:p-12 flex flex-col group cursor-pointer"
          >
            {/* Image Container with hover zoom effect */}
            <div className="relative w-full h-64 md:h-72 mb-8 overflow-hidden bg-gray-100">
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            
            {/* Decorative Icon / Logo Mark (The 'A' shape in the design) */}
            <div className="mb-6">
              <span className="text-3xl font-serif font-light tracking-widest text-gray-800">
                A
              </span>
            </div>

            {/* Typography */}
            <h3 className="text-lg tracking-[0.15em] font-medium text-gray-900 mb-4 uppercase">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}

        {/* Third column placeholder (matches the 'Selected Projects' column in the image) */}
        <motion.div 
          variants={cardVariants}
          className="p-8 md:p-12 flex flex-col justify-start"
        >
           <h3 className="text-sm tracking-[0.15em] font-medium text-gray-900 mb-8 uppercase">
              Selected Projects
            </h3>
            <div className="relative w-full h-40 bg-gray-100 overflow-hidden cursor-pointer group">
               {/* Small preview image for the projects section */}
               <Image 
                src="/projects-preview.jpg" 
                alt="Selected Projects Preview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
        </motion.div>

      </motion.div>
    </section>
  );
}