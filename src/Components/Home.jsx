import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Program from './Program'
import About from './About'
import Campus from './Campus'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'
import { VideoPlayer } from './VideoPlayer'


const Home = ({setPlayState, playState}) => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Program />
        <About setPlayState={setPlayState}/>
        <Campus />
        <Testimonials />
        <Contact />
        <Footer />
        <div>
          <VideoPlayer setPlayState={setPlayState} playState={playState} />
        </div>
    </div>
  )
}

export default Home