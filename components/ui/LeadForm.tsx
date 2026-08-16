"use client";

import { FormEvent, useState } from "react";

const selects = [
  { placeholder: "انتخاب خودرو*" },
  { placeholder: "شرایط پرداخت*" },
  { placeholder: "انتخاب زمان مناسب برای تماس با شما*" },
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="lead-form" className="mx-auto max-w-[1400px] px-4 md:px-8 mt-16 md:mt-24">
      <div className="grid md:grid-cols-[0.75fr_1.25fr] gap-10 md:gap-16 items-center">
        {/* phone mockup */}
        <div className="hidden md:flex justify-center order-2 md:order-1">
          <div className="relative w-[260px] h-[540px] rounded-[2.5rem] bg-ink p-3 shadow-card">
            <div className="w-full h-full rounded-[2rem] bg-paper overflow-hidden flex flex-col">
              <div className="bg-crimson px-5 py-4 text-white">
                <div className="font-display font-extrabold text-lg">۷۷۷</div>
                <div className="text-xs text-white/80 mt-1">فرم ثبت‌نام سریع</div>
              </div>
              <div className="p-4 space-y-3 flex-1">
                {["نام و نام‌خانوادگی", "تلفن شما", "ایمیل", "انتخاب خودرو"].map((f) => (
                  <div key={f} className="h-9 rounded-lg bg-white border border-line px-3 flex items-center text-[11px] text-slate-soft">
                    {f}
                  </div>
                ))}
                <div className="mt-4 h-10 rounded-lg bg-crimson text-white text-xs font-bold flex items-center justify-center">
                  ثبت درخواست
                </div>
              </div>
            </div>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>

        {/* form card */}
        <div className="order-1 md:order-2 bg-white border border-line rounded-3xl shadow-card p-6 md:p-10">
          <h2 className="font-display font-extrabold text-xl md:text-2xl">
            همراهان عزیز نمایندگی ۷۷۷
          </h2>
          <p className="mt-2 text-crimson font-semibold text-sm">
            ارتباط فوری جهت خرید خودرو
          </p>
          <a
            href="tel:02136000777"
            className="mt-3 inline-flex items-center gap-2 bg-paper border border-line rounded-full px-4 py-2 text-sm font-num font-bold tnum hover:border-ink/30 transition-colors focus-ring"
          >
            ۰۲۱۳۶۰۰۰۷۷۷
          </a>
          <p className="mt-4 text-sm text-slate-soft leading-7">
            برای اطلاع از قیمت روز خودرو فرم زیر را پر کنید تا کارشناسان ما جهت مشاوره با شما
            ارتباط برقرار کنند.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-2xl bg-paper border border-line px-5 py-8 text-center">
              <p className="font-bold">درخواست شما ثبت شد.</p>
              <p className="mt-1 text-sm text-slate-soft">کارشناسان ما به‌زودی با شما تماس می‌گیرند.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="تلفن شما*"
                className="h-12 rounded-xl border border-line bg-paper px-4 text-sm focus-ring focus:border-crimson outline-none"
              />
              <input
                required
                placeholder="نام و نام‌خانوادگی*"
                className="h-12 rounded-xl border border-line bg-paper px-4 text-sm focus-ring focus:border-crimson outline-none"
              />
              <input
                type="email"
                placeholder="ایمیل (لطفاً شماره موبایل معتبر وارد کنید.)"
                className="h-12 rounded-xl border border-line bg-paper px-4 text-sm sm:col-span-2 focus-ring focus:border-crimson outline-none"
              />
              {selects.map((s) => (
                <select
                  key={s.placeholder}
                  required
                  defaultValue=""
                  className="h-12 rounded-xl border border-line bg-paper px-4 text-sm text-slate-soft sm:col-span-2 focus-ring focus:border-crimson outline-none"
                >
                  <option value="" disabled>
                    {s.placeholder}
                  </option>
                  <option value="1">گزینه ۱</option>
                  <option value="2">گزینه ۲</option>
                </select>
              ))}
              <button
                type="submit"
                className="sm:col-span-2 h-12 rounded-xl bg-crimson text-white font-bold hover:bg-crimson-dark transition-colors focus-ring"
              >
                ثبت درخواست
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
