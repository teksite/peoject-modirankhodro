const brandMarks = ["MVM", "XTRIM", "NEV", "FOWNIX"];

export default function Hero() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-[1.1fr_1fr]">
        {/* brand wordmark grid */}
        <div className="relative flex flex-wrap content-center gap-x-10 gap-y-6 px-6 md:px-14 py-14 md:py-0">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,white,transparent_60%)]" />
          {brandMarks.map((b) => (
            <span
              key={b}
              className="font-display font-extrabold text-3xl md:text-5xl text-white/90 tracking-tight"
            >
              {b}
            </span>
          ))}
        </div>

        {/* cut-corner promo panel */}
        <div className="relative bg-crimson cut-corner px-8 md:px-12 py-12 md:py-16 flex flex-col justify-center min-h-[320px] md:min-h-[420px]">
          <h1 className="font-display font-extrabold text-white text-3xl md:text-[2.6rem] leading-[1.25] md:leading-[1.2]">
            تحویل فوری
            <br />
            خودرو صفر
            <br />
            قیمت مناسب
          </h1>
          <a
            href="#lead-form"
            className="mt-8 inline-flex w-fit items-center gap-2 bg-ink text-white font-bold px-7 py-3.5 rounded-full hover:bg-ink2 transition-colors focus-ring"
          >
            ثبت‌نام فوری
          </a>
        </div>
      </div>

      {/* carousel controls */}
      <div className="absolute bottom-5 right-6 md:right-14 flex items-center gap-2">
        <button
          aria-label="اسلاید قبلی"
          className="w-9 h-9 rounded-full border border-white/25 text-white/70 hover:text-white hover:border-white/60 transition-colors flex items-center justify-center focus-ring"
        >
          ‹
        </button>
        <button
          aria-label="اسلاید بعدی"
          className="w-9 h-9 rounded-full border border-white/25 text-white/70 hover:text-white hover:border-white/60 transition-colors flex items-center justify-center focus-ring"
        >
          ›
        </button>
      </div>
    </section>
  );
}
