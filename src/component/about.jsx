import { FaLightbulb, FaBriefcase, FaHeadphones } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const photonRef = useRef(null);

  useLayoutEffect(() => {
    const element = photonRef.current;
    if (element) {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -50, // initial position
        },
        {
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top -30%",
            toggleActions: "play reverse play reverse",
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-white flex flex-col items-center pt-10 px-4 scroll-mt-24"
    >
      <h1 className="text-4xl font-bold text-gray-800 text-center">About Me</h1>
      <p className="text-gray-500 text-center mt-2">My introduction</p>

      <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 max-w-6xl w-full">
        {/* Profile Image */}
        <div
          ref={photonRef}
          className="md:w-[400px] md:h-[400px] w-[250px] h-[250px] opacity-0 translate-x-[-50px] object-cover rounded-2xl shadow-md bg-slate-900 md:mr-8 mr-0 overflow-hidden"
          // NOTE: Do NOT add opacity-0 here — gsap handles it
        >
          <img
            src="/images/piyush.jpg"
            alt="My Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl md:px-28 px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="bg-white border flex flex-col items-center rounded-xl p-4 shadow-sm w-[180px]">
              <FaLightbulb className="text-2xl mx-auto mb-1 text-gray-800" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-sm text-gray-500">Fresher</p>
            </div>
            <div className="bg-white border rounded-xl flex flex-col items-center p-4 shadow-sm w-[180px]">
              <FaBriefcase className="text-2xl mx-auto mb-1 text-gray-800" />
              <h3 className="font-semibold">Completed</h3>
              <p className="text-sm text-gray-500">8+ Projects</p>
            </div>
            <div className="bg-white border rounded-xl flex flex-col items-center p-4 shadow-sm w-[180px]">
              <FaHeadphones className="text-2xl mx-auto mb-1 text-gray-800" />
              <h3 className="font-semibold">Support</h3>
              <p className="text-sm text-gray-500">Online 24/7</p>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Frontend developer, I create web pages with UI / UX user interface.
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <a
            href="/Piyush-cv.pdf"
            download
            className="flex items-center gap-2 bg-black text-white px-10 py-5 rounded-3xl hover:bg-gray-800 transition"
          >
            Download CV <FiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
