"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

// ─── Studio constants ──────────────────────────────────────────────────────────
const SITE_NAME        = "ASANG Design Studio";
const CONTACT_EMAIL    = "info@asang.in";
const CONTACT_PERSON   = "Surya Sinha";
const OFFICE_ADDRESS   = "#208, Vriksh Building, A-103, Sector 63, NOIDA - 201301, Uttar Pradesh, India";
const WHATSAPP_DISPLAY = "9205 040 314";
const EFFECTIVE_DATE   = "1 June 2025";

// ─── Section definitions ───────────────────────────────────────────────────────
const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    content: [
      `Welcome to ${SITE_NAME} ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy.`,
      "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and when you contact us or engage our design services.",
      "Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.",
    ],
  },
  {
    id: "information-collected",
    number: "02",
    title: "Information We Collect",
    content: [
      "We collect information you voluntarily provide when you fill out our contact form, send us an email, or message us via WhatsApp. This may include:",
    ],
    bullets: [
      "Full name and contact details (phone number, email address)",
      "Project details, requirements, and preferences you share with us",
      "Location information relevant to your project",
      "Any files, images, or documents you share with us",
    ],
    extra: [
      "We also automatically collect certain technical data when you visit our site, including IP address, browser type, pages visited, and time spent on pages. This data is collected via Firebase Analytics and is used solely to improve site performance.",
    ],
  },
  {
    id: "how-we-use",
    number: "03",
    title: "How We Use Your Information",
    content: ["We use the information we collect for the following purposes:"],
    bullets: [
      "To respond to your enquiries and communicate about your project",
      "To provide interior design consultations and services",
      "To send project updates, proposals, and relevant studio communications",
      "To improve our website and understand how visitors interact with it",
      "To comply with applicable legal obligations",
    ],
    extra: [
      "We do not use your information for automated decision-making or profiling. We will never sell your personal data to third parties.",
    ],
  },
  {
    id: "data-sharing",
    number: "04",
    title: "Data Sharing & Disclosure",
    content: [
      "We do not sell, trade, or rent your personal information. We may share data only in the following limited circumstances:",
    ],
    bullets: [
      "With trusted service providers who assist in operating our website (e.g. Firebase / Google), bound by confidentiality obligations",
      "With contractors or collaborators directly involved in delivering your project, only to the extent necessary",
      "When required by law, regulation, or legal process",
      "To protect the rights, property, or safety of ASANG Design Studio, our clients, or others",
    ],
  },
  {
    id: "firebase",
    number: "05",
    title: "Firebase & Third-Party Services",
    content: [
      "Our website uses Google Firebase for hosting, database, and analytics services. Firebase may collect usage data and is subject to Google's Privacy Policy (policies.google.com/privacy).",
      "We also use standard social media links to Facebook, Instagram, LinkedIn, YouTube, and X (Twitter). Clicking these links will direct you to third-party platforms governed by their own privacy policies. We have no control over the data practices of these platforms.",
    ],
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Tracking",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage analytics. These are minimal, functional cookies.",
      "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of the site may not function properly if cookies are disabled.",
    ],
  },
  {
    id: "data-retention",
    number: "07",
    title: "Data Retention",
    content: [
      `We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Enquiry data is typically retained for up to 24 months. Project-related records may be retained longer for business and legal purposes.`,
      `You may request deletion of your data at any time by contacting us at ${CONTACT_EMAIL}.`,
    ],
  },
  {
    id: "your-rights",
    number: "08",
    title: "Your Rights",
    content: [
      "Depending on your location, you may have the following rights regarding your personal data:",
    ],
    bullets: [
      "Right to access — request a copy of the data we hold about you",
      "Right to correction — request correction of inaccurate or incomplete data",
      "Right to erasure — request deletion of your personal data",
      "Right to restrict processing — request that we limit how we use your data",
      "Right to object — object to our processing of your personal data",
      "Right to data portability — request transfer of your data in a structured format",
    ],
    extra: [
      `To exercise any of these rights, please contact us at ${CONTACT_EMAIL}. We will respond within 30 days.`,
    ],
  },
  {
    id: "security",
    number: "09",
    title: "Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our website is hosted on Firebase infrastructure, which maintains industry-standard security practices.",
      "However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "children",
    number: "10",
    title: "Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.",
    ],
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the revised policy on this page with an updated effective date.",
      "We encourage you to review this policy periodically. Continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    id: "contact",
    number: "12",
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal data, please reach out to us:",
    ],
    isContact: true,
  },
];

// ─── Main page ────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`
        ${cormorant.variable} ${montserrat.variable}
        min-h-screen bg-[#F4F1EB] text-[#0E0E0E]
        selection:bg-[#DCC9A8] selection:text-[#0E0E0E]
      `}
    >
      {/* ================================================================
          HERO
          pt-[148px] = Navbar height (84px unscrolled) + 64px breathing room
          ================================================================ */}
      <div className="bg-[#0E0E0E] px-6 pt-[148px] pb-20 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <Link
              href="/"
              className="font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30 hover:text-white/60 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-white/15 text-[9px]">/</span>
            <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.35em] text-[#DCC9A8]">
              Privacy Policy
            </span>
          </motion.div>

          {/* Studio label */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mb-5 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.4em] text-[#DCC9A8]/55"
          >
            {SITE_NAME}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-cormorant)] text-6xl sm:text-7xl md:text-8xl lg:text-[108px] font-medium leading-[0.88] text-white"
          >
            Privacy{" "}
            <span className="italic text-[#DCC9A8]">Policy</span>
          </motion.h1>

          {/* Description + effective date */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <p className="max-w-xl font-[family-name:var(--font-montserrat)] text-[12px] leading-[2] tracking-[0.06em] text-white/45">
              This policy describes how we collect, use, and protect your
              personal information when you interact with ASANG Design Studio.
            </p>
            <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.35em] text-white/20 whitespace-nowrap">
              Effective: {EFFECTIVE_DATE}
            </span>
          </motion.div>

          <div className="mt-14 h-px bg-white/8" />
        </div>
      </div>

      {/* ================================================================
          TOC STRIP — dark background, readable text, hidden scrollbar
          ================================================================ */}
      <div className="bg-[#0E0E0E] border-b border-white/8 sticky top-0 z-30">
        <div className="px-6 md:px-16 lg:px-24 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-8 py-[14px] whitespace-nowrap">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`
                  flex-shrink-0
                  font-[family-name:var(--font-montserrat)]
                  text-[9px] font-semibold uppercase tracking-[0.26em]
                  transition-colors duration-200
                  ${activeSection === s.id
                    ? "text-[#DCC9A8]"
                    : "text-white/28 hover:text-white/65"
                  }
                `}
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================================================================
          BODY
          ================================================================ */}
      <div className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[260px_1fr] gap-16 lg:gap-28">

            {/* ── Sidebar ── */}
            <aside className="hidden md:block">
              <div className="sticky top-24 space-y-1">
                <p className="mb-7 font-[family-name:var(--font-montserrat)] text-[8px] font-semibold uppercase tracking-[0.4em] text-[#0E0E0E]/28">
                  Contents
                </p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-center gap-3 py-2 pl-4 border-l-[1.5px] transition-all duration-200"
                    style={{
                      borderColor:
                        activeSection === s.id ? "#8C7A5E" : "rgba(14,14,14,0.09)",
                    }}
                  >
                    <span
                      className={`
                        font-[family-name:var(--font-montserrat)] text-[8px]
                        transition-colors duration-200
                        ${activeSection === s.id ? "text-[#8C7A5E]" : "text-[#0E0E0E]/20 group-hover:text-[#8C7A5E]/55"}
                      `}
                    >
                      {s.number}
                    </span>
                    <span
                      className={`
                        font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.18em]
                        transition-colors duration-200
                        ${activeSection === s.id ? "text-[#0E0E0E]" : "text-[#0E0E0E]/35 group-hover:text-[#0E0E0E]/70"}
                      `}
                    >
                      {s.title}
                    </span>
                  </a>
                ))}
              </div>
            </aside>

            {/* ── Sections ── */}
            <div className="space-y-20">
              {sections.map((s, i) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  transition={{ duration: 0.65, delay: 0.025 * (i % 5) }}
                  className="scroll-mt-28"
                >
                  {/* Section heading */}
                  <div className="mb-7 flex items-center gap-4">
                    <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-semibold tracking-[0.3em] text-[#8C7A5E]">
                      {s.number}
                    </span>
                    <div className="h-px w-8 bg-[#0E0E0E]/12" />
                    <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-[28px] font-medium text-[#0E0E0E]">
                      {s.title}
                    </h2>
                  </div>

                  {/* Body paragraphs */}
                  <div className="space-y-4">
                    {s.content.map((para, j) => (
                      <p
                        key={j}
                        className="font-[family-name:var(--font-montserrat)] text-[13px] leading-[1.95] tracking-[0.01em] text-[#0E0E0E]/68"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Bullet list */}
                  {"bullets" in s && s.bullets && (
                    <ul className="mt-6 space-y-3 border-l-[1.5px] border-[#DCC9A8]/55 pl-6">
                      {s.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="font-[family-name:var(--font-montserrat)] text-[12px] leading-[1.85] text-[#0E0E0E]/60"
                        >
                          <span className="mr-2 text-[#8C7A5E] font-semibold">—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Extra paragraphs */}
                  {"extra" in s && s.extra && (
                    <div className="mt-6 space-y-4">
                      {s.extra.map((para, j) => (
                        <p
                          key={j}
                          className="font-[family-name:var(--font-montserrat)] text-[13px] leading-[1.95] tracking-[0.01em] text-[#0E0E0E]/68"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Contact block */}
                  {"isContact" in s && s.isContact && (
                    <div className="mt-8 border border-[#0E0E0E]/10 bg-white/60 p-8 space-y-6">
                      <ContactRow label="Studio"         value={SITE_NAME} />
                      <ContactRow label="Contact Person" value={CONTACT_PERSON} />
                      <ContactRow label="Email"          value={CONTACT_EMAIL}       href={`mailto:${CONTACT_EMAIL}`} />
                      <ContactRow label="WhatsApp"       value={`+91 ${WHATSAPP_DISPLAY}`} href="https://wa.me/919205040314" />
                      <ContactRow label="Address"        value={OFFICE_ADDRESS} />
                    </div>
                  )}

                  <div className="mt-16 h-px bg-[#0E0E0E]/6" />
                </motion.section>
              ))}

              {/* Footer row */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <p className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#0E0E0E]/25">
                  Last updated: {EFFECTIVE_DATE}
                </p>
                <Link
                  href="/"
                  className="group flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-[#0E0E0E]/30 hover:text-[#0E0E0E] transition-colors duration-200"
                >
                  <span>Back to Studio</span>
                  <div className="h-px w-6 bg-current transition-all duration-300 group-hover:w-12" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom footer strip ── */}
      <div className="border-t border-[#0E0E0E]/8 bg-[#0E0E0E] px-6 py-10 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <span className="font-[family-name:var(--font-cormorant)] text-xl italic text-white/30">
            {SITE_NAME}
          </span>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy",  active: true  },
              { label: "Contact",        href: "/contact",  active: false },
              { label: "Home",           href: "/",         active: false },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`
                  font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-[0.28em]
                  transition-colors duration-200
                  ${l.active
                    ? "text-[#DCC9A8]/70 hover:text-[#DCC9A8]"
                    : "text-white/20 hover:text-white/55"
                  }
                `}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Contact row ──────────────────────────────────────────────────────────────
function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
      <span className="w-36 flex-shrink-0 font-[family-name:var(--font-montserrat)] text-[8px] font-semibold uppercase tracking-[0.35em] text-[#0E0E0E]/30">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-montserrat)] text-[12px] tracking-[0.02em] leading-relaxed text-[#8C7A5E] hover:text-[#0E0E0E] underline underline-offset-4 decoration-[#8C7A5E]/30 transition-colors duration-200"
        >
          {value}
        </a>
      ) : (
        <span className="font-[family-name:var(--font-montserrat)] text-[12px] tracking-[0.02em] leading-relaxed text-[#0E0E0E]/65">
          {value}
        </span>
      )}
    </div>
  );
}