import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaCode, FaTasks } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
 

export default function Projects() {
  const projects = [
    {
      title: "Smart Parking System",
      desc: "Web app with QR code scanning and slot management built using HTML, CSS, JavaScript, and MySQL.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      live: "#",
      code: "#",
      image: "src/back-video/OIP (1).webp",
    },
   {
  title: "Sasken IT Company Landing Page",
  desc: "Responsive landing page for Sasken IT company built with React, CSS, JavaScript, and Bootstrap.",
  tech: ["React", "CSS", "JavaScript", "Bootstrap"],
  live: "https://saskan-templet.vercel.app/",
  code: "https://github.com/akashmhadgut/SaskanTemplet.git",
  image: "src/back-video/sasken.png",
},
{
  title: "ColorCast Company Landing Page",
  desc: "Responsive landing page for ColorCast company built with Html, CSS, JavaScript, and Bootstrap.",
  tech: ["Html", "CSS", "JavaScript", "Bootstrap"],
  live: "https://colorcrest-landing.vercel.app/",
  code: "https://github.com/akashmhadgut/colorcrest-landing.git",
  image: "src/back-video/colorcast.png",
},
    {
      title: "Blogging Website",
      desc: "Full-featured website built using React.js and Bootstrap for blogging + product showcases.",
      tech: ["React", "Bootstrap"],
      live: "https://blogapp-topaz-seven.vercel.app/",
      code: "https://github.com/akashmhadgut/blogapp.git",
      image: "src/back-video/OIP.webp",
    },
     {
      title: "E-commerce Website for Fashion Sales",
      desc: "Responsive online store built with HTML, CSS, JavaScript, and Bootstrap.",
      tech: ["React", "CSS", "JavaScript", "Bootstrap"],
      live: "https://shopping-cards-nu.vercel.app/",
      code: "https://github.com/akashmhadgut/ShoppingCards.git",
      image: "src/back-video/ecom.jpg",
    },
   {
  title: "Real Estate Website",
  desc: "A modern and responsive real estate landing website showcasing project details, virtual tour, amenities, pricing, gallery and contact form.",
  tech: ["React", "Tailwind CSS", "JavaScript"],
  live: "https://realstateproject-eight.vercel.app/",
  code: "https://github.com/akashmhadgut/realstateproject.git",
  image: "src/back-video/looha.png", 
}
     
  ];

  return (
    <section id="project" className="py-5 bg-dark text-white ">
      <div className="container">
         <div className="heading text-center mb-5">
                         <FaFolderOpen size={120} className="icon bg-primary" />
                         <h2 className="fw-bold">Projects</h2>
                       </div>
        <div className="row row-cols-1 row-cols-md-3 g-5 mb-5 ">
          {projects.map((p, i) => (
            <div className="col" key={i}>
              <div className="card h-100 project-card glass-card ">
                <div className="project-img-wrapper">
                  <img src={p.image} alt={p.title} className="project-img" />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{p.title}</h5>
                  <p className="card-text ">{p.desc}</p>

                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className={`badge tech-badge ${t.toLowerCase()}`}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                      <FaExternalLinkAlt className="me-1" /> Live Demo
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm bg-dark">
                      <FaCode className="me-1 " /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
