import React from 'react'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {

    
useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from("#Testimonials",{
        y:-30,
        opacity:0,
        duration:2,
        scrollTrigger:{
        trigger:"#Testimonials",
        scrub:2,
        scroller:"body",
        start:"top 100%",
        end:"bottom 100%"
        }
    })
})

    return (
        <div className='mt-30' id='Testimonials'>
            <div className='flex justify-center flex-col'>
                <h1 className='text-xl mx-auto text-blue-800' >TESTIMONIALS</h1>
                <h1 className='text-4xl mx-auto font-medium'>What Students Say  </h1>
            </div>
            <div className='mt-20'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    speed={500}
                    freeMode={true}
                    disableOnInteraction={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 1,
                        },
                        1024: {
                          slidesPerView: 2,
                        },
                        1280: {
                          slidesPerView: 2,
                        },
                      }}
                      modules={[Autoplay, Pagination, Navigation]}  
                 
                    className="mySwiper flex border-0 "
                >
                    <SwiperSlide className='shadow-xl border-0  cursor-grab' >
                        <div className='flex gap-1 '>
                    <img src={user1} alt="" className='flex' />
                    <div>
                    <p className='text-blue-800 mt-2 text-[18px] font-bold'>Emily Williams</p>
                    <p className='font-light opacity-70 text-[16px]'>Edusity, USA</p>
                    </div>
                    </div>
                    <p className='text-[16px] mt-5 text-gray-600'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl border-0  cursor-grab' >
                    <div className='flex gap-1 '>
                    <img src={user2} alt="" className='flex' />
                    <div>
                    <p className='text-blue-800 mt-2 text-[18px] font-bold'>William Jackson</p>
                    <p className='font-light opacity-70 text-[16px]'>Edusity, USA</p>
                    </div>
                    </div>
                    <p className='text-[16px] mt-5 text-gray-600'>Choosing this university was the best decision I ever made. The faculty here go beyond textbooks—they focus on building real-world skills. Thanks to the hands-on projects and internship support, I landed a job even before graduation!</p>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl border-0  cursor-grab' >
                    <div className='flex gap-1 '>
                    <img src={user3} alt="" className='flex' />
                    <div>
                    <p className='text-blue-800 mt-2 text-[18px] font-bold'>Elsy Morgan</p>
                    <p className='font-light opacity-70 text-[16px]'>Edusity, USA</p>
                    </div>
                    </div>
                    <p className='text-[16px] mt-5 text-gray-600'>As an international student, I felt welcomed from day one. The campus is diverse, the support system is excellent, and the placement training is incredibly effective. I’ve grown both academically and personally.</p>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-xl border-0  cursor-grab ' >
                    <div className='flex gap-1 '>
                    <img src={user4} alt="" className='flex' />
                    <div>
                    <p className='text-blue-800 mt-2 text-[18px] font-bold'>Laura Heggens</p>
                    <p className='font-light opacity-70 text-[16px]'>Edusity, USA</p>
                    </div>
                    </div>
                    <p className='text-[16px] mt-5 text-gray-600'>This university has cutting-edge labs and strong industry tie-ups. I had the chance to participate in a national-level robotics competition—something I never imagined when I joined!</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials