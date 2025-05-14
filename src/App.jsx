import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './home'
import Photo from './photography'

function App() {        
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photo />} />
      </Routes>
    </>
  )
}

export default App;