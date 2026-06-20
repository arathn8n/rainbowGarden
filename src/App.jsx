import React from 'react'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/section1/Home'
import Footer from './components/footer/Footer'
import About from './components/about/section1/About'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App