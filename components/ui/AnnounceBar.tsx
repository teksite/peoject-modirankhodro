export default function AnnounceBar() {
  return (
    <div className="bg-ink text-white/80 text-xs">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 h-9 flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-num tracking-wide">
          <span className="hidden sm:inline text-white/50">نمایندگی رسمی</span>
          <span className="font-display font-bold text-white text-sm">FOWNIX</span>
        </div>
        <a
          href="tel:02136000777"
          className="flex items-center gap-2 hover:text-crimson-light transition-colors focus-ring"
        >
          <span>تماس بگیرید</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="rotate-[135deg]">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
