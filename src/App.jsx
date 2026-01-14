import { useState } from 'react'
import './App.css'
import Header from './Commponents/Header'
import Banner from './Commponents/Banner'
import About from './Commponents/About'

function App() {
  
  return (
    <>
      <div className="">
        <Header/>
        <Banner/>
        <About/>
      </div>
    </>
  )
}

export default App
