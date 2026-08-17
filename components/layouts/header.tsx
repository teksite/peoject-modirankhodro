import Image from "next/image";
import Link from "next/link";
import {HeaderNavItemProps, HeaderNavSubItemProps} from "@/contracts";
import {HeaderNavGroups} from "@/mocks";


export default function Header() {
    const appName :string = process.env.APP_NAME ?? "میدیران خوردو ۷۷۷";
    return (
        <header className="z-50 fixed top-4 inset-x-0 flex items-center">
            <div className={'relative container mx-auto '}>
                <div className="mx-auto  h-full flex items-center bg-slate-600/90 backdrop-blur-2xl py-4 px-6 rounded-2xl z-10">
                    <Image src={'/assets/images/logo.webp'} alt={appName} width={70} height={50} loading={"eager"} fetchPriority={'high'}/>

                    <div className="flex items-center justify-between gap-6 w-full">
                        {HeaderNavGroups.map((navItem: HeaderNavItemProps[], i) => (
                            <nav key={i}>
                                <ul className={'flex items-center justify-center gap-3 w-full'}>
                                    {navItem.map((item: HeaderNavItemProps) => (
                                        <li key={item.id} className={'group '}>
                                            <span className={'font-bold text-white'}>{item.title}</span>
                                            <div className={'bg-slate-600/90 backdrop-blur-2xl mx-auto invisible group-hover:z-50 group-hover:visible translate-y-full opacity-0 -bottom-1/4 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-75 ease-in grid md:grid-cols-4 absolute inset-x-0 w-full  rounded-2xl border border-slate-300 p-6'}>
                                                {item.children.map((nav: HeaderNavSubItemProps) =>
                                                    <NavItem {...nav} key={nav.id} id={nav.id}/>)}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export function NavItem({title, href, image}: HeaderNavSubItemProps) {
    return (
        <Link href={href} className={'flex items-center justify-center gap-3 flex-col'}>
            {image &&
                <Image src={image} alt={title} width={100} height={100} loading={"lazy"} fetchPriority={'low'} className={'mx-auto aspect-square'}/>}
            <span className={'text-white font-bold'}>{title}</span>
        </Link>
    );
}