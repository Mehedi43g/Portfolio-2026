
import Container from './Container'

import mehedi from "../assets/Mehedi.png"
import { GoDotFill } from 'react-icons/go'
import ScrollReveal from '../hooks/ScrollReveal'

const Banner = () => {
  const [ref, visible] = ScrollReveal();
  return (
<section
  id="banner"
  className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
>
  <Container>
    <div
      ref={ref}
      className={`relative max-w-7xl mx-auto px-4 sm:px-6 pt-54 pb-20 grid md:grid-cols-2 gap-12 items-center ${
        visible
          ? "opacity-100 translate-y-0 scale-100 duration-1000"
          : "opacity-0 translate-y-16 scale-95"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 -left-28 w-24 h-24 bg-white/20 rounded-xl rotate-40"></div>
        <div className="absolute top-60 -right-8 w-20 h-20 bg-white/15 rounded-lg rotate-40 animate-bounce [animation-duration:2.2s]"></div>
        <div className="absolute -bottom-20 -left-32 w-24 h-24 bg-white/20 rounded-2xl rotate-40 animate-bounce [animation-duration:5.2s]"></div>
        <div className="absolute top-10 right-40 w-24 h-24 bg-white/10 rounded-2xl rotate-40 animate-bounce [animation-duration:5.2s]"></div>
        <div className="absolute bottom-10 -right-8 w-24 h-24 bg-white/20 rounded-xl rotate-40 animate-bounce [animation-duration:5.2s]"></div>
      </div>

      <div>
        <p className="text-indigo-600 mb-3 font-lato font-bold">
          Hello, I’m
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Mehedi
        </h1>

        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-600 pt-5 animate-bounce [animation-duration:3.2s]">
          Front-End Developer
        </h4>

        <p className="text-gray-400 mt-4 max-w-lg text-base sm:text-lg font-lato">
          I build{" "}
          <span className="bg-linear-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
            fast, clean,
          </span>{" "}
          and scalable web interfaces with React.
        </p>

        <p className="font-lato text-gray-500 mt-2 text-sm sm:text-base">
          Frontend Developer specializing in React, Tailwind CSS, and modern
          JavaScript. I create component-based architectures that are
          performant, maintainable, and built for production.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition">
            Download CV
          </button>
        </div>

        <div className="flex gap-6 mt-12">
        </div>
      </div>
     <div className="relative hidden md:flex justify-center items-center">
  <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-indigo-600/10 flex items-center justify-center overflow-hidden">
    
    <div className="absolute inset-4 rounded-full bg-indigo-600/20 shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>

    <img
      src={mehedi}
      alt="Mehedi"
      className="relative w-full h-full object-cover rounded-full scale-95"
    />
  </div>
</div>

    </div>

    <div className="pb-5">
      <div className="w-8 h-12 mx-auto flex items-center justify-center rounded-full border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]">
        <span className="animate-bounce text-white">
          <GoDotFill size={14} />
        </span>
      </div>
    </div>
  </Container>
</section>

  )
}

export default Banner