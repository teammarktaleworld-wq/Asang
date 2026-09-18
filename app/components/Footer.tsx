"use client";

import Link from "next/link";
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
  process.env.NEXT_PUBLIC_CONTACT_PERSON || "Surya Sinha";

const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || "9310140480";

const contactPhoneDisplay =
  process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || "9310 140 480";

const whatsappPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "919205040314";

const whatsappPhoneDisplay =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE_DISPLAY || "9205 040 314";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

const officeAddressLine1 =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE1 ||
  "#208, Vriksh Building, A-103, Sector 63";

const officeAddressLine2 =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS_LINE2 ||
  "NOIDA - 201301, Uttar Pradesh, India";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";

const pinterestUrl =
  process.env.NEXT_PUBLIC_PINTEREST_URL || "";

const linkedinUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL || "";

// ============================================================
// WHATSAPP URL
// ============================================================

const whatsappUrl = `https://wa.me/${whatsappPhone}`;

// ============================================================
// FOOTER
// ============================================================

export default function Footer() {
  return (
    <footer
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        bg-[#231f20]
        px-6
        pt-20
        pb-8
        text-[#e5dcc7]
        sm:px-8
        md:px-16
        md:pt-24
        lg:px-24
      `}
    >
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
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mx-auto max-w-7xl"
      >
        {/* ==================================================
            TOP SECTION
        ================================================== */}

        <div className="mb-20 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">

          {/* ==================================================
              BRAND IDENTITY
          ================================================== */}

          <div className="flex flex-col items-start">

            {/* Logo / Brand */}

            <Link
              href="/"
              aria-label="ASANG Design Studio Home"
              className="group"
            >
              <h2
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-5xl
                  font-medium
                  tracking-[0.18em]
                  text-[#e5dcc7]
                  transition-colors
                  duration-300
                  group-hover:text-white
                  sm:text-6xl
                "
              >
                AS
                <span className="font-light">
                  A
                </span>
                NG
              </h2>
            </Link>

            {/* Studio */}

            <div className="mt-3 flex flex-col">

              <span
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#e5dcc7]
                "
              >
                Design Studio
              </span>

              <span
                className="
                  mt-1
                  font-[family-name:var(--font-montserrat)]
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#8f9a9b]
                  sm:text-xs
                "
              >
                Architecture | Interiors
              </span>
            </div>

            {/* Contact Person */}

            <div className="mt-8">

              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#8f9a9b]
                "
              >
                Contact
              </p>

              <p
                className="
                  mt-2
                  font-[family-name:var(--font-cormorant)]
                  text-2xl
                  font-medium
                  text-[#e5dcc7]
                "
              >
                {contactPerson}
              </p>

              {/* Call */}

              <a
                href={`tel:${contactPhone}`}
                className="
                  mt-2
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
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2
                    19.79 19.79 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.79 19.79 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3
                    a2 2 0 0 1 2 1.72
                    12.84 12.84 0 0 0 .7 2.81
                    2 2 0 0 1-.45 2.11L8.09 9.91
                    a16 16 0 0 0 6 6l1.27-1.27
                    a2 2 0 0 1 2.11-.45
                    12.84 12.84 0 0 0 2.81.7
                    A2 2 0 0 1 22 16.92z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {contactPhoneDisplay}
              </a>

            </div>
          </div>

          {/* ==================================================
              NEWSLETTER
          ================================================== */}

          <div className="flex flex-col justify-center">

            <h3
              className="
                mb-4
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-[#e5dcc7]
              "
            >
              Join Our Newsletter
            </h3>

            <p
              className="
                mb-6
                max-w-md
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                leading-relaxed
                text-[#8f9a9b]
              "
            >
              Receive curated insights on architecture,
              interior styling, and updates on our latest
              projects.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="
                flex
                max-w-md
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

            {/* WhatsApp / Enquiry */}

            <div className="mt-7">

              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#8f9a9b]
                "
              >
                WhatsApp / Enquiries
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2
                  inline-flex
                  items-center
                  gap-2
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-semibold
                  text-[#e5dcc7]
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {/* WhatsApp Icon */}

                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>

                {whatsappPhoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================
            MIDDLE SECTION
        ================================================== */}

        <div
          className="
            mb-16
            grid
            grid-cols-2
            gap-10
            border-t
            border-[#8f9a9b]/20
            pt-16
            md:grid-cols-4
            md:gap-8
          "
        >

          {/* ==================================================
              EXPLORE
          ================================================== */}

          <div className="flex flex-col gap-4">

            <h4
              className="
                mb-2
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

            <FooterLink href="/about">
              About Us
            </FooterLink>

            <FooterLink href="/projects">
              Selected Projects
            </FooterLink>

            <FooterLink href="/studio">
              The Studio
            </FooterLink>

            <FooterLink href="/blog">
              Journal
            </FooterLink>
          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <div className="flex flex-col gap-4">

            <h4
              className="
                mb-2
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

            {/* Contact Person */}

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

            {/* Phone */}

            <a
              href={`tel:${contactPhone}`}
              className="
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                text-[#e5dcc7]/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {contactPhoneDisplay}
            </a>

            {/* WhatsApp */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                text-[#e5dcc7]/80
                transition-colors
                duration-300
                hover:text-white
              "
            >
              WhatsApp: {whatsappPhoneDisplay}
            </a>

            {/* Address */}

            <p
              className="
                mt-2
                max-w-xs
                font-[family-name:var(--font-montserrat)]
                text-sm
                font-medium
                leading-relaxed
                text-[#e5dcc7]/80
              "
            >
              {officeAddressLine1}
              <br />
              {officeAddressLine2}
            </p>

          </div>

          {/* ==================================================
              SOCIAL
          ================================================== */}

          <div className="flex flex-col gap-4">

            <h4
              className="
                mb-2
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

            {/* Instagram */}

            {instagramUrl ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  text-[#e5dcc7]/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Instagram
              </a>
            ) : null}

            {/* Pinterest */}

            {pinterestUrl ? (
              <a
                href={pinterestUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  text-[#e5dcc7]/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Pinterest
              </a>
            ) : null}

            {/* LinkedIn */}

            {linkedinUrl ? (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  text-[#e5dcc7]/80
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                LinkedIn
              </a>
            ) : null}

            {/* If no social links have been added */}

            {!instagramUrl &&
            !pinterestUrl &&
            !linkedinUrl ? (
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
                Follow ASANG for project updates,
                design stories and studio insights.
              </p>
            ) : null}
          </div>

          {/* ==================================================
              LEGAL
          ================================================== */}

          <div className="flex flex-col gap-4">

            <h4
              className="
                mb-2
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
            OFFICE ADDRESS STRIP
        ================================================== */}

        <div
          className="
            mb-10
            border-y
            border-[#8f9a9b]/20
            py-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div>

              <p
                className="
                  font-[family-name:var(--font-montserrat)]
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#8f9a9b]
                "
              >
                Studio Office
              </p>

              <p
                className="
                  mt-2
                  font-[family-name:var(--font-montserrat)]
                  text-sm
                  font-medium
                  leading-relaxed
                  text-[#e5dcc7]/80
                "
              >
                {officeAddressLine1}
                <br className="sm:hidden" />{" "}
                {officeAddressLine2}
              </p>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=%23208%2C%20Vriksh%20Building%2C%20A-103%2C%20Sector%2063%2C%20NOIDA%20-%20201301%2C%20Uttar%20Pradesh%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                w-fit
                items-center
                gap-3
                font-[family-name:var(--font-montserrat)]
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#e5dcc7]/70
                transition-colors
                duration-300
                hover:text-white
              "
            >
              View Location

              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M5 12h14"
                  strokeLinecap="round"
                />

                <path
                  d="m13 6 6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
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
            font-[family-name:var(--font-montserrat)]
            text-xs
            font-medium
            text-[#8f9a9b]
            md:flex-row
          "
        >
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} ASANG Design
            Studio. All rights reserved.
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