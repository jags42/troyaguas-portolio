// src/components/Projects.js
import React from "react";
import mindgraspImage from "../assets/mindgrasp-image.png";
import aslanImage from "../assets/aslan-image.png";
import xpressImage from "../assets/xpress-image.png";
import avionBank from "../assets/avionbank-image.png";
import avionChat from "../assets/avion-chat.png";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6  ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects<span className="highlight-color">.</span></h2>

        <div className="grid grid-cols-1 gap-10">
          {/* Mindgrasp */}
          <a href="https://www.mindgrasp.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image w-1/4 max-md:w-full">
                  <img
                    src={mindgraspImage}
                    alt="Mindgrasp Migration Project Screenshot"
                    className="h-full w-full object-cover rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 w-3/4 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">Mindgrasp Migration Project</h3>
                  <p className="mb-4  ">
                    Contributed to the migration of the <span className="font-semibold">Mindgrasp</span> website while working at
                    GiantFocal. Our team transitioned their site to the <span className="font-semibold">HubSpot CMS</span>, implementing
                    a custom theme and building new modules to align with the updated branding and functionality requirements.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Developed custom HubSpot CMS modules tailored to client needs.</li>
                    <li>Collaborated on full website migration to HubSpot CMS.</li>
                    <li>Improved maintainability, performance, and content flexibility.</li>
                  </ul>
                  <p className="">
                    <span className="font-  ">Tech Stack:</span> HTML, CSS, JavaScript, HubSpot CMS
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* ASLAN */}
          <a
            href="https://aslantraining.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={aslanImage}
                    alt="ASLAN Migration Project Screenshot"
                    className="h-full w-full object-cover rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">ASLAN Migration Project</h3>
                  <p className="mb-4  ">
                    Contributed to the migration of the <span className="font-semibold">ASLAN</span> website while working at
                    GiantFocal. Our team rebuilt the site on the <span className="font-semibold">HubSpot CMS</span> using a
                    custom theme and developed new reusable modules tailored to the client’s design and content needs.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Built reusable HubSpot CMS modules for streamlined updates.</li>
                    <li>Assisted in complete website migration and optimization.</li>
                    <li>Enhanced scalability and ease of content management.</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> HTML, CSS, JavaScript, HubSpot CMS
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Xpress Website */}
          <a
            href="https://www.xpress.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={xpressImage}
                    alt="Xpress Website Screenshot"
                    className="h-full w-full object-cover object-left rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">Xpress Website</h3>
                  <p className="mb-4  ">
                    Developed the <span className="font-semibold">Xpress</span> website in
                    <span className="font-semibold"> Webflow</span> based on a provided design. I was responsible for building
                    the full website, ensuring pixel-perfect implementation, responsive layouts, and smooth interactions.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Converted Figma designs into a fully functional Webflow site.</li>
                    <li>Implemented responsive layouts and pixel-perfect styling.</li>
                    <li>Added custom animations and smooth interactions.</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> Webflow
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* AvionBank */}
          <a
            href="https://avionbank-live-demo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={avionBank}
                    alt="AvionBank Screenshot"
                    className="h-full w-full object-cover object-center rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">AvionBank</h3>
                  <p className="mb-4  ">
                    A React application built to simulate a banking system with account creation, deposits,
                    withdrawals, transfers, and transaction history.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Built a dashboard to display account details (name, account number, email, balance).</li>
                    <li>Developed a transaction system for deposits, withdrawals, and transfers between accounts.</li>
                    <li>Implemented account creation and styled the interface using CSS.</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> React, CSS, Node.js
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Avionchat */}
          <a
            href="https://avionchat-live-demo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-primary background-light border border-border rounded-lg shadow-md hover:-translate-y-1 hover:shadow-xl transition cursor-pointer">
              <div className="project-content flex gap-8 max-md:flex-col">
                <div className="project-image max-md:w-full">
                  <img
                    src={avionChat}
                    alt="Avionchat Screenshot"
                    className="h-full w-full object-cover object-center rounded-md shadow-md  block"
                  />
                </div>

                <div className="project-text p-6 max-md:w-full">
                  <h3 className="text-2xl font-semibold mb-3">Avionchat</h3>
                  <p className="mb-4  ">
                    A React application where registered users can create accounts, join channels,
                    and send real-time messages.
                  </p>
                  <ul className="list-disc ml-5   mb-4 space-y-1">
                    <li>Integrated an API for account creation, channel management, and messaging functionality.</li>
                    <li>Developed a real-time messaging system where users can send, receive, and manage conversations.</li>
                    <li>Built the application using React, allowing users to create channels and add members.</li>
                  </ul>
                  <p className=" ">
                    <span className="font-semibold">Tech Stack:</span> React, Node.js, CSS
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
