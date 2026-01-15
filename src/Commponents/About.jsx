import React from 'react'
import Container from './Container'
import { FaCode } from 'react-icons/fa'
import { LuLayers } from 'react-icons/lu'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { IoMdThunderstorm } from 'react-icons/io'

const About = () => {
  return (
    <section className='py-30 bg-slate-900 text-white'>
      <Container>
        <div className="">
          <div className="text-center font-lato">
            <p className='text-[#00D3F3] font-lato text-[14px]'>ABOUT ME</p>
            <h4 className='text-[40px] font-lato'>Disciplined. Detail-oriented. <span className='text-[#00D3F3]'>Production-ready.</span></h4>
          </div>
        </div>
        <div className="pt-20 flex gap-5 items-center">
          <div className="w-6/12 flex flex-col gap-5 font-lato text-[16px]">
            <p>I'm a Frontend Developer who believes that great interfaces are built on a foundation of solid fundamentals.
              Every component I create is thoughtfully designed to be reusable, performant, and accessible.</p>
            <p>My approach combines modern React patterns with timeless web principles: semantic HTML, responsive design,
              and progressive enhancement. I don't just make things look good—I make them work flawlessly across devices and browsers.</p>
            <p>Whether it's optimizing bundle sizes, implementing complex state management, or integrating with REST APIs,
              I focus on solutions that are maintainable and scalable for real-world production environments.</p>
          </div>
          <div className="w-6/12 flex flex-col gap-4">
            <div className="flex border  rounded-[10px] border-[#1b7aa0] hover:border-[#0fb1f1]">
              <div className="flex gap-2 p-3.5">
              <div className=''>
                <p className='p-3 rounded-[10px] bg-[#0A1F28]'><FaCode className="w-6 h-6 text-cyan-400"/></p>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className='font-lato text-[20px]'>Clean Code</h5>
                <p className='font-lato text-[14px]'>Writing maintainable, readable code that follows best practices and <br /> industry standards.</p>
              </div>

              </div>
            </div>
            <div className="flex border rounded-[10px] border-[#1b7aa0] hover:border-[#0fb1f1]">
              <div className="flex gap-2 p-3.5">
              <div className=''>
                <p className='p-3 rounded-[10px]  bg-[#0A1F28]'><LuLayers className="w-6 h-6 text-cyan-400" /></p>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className='font-lato text-[20px]'>Component Architecture</h5>
                <p className='font-lato text-[14px]'>Building reusable, modular components that scale with your application <br /> needs.</p>
              </div>

              </div>
            </div>
            <div className="flex border rounded-[10px] border-[#1b7aa0] hover:border-[#0fb1f1]">
              <div className="flex gap-2 p-3.5">
              <div className=''>
                <p className='p-3 rounded-[10px]   bg-[#0A1F28]'><IoMdThunderstorm className="w-6 h-6 text-cyan-400"/></p>
              </div>
              <div className="flex flex-col gap-2">
                <h5 className='font-lato text-[20px]'>Component Architecture</h5>
                <p className='font-lato text-[14px]'>Building reusable, modular components that scale with your application <br /> needs.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About