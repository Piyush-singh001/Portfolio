import React, { useRef, useEffect, useLayoutEffect } from "react";
import { FiLayout, FiCode, FiEdit3 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Servicess() {
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          x: index === 0 ? -50 : index === 1 ? 0 : 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          //  stagger: 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 70%",
            end: "top 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  const services = [
    { icon: <FiLayout size={28} />, title1: "Web", title2: "Developer" },
    { icon: <FiCode size={28} />, title1: "UI/UX", title2: "Designer" },
    { icon: <FiEdit3 size={28} />, title1: "Branding", title2: "Designer" },
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
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white h-[400px] rounded-xl border shadow-sm p-6 flex flex-col items-start px-20 py-28 hover:shadow-md transition 
                       opacity-0 translate-y-12" // 🔹 Initial hidden state
          >
            <div className="text-gray-800 mb-4">{service.icon}</div>
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

export default Servicess;
