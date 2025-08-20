import React from "react";
import { FiLayout, FiCode, FiEdit3 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Services() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const crnterRef = useRef(null);

  useEffect(() => {
    const animate = (element) => {
      if (!element) return;
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top -30%",
          toggleActions: "play play play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    animate(leftRef.current);
    animate(crnterRef.current);
    animate(rightRef.current);
  }, []);

  // Services data

  const services = [
    {
      icon: <FiLayout size={28} />,
      title1: "Web",
      title2: "Developer",
    },
    {
      icon: <FiCode size={28} />,
      title1: "UI/UX",
      title2: "Designer",
    },
    {
      icon: <FiEdit3 size={28} />,
      title1: "Branding",
      title2: "Designer",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white px-4 flex flex-col items-center text-center pt-32"
    >
      <h2 className="text-4xl font-bold text-gray-800">Services</h2>
      <p className="text-gray-500 mt-2 mb-12">What I offer</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            ref={index === 0 ? leftRef : index === 1 ? crnterRef : rightRef}
            className={`bg-white opacity-0 h-[400px] rounded-xl border shadow-sm p-6 flex flex-col items-start px-20 py-28 transition-transform ${
              index === 0
                ? "-translate-x-[50px]"
                : index === 1
                ? "translate-x-0"
                : "translate-x-[50px]"
            } hover:shadow-md transition`}
          >
            <div className="text-gray-800  mb-4">{service.icon}</div>
            <h3 className="text-lg font-medium text-gray-900">
              {service.title1}
            </h3>
            <h3 className="text-lg font-medium text-gray-900">
              {service.title2}
            </h3>
            <button className="mt-4 text-sm text-gray-500 hover:text-black flex items-center gap-1 transition">
              View More <BsArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
