'use client'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import {MagazineItemType} from "@/contracts";
import Image from "next/image";
import {HashNavigation, Pagination} from "swiper/modules";


export default function LastMagazineSlider({slides}: { slides: Array<MagazineItemType> }) {
    return (
        <Swiper className="mySwiper"
                slidesPerView={5}
                spaceBetween={30}
                hashNavigation={{watchState: true,}}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Pagination, HashNavigation]}>
            {slides.map((slide: MagazineItemType, i: number) => (
                <SwiperSlide key={slide.id} data-hash={'slider' + {i}}>
                    <Image src={slide.image} alt={slide.title} width={600} height={400} loading={'lazy'} fetchPriority={'low'}/>
                    <span>{}</span>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}