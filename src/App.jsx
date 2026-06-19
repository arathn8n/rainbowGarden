import React from 'react'
import Header from './components/home/header/Header'
import { Routes, Route } from 'react-router-dom'
import Section1 from './components/home/section1/Section1'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Section1 />} />
      </Routes>
    </>
  )
}

export default App