// src/components/Projects.js
import React from "react";
import movoCRM from "../assets/movomediacrm-thumb.png";
import movoPlanner from "../assets/movomediaplanner-thumb.png";
import precisionChiro from "../assets/precision-chiropract-thumb.png";
import dunnReport from "../assets/the-dunn-report-thumb.png";
import cpaImage from "../assets/cpa-thumb.png";

export default function Projects() {
  return (
    <section id="designs" className="py-20 px-6  ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Design Projects<span className="highlight-color">.</span></h2>

        <div className="grid grid-cols-1 gap-10">
          {/* Mindgrasp */}
          <a href="https://www.figma.com/proto/Z0XhcZRF77hQqAnAEzAtYD/Castaneda-CPA---Associates--Sample-Revamp---Copy-?node-id=3001-2&p=f&t=xk6s7ovbbxZFh1cz-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A98"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image w-1/4 max-md:w-full">
                  <img
                    src={movoCRM}
                    alt="Mindgrasp Migration Project Screenshot"
                    className="h-full w-full object-cover rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 w-3/4 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">MovOmedia CRM</h3>
                  <p className="mb-4  ">
                    Designed in Figma and developed using WordPress (Elementor), this project focused on rebuilding and optimizing a CRM website for better performance and usability.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Translated Figma designs into responsive Elementor pages.</li>
                    <li>Improved site structure, maintainability, and content flexibility.</li>
                    <li>Contributed to full website migration and implementation aligned with updated branding.</li>
                  </ul>
                  <p className="">
                    <span className="font-  ">Tech Stack:</span> Figma, WordPress (Elementor), HTML, CSS, JavaScript  
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* ASLAN */}
          <a
            href="https://www.figma.com/proto/cfPGHPcg2IZUovrvjlTJod/MoVO-Media-Planner-Revamp?node-id=1-915&t=mf6Hl0FA3n9iNNVU-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A98"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={movoPlanner}
                    alt="ASLAN Migration Project Screenshot"
                    className="h-full w-full object-cover rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">MovOmedia Planner</h3>
                  <p className="mb-4  ">
                    Designed in Figma and developed using WordPress (Elementor), this project involved creating a scalable and user-friendly social scheduling platform website.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Built responsive pages from Figma designs using Elementor.</li>
                    <li>Developed reusable layouts and components for easier content updates.</li>
                    <li>ssisted in site optimization and enhanced content management experience.</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> Figma, WordPress (Elementor), HTML, CSS, JavaScript
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Xpress Website */}
          <a
            href="https://www.figma.com/proto/nVIcPMjaXNDwC9ijfg9RMV/Precision-Chiropract?node-id=3002-5&t=GXMsQOoCOx2RI3UQ-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A98"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={precisionChiro}
                    alt="Xpress Website Screenshot"
                    className="h-full w-full object-cover object-left rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">Precision Chiropractor</h3>
                  <p className="mb-4  ">
                   Redesigned the website based on client requirements, focusing on improving visual appeal, user experience, and modernizing the overall look.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Created a full website redesign in Figma aligned with client goals and branding.</li>
                    <li>Designed responsive screens to ensure consistency across devices.</li>
                    <li>Delivered a clean, modern UI to enhance user engagement.</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> Figma
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* AvionBank */}
          <a
            href="https://www.figma.com/proto/Z2wLETFvSgtJxZYbWMFKrL/The-Dunn-Report?node-id=5001-1367&t=GXMsQOoCOx2RI3UQ-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A98"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={dunnReport}
                    alt="AvionBank Screenshot"
                    className="h-full w-full object-cover object-left rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">The Dunn Report</h3>
                  <p className="mb-4  ">
                  Designed a data-driven website experience for a real estate insights platform targeting institutional investors and industry professionals.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Created two homepage design concepts in Figma to explore typography, color palette, and visual direction.</li>
                    <li>Incorporated competitor research to differentiate through a more modern, accessible, and user-focused design approach.</li>
                    <li>Interpreted and followed a detailed client brief including layout direction, typography, and color palette</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> Figma
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Avionchat */}
          <a
            href="https://www.figma.com/proto/Z0XhcZRF77hQqAnAEzAtYD/Castaneda-CPA---Associates--Sample-Revamp---Copy-?node-id=3001-2"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={cpaImage}
                    alt="Avionchat Screenshot"
                    className="h-full w-full object-cover object-left rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">Castaneda CPA</h3>
                  <p className="mb-4  ">
                    Conducted a comprehensive website and SEO audit, identifying key improvement areas and proposing a redesigned homepage to enhance performance and user experience.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Performed an SEO and website audit to evaluate structure, content, and overall performance.</li>
                    <li>Identified UX/UI and conversion issues beyond SEO, recommending a broader design improvement strategy.</li>
                    <li>Designed a new homepage concept in Figma to improve visual hierarchy, clarity, and engagement.</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> Figma
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
