import Image from "next/image";
import Link from "next/link";


interface NavItemProps {
    id: string
    title: string
    href: string
    children: NavSubItemProps[]
}


interface NavSubItemProps {
    id: string;
    title: string,
    href: string,
    image?: string
}

const nav1: NavItemProps[] = [
    {
        id: "nav_item_r_1",
        title: "جایگزینی پریمیوم",
        href: "#",
        children: [
            {
                id: "nav_item_r_1_1",
                title: "خدمات جایگزینی",
                href: "/replacement/",
                image: "/assets/images/nav/ICON-mwno-new-up-۵۷.svg",
            },
            {
                id: "nav_item_r_1_2",
                title: "نمایشگاه آنلاین",
                href: "#",
                image: "/assets/images/nav/icon-new-menu-4.svg",
            },
        ],
    },

    {
        id: "nav_item_r_2",
        title: "فروش",
        href: "#",
        children: [
            {
                id: "nav_item_r_2_1",
                title: "شرایط فروش",
                href: "/sell/",
                image: "/assets/images/nav/icon-new-menu-1.svg",
            },
            {
                id: "nav_item_r_2_2",
                title: "چی بخرم!",
                href: "/car-finder/",
                image: "/assets/images/nav/icon-new-menu-2.svg",
            },
            {
                id: "nav_item_r_2_3",
                title: "محاسبه گر اقساط",
                href: "/installment-calculator/",
                image: "/assets/images/nav/icon-new-menu-3.svg",
            },
            {
                id: "nav_item_r_2_4",
                title: "فروش سازمانی",
                href: "/organizational-sales/",
                image: "/assets/images/nav/ICON-SAZMANI-new.svg",
            },
            {
                id: "nav_item_r_2_5",
                title: "مقایسه خودرو",
                href: "/compare/",
                image: "/assets/images/nav/ICON-moghayese-21-1.svg",
            },
        ],
    },
];
const nav2: NavItemProps[] = [
    {
        id: "nav_item_m_1",
        title: "جایگزینی پریمیوم",
        href: "#",
        children: [
            {
                id: "nav_item_m_1_1",
                title: "خدمات جایگزینی",
                href: "/replacement/",
                image: "/assets/images/nav/ICON-mwno-new-up-۵۷.svg",
            },
            {
                id: "nav_item_m_1_2",
                title: "نمایشگاه آنلاین",
                href: "#",
                image: "/assets/images/nav/icon-new-menu-4.svg",
            },
        ],
    },

    {
        id: "nav_item_m_2",
        title: "فروش",
        href: "#",
        children: [
            {
                id: "nav_item_m_2_1",
                title: "شرایط فروش",
                href: "/sell/",
                image: "/assets/images/nav/icon-new-menu-1.svg",
            },
            {
                id: "nav_item_m_2_2",
                title: "چی بخرم!",
                href: "/car-finder/",
                image: "/assets/images/nav/icon-new-menu-2.svg",
            },
            {
                id: "nav_item_m_2_3",
                title: "محاسبه گر اقساط",
                href: "/installment-calculator/",
                image: "/assets/images/nav/icon-new-menu-3.svg",
            },
            {
                id: "nav_item_m_2_4",
                title: "فروش سازمانی",
                href: "/organizational-sales/",
                image: "/assets/images/nav/ICON-SAZMANI-new.svg",
            },
            {
                id: "nav_item_m_2_5",
                title: "مقایسه خودرو",
                href: "/compare/",
                image: "/assets/images/nav/ICON-moghayese-21-1.svg",
            },
        ],
    },
];
const nav3: NavItemProps[] = [
    {
        id: "nav_item_l_3",
        title: "خدمات پس از فروش",
        href: "#",
        children: [
            {
                id: "nav_item_l_3_1",
                title: "خدمات VIP",
                href: "/vip-service/",
                image: "/assets/images/nav/ICON-mwno-new-up-۵۹.svg",
            },
            {
                id: "nav_item_l_3_2",
                title: "خدمات آموزشی",
                href: "/educational-services/",
                image: "/assets/images/nav/ICON-mwno-new-up-۵۸.svg",
            },
        ],
    },
    {
        id: "nav_item_l_4",
        title: "تماس با ما",
        href: "/contact-us/",
        children: [
            {
                id: "nav_item_l_4_1",
                title: "تماس با ما",
                href: "/contact-us/",
                image: "/assets/images/nav/ICON-contact-us-2.svg",
            },
            {
                id: "nav_item_l_4_2",
                title: "شعب و کارشوهای استان تهران",
                href: "/dealerships/tehran/",
                image: "/assets/images/nav/ICON-contact-us.svg",
            },
            {
                id: "nav_item_l_4_3",
                title: "شعب و کارشوهای استان البرز",
                href: "/dealerships/karaj/",
                image: "/assets/images/nav/ICON-contact-us-1.svg",
            },
            {
                id: "nav_item_l_4_4",
                title: "نمایندگی‌های مدیران خودرو ایران",
                href: "/dealerships/",
                image: "/assets/images/nav/all-dealerships-modiran-111.svg",
            },
        ],
    },
];
export default function Header() {
    const appName = process.env.APP_NAME ?? "میدیران خوردو ۷۷۷";
    return (
        <header className="my-2 relative">
            <div className="mx-auto container h-full flex items-center bg-slate-600/50 backdrop-blur-2xl py-4 px-3 rounded-2xl z-10">
                <Image src={'/assets/images/logo.webp'} alt={appName} width={70} height={50} loading={"eager"} fetchPriority={'high'}/>

                <div className="flex items-center justify-between gap-6 w-full">
                    {[nav1, nav2, nav3].map((navItem: NavItemProps[], i) => (
                        <nav key={i}>
                            <ul className={'flex items-center justify-center gap-3 w-full'}>
                                {navItem.map((item: NavItemProps) => (
                                    <li key={item.id} className={'group '}>
                                        <span className={'font-bold text-white'}>{item.title}</span>
                                        <div className={'bg-slate-600/50 backdrop-blur-2xl mx-auto invisible group-hover:z-30 group-hover:visible translate-y-full opacity-0 -bottom-1/4 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-75 ease-in grid md:grid-cols-4 absolute inset-x-0 w-full  rounded-2xl border border-slate-300 p-6'}>
                                            {item.children.map((nav: NavSubItemProps) =>
                                                <NavItem {...nav} key={nav.id} id={nav.id}/>)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>
        </header>
    );
}

export function NavItem({title, href, image}: NavSubItemProps) {
    return (
        <Link href={href} className={'flex items-center justify-center gap-3 flex-col'}>
            {image &&
                <Image src={image} alt={title} width={100} height={100} loading={"lazy"} fetchPriority={'low'} className={'mx-auto aspect-square'}/>}
            <span className={'text-white font-bold'}>{title}</span>
        </Link>
    );
}