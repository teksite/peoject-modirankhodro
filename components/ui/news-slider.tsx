'use client';

import Link from 'next/link';
import {Newspaper, ArrowLeft, Calendar} from 'lucide-react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {MagazineItemType, magazineTagsType} from '@/contracts';
import {magazineTags} from '@/mocks';
import Image from "next/image";

interface NewsSliderProps {
    items: MagazineItemType[];
}

export default function NewsSlider({items}: NewsSliderProps) {

    const getTag = (tagId: MagazineItemType['tagId']): magazineTagsType | undefined => {
        return magazineTags.find(tag => tag.id === tagId);
    };

    return (
        <div className="relative">

            <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="!pb-12">

                {items.map((item) => {

                    const tag = getTag(item.tagId);

                    return (
                        <SwiperSlide key={item.id}>

                            <Link href={item.href}>

                                <article className={'glass-card rounded-2xl overflow-hidden group cursor-pointer h-full'}>
                                    <Image src={item.image} alt={item.title} width={600} height={400} className={"w-full h-full object-cover"} loading="lazy" fetchPriority={'low'}/>
                                    <div className="p-6">
                                        <div className={'flex items-center gap-6 mb-3'}>
                                            {tag && (
                                                <span className={`px-3 py-1 ${tag.color} text-white text-xs font-bold rounded-full shadow-lg `}> {tag.title}</span>)}
                                            <div className={'inline-flex items-center gap-3 text-xs text-gray-500'}>
                                                <Calendar className="w-4 h-4"/>
                                                <time>
                                                    {item.date}
                                                </time>
                                            </div>
                                        </div>


                                        <h3 className={'text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-600 line-clamp-2'}>
                                            {item.title}
                                        </h3>

                                        <p className={'text-sm text-gray-600 leading-relaxed mb-5 line-clamp-2'}>
                                            {item.excerpt}
                                        </p>

                                        <div className={'flex items-center gap-3 text-sm font-semibold text-red-900'}>
                                            ادامه مطلب
                                            <ArrowLeft className="w-4 h-4"/>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>


        </div>
    );
}