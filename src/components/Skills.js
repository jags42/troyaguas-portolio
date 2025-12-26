import React from "react";
import Slider from "react-slick";
import hubspotLogo from "../assets/hubspot-1.svg";
import dudaLogo from "../assets/duda.jpg";

export default function Skills() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,           
    autoplaySpeed: 2000,  // 3 seconds on screen per slide
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const skills = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Adobe XD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
  },
  {
    name: "Webflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
  },
  {
     name: "HubSpot",
    logo: hubspotLogo,
  },
  {
     name: "Duda",
    logo: dudaLogo,
  },
];


  return (
    <section id="skills" className="py-20">
      <div className="w-full mx-auto text-center py-4 border border-border">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-3">
              <div className="bg-primary background-light border-border border rounded-lg p-6 flex flex-col items-center justify-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 w-12 object-contain mt-2"
                />
                   <p className="text-sm font-semibold mt-4">{skill.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

<section id="about" className="pt-20 scroll-mt-20">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed font-poppins">
          I'm Julius, a frontend developer who loves building intuitive, responsive, and visually pleasing web apps.
          I specialize in React and Tailwind CSS, and I enjoy turning creative ideas into functional user experiences.
        </p>
      </div>
    </section>