import React from 'react'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/section1/Home'
import Footer from './components/footer/Footer'
import About from './components/about/section1/About'
import Section1Programs from './components/programs/section1/Section1Programs'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/programs' element={<Section1Programs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App