import Link from "next/link";
import {services} from "@/mocks";
import {ServicesType} from "@/contracts";

export default function ServiceSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((card: ServicesType) => {
                const Icon = card.icon;

                return <Link
                    key={card.id}
                    href={card.href}
                    className={"relative overflow-hidden bg-white border border-slate-300 rounded-2xl p-6 group cursor-pointer z-10"}>
                    <div
                        className={" absolute inset-0 bg-center bg-cover bg-no-repeat opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none "}
                        style={{backgroundImage: `url(${card.image})`,}}/>

                    <div className={` w-14 h-14 rounded-2xl bg-linear-to-br ${card.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}>
                        <Icon className="w-7 h-7 text-white" strokeWidth={2}/>
                    </div>

                    <h3 className={" text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300 "}>
                        {card.title}
                    </h3>

                    <p className={" text-sm text-gray-600 leading-relaxed mb-4 "}>
                        {card.description}
                    </p>
                    <div className={"flex items-center gap-2 text-sm font-semibold text-red-600 opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300"}>
                        مشاهده
                        <span className="w-6 h-px bg-red-500"></span>
                    </div>

                </Link>;
            })}
        </div>
    );
}