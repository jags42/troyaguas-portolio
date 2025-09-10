// src/components/About.js
import React, { useState } from "react";
import yousourceLogo from "../assets/yousource-logo.svg";
import xpressLogo from "../assets/xpress-logo.svg";
import giantfocalLogo from "../assets/gf-logo-white.webp";
import mapuaLogo from "../assets/mapua.png";
import avionLogo from "../assets/avion-logo.svg";

export default function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="about" className="pt-20 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            className={`px-6 py-2 rounded-md font-medium transition ${activeTab === "experience"
              ? "bg-white border-primary text-primary hover:bg-gray-300"
              : "bg-primary border border-border"
              }`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            className={`px-6 py-2 rounded-md font-medium transition ${activeTab === "education"
              ? "bg-white border-primary text-primary hover:bg-gray-300"
              : "bg-primary border border-border "
              }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-left max-w-6xl mx-auto">
          {activeTab === "experience" && (
            <ul className="flex flex-col gap-4 items-center justify-center ">
              {/* Yousource */}
              <li className="about-container p-4 border border-border rounded-lg flex gap-8 items-center max-md:flex-col">
                <div className="about-image-content w-1/2 flex items-center justify-center">
                  <img src={yousourceLogo} alt="Yousource Logo" className="max-h-full max-w-full" />
                </div>
                <div className="about-text-content max-md:w-full">
                  <h3 className="font-semibold text-xl">UI/UX Engineer @ YouSource Inc.</h3>
                  <p className=" mb-4">Oct 2021 – Apr 2023</p>
                  <ul className="list-disc ml-5  space-y-1">
                    <li>Developed and maintained UI components, translating designs into functional code.</li>
                    <li>Created interactive prototypes and sustained multiple projects in an agile environment.</li>
                    <li>Led debugging and quality assurance for UI consistency across web and app platforms.</li>
                  </ul>
                </div>
              </li>

              {/* Xpress */}
              <li className="about-container p-4 border border-border rounded-lg flex gap-8 items-center max-md:flex-col">
                <div className="about-image-content w-1/2 flex items-center justify-center">
                  <img src={xpressLogo} alt="Xpress Logo" className="xpress-logo max-h-full max-w-full" />
                </div>
                <div className="about-text-content max-md:w-full">
                  <h3 className="font-semibold text-xl">Jr. UI/UX Designer @ Xpress Super App</h3>
                  <p className=" mb-4">Aug 2023 – Jul 2024</p>
                  <ul className="list-disc ml-5  space-y-1">
                    <li>Led the design for the Xpress Drivers Loyalty Program and contributed to the Xpress Super App design system.</li>
                    <li>Designed mobile apps, websites, and admin systems using Adobe XD and Figma.</li>
                    <li>Developed a CMS website using Webflow and built interactive prototypes from wireframes and mockups.</li>
                  </ul>
                </div>
              </li>

              {/* GiantFocal */}
              <li className="about-container p-4 border border-border rounded-lg flex gap-8 items-center max-md:flex-col">
                <div className="about-image-content w-1/2 flex items-center justify-center">
                  <img src={giantfocalLogo} alt="GiantFocal Logo" className="max-h-full max-w-full" />
                </div>
                <div className="about-text-content max-md:w-full">
                  <h3 className="font-semibold text-xl">Jr. Frontend Developer @ GiantFocal</h3>
                  <p className=" mb-4">Jul 2024 – Present</p>
                  <ul className="list-disc ml-5  space-y-1">
                    <li>Built and customized responsive themes for clients on HubSpot CMS.</li>
                    <li>Developed reusable components using HTML, Tailwind CSS, JavaScript, and HUBL.</li>
                    <li>Migrated an existing website to a custom HubSpot theme, improving integration and performance.</li>
                  </ul>
                </div>
              </li>
            </ul>
          )}

          {activeTab === "education" && (
            <ul className="flex flex-col gap-4 items-center justify-center ">
              {/* Yousource */}
              <li className="about-container p-4 border border-border rounded-lg flex gap-8 items-center max-md:flex-col">
                <div className="about-image-content w-1/2 flex items-center justify-center">
                  <img src={mapuaLogo} alt="Yousource Logo" className=" mapua-logo max-h-full max-w-full" />
                </div>
                <div className="about-text-content max-md:w-full">
                  <h3 className="font-semibold text-xl">Mapua University</h3>
                  <p className=" mb-4">July 2016 – Jun 2023</p>
                  <ul className="list-disc ml-5  space-y-1">
                    <li>B.S. in Information Technology</li>
                    <li>Graduated June 2023 supposedly should be 2021 (Due to pandemic)</li>
                  </ul>
                </div>
              </li>

              {/* Xpress */}
              <li className="about-container p-4 border border-border rounded-lg flex gap-8 items-center flex-col">
                <div className="about-content  flex gap-8 items-center max-md:flex-col">
                  <div className="about-image-content w-1/2 flex items-center justify-center">
                    <img src={avionLogo} alt="Xpress Logo" className="avion-logo max-h-full max-w-full" />
                  </div>
                  <div className="about-text-content max-md:w-full">
                    <h3 className="font-semibold text-xl">Avion School</h3>
                    <p className=" mb-4">Jul 2024 – Jan 2025</p>
                    <ul className="list-disc ml-5  space-y-1">
                      <li>Full Stack Web Development</li>
                      <li>Completed an intensive Full-Stack Web Development bootcamp focused on HTML, CSS, JavaScript, React, and Ruby on Rails, structured to help students build portfolio-worthy projects and gain job-ready skills</li>
                      <li>Engaged in hands-on, real-world projects and pair programming, which fostered teamwork and practical development experience.</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section >
  );
}
