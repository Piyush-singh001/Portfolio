import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        project,
      });

      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setProject("");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen w-full flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-4xl font-bold text-gray-800 my-10">Contact Us</h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg p-8 rounded-xl">
        {/* Left Side - Contact Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Talk to me</h2>

          <div className="border p-4 rounded-lg shadow-sm">
            <p className="font-semibold">Email</p>
            <p className="text-gray-500">piyush.singh.webdev@gmail.com</p>
            <a
              href="mailto:piyush.singh.webdev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 mt-2 inline-block"
            >
              Write me →
            </a>
          </div>

          <div className="border p-4 rounded-lg shadow-sm">
            <p className="font-semibold">Whatsapp</p>
            <p className="text-gray-500">7836876972</p>
            <a
              href="https://wa.me/7836876972"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 mt-2 inline-block"
            >
              Write me →
            </a>
          </div>

          <div className="border p-4 rounded-lg shadow-sm">
            <p className="font-semibold">Instagram</p>
            <p className="text-gray-500">piyush_.sengar</p>
            <a
              href="https://instagram.com/piyush_.sengar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 mt-2 inline-block"
            >
              Write me →
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold">Write me your project</h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 flex items-center gap-2"
          >
            Send Message
            <span>📩</span>
          </button>
        </form>
      </div>
    </div>
  );
}
