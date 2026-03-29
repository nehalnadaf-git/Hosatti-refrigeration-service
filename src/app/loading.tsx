// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero skeleton */}
      <div className="h-screen bg-gradient-to-b from-slate-800 to-slate-900" />
      {/* Content skeletons */}
      <div className="container mx-auto px-5 py-20 space-y-12">
        <div className="h-8 w-48 bg-slate-200 rounded-xl mx-auto" />
        <div className="h-4 w-80 bg-slate-100 rounded-lg mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-slate-100 rounded-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
