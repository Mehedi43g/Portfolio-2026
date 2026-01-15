import React from 'react'
import Container from './Container'
import photo1 from "../assets/photo1.png"

const Projects = () => {
  return (
    <section className='py-20 bg-[#0E0E13]'>
      <Container>
        <div className="">
          <div className="text-center">
            <p className='text-[14px] text-[#00D3F3]'>Portfolio</p>
            <h3 className='text-[40px] font-lato font-bold text-white'>Featured <span className='text-[#00D3F3]'>Projects</span></h3>
            <p className='text-[14px] font-lato text-[#585858] '>Real-world applications built with production-grade code, optimized performance, and clean <br /> architecture.</p>
          </div>
          <div className="pt-10">
            <div className="w-6/12">
            <div className="p-7 bg-white rounded-2xl">
              <img className='rounded-2xl shadow-xl/30 hover:scale-105 ease-in-out duration-300' src={photo1} alt="" />
            <div className="">
              
            </div>
            </div>
            </div>
            <div className="w-6/12"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects