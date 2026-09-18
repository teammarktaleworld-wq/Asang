// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function ContactCTA() {
//   return (
//     <section className="bg-[#2a2c27] text-[#e5dcc7] py-32 px-8 md:px-24">
//       <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
//         {/* Animated Subheading */}
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-xs tracking-[0.3em] uppercase mb-6 font-medium text-[#e5dcc7]/70"
//         >
//           Start Your Project
//         </motion.p>

//         {/* Animated Main Heading */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
//           className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 leading-tight"
//         >
//           Let's create a space <br className="hidden md:block" /> 
//           for better living.
//         </motion.h2>

//         {/* Animated CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-50px" }}
//           transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//         >
//           <Link 
//             href="/contact"
//             className="group relative inline-flex items-center justify-center px-10 py-4 border border-[#e5dcc7] text-sm tracking-widest uppercase font-medium overflow-hidden transition-all duration-500 hover:bg-[#e5dcc7] hover:text-[#2a2c27]"
//           >
//             <span className="relative z-10 flex items-center gap-3">
//               Get in Touch
//               <svg 
//                 className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </span>
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }














'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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

export default function ContactCTA() {
  return (
    <section 
      className={`
        ${cormorant.variable} 
        ${montserrat.variable} 
        bg-[#2a2c27] 
        text-[#e5dcc7] 
        py-32 
        px-8 
        md:px-24
      `}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Animated Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            font-[family-name:var(--font-montserrat)]
            text-xs 
            md:text-sm
            tracking-[0.3em] 
            uppercase 
            mb-6 
            font-semibold 
            text-[#e5dcc7]/90
          "
        >
          Start Your Project
        </motion.p>

        {/* Animated Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="
            font-[family-name:var(--font-cormorant)]
            text-4xl 
            md:text-6xl 
            lg:text-7xl 
            font-medium 
            mb-12 
            leading-tight
          "
        >
          Let's create a space <br className="hidden md:block" /> 
          <span className="italic">for better living.</span>
        </motion.h2>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Link 
            href="/contact"
            className="
              group 
              relative 
              inline-flex 
              items-center 
              justify-center 
              px-10 
              py-4 
              border 
              border-[#e5dcc7]/60 
              font-[family-name:var(--font-montserrat)]
              text-xs
              md:text-sm 
              tracking-widest 
              uppercase 
              font-semibold 
              overflow-hidden 
              transition-all 
              duration-500 
              hover:bg-[#e5dcc7] 
              hover:border-[#e5dcc7]
              hover:text-[#2a2c27]
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              Get in Touch
              <svg 
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}