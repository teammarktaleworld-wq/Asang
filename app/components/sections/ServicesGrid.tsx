"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

// Service data - easily expandable
const services = [
  {
    id: "01",
    title: "ARCHITECTURE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod rion.",
    image: "/architecture-img.jpg",
  },
  {
    id: "02",
    title: "INTERIORS",
    description:
      "Curated materials of unxy cumsmns conteria sit, euismod curmod incidunt.",
    image: "/interiors-img.jpg",
  },
];

// Framer Motion variants for the staggered animation
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function ServicesGrid() {
  return (
    <section className="w-full border-b border-gray-300 bg-white">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-300 md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="group flex cursor-pointer flex-col p-8 md:p-12"
          >
            {/* Image Container with hover zoom effect */}
            <div className="relative mb-8 h-64 w-full overflow-hidden bg-gray-100 md:h-72">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Decorative Icon / Logo Mark */}
            <div className="mb-6">
              <span className="font-serif text-3xl font-light tracking-widest text-gray-800">
                A
              </span>
            </div>

            {/* Typography */}
            <h3 className="mb-4 text-lg font-medium uppercase tracking-[0.15em] text-gray-900">
              {service.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-500">
              {service.description}
            </p>
          </motion.div>
        ))}

        {/* Third column - Selected Projects */}
        <motion.div
          variants={cardVariants}
          className="flex flex-col justify-start p-8 md:p-12"
        >
          <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.15em] text-gray-900">
            Selected Projects
          </h3>

          {/* Small preview image for the projects section */}
          <div className="group relative h-40 w-full cursor-pointer overflow-hidden bg-gray-100">
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
