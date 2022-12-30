import React, { useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

import "./projects.css";
import project1 from "../../Assets/Images/doc.png";
import project2 from "../../Assets/Images/crypto.png";
import project3 from "../../Assets/Images/music.png";
import project4 from "../../Assets/Images/leaderboard.png";
import project6 from "../../Assets/Images/math.png";
import project7 from "../../Assets/Images/bookstore.png";
import project8 from "../../Assets/Images/animation.png";

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
        "Pair Programming"
      ],
      image: project1,
      live_link: "https://doc-appointments.netlify.app/",
      source_link:
        "https://github.com/TracK92/doctor-appointment-front-end.git",
    },
    {
      id: 2,
      title: "Crypto Tracker",
      description:
        "Event Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "API"
      ],
      image: project2,
      live_link: "https://papaya-sunburst-a9d343.netlify.app/",
      source_link: "https://github.com/TracK92/crypto-metrics-webapp.git",
    },
    {
      id: 3,
      title: "Hidden Musical Treasures",
      description:
        "Cookbook is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "HTML",
        "CSS",
        "Netlify"
      ],
      image: project3,
      live_link: "https://kind-yonath-62b539.netlify.app/",
      source_link:
        "https://github.com/TracK92/Hidden-Musical-Treasures.git",
    },
    {
      id: 4,
      title: "Leaderboard",
      description:
        "Co Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "Webpack",
        "React",
        "REST API"
      ],
      image: project4,
      live_link: "https://playful-dragon-df58b2.netlify.app/",
      source_link:
        "https://github.com/TracK92/Leaderboard.git",
    },
    {
      id: 5,
      title: "Math Magicians",
      description:
        "Stadium is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Single-Page Application",
        "Pair Programming"
      ],
      image: project6,
      live_link: "https://ephemeral-peony-377e43.netlify.app/",
      source_link:
        "https://github.com/TracK92/Math-Magicians.git",
    },
    {
      id: 6,
      title: "Movie Database",
      description:
        "Spa is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: [
        "React",
        "Redux",
        "REST API",
        "Pair Programming"
      ],
      image: project8,
      live_link: "https://coruscating-genie-d8a5ca.netlify.app/",
      source_link:
        "https://github.com/TracK92/Movie-Database-react-redux.git",
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
      <div className="see_more">
        <TiArrowForwardOutline className="more_btn" />
        <button className="more_span" onClick={toggleHiddenProjects}>
          See More
        </button>
      </div>
    </section>
  );
};

export default Projects;
