import {MagazineItemType, magazineTagsType} from "@/contracts";

export const magazinesItems: MagazineItemType[] = [
    {
        id: 'mag_item_1',
        tagId: 'tag_discount',
        title: 'آخرین لیست قیمت محصولات مدیران خودرو',
        href: '#',
        image: '/assets/images/news/SITE-Shakhes-1.webp',
        excerpt: 'آخرین قیمت محصولات مدیران خودرو را مشاهده کنید و از جدیدترین تغییرات قیمت خودروها مطلع شوید.',
        date: '۱۴ مرداد ۱۴۰۵',
    },
    {
        id: 'mag_item_2',
        tagId: 'tag_news',
        title: 'چری در جهان؛ از جهش ۲۷۴ درصدی در اروپا تا صدرنشینی در خاورمیانه',
        href: '#',
        image: '/assets/images/news/m7.webp',
        excerpt: 'نگاهی به رشد جهانی چری و جایگاه این خودروساز در بازارهای مختلف جهان.',
        date: '۱۲ مرداد ۱۴۰۵',
    },
    {
        id: 'mag_item_3',
        tagId: 'tag_industry',
        title: 'برای نخستین‌بار، سه خودروساز چینی در جمع ۱۰ خودروساز برتر جهان',
        href: '#',
        image: '/assets/images/news/SITE-Shakhes.webp',
        excerpt: 'سه خودروساز چینی برای نخستین‌بار در جمع ۱۰ خودروساز برتر جهان قرار گرفتند.',
        date: '۱۰ مرداد ۱۴۰۵',
    },
    {
        id: 'mag_item_4',
        tagId: 'tag_news',
        title: 'مرور اخبار خودرو در هفته سوم مرداد 1405',
        href: '#',
        image: '/assets/images/news/NEWS777-1-1.webp',
        excerpt: 'مروری بر مهم‌ترین اخبار و اتفاقات صنعت خودرو در هفته سوم مرداد ماه.',
        date: '۹ مرداد ۱۴۰۵',
    },
    {
        id: 'mag_item_5',
        tagId: 'tag_education',
        title: 'مودهای رانندگی چیست و چگونه کار می‌کند؟',
        href: '#',
        image: '/assets/images/news/SITE-Shakhes-copy-2.webp',
        excerpt: 'با انواع مودهای رانندگی خودرو و کاربرد هرکدام در شرایط مختلف آشنا شوید.',
        date: '۷ مرداد ۱۴۰۵',
    },
    {
        id: 'mag_item_6',
        tagId: 'tag_discount',
        title: 'فروش ویژه 777، بدون کمیسیون و تحویل آنی',
        href: '#',
        image: '/assets/images/news/SITE-Shakhes-تحویل-آنی-1.webp',
        excerpt: 'فروش ویژه محصولات منتخب با شرایط استثنایی، بدون کمیسیون و با تحویل آنی.',
        date: '۶ مرداد ۱۴۰۵',
    },
    {
        id: 'mag_item_7',
        tagId: 'tag_technology',
        title: 'مگنا، نسل جدید سیستم محرکه برقی برای چری می‌سازد',
        href: '#',
        image: '/assets/images/news/magna.webp',
        excerpt: 'آشنایی با نسل جدید سیستم محرکه برقی مگنا و همکاری این شرکت با چری.',
        date: '۴ مرداد ۱۴۰۵',
    },
    {
        id: 'mag_item_8',
        tagId: 'tag_education',
        title: 'سیستم کنترل فشار باد تایر چیست و چگونه کار می‌کند؟',
        href: '#',
        image: '/assets/images/news/baad.webp',
        excerpt: 'سیستم TPMS چگونه کار می‌کند و چرا کنترل فشار باد تایر اهمیت دارد؟',
        date: '۲ مرداد ۱۴۰۵',
    },
];



export const magazineTags :magazineTagsType[] = [
    {
        id: 'tag_discount',
        title: 'تخفیف',
        color: 'bg-red-500',
    },
    {
        id: 'tag_news',
        title: 'اخبار',
        color: 'bg-blue-500',
    },
    {
        id: 'tag_industry',
        title: 'صنعت خودرو',
        color: 'bg-emerald-500',
    },
    {
        id: 'tag_education',
        title: 'آموزشی',
        color: 'bg-amber-500',
    },
    {
        id: 'tag_technology',
        title: 'فناوری',
        color: 'bg-purple-500',
    },
];