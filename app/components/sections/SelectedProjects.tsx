"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

// Animation variants for the stagger effect
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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

export default function SelectedProjects() {
  return (
    <section className="bg-white px-8 py-24 text-gray-900 md:px-24">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Column 1: Architecture Feature */}
        <motion.div
          variants={itemVariants}
          className="group flex cursor-pointer flex-col"
        >
          <div className="relative mb-8 h-[250px] w-full overflow-hidden bg-gray-100">
            <img
              src="/architecture-preview.jpg"
              alt="Architecture"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Subtle Logo A Placeholder */}
          <h4 className="mb-4 font-serif text-3xl font-light">Λ</h4>

          <h3 className="mb-3 text-sm font-medium uppercase tracking-widest">
            Architecture
          </h3>

          <p className="pr-4 text-sm leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </motion.div>

        {/* Column 2: Interiors Feature */}
        <motion.div
          variants={itemVariants}
          className="group flex cursor-pointer flex-col border-gray-200 md:border-l md:pl-12"
        >
          <div className="relative mb-8 h-[250px] w-full overflow-hidden bg-gray-100">
            <img
              src="/interiors-preview.jpg"
              alt="Interiors"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Subtle Logo A Placeholder */}
          <h4 className="mb-4 font-serif text-3xl font-light">Λ</h4>

          <h3 className="mb-3 text-sm font-medium uppercase tracking-widest">
            Interiors
          </h3>

          <p className="pr-4 text-sm leading-relaxed text-gray-500">
            Curated materials of unxy cumsmns conteria sit, euismod cuamod
            incidunt ut labore et dolore.
          </p>
        </motion.div>

        {/* Column 3: Selected Projects List */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col border-gray-200 md:border-l md:pl-12"
        >
          <h3 className="mb-8 text-sm font-medium uppercase tracking-widest">
            Selected Projects
          </h3>

          <div className="flex flex-col gap-6">
            {/* Project List Item 1 */}
            <Link
              href="/projects/villa-nova"
              className="group flex items-center gap-4"
            >
              <div className="h-20 w-24 shrink-0 overflow-hidden bg-gray-100">
                <img
                  src="/project-thumb-1.jpg"
                  alt="Villa Nova"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <h4 className="font-serif text-lg transition-colors group-hover:text-gray-500">
                  Villa Nova
                </h4>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Residential
                </p>
              </div>
            </Link>

            {/* Project List Item 2 */}
            <Link
              href="/projects/minimal-workspace"
              className="group flex items-center gap-4"
            >
              <div className="h-20 w-24 shrink-0 overflow-hidden bg-gray-100">
                <img
                  src="/project-thumb-2.jpg"
                  alt="Minimal Workspace"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <h4 className="font-serif text-lg transition-colors group-hover:text-gray-500">
                  Minimal Workspace
                </h4>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Commercial
                </p>
              </div>
            </Link>

            {/* Project List Item 3 */}
            <Link
              href="/projects/urban-loft"
              className="group flex items-center gap-4"
            >
              <div className="h-20 w-24 shrink-0 overflow-hidden bg-gray-100">
                <img
                  src="/project-thumb-3.jpg"
                  alt="Urban Loft"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <h4 className="font-serif text-lg transition-colors group-hover:text-gray-500">
                  Urban Loft
                </h4>

                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">
                  Interiors
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}