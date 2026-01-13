import React from 'react'
import Container from './Container'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <section className=''>
        <Container>
            <div className="w-6/12 m-auto text-center pt-20">
                <p>Available for Job</p>
                <h1 className='pt-3 text-[40px]'>I build fast, clean, and scalable web interfaces with React.</h1>
                <p>Frontend Developer specializing in React, Tailwind CSS, and modern JavaScript. I create component-based
                 architectures that are performant, maintainable, and built for production.</p>
                <div className="mt-6 flex items-center justify-center gap-4">

  <button className="flex items-center gap-2 px-6 py-3
                     border border-black rounded-full font-medium
                     hover:bg-black hover:text-white
                     transition-all duration-300">
    View My Work <FaLongArrowAltRight />
  </button>

  <button className="px-6 py-3 rounded-full font-medium
                     bg-black text-white
                     hover:bg-gray-800 transition-all duration-300">
    Get In Touch
  </button>

</div>


                 
            </div>
        </Container>
    </section>
  )
}

export default Banner