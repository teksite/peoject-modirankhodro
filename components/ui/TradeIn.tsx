export default function TradeIn() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 mt-16 md:mt-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-ink">
          <img
            src="https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1400&auto=format&fit=crop"
            alt="طرح جایگزینی خودرو"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-ink/10 via-transparent to-ink/40" />
        </div>

        <div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl">
            طرح جایگزینی
          </h2>
          <p className="mt-4 text-slate-soft leading-8 text-[15px]">
            در این طرح، کلیه دارندگان خودروهای برندهای ام‌وی‌ام، اکستریم و سایر برندهای داخلی و
            خارجی که سال ساخت خودروی آن‌ها از سال ۱۳۹۶ به بعد می‌باشد، می‌توانند با مراجعه به وب‌سایت
            نمایندگی ۷۷۷ و تکمیل فرم ثبت‌نام، نسبت به ثبت درخواست جایگزینی خودروی خود اقدام نمایند.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 bg-crimson text-white font-bold px-7 py-3 rounded-full hover:bg-crimson-dark transition-colors focus-ring"
          >
            اطلاعات بیشتر
          </a>
        </div>
      </div>
    </section>
  );
}
