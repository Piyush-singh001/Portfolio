import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function SocalMedia() {
  const socalMediaRef = useRef([]);

  useEffect(() => {
    const items = socalMediaRef.current.filter(Boolean);
    gsap.to(items, {
      opacity: 1,
      x: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  const socalMediaItems = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/piyush-singh-40647a342/",
      icon: (
        <FaLinkedin
          size={24}
          className=" social-link text-gray-500 hover:text-black transition-all duration-700"
        />
      ),
    },
    {
      name: "GitHub",
      link: "https://github.com/Piyush-singh001",
      icon: (
        <FaSquareGithub
          size={24}
          className=" social-link text-gray-500 hover:text-black transition-all duration-700"
        />
      ),
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/piyush_.sengar/",
      icon: (
        <FaInstagramSquare
          size={24}
          className=" social-link text-gray-500 hover:text-black transition-all duration-700"
        />
      ),
    },
  ];

  return (
    <div className="md:w-1/6 md:pr-30 md:pd-40 md:flex-col pl-28 md:pl-0 pt-10 w-full h-100% flex flex-row md:space-y-10 space-x-5 md:space-x-0">
      {socalMediaItems.map((item, index) => (
        <a
          ref={(el) => {
            if (el) socalMediaRef.current[index] = el;
          }}
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link opacity-0 text-gray-500 hover:text-black transition-all duration-700"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
export default SocalMedia;
