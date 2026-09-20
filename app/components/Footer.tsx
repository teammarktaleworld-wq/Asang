// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Cormorant_Garamond,
//   Montserrat,
// } from "next/font/google";

// // ============================================================
// // ASANG BRAND FONTS
// // ============================================================

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-cormorant",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-montserrat",
// });

// // ============================================================
// // ASANG ENVIRONMENT CONFIG
// // ============================================================

// const contactPerson =
//   process.env.NEXT_PUBLIC_CONTACT_PERSON || "Surya Sinha";

// const contactPhone =
//   process.env.NEXT_PUBLIC_CONTACT_PHONE || "9310140480";

// const contactPhoneDisplay =
//   process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || "9310 140 480";

// const whatsappPhone =
//   process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919205040314";

// const whatsappPhoneDisplay =
//   process.env.NEXT_PUBLIC_WHATSAPP_PHONE_DISPLAY || "9205 040 314";

// const contactEmail =
//   process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@asangstudio.com";

// const officeAddressLine1 =
//   process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE1 ||
//   "#208, Vriksh Building, A-103, Sector 63";

// const officeAddressLine2 =
//   process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE2 ||
//   "NOIDA - 201301, Uttar Pradesh, India";

// const officeAddressFull =
//   process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
//   `${officeAddressLine1}, ${officeAddressLine2}`;

// // ============================================================
// // SOCIAL LINKS — only the ones actually set in env render
// // ============================================================

// const socialLinks = [
//   { name: "Instagram", url: process.env.NEXT_PUBLIC_INSTAGRAM_URL, icon: "instagram" },
//   { name: "Facebook", url: process.env.NEXT_PUBLIC_FACEBOOK_URL, icon: "facebook" },
//   { name: "LinkedIn", url: process.env.NEXT_PUBLIC_LINKEDIN_URL, icon: "linkedin" },
//   { name: "YouTube", url: process.env.NEXT_PUBLIC_YOUTUBE_URL, icon: "youtube" },
//   { name: "X", url: process.env.NEXT_PUBLIC_X_URL, icon: "x" },
//   { name: "Pinterest", url: process.env.NEXT_PUBLIC_PINTEREST_URL, icon: "pinterest" },
// ].filter((s): s is { name: string; url: string; icon: string } => Boolean(s.url));

// // ============================================================
// // WHATSAPP / MAPS URLS
// // ============================================================

// const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
//   `Hi ${contactPerson}, I found ASANG Design Studio online and would like to discuss a project.`
// )}`;

// const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//   officeAddressFull
// )}`;

// // ============================================================
// // ICONS — matches the line weight used across the site
// // ============================================================

// function SocialIcon({ name, className }: { name: string; className?: string }) {
//   const common = {
//     className,
//     viewBox: "0 0 24 24",
//     fill: "none" as const,
//     stroke: "currentColor",
//     strokeWidth: 1.5,
//     strokeLinecap: "round" as const,
//     strokeLinejoin: "round" as const,
//   };

//   switch (name) {
//     case "instagram":
//       return (
//         <svg {...common}>
//           <rect x="3" y="3" width="18" height="18" rx="5" />
//           <circle cx="12" cy="12" r="4" />
//           <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
//         </svg>
//       );
//     case "facebook":
//       return (
//         <svg {...common}>
//           <path d="M14 8.5h2.5V5H14a4 4 0 0 0-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.4.1-.5.5-.5Z" />
//         </svg>
//       );
//     case "linkedin":
//       return (
//         <svg {...common}>
//           <rect x="3" y="3" width="18" height="18" rx="3" />
//           <path d="M7.5 10v6.5M7.5 7.2v.1M11.5 16.5V13a2 2 0 0 1 4 0v3.5M11.5 10v6.5" />
//         </svg>
//       );
//     case "youtube":
//       return (
//         <svg {...common}>
//           <rect x="2.5" y="6" width="19" height="12" rx="4" />
//           <path d="m10.5 9.5 5 2.5-5 2.5Z" fill="currentColor" stroke="none" />
//         </svg>
//       );
//     case "x":
//       return (
//         <svg {...common}>
//           <path d="M5 5l14 14M19 5 5 19" />
//         </svg>
//       );
//     case "pinterest":
//       return (
//         <svg {...common}>
//           <circle cx="12" cy="12" r="9" />
//           <path d="M10 18c1-3 1.3-5 2-8a2 2 0 1 1 3.6 1.4c-.4 1.6-1.6 3.6-3.6 3.6-1 0-1.5-.5-1.8-1" />
//         </svg>
//       );
//     case "phone":
//       return (
//         <svg {...common}>
//           <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2Z" />
//         </svg>
//       );
//     case "mail":
//       return (
//         <svg {...common}>
//           <rect x="3" y="5" width="18" height="14" rx="2" />
//           <path d="m4 7 8 6 8-6" />
//         </svg>
//       );
//     case "whatsapp":
//       return (
//         <svg {...common} strokeWidth={1.4}>
//           <path d="M7 17.5 4.5 20l.6-3.4A8 8 0 1 1 8.6 19L7 17.5Z" />
//           <path d="M9 9.3c0 3 2.7 5.7 5.7 5.7 1-1 1-2 .7-2.4l-1.6-.8-1 1a5 5 0 0 1-2-2l1-1-.8-1.6C10.9 8 9.9 8 9 9Z" />
//         </svg>
//       );
//     case "pin":
//       return (
//         <svg {...common}>
//           <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
//           <circle cx="12" cy="9" r="2.5" />
//         </svg>
//       );
//     default:
//       return null;
//   }
// }

// // ============================================================
// // FOOTER
// // ============================================================

// export default function Footer() {
//   return (
//     <footer
//       className={`
//         ${cormorant.variable}
//         ${montserrat.variable}
//         relative
//         overflow-hidden
//         bg-[#231f20]
//         px-6
//         pt-16
//         pb-8
//         text-[#e5dcc7]
//         sm:px-8
//         md:px-16
//         lg:px-24
//       `}
//     >
//       {/* Decorative background ring, consistent with the rest of the site */}
//       <div
//         className="
//           pointer-events-none
//           absolute -right-32 -top-32
//           h-[360px] w-[360px]
//           rounded-full
//           border border-[#c9b58a]/5
//         "
//       />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//         className="relative mx-auto max-w-7xl"
//       >
//         {/* ==================================================
//             TOP: BRAND  +  NEWSLETTER
//         ================================================== */}

//         <div
//           className="
//             mb-14
//             grid
//             grid-cols-1
//             gap-10
//             border-b
//             border-[#8f9a9b]/15
//             pb-14
//             md:grid-cols-[1fr_1.1fr]
//             md:gap-16
//           "
//         >
//           {/* Logo / Brand — identity only, no contact details here */}

//           <div className="flex flex-col items-start">
//             <Link
//               href="/"
//               aria-label="ASANG Design Studio Home"
//               className="group inline-block"
//             >
//               <Image
//                 src="/Asang-logo-trans-white.png"
//                 alt="ASANG Design Studio"
//                 width={180}
//                 height={64}
//                 className="
//                   h-12
//                   w-auto
//                   object-contain
//                   opacity-90
//                   transition-opacity
//                   duration-300
//                   group-hover:opacity-100
//                 "
//               />
//             </Link>

//             <p
//               className="
//                 mt-4
//                 max-w-xs
//                 font-[family-name:var(--font-montserrat)]
//                 text-sm
//                 font-medium
//                 leading-relaxed
//                 text-[#8f9a9b]
//               "
//             >
//               Thoughtful architecture and refined interiors,
//               designed around how people actually live.
//             </p>
//           </div>

//           {/* Newsletter */}

//           <div className="flex flex-col md:items-end">
//             <div className="w-full max-w-sm">
//               <h3
//                 className="
//                   mb-3
//                   font-[family-name:var(--font-montserrat)]
//                   text-xs
//                   font-semibold
//                   uppercase
//                   tracking-[0.25em]
//                   text-[#e5dcc7]
//                 "
//               >
//                 Join Our Newsletter
//               </h3>

//               <p
//                 className="
//                   mb-5
//                   font-[family-name:var(--font-montserrat)]
//                   text-sm
//                   font-medium
//                   leading-relaxed
//                   text-[#8f9a9b]
//                 "
//               >
//                 Curated insights on architecture, interiors,
//                 and new project updates.
//               </p>

//               <form
//                 onSubmit={(event) => event.preventDefault()}
//                 className="
//                   flex
//                   border-b
//                   border-[#8f9a9b]/40
//                   pb-2
//                   transition-colors
//                   duration-300
//                   focus-within:border-[#e5dcc7]
//                 "
//               >
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   aria-label="Email address"
//                   className="
//                     w-full
//                     bg-transparent
//                     font-[family-name:var(--font-montserrat)]
//                     text-sm
//                     font-medium
//                     text-[#e5dcc7]
//                     outline-none
//                     placeholder:text-[#8f9a9b]/60
//                   "
//                   required
//                 />

//                 <button
//                   type="submit"
//                   className="
//                     ml-4
//                     whitespace-nowrap
//                     font-[family-name:var(--font-montserrat)]
//                     text-xs
//                     font-semibold
//                     uppercase
//                     tracking-widest
//                     text-[#e5dcc7]/70
//                     transition-colors
//                     duration-300
//                     hover:text-white
//                   "
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* ==================================================
//             EXPLORE  /  CONTACT  /  SOCIAL  /  LEGAL
//             — each piece of information appears exactly once
//         ================================================== */}

//         <div
//           className="
//             mb-14
//             grid
//             grid-cols-2
//             gap-10
//             md:grid-cols-4
//             md:gap-8
//           "
//         >
//           {/* EXPLORE */}

//           <div className="flex flex-col gap-3">
//             <h4
//               className="
//                 mb-1
//                 font-[family-name:var(--font-montserrat)]
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-widest
//                 text-[#8f9a9b]
//               "
//             >
//               Explore
//             </h4>

//             <FooterLink href="/about">About Us</FooterLink>
//             <FooterLink href="/projects">Selected Projects</FooterLink>
//             <FooterLink href="/studio">The Studio</FooterLink>
//             <FooterLink href="/blog">Journal</FooterLink>
//           </div>

//           {/* CONTACT — single source of truth for every contact channel */}

//           <div className="flex flex-col gap-3">
//             <h4
//               className="
//                 mb-1
//                 font-[family-name:var(--font-montserrat)]
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-widest
//                 text-[#8f9a9b]
//               "
//             >
//               Contact
//             </h4>

//             <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[#e5dcc7]">
//               {contactPerson}
//             </p>

//             <a
//               href={`tel:+${contactPhone}`}
//               className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-medium text-[#e5dcc7]/80 transition-colors duration-300 hover:text-white"
//             >
//               <SocialIcon name="phone" className="h-3.5 w-3.5 shrink-0 text-[#8f9a9b]" />
//               {contactPhoneDisplay}
//             </a>

//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-medium text-[#e5dcc7]/80 transition-colors duration-300 hover:text-white"
//             >
//               <SocialIcon name="whatsapp" className="h-3.5 w-3.5 shrink-0 text-[#25D366]" />
//               {whatsappPhoneDisplay}
//             </a>

//             <a
//               href={`mailto:${contactEmail}`}
//               className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-medium text-[#e5dcc7]/80 transition-colors duration-300 hover:text-white"
//             >
//               <SocialIcon name="mail" className="h-3.5 w-3.5 shrink-0 text-[#8f9a9b]" />
//               {contactEmail}
//             </a>

//             <a
//               href={mapsUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group inline-flex items-start gap-2 font-[family-name:var(--font-montserrat)] text-sm font-medium leading-relaxed text-[#e5dcc7]/80 transition-colors duration-300 hover:text-white"
//             >
//               <SocialIcon name="pin" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8f9a9b]" />
//               <span>
//                 {officeAddressLine1}
//                 <br />
//                 {officeAddressLine2}
//               </span>
//             </a>
//           </div>

//           {/* SOCIAL — one compact list, icon + label, nothing repeated elsewhere */}

//           <div className="flex flex-col gap-3">
//             <h4
//               className="
//                 mb-1
//                 font-[family-name:var(--font-montserrat)]
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-widest
//                 text-[#8f9a9b]
//               "
//             >
//               Social
//             </h4>

//             {socialLinks.length > 0 ? (
//               socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     group
//                     inline-flex
//                     items-center
//                     gap-2
//                     font-[family-name:var(--font-montserrat)]
//                     text-sm
//                     font-medium
//                     text-[#e5dcc7]/80
//                     transition-colors
//                     duration-300
//                     hover:text-white
//                   "
//                 >
//                   <SocialIcon
//                     name={social.icon}
//                     className="h-3.5 w-3.5 shrink-0 text-[#8f9a9b] transition-colors duration-300 group-hover:text-[#c9b58a]"
//                   />
//                   {social.name}
//                 </a>
//               ))
//             ) : (
//               <p className="max-w-[180px] font-[family-name:var(--font-montserrat)] text-sm font-medium leading-relaxed text-[#8f9a9b]">
//                 Follow ASANG for project updates and studio insights.
//               </p>
//             )}
//           </div>

//           {/* LEGAL */}

//           <div className="flex flex-col gap-3">
//             <h4
//               className="
//                 mb-1
//                 font-[family-name:var(--font-montserrat)]
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-widest
//                 text-[#8f9a9b]
//               "
//             >
//               Legal
//             </h4>

//             <FooterLink href="/privacy">Privacy Policy</FooterLink>
//             <FooterLink href="/terms">Terms of Service</FooterLink>
//           </div>
//         </div>

//         {/* ==================================================
//             BOTTOM
//         ================================================== */}

//         <div
//           className="
//             flex
//             flex-col
//             items-center
//             justify-between
//             gap-3
//             border-t
//             border-[#8f9a9b]/15
//             pt-6
//             font-[family-name:var(--font-montserrat)]
//             text-xs
//             font-medium
//             text-[#8f9a9b]
//             md:flex-row
//           "
//         >
//           <p className="text-center md:text-left">
//             &copy; {new Date().getFullYear()} ASANG Design Studio. All rights reserved.
//           </p>

//           <p className="tracking-[0.18em] uppercase">
//             Crafted with precision.
//           </p>
//         </div>
//       </motion.div>
//     </footer>
//   );
// }

// // ============================================================
// // FOOTER LINK COMPONENT
// // ============================================================

// function FooterLink({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <Link
//       href={href}
//       className="
//         font-[family-name:var(--font-montserrat)]
//         text-sm
//         font-medium
//         text-[#e5dcc7]/80
//         transition-all
//         duration-300
//         hover:translate-x-1
//         hover:text-white
//       "
//     >
//       {children}
//     </Link>
//   );
// }










"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
// ASANG ENVIRONMENT CONFIG
// ============================================================

const contactPerson =
  process.env.NEXT_PUBLIC_CONTACT_PERSON || "Suchit Sinha";

// Phone number removed completely.
// No 9310140480 / 9310 140 480 is used anywhere.

const whatsappPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919205040314";

const whatsappPhoneDisplay =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE_DISPLAY || "9205 040 314";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "suchit@asang.in";

const officeAddressLine1 =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE1 ||
  "#208, Vriksh Building, A-103, Sector 63";

const officeAddressLine2 =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE2 ||
  "NOIDA - 201301, Uttar Pradesh, India";

const officeAddressFull =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
  `${officeAddressLine1}, ${officeAddressLine2}`;

// ============================================================
// SOCIAL LINKS — only the ones actually set in env render
// ============================================================

const socialLinks = [
  {
    name: "Instagram",
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    icon: "linkedin",
  },
  {
    name: "YouTube",
    url: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    icon: "youtube",
  },
  {
    name: "X",
    url: process.env.NEXT_PUBLIC_X_URL,
    icon: "x",
  },
  {
    name: "Pinterest",
    url: process.env.NEXT_PUBLIC_PINTEREST_URL,
    icon: "pinterest",
  },
].filter(
  (s): s is { name: string; url: string; icon: string } =>
    Boolean(s.url)
);

// ============================================================
// WHATSAPP / MAPS URLS
// ============================================================

const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  `Hi ${contactPerson}, I found ASANG Design Studio online and would like to discuss a project.`
)}`;

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  officeAddressFull
)}`;

// ============================================================
// ICONS — matches the line weight used across the site
// ============================================================

function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.2"
            cy="6.8"
            r="0.8"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8.5h2.5V5H14a4 4 0 0 0-4 4v2H8v3.5h2V21h3.5v-6.5H16l.5-3.5h-3V9c0-.4.1-.5.5-.5Z" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.5 10v6.5M7.5 7.2v.1M11.5 16.5V13a2 2 0 0 1 4 0v3.5M11.5 10v6.5" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common}>
          <rect x="2.5" y="6" width="19" height="12" rx="4" />
          <path
            d="m10.5 9.5 5 2.5-5 2.5Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "x":
      return (
        <svg {...common}>
          <path d="M5 5l14 14M19 5 5 19" />
        </svg>
      );

    case "pinterest":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 18c1-3 1.3-5 2-8a2 2 0 1 1 3.6 1.4c-.4 1.6-1.6 3.6-3.6 3.6-1 0-1.5-.5-1.8-1" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M7 17.5 4.5 20l.6-3.4A8 8 0 1 1 8.6 19L7 17.5Z" />
          <path d="M9 9.3c0 3 2.7 5.7 5.7 5.7 1-1 1-2 .7-2.4l-1.6-.8-1 1a5 5 0 0 1-2-2l1-1-.8-1.6C10.9 8 9.9 8 9 9Z" />
        </svg>
      );

    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );

    default:
      return null;
  }
}

// ============================================================
// FOOTER
// ============================================================

export default function Footer() {
  return (
    <footer
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        relative
        overflow-hidden
        bg-[#231f20]
        px-6
        pt-16
        pb-8
        text-[#e5dcc7]
        sm:px-8
        md:px-16
        lg:px-24
      `}
    >
      {/* Decorative background ring */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[#c9b58a]/5
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl"
      >
        {/* ==================================================
            TOP: BRAND + NEWSLETTER
        ================================================== */}

        <div
          className="
            mb-14
            grid
            grid-cols-1
            gap-10
            border-b
            border-[#8f9a9b]/15
            pb-14
            md:grid-cols-[1fr_1.1fr]
            md:gap-16
          "
        >
          {/* Logo / Brand */}

          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="ASANG Design Studio Home"
              className="group inline-block"
            >
              <Image
                src="/Asang-logo-trans-white.png"
                alt="ASANG Design Studio"
                width={180}
                height={64}
                className="
                  h-12
                  w-auto
                  object-contain
                  opacity-90
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </Link>

            <p
              className="
                mt-4
                max-w-xs
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                leading-relaxed
                text-[#8f9a9b]
              "
            >
              Thoughtful architecture and refined interiors,
              designed around how people actually live.
            </p>
          </div>

          {/* Newsletter */}

          <div className="flex flex-col md:items-end">
            <div className="w-full max-w-sm">
              <h3
                className="
                  mb-3
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#e5dcc7]
                "
              >
                Join Our Newsletter
              </h3>

              <p
                className="
                  mb-5
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-relaxed
                  text-[#8f9a9b]
                "
              >
                Curated insights on architecture, interiors,
                and new project updates.
              </p>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="
                  flex
                  border-b
                  border-[#8f9a9b]/40
                  pb-2
                  transition-colors
                  duration-300
                  focus-within:border-[#e5dcc7]
                "
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="
                    w-full
                    bg-transparent
                    font-[family-name:var(--font-montserrat)]
                    text-sm
                    font-medium
                    text-[#e5dcc7]
                    outline-none
                    placeholder:text-[#8f9a9b]/60
                  "
                  required
                />

                <button
                  type="submit"
                  className="
                    ml-4
                    whitespace-nowrap
                    font-[family-name:var(--font-montserrat)]
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-[#e5dcc7]/70
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ==================================================
            EXPLORE / CONTACT / SOCIAL / LEGAL
        ================================================== */}

        <div
          className="
            mb-14
            grid
            grid-cols-2
            gap-10
            md:grid-cols-4
            md:gap-8
          "
        >
          {/* EXPLORE */}

          <div className="flex flex-col gap-3">
            <h4
              className="
                mb-1
                font-[family-name:var(--font-montserrat)]
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-[#8f9a9b]
              "
            >
              Explore
            </h4>

            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/projects">Selected Projects</FooterLink>
            <FooterLink href="/studio">The Studio</FooterLink>
            <FooterLink href="/blog">Journal</FooterLink>
          </div>

          {/* CONTACT */}

          <div className="flex flex-col gap-3">
            <h4
              className="
                mb-1
                font-[family-name:var(--font-montserrat)]
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-[#8f9a9b]
              "
            >
              Contact
            </h4>

            <p
              className="
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-semibold
                text-[#e5dcc7]
              "
            >
              {contactPerson}
            </p>

            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                text-[#e5dcc7]/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <SocialIcon
                name="whatsapp"
                className="h-3.5 w-3.5 shrink-0 text-[#25D366]"
              />

              {whatsappPhoneDisplay}
            </a>

            {/* Email */}

            <a
              href={`mailto:${contactEmail}`}
              className="
                inline-flex
                items-center
                gap-2
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                text-[#e5dcc7]/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <SocialIcon
                name="mail"
                className="h-3.5 w-3.5 shrink-0 text-[#8f9a9b]"
              />

              {contactEmail}
            </a>

            {/* Address */}

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-start
                gap-2
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                leading-relaxed
                text-[#e5dcc7]/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <SocialIcon
                name="pin"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8f9a9b]"
              />

              <span>
                {officeAddressLine1}
                <br />
                {officeAddressLine2}
              </span>
            </a>
          </div>

          {/* SOCIAL */}

          <div className="flex flex-col gap-3">
            <h4
              className="
                mb-1
                font-[family-name:var(--font-montserrat)]
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-[#8f9a9b]
              "
            >
              Social
            </h4>

            {socialLinks.length > 0 ? (
              socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    font-[family-name:var(--font-montserrat)]
                    text-sm
                    font-medium
                    text-[#e5dcc7]/80
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <SocialIcon
                    name={social.icon}
                    className="
                      h-3.5
                      w-3.5
                      shrink-0
                      text-[#8f9a9b]
                      transition-colors
                      duration-300
                      group-hover:text-[#c9b58a]
                    "
                  />

                  {social.name}
                </a>
              ))
            ) : (
              <p
                className="
                  max-w-[180px]
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-relaxed
                  text-[#8f9a9b]
                "
              >
                Follow ASANG for project updates and studio insights.
              </p>
            )}
          </div>

          {/* LEGAL */}

          <div className="flex flex-col gap-3">
            <h4
              className="
                mb-1
                font-[family-name:var(--font-montserrat)]
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-[#8f9a9b]
              "
            >
              Legal
            </h4>

            <FooterLink href="/privacy">
              Privacy Policy
            </FooterLink>

            <FooterLink href="/terms">
              Terms of Service
            </FooterLink>
          </div>
        </div>

        {/* ==================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-[#8f9a9b]/15
            pt-6
            font-[family-name:var(--font-montserrat)]
            text-xs
            font-medium
            text-[#8f9a9b]
            md:flex-row
          "
        >
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} ASANG Design Studio.
            All rights reserved.
          </p>

          <p className="tracking-[0.18em] uppercase">
            Crafted with precision.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

// ============================================================
// FOOTER LINK COMPONENT
// ============================================================

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        font-[family-name:var(--font-montserrat)]
        text-sm
        font-medium
        text-[#e5dcc7]/80
        transition-all
        duration-300
        hover:translate-x-1
        hover:text-white
      "
    >
      {children}
    </Link>
  );
}