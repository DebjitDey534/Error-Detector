import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Detector from './Pages/Detector'


const App = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-black via-gray-900 to-[#1a1a1a] min-h-[100vh]'>
      <Navbar/>
      <Routes>
        <Route path='/Error-Detector/' element={<Detector/>}/>
      </Routes>
    </div>
  )
}

export default App
