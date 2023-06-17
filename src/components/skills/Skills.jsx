import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Skills.module.css';
import { Card } from './Card';

export const Skills = () => {
  return (
    <div className={styles.slider_container}>
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={3}
        navigation
        breakpoints={{
            340: {
                width: 200,
                slidesPerView: 1
            },
            768: {
                width: 768,
                slidesPerView: 4
            },
            1040: {
                width: 1040,
                slidesPerView: 5
            }
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
     >
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' skills='WEB DEVELOPMENT'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' skills='UX/UI DESIGN'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80' skills='GRAPHIC DESIGN'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' skills='PHOTOGRAPHY'/>
        </SwiperSlide>
        <SwiperSlide>
            <Card image='https://images.unsplash.com/photo-1575411602736-5e9f24e277d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' skills='VIDEOGRAPHY'/>
        </SwiperSlide>
     </Swiper>
    </div>
  )
}
