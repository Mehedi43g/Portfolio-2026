import React from 'react'
import Container from './Container'
import { VscVscodeInsiders } from 'react-icons/vsc'

const Header = () => {
    return (
       <nav className="sticky top-0 z-50   border-b">
  <Container>
    <div className="flex items-center justify-between py-4">
      <div className="group flex items-center gap-4 cursor-pointer select-none">
        <div className="p-3 rounded-xl bg-black text-white 
                        group-hover:bg-white group-hover:text-black 
                        transition-all duration-300 shadow-md">
          <VscVscodeInsiders className="text-[32px] group-hover:rotate-12 transition-transform duration-300" />
        </div>

        <div className="leading-tight">
          <h3 className="text-[18px] font-bold tracking-wide text-gray-900">
            MD MEHEDI HASAN
          </h3>
          <span className="text-xs tracking-wide text-gray-500 uppercase">
            Front-End Developer
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
          {["Home", "About", "Skills", "Projects"].map((item) => (
            <li key={item} className="relative cursor-pointer hover:text-black transition-colors duration-300 
            after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all 
            after:duration-300 hover:after:w-full"> {item}
            </li>
          ))}
        </ul>
        <button className="px-6 py-2 rounded-full border border-black text-sm font-semibold hover:bg-black
         hover:text-white transition-all duration-300"> Contact </button>
      </div>

    </div>
  </Container>
</nav>

    )
}

export default Header