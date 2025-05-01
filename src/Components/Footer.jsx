import React from 'react'

const Footer = () => {
  return (
    <div id='Footer' className='mt-20 '>
        <div className='w-[90vw] h-[2px] bg-[#383838b2] mx-auto'>

        </div>
        <div className='flex justify-between max-md:px-5 px-22 max-md:flex-col max-md:gap-2 mt-4'>
            <p className='text-xl max-md:text-[16px] font-medium max-md:mx-auto'>Copyright © Pranam Shaw</p>
            <div className='max-lg:text-[16px] flex gap-5 m text-xl max-md:mx-auto font-medium'>
            <a className='hover:text-blue-800 ' href="https://www.instagram.com/__i.am.alive__/">Terms Of Service</a>
            <a className='hover:text-blue-800 ' href="https://github.com/codedinpeace">Privacy Policy</a>

            </div>
        </div>
    </div>
  )
}

export default Footer