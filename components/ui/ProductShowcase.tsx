"use client";

import { useState } from "react";
import { brands, BrandKey } from "@/lib/data";

export default function ProductShowcase() {
  const [active, setActive] = useState<BrandKey>("xtrim");
  const current = brands.find((b) => b.key === active)!;

  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 mt-16 md:mt-24">
      {/* brand tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {brands.map((b) => {
          const isActive = b.key === active;
          return (
            <button
              key={b.key}
              onClick={() => setActive(b.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all focus-ring ${
                isActive ? "text-white shadow-pop" : "text-slate-soft bg-white border border-line hover:border-ink/30"
              }`}
              style={isActive ? { backgroundColor: b.accent } : undefined}
            >
              {b.label}
            </button>
          );
        })}
      </div>

      {/* showcase stage */}
      <div className="relative mt-8 rounded-3xl bg-white border border-line overflow-hidden">
        <div className="relative h-[280px] md:h-[440px] flex items-center justify-center overflow-hidden">
          <span
            aria-hidden
            className="absolute font-display font-extrabold text-[5rem] md:text-[11rem] leading-none tracking-tighter select-none text-outline"
            style={{ WebkitTextStrokeColor: `${current.accent}33` }}
          >
            {current.label}
          </span>
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{ background: `radial-gradient(circle at 50% 55%, ${current.accent}, transparent 60%)` }}
          />
          <img
            key={current.key}
            src={current.image}
            alt={current.model}
            className="relative z-10 w-[85%] md:w-[65%] max-w-[720px] object-contain animate-rise drop-shadow-2xl"
          />
        </div>

        {/* thumbnail rail */}
        <div className="px-5 md:px-8 flex items-center gap-2 -mt-2 md:-mt-0">
          <button
            aria-label="قبلی"
            className="w-9 h-9 shrink-0 rounded-full border border-line hover:border-ink/40 flex items-center justify-center focus-ring"
          >
            ‹
          </button>
          <div className="flex-1 flex items-center gap-3 overflow-x-auto scrollbar-none py-4">
            {brands.map((b) => (
              <button
                key={b.key}
                onClick={() => setActive(b.key)}
                className={`shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-xl border-2 overflow-hidden transition-colors focus-ring ${
                  b.key === active ? "border-crimson" : "border-line"
                }`}
              >
                <img src={b.image} alt={b.model} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <button
            aria-label="بعدی"
            className="w-9 h-9 shrink-0 rounded-full border border-line hover:border-ink/40 flex items-center justify-center focus-ring"
          >
            ›
          </button>
        </div>

        {/* price / actions bar */}
        <div className="border-t border-line px-5 md:px-8 py-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-baseline gap-2">
            <span className="font-num font-bold text-xl md:text-2xl tnum">{current.price}</span>
            <span className="text-slate-soft text-sm">تومان</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-6 py-3 rounded-full border border-line font-bold text-sm hover:border-ink/40 transition-colors focus-ring">
              اطلاعات محصول
            </button>
            <button
              className="px-6 py-3 rounded-full text-white font-bold text-sm transition-colors focus-ring"
              style={{ backgroundColor: current.accent }}
            >
              شرایط فروش
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
