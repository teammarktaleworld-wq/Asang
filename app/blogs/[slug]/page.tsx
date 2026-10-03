import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import {
  blogs,
  blogUrl,
  getBlogBySlug,
  getRelatedBlogs,
  getReadingTime,
  formatBlogDate,
} from "../../data/blogs";

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

type Props = { params: Promise<{ slug: string }> };

// Pre-build every blog page at build time
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return { title: "Blog not found | ASANG Design Studio" };

  return {
    title: `${blog.title} | ASANG Design Studio`,
    description: blog.excerpt,
    keywords: blog.keywords,
    alternates: { canonical: blogUrl(blog.slug) },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: blogUrl(blog.slug),
      type: "article",
      publishedTime: blog.date,
      images: [{ url: blog.cover }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const related = getRelatedBlogs(blog.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.cover,
    datePublished: blog.date,
    mainEntityOfPage: blogUrl(blog.slug),
    author: { "@type": "Organization", name: "ASANG Design Studio" },
    publisher: { "@type": "Organization", name: "ASANG Design Studio" },
  };

  return (
    <main
      className={`${cormorant.variable} ${montserrat.variable} min-h-screen bg-[#F4F1EB] text-[#0E0E0E] selection:bg-[#DCC9A8]`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <header className="px-6 pb-10 pt-36 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blogs"
            className="mb-8 inline-block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0E0E0E]/40 transition-colors hover:text-[#0E0E0E]"
          >
            ← All Blogs
          </Link>
          <span className="mb-4 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8C7A5E]">
            {blog.category}
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-[1.05] md:text-6xl">
            {blog.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4 font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#0E0E0E]/40">
            <span>{formatBlogDate(blog.date)}</span>
            <span className="h-[1px] w-8 bg-[#0E0E0E]/20" />
            <span>{blog.location}</span>
            <span className="h-[1px] w-8 bg-[#0E0E0E]/20" />
            <span>{getReadingTime(blog)} min read</span>
          </div>
        </div>
      </header>

      {/* COVER */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden bg-[#E8E2D6]">
          <Image
            src={blog.cover}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* ARTICLE */}
      <article className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          {blog.content.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2
                    key={i}
                    className="mb-5 mt-14 font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight md:text-4xl"
                  >
                    {block.text}
                  </h2>
                );
              case "quote":
                return (
                  <blockquote
                    key={i}
                    className="my-12 border-l-[1.5px] border-[#8C7A5E] pl-6 font-[family-name:var(--font-cormorant)] text-3xl italic leading-snug text-[#8C7A5E] md:text-4xl"
                  >
                    {block.text}
                  </blockquote>
                );
              case "links":
                return (
                  <div key={i} className="mt-12 border-t border-[#0E0E0E]/10 pt-6">
                    <span className="mb-4 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0E0E0E]/40">
                      {block.label}
                    </span>
                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                      {block.links.map((l) => (
                        <Link
                          key={l.href + l.label}
                          href={l.href}
                          className="font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.2em] underline-offset-4 hover:underline"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              default:
                return (
                  <p
                    key={i}
                    className="mb-5 font-[family-name:var(--font-montserrat)] text-[15px] leading-[1.9] text-[#0E0E0E]/75"
                  >
                    {block.text}
                    {block.link && (
                      <>
                        {" "}
                        <Link
                          href={block.link.href}
                          className="font-medium text-[#0E0E0E] underline decoration-[#8C7A5E] underline-offset-4 hover:text-[#8C7A5E]"
                        >
                          {block.link.label} →
                        </Link>
                      </>
                    )}
                  </p>
                );
            }
          })}
        </div>
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-[#0E0E0E]/10 px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <span className="mb-8 block font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.35em] text-[#0E0E0E]/40">
              Keep Reading
            </span>
            <div className="grid gap-10 md:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/blogs/${r.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E2D6]">
                    <Image
                      src={r.cover}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-2xl font-medium leading-snug group-hover:italic">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0E0E0E] px-6 py-24 text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl text-white md:text-7xl">
          Let&apos;s <span className="italic text-[#DCC9A8]">Talk.</span>
        </h2>
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-full border border-white/20 px-8 py-4 font-[family-name:var(--font-montserrat)] text-xs font-semibold tracking-widest text-white transition-colors hover:border-[#DCC9A8] hover:text-[#DCC9A8]"
        >
          CONTACT STUDIO
        </Link>
      </section>
    </main>
  );
}