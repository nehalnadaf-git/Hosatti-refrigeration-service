// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, User, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/blogs";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";

const BLOG_CAT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "AC & Air Cooler": { bg: "rgba(37,99,235,0.18)",  text: "#93c5fd", border: "rgba(37,99,235,0.40)" },
  "Refrigerator":    { bg: "rgba(16,185,129,0.15)", text: "#6ee7b7", border: "rgba(16,185,129,0.35)" },
  "Washing Machine": { bg: "rgba(245,158,11,0.15)", text: "#fcd34d", border: "rgba(245,158,11,0.35)"  },
};

export function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({ slug: b.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `${SEO.baseUrl}/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SEO.baseUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Jameer Hosatti"],
    },
  };
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// Minimal markdown renderer — converts headings, bold, lists
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(<h1 key={i} className="font-display text-foreground font-bold mt-8 mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>{line.slice(2)}</h1>);
    } else if (line.startsWith("## ")) {
      const text = line.slice(3);
      elements.push(<h2 key={i} id={slugify(text)} className="font-display text-foreground font-semibold mt-8 mb-3 scroll-mt-28" style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)" }}>{text}</h2>);
    } else if (line.startsWith("### ")) {
      const text = line.slice(4);
      elements.push(<h3 key={i} id={slugify(text)} className="font-body text-[17px] md:text-[22px] font-bold text-foreground mt-6 mb-2 scroll-mt-28">{text}</h3>);
    } else if (line.startsWith("#### ")) {
      elements.push(<h4 key={i} className="font-body text-[15px] md:text-[18px] font-semibold text-foreground mt-4 mb-1">{line.slice(5)}</h4>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={i} className="font-body text-[15px] md:text-[18px] font-semibold text-foreground mt-3">{line.slice(2, -2)}</p>);
    } else if (/^\d+\.\s/.test(line)) {
      // It's a quick navigation list item! e.g., "1. AC not cooling"
      const text = line;
      const id = slugify(text);
      elements.push(
        <a key={i} href={`#${id}`} className="block font-body text-[15px] md:text-[18px] text-navy hover:text-yellow-600 font-semibold leading-[1.8] mt-1.5 transition-colors underline decoration-yellow-400/30 underline-offset-4 hover:decoration-yellow-400">
          {text}
        </a>
      );
    } else if (line.startsWith("- ")) {
      // Collect list items
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2 font-body text-[14px] md:text-[17px] text-muted-foreground leading-[1.75]">
          {listItems.map((item, j) => {
            // Handle **bold** within list item
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2.5 shrink-0" />
                <span>{parts.map((p, pi) => pi % 2 === 1 ? <strong key={pi} className="font-semibold text-foreground">{p}</strong> : p)}</span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    } else if (line.startsWith("⏱") || line.startsWith("🔧") || line.startsWith("✅") || line.startsWith("⚠️")) {
      elements.push(
        <p key={i} className={`font-body text-[13px] md:text-[16px] leading-snug mt-2 ${line.startsWith("⚠️") ? "text-red-600 font-semibold" : line.startsWith("✅") ? "text-emerald-700 font-semibold" : "text-muted-foreground"}`}>
          {line}
        </p>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-8 border-border/40" />);
    } else if (line.startsWith("📞") || line.startsWith("💬")) {
      elements.push(<p key={i} className="font-body text-[15px] md:text-[18px] font-semibold text-foreground mt-2">{line}</p>);
    } else if (line.trim() === "") {
      // Skip empty lines
    } else {
      // Check for inline **bold**
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i} className="font-body text-[15px] md:text-[19px] text-muted-foreground leading-[1.8] mt-3">
          {parts.map((p, pi) => pi % 2 === 1 ? <strong key={pi} className="font-semibold text-foreground">{p}</strong> : p)}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((b) => b.slug !== slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    url: `${SEO.baseUrl}/blog/${slug}`,
    datePublished: post.publishedDate,
    author: { "@type": "Person", name: "Jameer Hosatti" },
    publisher: {
      "@type": "Organization",
      name: "Hosatti Refrigeration Service",
      url: SEO.baseUrl,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SEO.baseUrl}/blog/${slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SEO.baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SEO.baseUrl}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow={post.category}
        h1={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.category, href: "/blog" },
        ]}
      />

      <main>
        <article className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Meta */}
              <ScrollReveal direction="blur">
                <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-border/40">
                  <div className="flex items-center gap-2 font-body text-[12px] text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>By <strong className="font-semibold text-foreground">Jameer Hosatti</strong></span>
                  </div>
                  <div className="flex items-center gap-2 font-body text-[12px] text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>{new Date(post.publishedDate).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20" style={{ color: "hsl(37,90%,55%)" }}>
                    {post.category}
                  </span>
                </div>
              </ScrollReveal>

              {/* Featured Blog Image (Uncropped) */}
              {post.image && (
                <ScrollReveal direction="scale" delay={0.02}>
                  <div className="w-full overflow-hidden rounded-2xl bg-muted mb-10 shadow-sm border border-border/30">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={675}
                      priority
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </ScrollReveal>
              )}

              {/* Content */}
              <ScrollReveal direction="blur" delay={0.05}>
                <div className="prose-custom">
                  {renderContent(post.content)}
                </div>
              </ScrollReveal>

              {/* Back link */}
              <div className="mt-10 pt-6 border-t border-border/40">
                <Link href="/blog" className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-muted-foreground hover:text-navy transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Blog Posts
                </Link>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-16 max-w-3xl mx-auto">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(37,90%,55%)" }}>Related Articles</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {related.map((p) => {
                    const cat = BLOG_CAT_COLORS[p.category] ?? BLOG_CAT_COLORS["AC & Air Cooler"];
                    return (
                      <Link key={p.slug} href={`/blog/${p.slug}`}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-white/90 shadow-sm hover:shadow-md hover:border-yellow-400/20 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        {p.image && (
                          <div className="relative w-full aspect-[16/9] bg-muted overflow-hidden border-b border-border/30">
                            <Image
                              src={p.image}
                              alt={p.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 400px"
                              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,40,0.6)] to-transparent z-10" />
                            <div className="absolute top-3 left-3 z-20">
                              <span 
                                className="inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-lg font-body text-[9.5px] font-bold tracking-[0.1em] uppercase shadow-sm"
                                style={{
                                  background: cat.bg,
                                  color: cat.text,
                                  border: `1px solid ${cat.border}`,
                                  backdropFilter: "blur(8px)",
                                  WebkitBackdropFilter: "blur(8px)"
                                }}
                              >
                                <span className="h-[5px] w-[5px] rounded-full shrink-0" style={{ background: cat.text }} />
                                {p.category}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="p-5 flex-1 flex flex-col bg-white">
                          <h3 className="font-display text-[15px] font-semibold text-foreground leading-snug group-hover:text-navy transition-colors">{p.title}</h3>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </article>

        <WhatsAppCTA
          heading="Problem Bigger Than a DIY Fix?"
          subheading="Call or WhatsApp Hosatti Refrigeration Service in Dharwad — quick expert repair at your doorstep."
          whatsappMessage={`Hello Hosatti Refrigeration Service!\n\nI read your blog "${post.title}" and I need expert help.\n\nPlease let me know your availability for repair in Dharwad. Thank you!`}
        />
      </main>
      <Footer />
    </>
  );
}
