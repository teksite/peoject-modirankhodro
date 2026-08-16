import Link from "next/link";
import {services} from "@/mocks";
import {ServicesType} from "@/contracts";


export default function serviceSection() {

    return (
        <section className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((card : ServicesType, i:number) => {
                    const Icon = card.icon;
                    return (
                        <Link
                            key={card.id}
                            href={card.href}
                            className={'border border-slate-300 bg-white rounded-2xl p-6 group cursor-pointer transition-all duration-700 opacity-100 translate-y-0'}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                                <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors duration-300">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {card.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-brand-600 opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300">
                                مشاهده
                                <span className="w-6 h-px bg-brand-500" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
