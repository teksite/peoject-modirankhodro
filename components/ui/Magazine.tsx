import { magazine } from "@/lib/data";

export default function Magazine() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 mt-16 md:mt-24">
      <div className="flex items-center justify-between">
        <h2 className="font-display font-extrabold text-2xl md:text-3xl">مجله ۷۷۷</h2>
        <a href="#" className="text-sm font-bold text-slate-soft hover:text-crimson transition-colors focus-ring">
          مشاهده همه ‹‹
        </a>
      </div>

      <div className="mt-6 flex gap-5 overflow-x-auto scrollbar-none pb-2 snap-x">
        {magazine.map((m) => (
          <a
            key={m.title}
            href="#"
            className="group snap-start shrink-0 w-[260px] md:w-[280px] rounded-2xl overflow-hidden border border-line bg-white hover:shadow-card transition-shadow"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={m.image}
                alt={m.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 bg-ink/80 text-white text-[11px] px-2.5 py-1 rounded-full">
                {m.tag}
              </span>
            </div>
            <div className="p-4 flex items-center justify-between gap-2">
              <h3 className="font-bold text-sm leading-6">{m.title}</h3>
              <span className="shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-xs group-hover:border-crimson group-hover:text-crimson transition-colors rotate-45">
                ↑
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
