import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navItemsRef = useRef([]);
  const portfoliosRef = useRef([]);
  const menu = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

  useEffect(() => {
    const waitForRefs = () => {
      const items = navItemsRef.current.filter(Boolean);
      if (items.length === menu.length) {
        gsap.to(items, {
          opacity: 1,
          y: 20,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        });
      } else {
        setTimeout(waitForRefs, 50);
      }
    };

    waitForRefs();
  }, []);

  useEffect(() => {
    const waitForRefs = () => {
      gsap.to("#logo", {
        opacity: 1,
        x: 20,
        delay: 0.2,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    };

    waitForRefs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full h-20 font-medium text-gray-400 flex flex-row items-center justify-between px-10 md:px-20 z-40 ${
        isScrolled
          ? "shadow-md bg-white text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="navbar-brand  ml-5 text-gray-400 hover:text-black transition-all duration-700">
        <a href="/" id="logo" className="opacity-0 pr-24" ref={portfoliosRef}>
          My Portfolio
        </a>
      </div>
      <ul className="navbar-menu hidden md:flex group  flex-row space-x-4 gap-10 mr-10 text-gray-400">
        {menu.map((item, index) => (
          <li
            key={index}
            ref={(el) => {
              if (el) navItemsRef.current[index] = el;
            }}
            className=" opacity-0 pb-10 hover:text-black transition-all duration-700"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden text-3xl text-gray-400 transition-colors duration-300 `}
      >
        ☰
      </button>
      {isOpen && (
        <ul className="absolute top-0 right-0 w-4/12 flex flex-col items-center gap-4 p-10 md:hidden bg-white/70 text-black shadow-md border-b border-white/30">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-400"
          >
            &times;
          </button>
          {menu.map((item, index) => (
            <li
              key={index}
              className="pb-10 hover:text-black transition-all duration-700"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
export default Navbar;
