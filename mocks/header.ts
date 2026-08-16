import {HeaderNavItemProps} from "@/contracts";

const nav1: HeaderNavItemProps[] = [
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
const nav2: HeaderNavItemProps[] = [
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
const nav3: HeaderNavItemProps[] = [
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


export const HeaderNavGroups: HeaderNavItemProps[][] = [nav1, nav2, nav3];