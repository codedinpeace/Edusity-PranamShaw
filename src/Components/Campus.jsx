import React from 'react'
import Campus1 from '../assets/gallery-1.png'
import Campus2 from '../assets/gallery-2.png'
import Campus3 from '../assets/gallery-3.png'
import Campus4 from '../assets/gallery-4.png'
import arrow from '../assets/white-arrow.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger);

const Campus = () => {

  const navigate = useNavigate()

  const tl = gsap.timeline()


  return (
    <div id='Campus' className='mt-30'>
        <div className='CampusText flex justify-center flex-col'>
        <h1 className='text-xl mx-auto text-blue-800' text>GALLERY</h1>
        <h1 className='text-4xl mx-auto font-medium'>Campus Photos</h1>
        </div>
        <div className='CampusImg flex justify-center gap-10 mt-10 border-0 rounded-2xl flex-wrap'>
            <img src={Campus1} className='Campus1 w-90 max-lg:w-70 border-0 rounded-2xl hover:scale-110  transition-all duration-300 cursor-pointer ' alt="" />
            <img src={Campus2} className='Campus2 w-90 max-lg:w-70 border-0 rounded-2xl hover:scale-110  transition-all duration-300 cursor-pointer ' alt="" />
            <img src={Campus3} className='Campus3 w-90 max-lg:w-70 border-0 rounded-2xl hover:scale-110  transition-all duration-300 cursor-pointer ' alt="" />
            <img src={Campus4} className='Campus4 w-90 max-lg:w-70 border-0 rounded-2xl  hover:scale-110 transition-all duration-300 cursor-pointer ' alt="" />
        </div>
        <div className='flex justify-center mt-10'>
            <button onClick={()=>navigate("/MorePhotos")} className='flex gap-3 text-[16px] bg-blue-800 text-white px-10 py-3 border-2 border-blue-800 rounded-full hover:bg-transparent hover:text-black transition-all duration-150 cursor-pointer group'>See more here <img src={arrow} className='w-5 h-3 items-center mt-2.5 group-hover:invert-100' alt="" /></button>
        </div>
    </div>
  )
}

export default Campus