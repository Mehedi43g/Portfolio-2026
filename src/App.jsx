import { useState } from 'react'
import './App.css'
import Header from './Commponents/Header'
import Banner from './Commponents/Banner'
import About from './Commponents/About'
import Skills from './Commponents/Skills'

function App() {
  
  return (
    <>
      <div className="">
        <Header/>
        <Banner/>
        <About/>
        <Skills/>
      </div>
    </>
  )
}

export default App
