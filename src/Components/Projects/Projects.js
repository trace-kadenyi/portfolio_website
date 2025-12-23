import React, { useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

import "./projects.css";
import casual_gourmet from "../../Assets/Images/casual_gourmet.png";
import imagine from "../../Assets/Images/imagine.png";
import metriq from "../../Assets/Images/metriq.png";

const Projects = () => {
  const [more, setMore] = useState(false);

  // create an array of all the projects
  const projectsContainer = [
    {
      id: 1,
      title: "MetriQ",
      description:
        "An interactive web performance analysis platform for visualizing PageSpeed results, comparing competitors, and generating AI-powered insights.",
      technologies: ["MERN Stack", "Tailwind", "AI", "Recharts"],
      image: metriq,
      live_link: "https://metri-q.vercel.app/",
      source_link: "https://github.com/trace-kadenyi/MetriQ.git",
    },
    {
      id: 2,
      title: "Imagine",
      description:
        "An interactive application for creatives (readers and writers). Users can publish their own original stories and/or read stories published by other users.",
      technologies: ["MongoDB", "Expressjs", "Reactjs", "Nodejs"],
      image: imagine,
      live_link: "https://imagine-tellmeastory.vercel.app/",
      source_link: "https://github.com/trace-kadenyi/storybrooke-frontend",
    },
    {
      id: 3,
      title: "Casual Gourmet",
      description:
        "An application that provides users with multiple recipes for both foods and drinks. The user can search for recipes by name, main ingredient, location, etc.",
      technologies: ["React", "Redux", "API"],
      image: casual_gourmet,
      live_link: "https://casual-gourmet.vercel.app/",
      source_link: "https://github.com/trace-kadenyi/casual_gourmet.git",
    },
  ];

  // toggle hidden projects
  const toggleHiddenProjects = (e) => {
    setMore(!more);
    e.target.innerText = more ? "See More" : "See Less";
    // rotate arrow
    const arrow = document.querySelector(".more_btn");
    if (e.target.innerText === "See Less") {
      arrow.style.rotate = "270deg";
    } else if (e.target.innerText === "See More") {
      arrow.style.rotate = "90deg";
    }
    const hiddenProjects = document.querySelectorAll(".hidden_project");
    hiddenProjects.forEach((project) => {
      project.classList.toggle("hide");
    });
  };

  // appear when in view
  window.addEventListener("scroll", reveal);

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("appear");
      } else {
        reveals[i].classList.remove("appear");
      }
    }
  }

  // link see less to start of project section on click
  // const scrollToProjects = (e) => {
  //   if (e.target.innerText === "See More") {
  //     document
  //       .querySelector(".projects_sect")
  //       .scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // window.addEventListener("click", scrollToProjects);

  return (
    <section className="projects_sect" id="projects">
      <div className="project_start">
        <h2 className="projects_head">Projects</h2>
        <div className="projects">
          {/* single project */}
          {projectsContainer.map((project) => {
            return (
              <div
                className={
                  project.id <= 3
                    ? "project reveal"
                    : "project reveal hidden_project hide"
                }
                key={project.id}
              >
                <div className="card">
                  <div className="project_img">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project_info">
                    <div className="project_info_1">
                      <h3 className="project_title">{project.title}</h3>
                      <p className="project_desc">{project.description}</p>
                      <div className="tech_span">
                        {project.technologies.map((tech) => {
                          return <span key={tech}>{tech}</span>;
                        })}
                      </div>
                    </div>
                    {/* see project */}
                    <div className="project_links">
                      <a
                        href={project.source_link}
                        className="project_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span id={project.id} className="link_span">
                          Source
                        </span>
                        <span id={project.id} className="link_span">
                          Source
                        </span>
                      </a>
                      <a
                        href={project.live_link}
                        className="project_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span id={project.id} className="link_span">
                          Live
                        </span>
                        <span id={project.id} className="link_span">
                          Live
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* see more */}
      {/* <div className="see_more">
        <TiArrowForwardOutline className="more_btn" />
        <button className="more_span" onClick={toggleHiddenProjects}>
          See More
        </button>
      </div> */}
    </section>
  );
};

export default Projects;
