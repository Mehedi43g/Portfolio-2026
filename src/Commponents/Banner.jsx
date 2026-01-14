import React from 'react'
import Container from './Container'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa' 
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <section className=''>
      <Container>
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-indigo-600 font-medium mb-3">Hello, I’m</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Mehedi <br />
              <span className="text-indigo-600">Front-End Developer</span>
            </h1>
            <p className="text-gray-600 mt-6 max-w-lg">
              I build modern, responsive and user-friendly web applications using
              React, Tailwind CSS and modern JavaScript technologies.
            </p>
            <div className="flex gap-4 mt-8">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
                View Projects
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition">
                Download CV
              </button>
            </div>
            <div className="flex gap-4 mt-15">
              <ul className="flex gap-6 justify-center items-center">
                <Link  to="https://github.com/Mehedi43g" target="_blank">
                <li className="relative group"> <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 
                              group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md"> GitHub  </span>
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-gray-800 shadow-md cursor-pointer 
                            transition-all duration-300 group-hover:bg-gray-800 group-hover:text-white group-hover:-translate-y-2">
                    <FaGithub size={22} /></div>
                </li>
                
                </Link>
                <Link to="https://www.linkedin.com/in/md-mehedi-hasan-58684536b/" target='_blank'>
                
                <li className="relative group">
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                    LinkedIn
                  </span>
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-md cursor-pointer transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-2">
                    <FaLinkedinIn size={22} />
                  </div>
                </li>
                </Link>
                <Link to="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new" target='_blank'>
                
                <li className="relative group">
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                    Email
                  </span>
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-red-500 shadow-md cursor-pointer transition-all duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:-translate-y-2">
                    <MdEmail size={24} />
                  </div>
                </li>
                </Link>

              </ul>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center">
            <div className="w-80 h-80 bg-indigo-600/10 rounded-full"></div>
            <div className="absolute w-64 h-64 bg-indigo-600/20 rounded-full"></div>
          </div>
        </div>



      </Container>
    </section>
  )
}

export default Banner