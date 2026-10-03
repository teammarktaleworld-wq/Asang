import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import {
  getAllBlogsSorted,
  formatBlogDate,
  getReadingTime,
} from "../data/blogs";

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

export const metadata: Metadata = {
  title: "Blogs | ASANG Design Studio",
  description:
    "Stories, ideas and insights on architecture, interior design, materials and everyday living from ASANG Design Studio, Noida.",
  alternates: { canonical: "https://www.asangdesignstudio.in/blogs" },
};

export default function BlogsPage() {
  const blogs = getAllBlogsSorted();
  const [featured, ...rest] = blogs;

  return (
    <main
      className={`${cormorant.variable} ${montserrat.variable} min-h-screen bg-[#F4F1EB] text-[#0E0E0E] selection:bg-[#DCC9A8]`}
    >
      {/* HEADER */}
      <section className="px-6 pb-12 pt-36 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#0E0E0E]/40">
            The Journal
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[0.9] md:text-8xl">
            Blogs &amp; <span className="italic text-[#8C7A5E]">Stories</span>
          </h1>
          <p className="mt-6 max-w-lg font-[family-name:var(--font-montserrat)] text-[11px] uppercase leading-loose tracking-[0.15em] text-[#0E0E0E]/50">
            Thoughts on architecture, interiors, materials and the way we live.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="px-6 md:px-16 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <Link
              href={`/blogs/${featured.slug}`}
              className="group grid overflow-hidden bg-[#0E0E0E] md:grid-cols-2"
            >
              <div className="relative h-72 md:h-[480px]">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14">
                <span className="mb-5 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DCC9A8]">
                  Featured · {featured.category}
                </span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-white md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 font-[family-name:var(--font-montserrat)] text-sm leading-relaxed text-white/60">
                  {featured.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4 font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-white/40">
                  <span>{formatBlogDate(featured.date)}</span>
                  <span className="h-[1px] w-8 bg-white/20" />
                  <span>{getReadingTime(featured)} min read</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* GRID */}
      <section className="px-6 pb-28 pt-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {rest.length > 0 && (
            <div className="mb-10 flex items-center gap-4 border-b border-[#0E0E0E]/10 pb-4">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em]">
                All Posts
              </span>
              <span className="font-[family-name:var(--font-montserrat)] text-[9px] text-[#8C7A5E]">
                {String(blogs.length).padStart(2, "0")}
              </span>
            </div>
          )}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E2D6]">
                  <Image
                    src={blog.cover}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <span className="mt-5 block font-[family-name:var(--font-montserrat)] text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8C7A5E]">
                  {blog.category}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-snug group-hover:italic">
                  {blog.title}
                </h3>
                <p className="mt-3 line-clamp-3 font-[family-name:var(--font-montserrat)] text-xs leading-relaxed text-[#0E0E0E]/60">
                  {blog.excerpt}
                </p>
                <div className="mt-4 font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#0E0E0E]/40">
                  {formatBlogDate(blog.date)} · {getReadingTime(blog)} min read
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}