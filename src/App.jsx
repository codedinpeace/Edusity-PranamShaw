import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MorePhotos from './Components/MorePhotos'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { useState } from 'react';

const App = () => {

  const[playState, setPlayState] = useState(false)

  return (
    <div className="">
      <ToastContainer position="top-right" 
       autoClose={3000}
       />
       
        <Routes>
          <Route path='/' element={<Home setPlayState={setPlayState} playState={playState}/>}/>
        <Route path='/MorePhotos' element={<MorePhotos/>}/>
      </Routes>
    </div>
  )
}

export default App