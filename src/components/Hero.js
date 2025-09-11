// src/components/Hero.js
import React from "react";
import aguasResume from "../assets/aguas-resume.pdf";
import avionCert from "../assets/avion-certificate.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-7xl max-md:text-5xl  font-bold mb-8">
        Hello I'm <span className="highlight-color">Troy Aguas.</span>
      </h1>
      <p className="text-lg md:text-xl w-1/2 max-md:w-full">
        A former UI/UX designer turned frontend developer.
        I blend aesthetic precision with code to create clean, intuitive, and responsive web experiences.
      </p>
      <div className="flex gap-4">
        <a
          href={avionCert}
          className="bg-primary border-border border mt-8 text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-80 transition"
        >
          View certificate
        </a>
        <a
          href={aguasResume}
          className="bg-primary border-border border mt-8 text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-80 transition"
        >
          Download CV
        </a>
      </div>
    </section>

  );
}
