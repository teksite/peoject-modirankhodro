import {ChevronLeft} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {CopyWrite, FooterGroupItems, FooterSocialNavItems, FormDescription} from "@/mocks";
import {FooterColItemType, FooterNavItemType, FooterSocialNavIType} from "@/contracts";


export default function Footer() {
    return (
        <footer className={'bg-black py-12 px-6'}>
            <div className={'container mx-auto '}>
                <div className={'grid gap-12 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'}>
                    {
                        FooterGroupItems.map((col: FooterColItemType, i) => <FooterColumn column={col} key={i}/>)
                    }
                    <section className={'border border-red-900 p-6 rounded-xl'}>
                        <p className={'text-sm text-white font-semibold leading-9 text-justify'}>
                            {FormDescription}
                        </p>
                    </section>
                </div>
                <nav>
                    <ul className={'flex items-center justify-center gap-6 mt-24 text-white'}>
                        {
                            FooterSocialNavItems.map((nav: FooterSocialNavIType) => (
                                <li key={nav.id}>
                                    <SocialNav item={nav}/>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Image src={'/assets/images/layouts/backligh-footer.webp'} className={'mx-auto mix-blend-screen'} alt={'footer image'} width={1920} height={490} fetchPriority={'low'} loading={'lazy'}/>
                <p className={'text-xs font-semibold text-white text-center'}>
                    {CopyWrite}
                </p>
            </div>
        </footer>
    );

}


function FooterColumn({column}: { column: FooterColItemType }) {
    return (
        <section className={'text-white'}>
            <div className={'flex items-center justify-start gap-1 mb-6'}>
                <span className={' font-bold '}>{column.title}</span>
                <ChevronLeft className={'text-current size-5'}/>
            </div>
            <ul className={'space-y-3'}>
                {
                    column.children.map((itm: FooterNavItemType) => (
                        <li key={column.id + '_' + itm.id}>
                            <Link href={'#'}>
                                {itm.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

function SocialNav({item}: { item: FooterSocialNavIType }) {
    return (
        <a href={item.href} title={item.title} target="_blank" rel="noopener noreferrer">

            {item.title}
        </a>
    );
}