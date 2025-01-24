"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import '@/styles/global.css';

// import required modules
import { EffectCreative, Autoplay } from 'swiper/modules';

export default function SwiperHome() {
    const Images = [
        {
            id: 1,
            webp: '/gallery/gallery1.avif',
            small: '/gallery/gallery1-small.avif',

        },
        {
            id: 2,
            webp: '/gallery/gallery2.avif',
            small: '/gallery/gallery2-small.avif',

        },
        {
            id: 3,
            webp: '/gallery/gallery3.avif',
            small: '/gallery/gallery3-small.avif',

        },
        {
            id: 4,
            webp: '/gallery/gallery4.avif',
            small: '/gallery/gallery4-small.avif',

        },
        {
            id: 5,
            webp: '/gallery/gallery5.avif',
            small: '/gallery/gallery5-small.avif',

        },
        {
            id: 6,
            webp: '/gallery/gallery6.avif',
            small: '/gallery/gallery6-small.avif',

        },
    ]
    return (
        <>
            <Swiper
                grabCursor={false}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["0%", 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCreative, Autoplay]}
                className="home-swiper"
            >

                {Images.map((image) => (
                    <SwiperSlide key={image.id} className="otro-swiper-slide">
                        <div className='relative'>
                            <picture>
                                <source srcSet={image.webp} type="image/avif" media="(width >= 800px)" />
                                <source srcSet={image.small} type="image/avif" media="(width <= 800px)" />
                                <img
                                    className='max-h-[400px] w-full object-cover lg:max-h-[800px]'
                                    src={image.webp}
                                    alt={`Imagen ${image.id}`}
                                />
                            </picture>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}