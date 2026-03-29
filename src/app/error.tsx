// src/app/error.tsx
"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 mx-auto">
          <span className="text-2xl">⚠️</span>
        </div>
        <h2 className="font-display text-foreground mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
          Something went wrong
        </h2>
        <p className="font-body text-muted-foreground mb-8">
          We apologize for the inconvenience. Please try again or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-gold inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-body font-semibold text-sm tracking-[0.06em] uppercase"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-border/50 bg-white px-6 py-3 font-body font-semibold text-sm text-foreground tracking-[0.06em] uppercase hover:border-gold/30 transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
