import React from 'react'
import video from '../assets/college-video-6XtGR-D3.mp4'


export const VideoPlayer = ({setPlayState, playState}) => {
  return (

    <div className=''> 
        <div onClick={()=>{setPlayState(false)}} className={`${playState ? "" : "hidden"} fixed top-0 left-0 h-screen w-[100%] z-50 bg-[#1114] flex justify-center`}>
            <video src={video} autoPlay muted controls className='w-[100%]  h-[50%] my-auto max-w-[800px]'></video>
        </div>
    </div>
  )
}
