import React from 'react'
import Container from './Container'
import { VscVscodeInsiders } from 'react-icons/vsc'
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
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
  const LinkedInIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="block"
  >
    <path d="M4.98 3.5C3.33 3.5 2 4.84 2 6.5s1.33 3 2.98 3c1.64 0 2.98-1.34 2.98-3s-1.34-3-2.98-3zM2.4 9h5.16v12H2.4V9zM9.5 9h4.95v1.67h.07c.69-1.31 2.38-2.68 4.88-2.68 5.22 0 6.17 3.43 6.17 7.88V21h-5.16v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.44V21H9.5V9z"/>
  </svg>
);
  return (
    <footer className='py-10  bg-linear-to-br from-slate-800 via-slate-900 to-slate-700 text-white overflow-hidden'>
      <Container>
        <div className="flex justify-between">
          <div className="w-4/12">
           <div className="group flex items-center gap-4 cursor-pointer select-none">
                  <div className="p-3 rounded-xl bg-indigo-600 text-white group-hover:bg-white group-hover:text-indigo-600 transition-all duration-300 shadow-md">
                    <VscVscodeInsiders className="text-[32px] group-hover:rotate-12 transition-transform duration-300" />
                  </div>
          
                  <div className="leading-tight">
                    <h3 className="text-[18px] font-bold tracking-wide text-white">
                      MD MEHEDI HASAN
                    </h3>
                    <span className="text-xs tracking-wide text-gray-500 uppercase">
                      Front-End Developer 
                    </span>
                  </div>
                </div>
                <p className='text-[14px] text-gray-500 pt-6'>Building fast, clean, and scalable web interfaces <br /> with React.</p>
          </div>
          <div className="w-2/12">
          <h3 className='text-[14px] text-[#00D3F3]'>QUICK LINKS</h3>
          <ul className='flex flex-col gap-3 pt-5 text-[14px]'>
            <li className='text-[14px] hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'>Hmoe</li>
            <li className='text-[14px] hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'>About</li>
            <li className='text-[14px] hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'>Skills</li>
            <li className='text-[14px] hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'>Projects</li>
          </ul>
          </div>
          <div className="w-4/12">
          <h3 className='text-[14px] text-[#00D3F3]'>GET IN TOUCH</h3>
            <p className='text-[14px] text-gray-500 flex gap-2 pt-4 items-center'><GithubIcon />mdmehedi992124@gmail.com</p>
            <div className="flex pt-6 gap-4">
              <div className="">
                <button className="inline-flex items-center gap-2 p-2 border bg-[#091B24] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-2xl cursor-pointer hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                      <GithubIcon />
              </button>
              </div>
            <button className="inline-flex items-center gap-2 p-2 border bg-[#091B24] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-2xl cursor-pointer hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
               <LinkedInIcon />
            </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer