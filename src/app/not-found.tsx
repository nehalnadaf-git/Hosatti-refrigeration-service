// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-navy flex items-center justify-center px-5">
      <div className="text-center">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70 mb-4">
          Error 404
        </p>
        <h1
          className="font-display text-white mb-6"
          style={{ fontSize: "clamp(4rem, 12vw, 8rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
        >
          Page Not Found
        </h1>
        <p className="font-body text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let us help you get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn-gold inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-body font-semibold text-sm tracking-[0.06em] uppercase"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-3 font-body font-semibold text-sm text-white tracking-[0.06em] uppercase hover:bg-white/10 transition-all"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
