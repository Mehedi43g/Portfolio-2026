import { useState } from 'react'
import './App.css'
import Header from './Commponents/Header'
import Banner from './Commponents/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Header/>
        <Banner/>
      </div>
    </>
  )
}

export default App
