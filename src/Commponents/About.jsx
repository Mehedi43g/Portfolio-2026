import React from 'react'
import Container from './Container'

const About = () => {
  return (
    <section className='py-20 bg-slate-900 text-white'>
        <Container>
            <div className="">
               <div className="text-center font-lato">
                 <p className='text-[#00D3F3] font-lato'>ABOUT ME</p>
                <h4 className='text-[40px] font-lato'>Disciplined. Detail-oriented. <span className='text-[#00D3F3]'>Production-ready.</span></h4>
               </div>
            </div>
               <div className="pt-20">
                <div className="w-6/12 flex flex-col gap-6 font-lato">
                <p>I'm a Frontend Developer who believes that great interfaces are built on a foundation of solid fundamentals.
                   Every component I create is thoughtfully designed to be reusable, performant, and accessible.</p>
                <p>My approach combines modern React patterns with timeless web principles: semantic HTML, responsive design,
                  and progressive enhancement. I don't just make things look good—I make them work flawlessly across devices and browsers.</p>
                <p>Whether it's optimizing bundle sizes, implementing complex state management, or integrating with REST APIs,
                 I focus on solutions that are maintainable and scalable for real-world production environments.</p>
                </div>
                <div className="w-6/12">
                <div className="">
                  
                </div>
                </div>
               </div>
        </Container>
    </section>
  )
}

export default About