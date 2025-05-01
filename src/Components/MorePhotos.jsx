import React from 'react'
import Campus5 from '../assets/Campus5.jpg'
import Campus6 from '../assets/Campus6.jpg'
import Campus7 from '../assets/Campus7.jpg'
import Campus8 from '../assets/Campus8.jpg'
import Campus9 from '../assets/Campus9.jpg'
import Campus10 from '../assets/Campus10.jpg'
import Campus11 from '../assets/Campus11.jpg'
import Campus12 from '../assets/Campus12.jpg'
import Campus13 from '../assets/Campus13.jpg'
import { useNavigate } from 'react-router-dom'
import arrow from '../assets/back-icon.png'

const MorePhotos = () => {

    const navigate = useNavigate()

  return (
    <div id='MorePhotos' className=' bg-[#dbd9d9a9] '>
        <div className='flex justify-center flex-col'>
        <h1 className='text-xl mx-auto text-blue-800 mt-10'>OUR CAMPUS</h1>
        <h1 className='text-4xl mx-auto font-medium'>More Photos</h1>
        </div>
        <div className="images flex justify-center flex-wrap mt-10">
            <img src={Campus5} className='w-100 h-90  rounded-2xl mb-[10px] p-[10px] img' alt="" />
            <img src={Campus6} className='w-100 h-100  rounded-2xl mb-[30px] p-[10px] img' alt="" />
            <img src={Campus13} className='w-100  rounded-2xl mb-[30px] p-[10px] img' alt="" />
            <img src={Campus7} className='w-100  h-100  rounded-2xl mb-[30px] p-[10px] img' alt="" />
            <img src={Campus8} className='w-100 h-100  rounded-2xl mb-[30px] p-[10px] img' alt="" />
            <img src={Campus10} className='w-100 rounded-2xl mb-[30px] p-[10px] img' alt="" />
            <img src={Campus12} className='w-100 rounded-2xl mb-[30px] p-[10px] img' alt="" />
            <img src={Campus9} className='w-100  rounded-2xl mb-[30px] p-[10px] img' alt="" />
        </div>
        <button onClick={()=>navigate("/")} className='mx-auto flex gap-3 text-[16px] bg-blue-800 text-white px-10 py-3 border-2 border-blue-800 rounded-full hover:bg-transparent hover:text-black transition-all duration-150 cursor-pointer group'><img src={arrow} className='w-5 h-4  items-center mt-1.25 group-hover:invert-100' alt="" />Go Back</button>
    </div>
  )
}

export default MorePhotos