import React from 'react'
import Container from './Container'
import { FaFacebook, FaGithub, FaLinkedinIn, FaReact } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'
import mehedi from "../assets/Mehedi.png"
import { GoDotFill } from 'react-icons/go'
import ScrollReveal from '../hooks/ScrollReveal'

const Banner = () => {
  const [ref, visible] = ScrollReveal();
  return (
    <section id='banner'  className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden" >
      <Container>
        <div ref={ref} className={`max-w-7xl mx-auto px-6 pt-30 pb-20 grid md:grid-cols-2 gap-12 items-center ${visible  ? "opacity-100 translate-y-0 scale-100 duration-1000" : "opacity-0 translate-y-16 scale-95"}`}>
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute top-20 -left-35 w-32 h-32 bg-white/20 rounded-xl rotate-40"></div>
            <div className="absolute top-60 -right-10 w-24 h-24 bg-white/15 rounded-lg rotate-40 tracking-wide animate-bounce [animation-duration:2.2s]  "></div>
            <div className="absolute -bottom-20.25 -left-38 w-30 h-30 bg-white/20  rounded-2xl rotate-40 tracking-wide animate-bounce [animation-duration:5.2s] overflow-hidden"></div>
            <div className="absolute top-10 right-50 w-30 h-30 bg-white/10 rounded-2xl rotate-40  tracking-wide animate-bounce [animation-duration:5.2s] "></div>
            <div className="absolute bottom-10 -right-10 w-28 h-28 bg-white/20 rounded-xl rotate-40 tracking-wide animate-bounce [animation-duration:5.2s]  "></div>
          </div>
          <div>
            <p className="text-indigo-600  mb-3 font-lato font-bold">Hello, I’m</p>
            <h1 className="text-4xl font-lato md:text-5xl font-bold text-[#FFFFFF] ">
              Mehedi
            </h1>
            <h4 className="text-4xl font-lato md:text-5xl font-bold text-indigo-600 pt-6 tracking-wide animate-bounce [animation-duration:3.2s] ">Front-End Developer</h4>
            <p className="text-gray-600 mt-4 max-w-lg text-[40px] font-lato">
              I build  <span className="bg-linear-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text 
            text-transparent font-bold "> fast, clean, </span> and scalable web interfaces with React. <FaReact className='text-cyan-500 animate-spin [animation-duration:3.2s] inline-block tracking-wide' />
            </p>
            <p className='font-lato text-gray-600'>Frontend Developer specializing in React, Tailwind CSS, and modern JavaScript. I create
              component-based architectures that are performant, maintainable, and built for production.</p>
            <div className="flex gap-4 mt-8">
              <a href='#projects'  className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition cursor-pointer">
                View Projects
              </a>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition cursor-pointer">
                Download CV
              </button>
            </div>
            <div className="flex gap-4 mt-15">
              <ul className="flex gap-6 justify-center items-center">
                <Link to="https://github.com/Mehedi43g" target="_blank">
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
                <Link to="https://www.facebook.com/Arshuman25" target='_blank'>
                  <li className="relative group">
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                      Facebook
                    </span>
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-md cursor-pointer transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-2">
                      <FaFacebook size={22} />
                    </div>
                  </li>
                </Link>

              </ul>
            </div>
          </div>
          <div className="relative hidden md:flex justify-center">
            <div className="w-90 h-90 bg-indigo-600/10 rounded-full"></div>
            <div className="absolute w-84 h-84 bg-indigo-600/20 rounded-full border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]"> </div>
            <img className='rounded-full pt-[-20px] absolute -top-18.5 left-32 w-84 ' src={mehedi} alt="" />
          </div>
        </div>
        <div className="pb-5">
          <div className="w-8 h-12 mx-auto flex items-center justify-center rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)] ">
            <span className="animate-bounce text-white ">
              <GoDotFill  size={14} />
            </span>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Banner