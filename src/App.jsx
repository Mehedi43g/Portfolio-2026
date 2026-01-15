import { useState } from 'react'
import './App.css'
import Header from './Commponents/Header'
import Banner from './Commponents/Banner'
import About from './Commponents/About'
import Skills from './Commponents/Skills'
import Projects from './Commponents/Projects'

function App() {
  
  return (
    <>
      <div className="">
        <Header/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    </>
  )
}

export default App
