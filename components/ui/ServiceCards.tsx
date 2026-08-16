import { services } from "@/lib/data";

const icons = [
  <path key="1" d="M12 2 4 6v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V6l-8-4Z" />,
  <path key="2" d="M4 4h11a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4Zm13 2h1a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1h-2" />,
  <path key="3" d="M4 4h16v16H4V4Zm3 4h10M7 12h4m-4 4h4m5-4h2m-2 4h2" />,
  <path key="4" d="m9 12 2 2 4-4M12 3l7 3v6c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V6l7-3Z" />,
];

export default function ServiceCards() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 md:px-8 mt-16 md:mt-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group bg-white border border-line rounded-2xl p-6 hover:border-crimson/40 hover:shadow-card transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-paper flex items-center justify-center text-crimson">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {icons[i]}
              </svg>
            </div>
            <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
            <div className="mt-2 w-8 h-0.5 bg-crimson" />
            <p className="mt-3 text-sm text-slate-soft leading-7">{s.desc}</p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink group-hover:text-crimson transition-colors focus-ring"
            >
              {s.cta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="rotate-45">
                <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
