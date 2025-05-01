import React from 'react'
import AboutImg from '../assets/about.png'
import PlayBtn from '../assets/play-icon.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const About = ({setPlayState}) => {
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(".About",{
          y:-30,
          duration:2,
          opacity:0,
          scrollTrigger:{
            trigger:".About",
            scrub:2,
            scroller:"body",
            start:"top 100%",
            end:"bottom 100%"
          }
        })
      
      })
   return (

    <div id="About" className='About mt-30'>
        <div className='flex justify-evenly  xl:ml-10 flex-wrap-reverse gap-10'>
            {/* <video src={AboutVideo} className='w-50 h-50'></video> */}
            <div className='relative mt-5'>
            <img src={AboutImg} className=' w-130 max-lg:w-90 rounded-2xl ' alt="" />
        <img src={PlayBtn} onClick={()=>{setPlayState(true)}} className='w-20 max-lg:w-10 absolute top-[50%] left-[45%] right-[50%] bottom-[50%]' alt="" />
        </div>
             <div className='grid'> 
            <h1 className='text-blue-800 text-xl max-xl:mx-auto  '>ABOUT UNIVERSITY
            </h1>
            <h1 className='w-120 font-medium mt-3 text-5xl max-xl:mx-auto max-lg:text-4xl max-lg:w-90 max-sm:w-70 max-sm:text-2xl  max-md:text-3xl max-xl:text-center'>Nurturing Tomorrow's Leaders Today</h1>
            <p className='text-gray-600 text-[16px] w-150 mt-7 max-xl:mx-auto max-xl:text-center max-lg:text-[14px] max-sm:w-70  max-lg:w-120 max-md:text-[12px] max-md:w-90'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p className='text-gray-600 text-[16px] w-150 mt-3 max-xl:mx-auto max-xl:text-center max-lg:text-[14px] max-sm:w-70  max-lg:w-120 max-md:text-[12px] max-md:w-90'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p className='text-gray-600 text-[16px] w-150 mt-3 max-xl:mx-auto  max-xl:text-center max-lg:text-[14px] max-sm:w-70  max-lg:w-120 max-md:text-[12px] max-md:w-90'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.   </p>
           <a href="#Contact" className='mx-auto'> <button className='bg-blue-800 text-white w-50 py-3 cursor-pointer border-3 border-blue-800 text-xl mt-7 rounded-xl hover:bg-transparent hover:text-black transition-all duration-100 max-xl:mx-auto max-md:text-[16px] max-md:w-30 max-md:py-2'>Enroll Now</button></a>
        </div>
        </div>  
    </div>
)
}
export default About