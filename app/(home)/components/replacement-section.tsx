import {RefreshCw, CheckCircle2, ArrowLeft} from 'lucide-react';
import {FeaturesType} from "@/contracts";
import {featuresList} from "@/mocks";
import Link from "next/link";


export default function ReplacementSection() {

    return (
        <section id="replacement" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-500/8 rounded-full blur-3xl"/>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-300/8 rounded-full blur-3xl"/>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass-red text-red-600 text-sm font-semibold rounded-full mb-4">
                        <RefreshCw className="w-4 h-4"/>
                        طرح جایگزینی
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        خودروی خود را <span className="gradient-text">جایگزین</span> کنید
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        در این طرح کلیه دارندگان خودروهای برندهای ام وی ام، فونیکس، اکستریم و حتی برند های مطرح داخلی و خارجی که سال ساخت خودروی آنها از سال 1396 به بعد می باشد می توانند با مراجعه به وب سایت نمایندگی 777 و تکمیل فرم رزرو ثبت نام، نسبت به ثبت درخواست جایگزینی خودروی خود اقدام نمایند.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        {[
                            {
                                step: '۰۱',
                                title: 'ثبت درخواست جایگزینی',
                                desc: 'فرم مشاوره را تکمیل کنید و گزینه طرح جایگزینی را انتخاب نمایید'
                            },
                            {
                                step: '۰۲',
                                title: 'کارشناسی و ارزش‌گذاری',
                                desc: 'کارشناسان ما خودروی فعلی شما را معاینه و قیمت‌گذاری می‌کنند'
                            },
                            {
                                step: '۰۳',
                                title: 'انتخاب خودروی جدید',
                                desc: 'از میان کاتالوگ، خودروی دلخواه خود را انتخاب کنید'
                            },
                            {
                                step: '۰۴',
                                title: 'تسویه و تحویل',
                                desc: 'مبلغ کسر شده و تحویل خودروی جدید در کوتاه‌ترین زمان'
                            },
                        ].map((item, i) => (
                            <div key={i}
                                 className={`glass-card rounded-2xl p-6 flex items-start gap-6 transition-all duration-700`}
                                 style={{transitionDelay: `${i * 0.15}s`}}>
                                <div className="shrink-0 w-14 h-14 bg-linear-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-red-500/30">
                                    {item.step}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1"/>
                            </div>
                        ))}
                    </div>

                    <div className={`transition-all duration-700 delay-300`}>
                        <div className="glass-card rounded-3xl p-8 lg:p-10">
                            <div className="space-y-6 mb-8">
                                {featuresList.map((feature: FeaturesType, i) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                                                <Icon className="w-6 h-6 text-red-600"/>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="p-5 bg-linear-to-br from-red-50 to-red-100/50 rounded-2xl mb-6">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <span className="font-bold text-red-700">نکته:</span> طرح جایگزینی برای تمامی خودروهای داخلی و خارجی با هر میزان کارکرد قابل انجام است.
                                </p>
                            </div>

                            <Link href="#consultation" className="inline-flex items-center gap-3 px-7 py-3.5 bg-linear-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300">
                                درخواست جایگزینی
                                <ArrowLeft className="w-5 h-5"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
