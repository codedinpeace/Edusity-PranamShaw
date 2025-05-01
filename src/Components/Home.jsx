import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Program from './Program'
import About from './About'
import Campus from './Campus'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Program />
        <About />
        <Campus />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home