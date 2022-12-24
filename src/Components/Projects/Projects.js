import React, { useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

import "./projects.css";
import project1 from "../../Assets/Images/doc.png";

const Projects = () => {
  const [more, setMore] = useState(false);

  // create an array of all the projects
  const projectsContainer = [
    {
      id: 1,
      title: "Doc Appointments",
      description:
        "Doc Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap",
      ],
      image: project1,
    },
    {
      id: 2,
      title: "Event",
      description:
        "Event Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap",
      ],
      image: project1,
    },
    {
      id: 3,
      title: "Cookbook",
      description:
        "Cookbook is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap",
      ],
      image: project1,
    },
    {
      id: 4,
      title: "Conference",
      description:
        "Co Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap",
      ],
      image: project1,
    },
    {
      id: 5,
      title: "Stadium",
      description:
        "Stadium is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap",
      ],
      image: project1,
    },
    {
      id: 6,
      title: "Spa",
      description:
        "Spa is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "Ruby on Rails",
        "PostgreSQL",
        "Bootstrap",
      ],
      image: project1,
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
                    <h3 className="project_title">{project.title}</h3>
                    <p className="project_desc">{project.description}</p>
                    <div className="tech_span">
                      {project.technologies.map((tech) => {
                        return <span key={tech}>{tech}</span>;
                      })}
                    </div>
                    {/* see project */}
                    <div className="project_links">
                      <a href="https://doc-appointments.netlify.app/" className="project_link">
                        <span id={project.id} className="link_span">
                          Source
                        </span>
                        <span id={project.id} className="link_span">
                          Source
                        </span>
                      </a>
                      <a href="https://doc-appointments.netlify.app/" className="project_link">
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
      <div className="see_more">
        <TiArrowForwardOutline className="more_btn" />
        {/* <span className="more_span">See More</span> */}
        <button className="more_span" onClick={toggleHiddenProjects}>
          See More
        </button>
      </div>
    </section>
  );
};

export default Projects;
