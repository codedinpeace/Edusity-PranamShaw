import React from 'react'
import Program1 from '../assets/program-1.png'
import Program2 from '../assets/program-2.png'
import Program3 from '../assets/program-3.png'
import programIcon1 from '../assets/program-icon-1.png'
import programIcon2 from '../assets/program-icon-2.png'
import programIcon3 from '../assets/program-icon-3.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Program = () => {
  

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(".Program",{
      y:-30,
      duration:2,
      opacity:0,
      scrollTrigger:{
        trigger:".Program",
        scrub:2,
        scroller:"body",
        start:"top 100%",
        end:"bottom 100%"
      }
    })
  
  })


  return (
    <div className='mt-100' id='Program'>
        <div className='flex justify-center flex-col'>
            <h1 className='text-xl mx-auto text-blue-800' text>Our Program</h1>
            <h1 className='text-4xl mx-auto font-medium'>What We Offer</h1>
        </div>
        <div className="Program flex justify-center flex-wrap gap-15">
          <div className='relative'>
          <img src={Program1} className=' ProgramImg1 max-md:w-[350px] max-sm:w-[300px] w-[400px] mt-20 rounded-2xl ' alt="" />
          <div className="caption max-md:w-[350px] max-md:h-[352px] max-sm:w-[300px] max-sm:h-[302px] hover:bg-[#09097850] transition-all duration-500  cursor-pointer bg-none   rounded-2xl top-20 left-0 absolute right-0 bottom-0  w-[400px] h-[402px]  group">
            <img src={programIcon1} className='max-md:w-12 group-hover:translate-y-0  group-hover:opacity-100 translate-y-35 opacity-0 ProgramIcon1 relative flex w-20 mx-auto mt-40 transition-all duration-500' alt="" />
            <p className= 'ProgramIcon1Para max-md:text-[12px] max-md:ml-25  group-hover:translate-y-0  group-hover:opacity-100 translate-y-35 opacity-0  relative text-white ml-33 mx-auto transition-all duration-500'>Graduation Degree</p>
          </div>
          </div>
          <div className='relative'>
          <img src={Program2} className=' ProgramImg2 max-md:w-[350px] max-sm:w-[300px] w-[400px] mt-20 rounded-2xl ' alt="" />
          <div className="caption max-md:w-[350px] max-md:h-[352px] max-sm:w-[300px] max-sm:h-[302px] hover:bg-[#09097850] transition-all duration-500 cursor-pointer  rounded-2xl top-20 left-0 absolute right-0 bottom-0  w-[400px] h-[402px]  group">
            <img src={programIcon2} className='max-md:w-12  group-hover:translate-y-0  group-hover:opacity-100 translate-y-35 opacity-0 ProgramIcon2 relative flex w-15 mx-auto mt-40  transition-all duration-500' alt="" />
            <p className=' max-md:text-[12px] max-md:ml-27  group-hover:translate-y-0  group-hover:opacity-100 translate-y-35 opacity-0 relative text-white ml-36 mx-auto transition-all duration-500'>Masters Degree</p>
          </div>
          </div>
          <div className='relative'>
          <img src={Program3} className=' ProgramImg3 max-md:w-[350px] max-sm:w-[300px] w-[400px] mt-20 rounded-2xl ' alt="" />
          <div className="caption max-md:w-[350px] max-md:h-[352px] max-sm:w-[300px] max-sm:h-[302px] hover:bg-[#09097850] transition-all duration-500 cursor-pointerbg-none  rounded-2xl top-20 left-0 absolute right-0 bottom-0  w-[400px] h-[402px]  group">
            <img src={programIcon3} className='max-md:w-12  translate-y-35 opacity-0 ProgramIcon3 relative  group-hover:translate-y-0  group-hover:opacity-100 flex w-15 mx-auto mt-40 transition-all duration-500' alt="" />
            <p className= 'ProgramIcon3Para max-md:text-[12px] max-md:ml-27   translate-y-35 opacity-0 relative text-white ml-35 mx-auto  group-hover:translate-y-0  group-hover:opacity-100 transition-all duration-500'>Post Graduation</p>
          </div>
          </div>
         
        </div>
    </div>
  )
}

export default Program