import React from "react";
import Container from "./Container";
import ScrollReveal from "../hooks/ScrollReveal";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { database } from "../firebase";
import { ref, push } from "firebase/database";

const Contract = () => {
  const [refScroll, visible] = ScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Save to Firebase
    push(ref(database, "contacts"), {
      name,
      email,
      message,
      timestamp: Date.now(),
    })
      .then(() => alert("Message sent!"))
      .catch((err) => alert("Error: " + err.message));

    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 bg-[#0E0E13]">
      <Container>
        <div
          ref={refScroll}
          className={`${
            visible
              ? "opacity-100 translate-y-0 duration-1000"
              : "opacity-0 translate-y-16"
          }`}
        >
          {/* Heading */}
          <div className="text-center px-4">
            <p className="text-[14px] text-[#00D3F3]">Contact</p>
            <h3 className="text-[40px] font-lato font-bold text-white">
              Let’s <span className="text-[#00D3F3]">Work Together</span>
            </h3>
            <p className="text-[14px] font-lato text-[#585858] mt-2">
              Got a project, idea, or collaboration in mind?
              <br className="hidden md:block" /> Hit me up — I actually reply.
            </p>
          </div>

          {/* Form */}
          <div className="mt-10 max-w-3xl mx-auto bg-[#0E0C14] border border-[#00d3f3c0] rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-[#11202D] border border-[#00d3f340] rounded-md px-4 py-2 text-white outline-none focus:border-[#00D3F3]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-[#11202D] border border-[#00d3f340] rounded-md px-4 py-2 text-white outline-none focus:border-[#00D3F3]"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="md:col-span-2 bg-[#11202D] border border-[#00d3f340] rounded-md px-4 py-2 text-white outline-none focus:border-[#00D3F3]"
                required
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-[#00D3F3] text-[#0E0E13] font-semibold py-2 rounded-md hover:scale-[1.02] duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-5 mt-8">
              <a
                href="mailto:mdmehedi992124@gmail.com"
                className="p-3 bg-[#11202D] text-[#00D3F3] rounded-full hover:bg-[#00D3F3] hover:text-black duration-300"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="https://github.com/Mehedi43g"
                target="_blank"
                className="p-3 bg-[#11202D] text-[#00D3F3] rounded-full hover:bg-[#00D3F3] hover:text-black duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 bg-[#11202D] text-[#00D3F3] rounded-full hover:bg-[#00D3F3] hover:text-black duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
    
  );
};

export default Contract;
