// src/components/shared/PageHero.tsx
// Inner-page hero section — matches existing homepage design language exactly.
// Dark navy gradient, gold accent line, ScrollReveal blur animation.
// NOT used on homepage — homepage is unchanged.
import ScrollReveal from "@/components/shared/ScrollReveal";

interface BreadcrumbItem { label: string; href: string; }

interface PageHeroProps {
  eyebrow: string;
  h1: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ eyebrow, h1, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[hsl(220,85%,10%)] py-20 md:py-28">
      {/* Background orbs */}
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-yellow-400/[0.06] blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-900/30 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,hsl(220,85%,60%) 0,hsl(220,85%,60%) 1px,transparent 0,transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative container mx-auto px-5 md:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 font-body text-[11px] text-white/50">
              {breadcrumbs.map((item, i) => (
                <li key={item.href} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white/30">/</span>}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-white/70">{item.label}</span>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-yellow-400 transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <ScrollReveal direction="blur" delay={0}>
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-yellow-400 to-yellow-400/40 rounded-full" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400 md:text-[11px]">
                {eyebrow}
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-white pb-1 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
              {h1}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-5 font-body text-[16px] md:text-[18px] text-white/65 leading-[1.8] max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
