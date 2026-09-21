// app/projects/[category]/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

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

const BASE = "/images/asang main images";

const categoryData: Record<
  string,
  { label: string; description: string; count: number; coverIndex: number }
> = {
  commercial: {
    label: "Commercial",
    description:
      "Spaces built for commerce — designed to command presence, inspire confidence, and perform at the highest level.",
    count: 10,
    coverIndex: 0,
  },
  luxury: {
    label: "Luxury",
    description:
      "Residences where material precision and spatial calm define everyday luxury. A reverence for the crafted and the considered.",
    count: 15,
    coverIndex: 1,
  },
  penthouse: {
    label: "Penthouse",
    description:
      "Sky-level living — open volumes, curated views, and refined detail at the intersection of architecture and sky.",
    count: 8,
    coverIndex: 0,
  },
  "service-apartment": {
    label: "Service Apartment",
    description:
      "Thoughtful short-stay environments — compact, complete, and considered for those who move with intention.",
    count: 10,
    coverIndex: 0,
  },
};

// Map route slug → actual folder name
const folderMap: Record<string, string> = {
  commercial: "commercial",
  luxury: "Luxury",
  penthouse: "Penthouse",
  "service-apartment": "Service apartment",
};

type Img = { src: string; title: string; index: number };

export default function CategoryProjectPage() {
  const params = useParams();
  const slug = typeof params.category === "string" ? params.category : "";
  const data = categoryData[slug];
  const folder = folderMap[slug];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: Img[] = data
    ? Array.from({ length: data.count }, (_, i) => ({
        src: `${BASE}/${folder}/image${i + 1}.webp`,
        title: `${data.label} — ${String(i + 1).padStart(2, "0")}`,
        index: i,
      }))
    : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null)
        setLightboxIndex((p) => Math.min((p ?? 0) + 1, images.length - 1));
      if (e.key === "ArrowLeft" && lightboxIndex !== null)
        setLightboxIndex((p) => Math.max((p ?? 0) - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, images.length]);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F4F1EB]">
        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#0E0E0E]/40">
          Category not found.
        </p>
      </div>
    );
  }

  const allCategories = Object.keys(categoryData);

  return (
    <main
      className={`
        ${cormorant.variable}
        ${montserrat.variable}
        min-h-screen bg-[#F4F1EB] text-[#0E0E0E]
        selection:bg-[#DCC9A8] selection:text-[#0E0E0E]
      `}
    >
      {/* ── Nav bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-16 lg:px-24 mix-blend-multiply">
        <Link
          href="/"
          className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#0E0E0E]/60 hover:text-[#0E0E0E] transition-colors duration-200"
        >
          ← ASANG Studio
        </Link>
        <span className="font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#0E0E0E]/30">
          Projects
        </span>
      </nav>

      {/* ── Hero / header ── */}
      <div className="relative overflow-hidden bg-[#0E0E0E] pt-32 pb-20 px-6 md:px-16 lg:px-24">
        {/* Faint cover image bleed */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src={`${BASE}/${folder}/image${data.coverIndex + 1}.webp`}
            alt={data.label}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/80 to-[#0E0E0E]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Category nav pills */}
          <div className="mb-12 flex flex-wrap gap-3">
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/projects/${cat}`}
                className={`rounded-full border px-4 py-1.5 font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.25em] transition-colors duration-200 ${
                  cat === slug
                    ? "border-[#DCC9A8] text-[#DCC9A8]"
                    : "border-white/10 text-white/30 hover:border-white/30 hover:text-white/60"
                }`}
              >
                {categoryData[cat].label}
              </Link>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl lg:text-[120px] font-medium leading-[0.9] text-white"
          >
            {data.label.split(" ").map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "italic text-[#DCC9A8]" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <p className="max-w-lg font-[family-name:var(--font-montserrat)] text-[11px] uppercase leading-loose tracking-[0.15em] text-white/40">
              {data.description}
            </p>
            <span className="font-[family-name:var(--font-cormorant)] text-2xl italic text-white/20">
              {data.count} images
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Full grid ── */}
      <div className="px-6 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <ProjectGridCard
                key={img.src}
                img={img}
                index={i}
                onClick={() => setLightboxIndex(i)}
                isFeatured={i === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom nav — other categories ── */}
      <div className="border-t border-[#0E0E0E]/10 px-6 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <p className="mb-8 font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.35em] text-[#0E0E0E]/30">
            More Categories
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allCategories
              .filter((c) => c !== slug)
              .map((cat) => (
                <Link
                  key={cat}
                  href={`/projects/${cat}`}
                  className="group flex items-center justify-between border border-[#0E0E0E]/10 px-6 py-5 hover:border-[#0E0E0E]/30 transition-colors duration-300"
                >
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[#0E0E0E] group-hover:italic transition-all duration-300">
                      {categoryData[cat].label}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.25em] text-[#0E0E0E]/30">
                      {categoryData[cat].count} images
                    </p>
                  </div>
                  <div className="h-[1px] w-6 bg-[#0E0E0E]/20 group-hover:w-10 group-hover:bg-[#0E0E0E] transition-all duration-300" />
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <ProjectLightbox
            images={images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((p) => Math.max((p ?? 0) - 1, 0))}
            onNext={() => setLightboxIndex((p) => Math.min((p ?? 0) + 1, images.length - 1))}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function ProjectGridCard({
  img,
  index,
  onClick,
  isFeatured,
}: {
  img: Img;
  index: number;
  onClick: () => void;
  isFeatured: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06 }}
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer bg-[#E8E2D6] ${
        isFeatured ? "col-span-2 row-span-2" : ""
      }`}
      style={{ aspectRatio: isFeatured ? "4/3" : index % 5 === 0 ? "3/4" : "4/3" }}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        sizes={isFeatured ? "50vw" : "25vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-[#0E0E0E]/0 group-hover:bg-[#0E0E0E]/25 transition-colors duration-500" />

      {/* Hover expand icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1h5M1 1v5M13 13h-5M13 13v-5M1 13l12-12" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Index */}
      <div className="absolute left-3 top-3 font-[family-name:var(--font-montserrat)] text-[8px] font-semibold uppercase tracking-[0.3em] text-white/0 group-hover:text-white/50 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

function ProjectLightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: Img[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0E0E]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl px-16"
        style={{ height: "82vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].title}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </motion.div>

      <button
        onClick={onClose}
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.35em] text-white/30">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/60 transition-colors duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <div className="absolute bottom-6 right-6 font-[family-name:var(--font-cormorant)] text-base italic text-white/30">
        {images[index].title}
      </div>
    </motion.div>
  );
}