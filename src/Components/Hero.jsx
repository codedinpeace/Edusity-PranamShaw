import React from 'react'
import hero from '../assets/hero.png'
import btnArrow from '../assets/dark-arrow.png'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Hero = () => {

useGSAP(()=>{
  const tl = gsap.timeline();

  tl.from(".hero",{
    y:-30,
    opacity:0,
    duration:1, 
    delay:3,
  })
})

  return (
    <div id='Home'>
    <div className='Home'>
    </div>
    <div className=''>
        <div className='hero flex justify-center'>
          <h1 className='2xl:text-6xl lg:text-5xl max-2xl:leading-14 max-lg:text-4xl max-lg:w-150 mx-auto  max-lg:leading-10 max-md:w-100 max-sm:w-80 max-sm:text-[1.5rem] max-sm:leading-7  max-md:text-3xl mt-60 w-200 leading-18 text-white text-center font-medium'> <span className='firstLine h-full'>We Ensure better education</span>  <span className='secondLine'>for a better world</span>
        <p className='xl:text-xl max-xl:text-[20px] max-xl:leading-7 max-xl:w-150 mx-auto lg text-center max-md:text-[14px] max-md:leading-5 max-md:w-90 max-sm:w-75 items-center text-gray-200 mt-5'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
        </p>
        <span className=''><a href="#About"><button className='flex mt-7 text-xl max-md:text-[16px] max-md:px-7 max-md:py-2 bg-white text-black px-10 py-4 mx-auto group gap-3 rounded-full items-center border-2 border-white hover:bg-transparent hover:text-white cursor-pointer transition-all'>Explore More <img src={btnArrow} className='w-7 group-hover:invert-100 mt-0.5' alt="" /></button></a></span>
          </h1>
        </div>
        </div>
      </div>
    
  )
}

export default Hero