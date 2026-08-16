import {ShoppingCart, BookOpen, Calculator, FileText} from 'lucide-react';
import {ServicesType} from "@/contracts";

export const services: ServicesType[] = [
    {
        id: 'buy',
        icon: ShoppingCart,
        title: 'جی‌بخرم',
        description: 'روند خرید خودرو را گام به گام دنبال کنید و از مشاوره تخصصی بهره‌مند شوید',
        color: 'from-red-500 to-red-700',
        href: '#consultation',
        image: '/assets/images/services/icon1_main-page-022.webp',
    },
    {
        id: 'catalog',
        icon: BookOpen,
        title: 'کاتالوگ',
        description: 'لیست کامل خودروهای موجود با مشخصات فنی، تصاویر و قیمت‌های به‌روز',
        color: 'from-slate-700 to-slate-900',
        href: '#catalog',
        image: '/assets/images/services/icon1_main-page-033.webp',
    },
    {
        id: 'calculator',
        icon: Calculator,
        title: 'محاسبه‌گر اقساط',
        description: 'مبلغ پیش‌پرداخت و اقساط ماهانه را بر اساس بودجه خود محاسبه کنید',
        color: 'from-emerald-600 to-emerald-800',
        href: '#calculator',
        image: '/assets/images/services/icon1_main-page-044.webp',
    },
    {
        id: 'conditions',
        icon: FileText,
        title: 'شرایط خوردو',
        description: 'شرایط خرید، ضمانت‌نامه‌ها و قوانین پرداخت اقساطی را مطالعه کنید',
        color: 'from-amber-500 to-amber-700',
        href: '#replacement',
        image: '/assets/images/services/SITE-Shakhes-تحویل-آنی-1.webp',
    },
];