// src/components/shared/PWAInstallBanner.tsx
"use client";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { X, Download } from "lucide-react";
import { useState } from "react";

export default function PWAInstallBanner() {
  const { isInstallable, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm">
      <div className="glass-light rounded-2xl p-4 shadow-xl border border-white/50">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy/10 to-navy/5">
            <Download className="h-5 w-5 text-navy-900" style={{ color: "hsl(220,85%,23%)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-body font-bold text-sm text-foreground">
              Install Hosatti Service
            </p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">
              Add to your home screen for quick access
            </p>
            <button
              onClick={install}
              className="btn-gold mt-2 rounded-lg px-4 py-1.5 font-body font-semibold text-xs tracking-[0.05em] uppercase"
            >
              Install App
            </button>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss install banner"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
          >
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
