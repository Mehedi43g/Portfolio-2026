import React, { useEffect, useRef, useState } from "react";

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-black py-20 px-6 text-white overflow-hidden" >
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[14px] uppercase text-cyan-400 font-lato">Technical Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center font-lato">
          Tools & <span className="text-cyan-400">Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <div>
                  <h4 className="font-semibold">{skill.name}</h4>
                  <span className="text-xs text-gray-400">
                    {skill.tag}
                  </span>
                </div>
                <span className="text-cyan-400 font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="py-10">
          <p className="text-[16px] text-center">Additional Tools</p>
          <div className="flex gap-2 justify-around pt-10">
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">Git & GitHub</h5>
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">Webpack & Vite</h5>
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">React Router</h5>
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">Redux & Context API</h5>
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">REST APIs</h5>
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">Jest & Testing Library</h5>
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">Figma</h5>
            <h5 className="border py-1.25 px-2 rounded-2xl border-[#00b0e19a] hover:border-[#00B0E1]">npm </h5>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
