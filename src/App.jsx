import { useState } from 'react'
import './App.css'
import Header from './Commponents/Header'
import Banner from './Commponents/Banner'
import About from './Commponents/About'
import Skills from './Commponents/Skills'
import Projects from './Commponents/Projects'
import Footer from './Commponents/Footer'
import Contract from './Commponents/Contract'

function App() {
  
  return (
    <>
      <div className="">
        <Header/>
        <Banner/>
        <About/>
        <Skills/>
        <Projects/>
        <Contract/>
        <Footer/>
      </div>
    </>
  )
}

export default App
