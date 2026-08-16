import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { label: "XTRIM", href: "#" },
    { label: "NEV", href: "#" },
    { label: "FOWNIX", href: "#" },
    { label: "MVM", href: "#" },
];

export default function Header() {
    return (
        <header className="bg-ink2 text-white">
            <div className="mx-auto max-w-[1400px] px-4 md:px-8 h-16 flex items-center justify-between gap-6">
                <div className="hidden lg:flex items-center gap-6 text-sm text-white/70 order-3">
                    <button className="hover:text-white transition-colors focus-ring flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                    <Link href="#contact" className="hover:text-white transition-colors focus-ring">
                        تماس با ما
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors focus-ring">
                        خدمات پس از فروش
                    </Link>
                </div>

                {/* center: primary nav */}
                <nav className="hidden lg:flex items-center gap-7 text-sm font-medium order-2">
                    {navLinks.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            className="text-white/85 hover:text-white transition-colors focus-ring tracking-wide"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* left cluster: logo + CTA */}
                <div className="flex items-center gap-4 order-1 lg:order-3 mr-auto lg:mr-0">
                    <Link href="#sales" className="hidden md:inline text-sm text-white/85 hover:text-white transition-colors">
                        فروش
                    </Link>
                    <span className="hidden md:inline text-xs bg-white/10 text-white/70 px-3 py-1.5 rounded-full">
            جایگزینی پریمیوم
          </span>
                    <Link href="/"
                        className="flex items-center gap-1 font-num font-bold text-2xl tracking-tight text-crimson" >
                        <span>۷۷۷</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
