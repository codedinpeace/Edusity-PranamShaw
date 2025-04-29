import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Program from './Components/Program'
import About from './Components/About'
import Campus from './Components/Campus'


const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Program/>
      <About/>
      <Campus/> 
    </div>
  )
}

export default App