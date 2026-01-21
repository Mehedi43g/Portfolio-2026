import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "../hooks/ScrollReveal";

const skills = [
  { name: "React", level: 95, tag: "Frontend" },
  { name: "JavaScript (ES6+)", level: 92, tag: "Language" },
  { name: "Next.js", level: 88, tag: "Language" },
  { name: "Tailwind CSS", level: 90, tag: "Styling" },
  { name: "HTML5 & CSS3", level: 95, tag: "Core" },
  { name: "Responsive Design", level: 93, tag: "UI/UX" },
  { name: "API Integration", level: 87, tag: "Backend" },
  { name: "Performance Optimization", level: 85, tag: "Optimization" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visiblee, setVisiblee] = useState(false);
  const [ref, visible] = ScrollReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisiblee(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-black py-16 sm:py-20 px-4 sm:px-6 text-white overflow-hidden"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all ${
          visible
            ? "opacity-100 translate-y-0 scale-100 duration-1000"
            : "opacity-0 translate-y-16 scale-95"
        }`}
      >
        <p className="text-center text-[13px] sm:text-[14px] uppercase text-cyan-400 font-lato">
          Technical Skills
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-14 text-center font-lato">
          Tools & <span className="text-cyan-400">Technologies</span>
        </h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {skill.name}
                  </h4>
                  <span className="text-xs text-gray-400">
                    {skill.tag}
                  </span>
                </div>
                <span className="text-cyan-400 font-medium text-sm">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                  style={{
                    width: visiblee ? `${skill.level}%` : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL TOOLS */}
        <div className="pt-12 sm:pt-14">
          <p className="text-[15px] sm:text-[16px] text-center">
            Additional Tools
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-8">
            {[
              "Git & GitHub",
              "Webpack & Vite",
              "React Router",
              "Redux & Context API",
              "REST APIs",
              "Jest & Testing Library",
              "Figma",
              "npm",
            ].map((tool, i) => (
              <h5
                key={i}
                className="border py-1.5 px-3 text-sm rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1] transition-colors"
              >
                {tool}
              </h5>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
