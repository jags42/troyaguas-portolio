// src/components/Header.js
import React, { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("dark"); // default is dark

  // Apply theme to <body>
  const applyTheme = (next) => {
    const body = document.body;
    if (next === "light") {
      body.setAttribute("data-theme", "light");
    } else {
      body.removeAttribute("data-theme"); // default = dark
    }
    setTheme(next);
    localStorage.setItem("theme", next); // persist
  };

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      applyTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-primary z-50">
      <nav className="flex justify-between items-center p-4 font-medium text-white">
        <div></div>
        
        {/* Nav links */}
        <div className="flex gap-6">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Toggle button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/60 hover:border-white/80 transition"
        >
          {theme === "dark" ? (
            // 🌙 Moon (when currently dark → show moon)
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="currentColor"
                d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z"
              />
            </svg>
          ) : (
            // ☀️ Sun (when light mode active → show sun)
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="currentColor"
                d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Z..."
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}
