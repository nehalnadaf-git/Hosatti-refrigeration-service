import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogs";
import { SEO } from "@/lib/seo";
import PageHero from "@/components/shared/PageHero";
import WhatsAppCTA from "@/components/shared/WhatsAppCTA";
import Footer from "@/components/layout/Footer";
import ScrollReveal, { StaggerItem } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Appliance Repair Tips & Guides for Dharwad | Hosatti Blog",
  description: "Expert appliance repair tips, DIY guides & troubleshooting advice for Dharwad homeowners — AC, refrigerator & washing machine problems explained by Hosatti Refrigeration Service.",
  alternates: { canonical: `${SEO.baseUrl}/blog` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SEO.baseUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SEO.baseUrl}/blog` },
  ],
};

const BLOG_CAT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "AC & Air Cooler": { bg: "rgba(37,99,235,0.18)",  text: "#93c5fd", border: "rgba(37,99,235,0.40)" },
  "Refrigerator":    { bg: "rgba(16,185,129,0.15)", text: "#6ee7b7", border: "rgba(16,185,129,0.35)" },
  "Washing Machine": { bg: "rgba(245,158,11,0.15)", text: "#fcd34d", border: "rgba(245,158,11,0.35)"  },
};

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        eyebrow="Tips & Guides"
        h1="Appliance Repair Tips & Guides for Dharwad Homeowners"
        subtitle="Learn how to fix common AC, fridge & washing machine problems yourself — and when to call us for expert help in Dharwad."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }]}
      />

      <main>
        <section className="relative bg-light-bg py-16 md:py-20">
          <div className="container mx-auto px-5 md:px-8">
            <ScrollReveal staggerChildren staggerDelay={0.08}>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {BLOG_POSTS.map((post) => {
                  const cat = BLOG_CAT_COLORS[post.category] ?? BLOG_CAT_COLORS["AC & Air Cooler"];
                  return (
                    <StaggerItem
                      key={post.slug}
                      direction="scale"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col rounded-2xl border border-border/40 bg-white/90 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-yellow-400/20 hover:-translate-y-1 overflow-hidden"
                      >
                        {/* Image area */}
                        <div className="relative flex flex-col overflow-hidden bg-muted w-full aspect-[4/3]">
                          {post.image && (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,40,0.3)] to-transparent z-10" />
                          
                          {/* Glassmorphism Floating Category Badge (ServiceCard Style) */}
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
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content text area */}
                        <div className="flex flex-1 flex-col justify-between p-5 gap-4">
                          <div>
                            <h2
                              className="font-display text-foreground font-semibold leading-tight group-hover:text-navy transition-colors duration-200 text-[1.15rem]"
                            >
                              {post.title}
                            </h2>
                            <p className="font-body text-[13px] text-muted-foreground leading-[1.7] mt-3 line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/40">
                            <div className="flex items-center gap-1.5 font-body text-[12px] text-muted-foreground">
                              <CalendarDays className="h-4 w-4" />
                              <span>
                                {new Date(post.publishedDate).toLocaleDateString("en-IN", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                            <span
                              className="flex items-center gap-1 font-body text-[13px] font-semibold transition-colors group-hover:text-yellow-600"
                              style={{ color: "hsl(37,90%,55%)" }}
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </StaggerItem>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>
        <WhatsAppCTA heading="Need Expert Help? Call Hosatti in Dharwad" subheading="If the DIY fix didn't work, call or WhatsApp us — quick doorstep repair in Dharwad." />
      </main>
      <Footer />
    </>
  );
}
