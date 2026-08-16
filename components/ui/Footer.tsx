import { footerColumns } from "@/lib/data";

const socials = ["✆", "◎", "✎", "▲", "◍", "✈"];

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-28 bg-ink text-white/70">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 pt-14 pb-10 grid md:grid-cols-[1.3fr_repeat(4,1fr)] gap-10">
        <div className="bg-white/5 rounded-2xl p-6">
          <p className="text-sm leading-7 text-white/60">
            با توجه به محدودیت ظرفیت ثبت‌نام فرم را پر کنید تا کارشناسان ما جهت ثبت‌نام قطعی
            با شما ارتباط برقرار کنند.
          </p>
          <a
            href="#lead-form"
            className="mt-4 inline-flex items-center gap-2 bg-crimson text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-crimson-dark transition-colors focus-ring"
          >
            فرم ثبت‌نام
          </a>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-bold text-sm flex items-center gap-1">
              {col.title}
              <span className="text-white/30">‹</span>
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors focus-ring">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 py-6 flex items-center gap-4">
          {socials.map((s, i) => (
            <a
              key={i}
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-xs hover:border-white/40 hover:text-white transition-colors focus-ring"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="relative h-28 md:h-40 overflow-hidden border-t border-white/10 flex items-center justify-center">
        <span className="font-display font-black text-4xl md:text-6xl tracking-[0.3em] text-white/10 select-none">
          XTRIM
        </span>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" />
      </div>

      <div className="border-t border-white/10 text-center text-xs text-white/40 py-5 px-4">
        تمام حقوق مادی و معنوی این وب‌سایت برای شرکت ایرانیان خودرو ۷۷۷ محفوظ می‌باشد. © ۱۴۰۵
      </div>
    </footer>
  );
}
