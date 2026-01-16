import React from 'react'
import Container from './Container'
import { VscVscodeInsiders } from 'react-icons/vsc'

const Header = () => {
  return (
    <nav id='header' className="fixed top-0 left-0 w-full z-50 shadow-lg bg-[#0f172be9] text-white overflow-hidden">
      <Container>
        <div className="flex items-center justify-between py-4">
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

          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8 text-sm font-medium text-white">
              <li className="relative cursor-pointer hover:text-indigo-600 transition-colors duration-300 
              after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600  after:transition-all after:duration-300 hover:after:w-full">
                <a href="/">Home</a>
              </li>

              <li className="relative cursor-pointer hover:text-indigo-600 transition-colors duration-300 
              after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600  after:transition-all after:duration-300 hover:after:w-full">
                <a href="#about">About</a>
              </li>

              <li className="relative cursor-pointer hover:text-indigo-600 transition-colors duration-300
               after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600   after:transition-all after:duration-300 hover:after:w-full">
                <a href="#skills">Skills</a>
              </li>

              <li className="relative cursor-pointer hover:text-indigo-600 transition-colors duration-300 after:absolute after:-bottom-1
               after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
                <a href="#projects">Projects</a>
              </li>
            </ul>

            <button className="px-6 py-2 rounded-full border border-indigo-600 text-sm font-semibold hover:bg-indigo-600
         hover:text-white transition-all duration-300"> Contact </button>
          </div>

        </div>
      </Container>
    </nav>

  )
}

export default Header