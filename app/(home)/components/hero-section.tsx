'use client'

import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Image from "next/image";

const slides = [
    {
        image: '/assets/images/sliders/1.avif',
        badge: 'رویداد ویژه',
        title: 'نمایشگاه پاییزه خوردو موتورز',
        description: 'بزرگ‌ترین نمایشگاه خودروهای سال ۱۴۰۵ با تخفیف‌های استثنایی و شرایط ویژه خرید',
        cta: 'مشاهده جزئیات',
        href: '#news',
    },
    {
        image: '/assets/images/sliders/2.avif',
        badge: 'اطلاع‌رسانی',
        title: 'شرایط اقساطی جدید فعال شد',
        description: 'از این پس می‌توانید خودروی دلخواه خود را با پیش‌پرداخت ۲۰٪ و اقساط ۳۶ ماهه خریداری کنید',
        cta: 'محاسبه اقساط',
        href: '#calculator',
    },
    {
        image: '/assets/images/sliders/3.avif',
        badge: 'تخفیف',
        title: 'جشنواره تابستانه فروش',
        description: 'تا ۱۵٪ تخفیف ویژه روی خودروهای منتخب به همراه هدایای ویژه خریداران',
        cta: 'مشاهده کاتالوگ',
        href: '#catalog',
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
    const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section id="home" className="relative h-[88vh] min-h-150 w-full overflow-hidden">
            {/* Slides */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                >
                    <div className="absolute inset-0">
                        <Image
                            width={1600}
                            height={600}
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                            loading={i === 0 ? 'eager' : 'lazy'}
                        />
                        <div className="absolute inset-0 bg-linear-to-l from-black/70 via-black/40 to-black/20" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                        <div
                            className={`max-w-2xl transition-all duration-700 ${
                                i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                        >
              <span className="inline-flex items-center gap-2 px-4 py-2 glass-dark text-red-300 text-sm font-semibold rounded-full mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  {slide.badge}
              </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 animate-fade-in-up animate-delay-100">
                                {slide.title}
                            </h1>
                            <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl animate-fade-in-up animate-delay-200">
                                {slide.description}
                            </p>
                            <a
                                href={slide.href}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-red-500 to-red-600 text-white text-base font-bold rounded-2xl shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-300"
                            >
                                {slide.cta}
                                <ArrowLeft className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
                <button
                    onClick={prev}
                    className="w-11 h-11 glass-dark rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 hover:scale-110"
                    aria-label="قبلی"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${
                                i === current ? 'w-8 bg-red-500' : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`اسلاید ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-11 h-11 glass-dark rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 hover:scale-110"
                    aria-label="بعدی"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/60">
                <span className="text-xs font-medium tracking-wider">اسکرول کنید</span>
                <div className="w-px h-12 bg-linear-to-b from-white/60 to-transparent" />
            </div>
        </section>
    );
}
