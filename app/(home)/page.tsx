import ServiceSection from "@/app/(home)/components/service-section";

import ReplacementSection from "@/app/(home)/components/replacement-section";
import BeforeAfterSlider from "@/components/ui/after-before";
import Counter from "@/components/layouts/container";
import ConsultSection from "@/components/ui/consult-section";
import {ArrowLeft, Newspaper} from "lucide-react";
import Link from "next/link";
import NewsSlider from "@/components/ui/news-slider";
import {magazinesItems} from "@/mocks";
import HeroSlider from "@/app/(home)/components/hero-section";
import CounterSection from "@/app/(home)/components/counter-section";

export default function homePage() {
    return (
        <main>
            <HeroSlider />

            <Counter>
                <h1 className={'text-center font-bold text-3xl text-red-900 mb-6'}>
                    خدمات مدیران خودرو ۷۷۷
                </h1>
                <p className={'text-gray-600 text-center w-full md:w-3/4 mx-auto leading-9'}>
                    مدیران خودرو 777 از سال 1396 کار خود را آغاز کرد و به تدریج و با پیگیری برنامه توسعه خود، حالا به عنوان یکی از بهترین نمایندگی‌های چری در جهان و رتبه یک فروش در ایران است. مدیران خودرو 777 دارای 7 شعبه و کارشو فعال در استان تهران و البرز آماده ارائه خدمات به شما همراهان گرامی است.
                </p>
            </Counter>
            <Counter>
                <CounterSection />
            </Counter>
            <Counter>
                <ServiceSection/>
            </Counter>

            <Counter>
                <ReplacementSection/>
                <div className={'mx-auto w-100 md:w-150 lg:w-225'}>
                    <BeforeAfterSlider beforeImage="/assets/images/after-before/old.png" afterImage="/assets/images/after-before/new.png" />
                </div>
            </Counter>


            <Counter>
                <ConsultSection />
            </Counter>


            <Counter>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12">
                    <div className="inline-flex items-center gap-3">
                        <Newspaper className="size-6"/>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                            اخبار و{' '}
                            <span className="text-red-900">
                                    اطلاع‌رسانی
                            </span>
                        </h2>
                    </div>
                    <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-red-900 hover:gap-3">
                        مشاهده همه اخبار
                        <ArrowLeft className="w-4 h-4"/>
                    </Link>

                </div>

                <NewsSlider items={magazinesItems} />
            </Counter>
        </main>
    );
}