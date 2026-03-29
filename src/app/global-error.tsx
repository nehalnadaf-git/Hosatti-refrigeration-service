// src/app/global-error.tsx
"use client";
import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en-IN">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f8fafc" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.25rem" }}>
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: "#1a237e" }}>
              Something went wrong
            </h2>
            <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>
              A critical error occurred. Please refresh the page.
            </p>
            <button
              onClick={reset}
              style={{
                background: "linear-gradient(135deg, #f9a825, #e65100)",
                color: "#1a237e",
                fontWeight: 700,
                border: "none",
                borderRadius: "0.75rem",
                padding: "0.75rem 2rem",
                cursor: "pointer",
                fontSize: "0.875rem",
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
