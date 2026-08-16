import { stats } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 -mt-10 md:-mt-14 relative z-10">
      <div className="bg-white rounded-3xl shadow-card border border-line p-6 md:p-10 grid md:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-ink">
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop"
            alt="مشاوره خرید خودرو"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <span className="absolute bottom-4 right-4 text-white/90 font-display font-extrabold text-2xl">
            ۷۷۷
          </span>
        </div>

        <div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl">
            چی بخرم...!؟
          </h2>
          <p className="mt-4 text-slate-soft leading-8 text-[15px]">
            با چی بخریم مقایسه کن، محاسبه کن، تحویل بگیر. مدیران خودرو ۷۷۷ به وسیله کارشناسان
            متخصصی به شما کمک می‌کند تا براساس بودجه‌های خود و ویژگی‌های مدنظر خود، خودروی متناسب با
            نیازتان را انتخاب و مقایسه کنید. در این مسیر، مدیران خودرو ۷۷۷ در تلاش است با مشاوره‌ای
            تخصصی و در عین حال منصفانه، به شما در انتخابی درست کمک کند.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 bg-crimson text-white font-bold px-7 py-3 rounded-full hover:bg-crimson-dark transition-colors focus-ring"
          >
            مقایسه کن
          </a>

          <div className="mt-8 grid grid-cols-3 divide-x divide-x-reverse divide-line rounded-2xl border border-line overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-2 py-5">
                <div className="font-num font-bold text-xl md:text-2xl tnum">{s.value}</div>
                <div className="mt-1 text-xs text-slate-soft leading-5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
