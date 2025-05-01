import React from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu-icon.png'
import { RxCross1 } from "react-icons/rx";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useState, useEffect } from 'react';

const Navbar = () => {

    const[isVisible, setIsVisible] = useState(false)
    const[isSticky, setIsSticky] = useState(false)
    
    useEffect(()=>{
        const handleSticky = ()=>{
            if(window.scrollY > 50){
                setIsSticky(true)
            }

            else{
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll",handleSticky)

        return () => window.removeEventListener("scroll", handleSticky)
    }, [])
        
   


    useGSAP(()=>{
        const tl = gsap.timeline()
        const Dtl = gsap.timeline()

        Dtl.from(".logo",{
            y:-30,
            opacity:0,
            duration:1,

        })

        Dtl.from(".PCNAV a",{
            y:-30,
            duration:1,
            opacity:0,
            stagger:0.2,
        })

        Dtl.from(".PCNAV button",{
            y:-30,
            duration:0.2,
            opacity:0,
            
        })

        if(isVisible){

            tl.to(".Navbar", {
               x: "-100%"   ,
                duration: 0.8,
                delay: 0,
            })

            tl.from(".Navbar a", {
                y: -30,
                opacity: 0,
                stagger: 0.3,
                duration: 1.2,

            })

            tl.from(".cross", {
                opacity: 0,
                y: -30,
            })
        }

          else{
                tl.to(".Navbar", {
                   x: "0",
                    duration: 0.8,
                    delay: 0,
                })
            }
        }, [isVisible])

      


        
    return (
    <div className={`${isSticky ? "sticky top-0 z-50 bg-[#181868a1] backdrop-blur-md" : ""} top-0 z-5  text-[16px] text-white transition-all duration-150 `}>
        <div className='0 flex justify-between items-center max-lg:hidden lg:px-10 xl:px-20 2xl:px-30 py-3'>
            <img src={logo} className='logo w-40' alt="" />
            <div className='PCNAV flex gap-10 items-center'>
                <a className='hover:text-gray-300' href="#Home">Home</a>
                <a className='hover:text-gray-300' href="#Program">Program</a>
                <a className='hover:text-gray-300' href="#About">About Us</a>
                <a className='hover:text-gray-300' href="#Campus">Campus</a>
                <a  className='hover:text-gray-300'href="#TestiMonials">TestiMonials</a>
                <a href="#Contact"><button className='bg-white px-5 py-2 border-2 border-white cursor-pointer rounded-full text-black hover:border-2 hover:border-white hover:bg-transparent hover:text-white'>Contact Us</button></a>
            </div>
        </div>

            {/* Mobile Layout */}
    <div className=''>
        <div className='lg:hidden px-10 py-3 flex justify-between '>
            <img src={logo} className='w-30' alt="" />
                <img src={menu} onClick={()=>setIsVisible(true)} className='w-7 cursor-pointer' alt="" />
                </div>
                <div>
            <div className='lg:hidden flex flex-col gap-3 '>
                <div className={`Navbar flex flex-col gap-3 ml-auto ${isVisible ? "absolute" : "fixed"} p-10 h-screen w-[50%] text-white  top-0  left-[100%] z-50`}>
            <a href="#Home">Home</a>
                <a className='hover:text-gray-300' onClick={()=>setIsVisible(false)} href="#Program">Program</a> 
                <a className='hover:text-gray-300' onClick={()=>setIsVisible(false)} href="#About">About Us</a>
                <a className='hover:text-gray-300' onClick={()=>setIsVisible(false)} href="#Campus">Campus</a>
                <a className='hover:text-gray-300'  onClick={()=>setIsVisible(false)} href="#TestiMonials">TestiMonials</a>
                <RxCross1 onClick={()=>setIsVisible(false)} className='cross cursor-pointer absolute right-10 top-5  h-5 w-5 rounded-full'/>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Navbar


