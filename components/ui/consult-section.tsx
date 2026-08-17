import {CheckCircle2, LucideIcon} from 'lucide-react';
import ConsultForm from "@/components/forms/consult";

interface listItemType {
    icon: LucideIcon,
    text: string
}

const listItems: listItemType[] = [
    {icon: CheckCircle2, text: 'مشاوره کاملاً رایگان'},
    {icon: CheckCircle2, text: 'تماس در زمان دلخواه شما'},
    {icon: CheckCircle2, text: 'پاسخگویی در کمتر از ۲۴ ساعت'},
];

export default function ConsultationForm() {

    return (
        <section id="consultation" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float"/>
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}/>
            </div>

            <div className="glass-card rounded-4xl overflow-hidden">
                <div className="grid md:grid-cols-5">
                    {/* Info side */}
                    <div className="md:col-span-2 bg-linear-to-br from-red-600 to-red-800 p-8 md:p-10 text-white relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"/>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-300/20 rounded-full blur-2xl"/>
                        <div className="relative">
                            <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-semibold mb-4">
                              فرم مشاوره
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                                مشاوره رایگان خودرو دریافت کنید
                            </h2>
                            <p className="text-white/80 text-sm leading-relaxed mb-8">
                                فرم زیر را تکمیل کنید تا کارشناسان ما در زمان دلخواه شما تماس بگیرند و شما را در انتخاب بهترین گزینه راهنمایی کنند.
                            </p>
                            <div className="space-y-4">
                                {listItems.map((item: listItemType, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-4 h-4 text-white"/>
                                            </div>
                                            {item.text}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Form side */}
                    <div className="md:col-span-3 p-8 md:p-10">
                        {<ConsultForm/>}
                    </div>
                </div>
            </div>
        </section>
    );
}
