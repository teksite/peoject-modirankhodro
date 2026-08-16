import {magazinesItems} from "@/mocks";
import ServiceSection from "@/app/(home)/components/service-section";
import NewsSlider from "@/components/ui/news-slider";
import {ArrowLeft, Newspaper} from "lucide-react";
import Link from "next/link";
import ReplacementSection from "@/app/(home)/components/replacement-section";
import BeforeAfterSlider from "@/components/ui/after-before";

export default function homePage() {
    return (
        <main>
            <section className="container mx-auto my-24">
                <ServiceSection/>
            </section>
            <section className="container mx-auto my-24">
                <ReplacementSection />
                <div className={'mx-auto w-100 md:w-150 lg:w-225'}>
                    <BeforeAfterSlider
                        beforeImage="/assets/images/after-before/old.png"
                        afterImage="/assets/images/after-before/new.png"
                    />
                </div>
            </section>

            <section className={'container mx-auto my-24'}>
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

                <NewsSlider items={magazinesItems}/>
            </section>
        </main>
    );
}