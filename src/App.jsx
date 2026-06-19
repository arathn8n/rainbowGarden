import React from 'react'
import Header from './components/home/header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/section1/Home'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App