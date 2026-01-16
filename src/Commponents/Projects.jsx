import React from 'react'
import Container from './Container'
import { FaGithub } from 'react-icons/fa'
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Projects = () => {
  // amer icon a somosa hower karone ai dia svg icon ready korsi
  const GithubIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <path d="M12 0.5C5.73 0.5 0.5 5.87 0.5 12.38c0 5.2 3.44 9.6 8.2 11.15.6.12.82-.27.82-.6v-2.1c-3.34.75-4.04-1.66-4.04-1.66-.55-1.45-1.34-1.84-1.34-1.84-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.93 2.83 1.37 3.52 1.05.1-.82.42-1.37.76-1.68-2.67-.32-5.48-1.38-5.48-6.14 0-1.36.46-2.47 1.23-3.34-.13-.32-.54-1.6.12-3.33 0 0 1-.33 3.3 1.27a11.1 11.1 0 013-.43c1.02 0 2.05.15 3 .43 2.3-1.6 3.3-1.27 3.3-1.27.66 1.73.25 3.01.12 3.33.77.87 1.23 1.98 1.23 3.34 0 4.78-2.82 5.82-5.5 6.13.43.38.82 1.13.82 2.28v3.38c0 .34.22.73.83.6 4.76-1.55 8.2-5.95 8.2-11.15C23.5 5.87 18.27 0.5 12 0.5z" />
    </svg>
  );
  // .............ai 2 ta na dila amer section ar maj thake akta dak pora tai svg ar use kora problam fixed.................
  const ExternalLinkIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
  // amer icon a somosa hower karone ai dia svg icon ready korsi


  return (
    <section id='projects' className='py-20 bg-[#0E0E13]'>
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

                  <div className="flex mx-auto justify-center my-[20%] gap-3 items-center">
                    <button className="inline-flex items-center gap-2 p-2 border bg-[#11202D] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-full hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                      <ExternalLinkIcon />
                    </button>

                    <button className="inline-flex items-center gap-2 p-2 border bg-[#11202D] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-full hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                      <GithubIcon />
                    </button>
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
                  <div className="flex pt-6 gap-5">
                    <div className="flex pt-1 gap-5">
                      <button className="inline-flex duration-300 items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                        <ExternalLinkIcon />
                        <span className="leading-none">Live Demo</span>
                      </button>

                      <button className="inline-flex duration-300 items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                        <GithubIcon />
                        <span className="leading-none">Source Code</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
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
                  <div className="flex pt-6 gap-5">
                    <div className="flex pt-1 gap-5">
                      <button className="inline-flex duration-300 items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                        <ExternalLinkIcon />
                        <span className="leading-none">Live Demo</span>
                      </button>

                      <button className="inline-flex duration-300 items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                        <GithubIcon />
                        <span className="leading-none">Source Code</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div className="w-6/12 ">
              <div className="p-7 bg-white rounded-2xl border-2 border-[#00D3F3] relative group ">
                <img className='rounded-2xl shadow-xl/30 group-hover:scale-105 ease-in-out duration-300' src={photo1} alt="" />
                <div className=" absolute top-0 left-0 bg-[#00d3f32a] w-full h-full rounded-2xl opacity-0 group-hover:opacity-100   ease-in-out">

                  <div className="flex mx-auto justify-center my-[20%] gap-3 items-center">
                    <button className="inline-flex items-center gap-2 p-2 border bg-[#11202D] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-full hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                      <ExternalLinkIcon />
                    </button>

                    <button className="inline-flex items-center gap-2 p-2 border bg-[#11202D] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-full hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                      <GithubIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 flex gap-10">
            <div className="w-6/12 ">
              <div className="p-7 bg-white rounded-2xl border-2 border-[#00D3F3] relative group ">
                <img className='rounded-2xl shadow-xl/30 group-hover:scale-105 ease-in-out duration-300' src={photo2} alt="" />
                <div className=" absolute top-0 left-0 bg-[#00d3f32a] w-full h-full rounded-2xl opacity-0 group-hover:opacity-100   ease-in-out">

                  <div className="flex mx-auto justify-center my-[20%] gap-3 items-center">
                    <button className="inline-flex items-center gap-2 p-2 border bg-[#11202D] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-full hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                      <ExternalLinkIcon />
                    </button>

                    <button className="inline-flex items-center gap-2 p-2 border bg-[#11202D] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-full hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                      <GithubIcon />
                    </button>
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
                  <div className="flex pt-6 gap-5">
                    <div className="flex pt-1 gap-5">
                      <button className="inline-flex duration-300 items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                        <ExternalLinkIcon />
                        <span className="leading-none">Live Demo</span>
                      </button>

                      <button className="inline-flex duration-300 items-center gap-2 px-2 py-1 border bg-[#11202D] text-[#00D3F3] rounded-[5px] hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                        <GithubIcon />
                        <span className="leading-none">Source Code</span>
                      </button>
                    </div>

                  </div>

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