import React from 'react'
import Container from './Container'
import { FaGithub } from 'react-icons/fa'
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

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
          <div className="pt-10 flex gap-10">
            <div className="w-6/12 ">
              <div className="p-7 bg-white rounded-2xl border-2 border-[#00D3F3] relative group ">
                <img className='rounded-2xl shadow-xl/30 group-hover:scale-105 ease-in-out duration-300' src={photo2} alt="" />
                <div className=" absolute top-0 left-0 bg-[#00d3f32a] w-full h-full rounded-2xl opacity-0 group-hover:opacity-100   ease-in-out">
                    
                  <div className="flex mx-auto justify-center my-[25%] gap-3 items-center">
                    <div className="p-3 text-white rounded-full text-[20px] bg-[#00D3F3] duration-300 ease-in-out cursor-pointer "> <FaArrowUpRightFromSquare className='hover:scale-110'/> </div>
                    <div className="p-3 bg-[#110E18] text-white rounded-full text-[20px] hover:bg-[#00D3F3] duration-300 ease-in-out cursor-pointer "> <FaGithub className='hover:scale-110'/></div>
                  </div> 
                </div>
              </div>
            </div>
            <div className="w-6/12">
            <h3 className='font-lato text-[30px] text-white '>Analytics Dashboard</h3>
            <p className='font-lato text-[14px] text-[#99A1A1]'>Real-time analytics platform with interactive charts, data visualization, and responsive design. Built with React, Recharts, and Tailwind CSS.</p>
            <div className="border bg-[#0E0C14] border-[#00d3f3c0] mt-3 p-3 rounded-[5px]">
              <h4 className='text-[#00D3F3] text-[16px] font-lato '>Problem Solved:</h4>
              <p className='text-[#99A1A1] text-[14px] font-lato'>Complex data visualization with real-time updates and responsive layouts</p>
            </div>
            <div className="">
              <ul className='flex pt-3 gap-3'>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>React</li>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>Tailwind CSS</li>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>JavaScript</li>
              </ul>
              <div className="">
                <ul className='flex pt-6 gap-5'>
                  <li className='flex items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] cursor-pointer  hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]'><FaArrowUpRightFromSquare/> Live Demo</li>
                  <li className='flex items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] cursor-pointer  hover:border-[#00D3F3]  hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]'><FaGithub/> Source Code</li>
                </ul>
              </div>
            </div>

            </div>
          </div>
          {/* ..... */}
          <div className="pt-10 flex gap-10">
             <div className="w-6/12">
            <h3 className='font-lato text-[30px] text-white '>Analytics Dashboard</h3>
            <p className='font-lato text-[14px] text-[#99A1A1]'>Real-time analytics platform with interactive charts, data visualization, and responsive design. Built with React, Recharts, and Tailwind CSS.</p>
            <div className="border bg-[#0E0C14] border-[#00d3f3c0] mt-3 p-3 rounded-[5px]">
              <h4 className='text-[#00D3F3] text-[16px] font-lato '>Problem Solved:</h4>
              <p className='text-[#99A1A1] text-[14px] font-lato'>Complex data visualization with real-time updates and responsive layouts</p>
            </div>
            <div className="">
              <ul className='flex pt-3 gap-3'>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>React</li>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>Tailwind CSS</li>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>JavaScript</li>
              </ul>
              <div className="">
                <ul className='flex pt-6 gap-5'>
                  <li className='flex items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] cursor-pointer  hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]'><FaArrowUpRightFromSquare/> Live Demo</li>
                  <li className='flex items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] cursor-pointer  hover:border-[#00D3F3]  hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]'><FaGithub/> Source Code</li>
                </ul>
              </div>
            </div>

            </div>
            <div className="w-6/12 ">
              <div className="p-7 bg-white rounded-2xl border-2 border-[#00D3F3] relative group ">
                <img className='rounded-2xl shadow-xl/30 group-hover:scale-105 ease-in-out duration-300' src={photo1} alt="" />
                <div className=" absolute top-0 left-0 bg-[#00d3f32a] w-full h-full rounded-2xl opacity-0 group-hover:opacity-100   ease-in-out">
                    
                  <div className="flex mx-auto justify-center my-[25%] gap-3 items-center">
                    <div className="p-3 text-white rounded-full text-[20px] bg-[#00D3F3] duration-300 ease-in-out cursor-pointer "> <FaArrowUpRightFromSquare className='hover:scale-110'/> </div>
                    <div className="p-3 bg-[#110E18] text-white rounded-full text-[20px] hover:bg-[#00D3F3] duration-300 ease-in-out cursor-pointer "> <FaGithub className='hover:scale-110'/></div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
          {/* ...... */}
          <div className="pt-10 flex gap-10">
            <div className="w-6/12 ">
              <div className="p-7 bg-white rounded-2xl border-2 border-[#00D3F3] relative group ">
                <img className='rounded-2xl shadow-xl/30 group-hover:scale-105 ease-in-out duration-300' src={photo2} alt="" />
                <div className=" absolute top-0 left-0 bg-[#00d3f32a] w-full h-full rounded-2xl opacity-0 group-hover:opacity-100   ease-in-out">
                    
                  <div className="flex mx-auto justify-center my-[25%] gap-3 items-center">
                    <div className="p-3 text-white rounded-full text-[20px] bg-[#00D3F3] duration-300 ease-in-out cursor-pointer "> <FaArrowUpRightFromSquare className='hover:scale-110'/> </div>
                    <div className="p-3 bg-[#110E18] text-white rounded-full text-[20px] hover:bg-[#00D3F3] duration-300 ease-in-out cursor-pointer "> <FaGithub className='hover:scale-110'/></div>
                  </div> 
                </div>
              </div>
            </div>
            <div className="w-6/12">
            <h3 className='font-lato text-[30px] text-white '>Analytics Dashboard</h3>
            <p className='font-lato text-[14px] text-[#99A1A1]'>Real-time analytics platform with interactive charts, data visualization, and responsive design. Built with React, Recharts, and Tailwind CSS.</p>
            <div className="border bg-[#0E0C14] border-[#00d3f3c0] mt-3 p-3 rounded-[5px]">
              <h4 className='text-[#00D3F3] text-[16px] font-lato '>Problem Solved:</h4>
              <p className='text-[#99A1A1] text-[14px] font-lato'>Complex data visualization with real-time updates and responsive layouts</p>
            </div>
            <div className="">
              <ul className='flex pt-3 gap-3'>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>React</li>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>Tailwind CSS</li>
                <li className='text-[14px] border bg-[#11202D] px-3 py-1 cursor-pointer text-[#00D3F3] rounded-[5px]'>JavaScript</li>
              </ul>
              <div className="">
                <ul className='flex pt-6 gap-5'>
                  <li className='flex items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] cursor-pointer  hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]'><FaArrowUpRightFromSquare/> Live Demo</li>
                  <li className='flex items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] cursor-pointer  hover:border-[#00D3F3]  hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]'><FaGithub/> Source Code</li>
                </ul>
              </div>
            </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects