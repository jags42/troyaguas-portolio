// src/components/Header.js
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-primary shadow-l z-50">
      <nav className="flex justify-center gap-6 p-4 font-medium text-white">
        <a href="#hero" className="">Home</a>
        <a href="#about" className="">About</a>
        <a href="#skills" className="">Skills</a>
        <a href="#projects" className="">Projects</a>
        <a href="#contact" className="">Contact</a>
      </nav>
    </header>
  );
}
