import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
];

const SkillSection = () => {
  const containerRef = useRef(null); // parent section
  const scrollRef = useRef(null); // horizontal scroll div
  const skillRefs = useRef([]); // array of all skill boxes

  // Mobile fade-in animation
  useEffect(() => {
    if (window.innerWidth > 1023) return;
    skillRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el, // each box individually
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
          delay: i * 0.3, // stagger effect
        }
      );
    });
  }, []);

  // Desktop horizontal scroll
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const scrollWidth = scrollRef.current.scrollWidth;
    const containerWidth = containerRef.current.clientWidth;
    const scrollLength = Math.max(0, scrollWidth - containerWidth);

    let ctx = gsap.context(() => {
      gsap.to(scrollRef.current, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative bg-white md:overflow-hidden w-screen"
    >
      <h2 className="text-3xl font-bold text-center py-8 text-gray-800">
        My Skills
      </h2>

      <div
        ref={scrollRef}
        className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-nowrap gap-6 px-4 md:pr-16 pb-10 w-full"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            ref={(el) => (skillRefs.current[i] = el)}
            className="box w-[100px] sm:w-[140px] md:w-[220px] h-[100px] sm:h-[140px] md:h-[220px]
             flex-shrink-0 bg-gray-100 rounded-xl shadow-md 
             flex flex-col items-center justify-center 
             hover:scale-105 transition"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm text-gray-700 text-center break-words">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
