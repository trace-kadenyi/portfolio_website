import React, { useState } from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

import "./projects.css";
import project1 from "../../Assets/Images/doc.png";
import project2 from "../../Assets/Images/casual_gourmet.png";
// import project5 from "../../Assets/Images/crypto.png";
import project7 from "../../Assets/Images/music.png";
import project4 from "../../Assets/Images/leaderboard.png";
import project6 from "../../Assets/Images/math.png";
// import project7 from "../../Assets/Images/bookstore.png";
import project3 from "../../Assets/Images/animation.png";

const Projects = () => {
  const [more, setMore] = useState(false);

  // create an array of all the projects
  const projectsContainer = [
    {
      id: 1,
      title: "Casual Gourmet",
      description:
        "An application that provides users with multiple recipes for both foods and drinks. The user can search for recipes by name, main ingredient, location, etc.",
      technologies: ["React", "Redux", "API"],
      image: project2,
      live_link: "https://casual-gourmet.vercel.app/",
      source_link: "https://github.com/trace-kadenyi/casual_gourmet.git",
    },
    {
      id: 2,
      title: "Doc Appointments",
      description:
        "A web application that eases the process of booking doctors' appointments for patients by allowing them to book their appointments online.",
      technologies: ["React", "Ruby on Rails", "Postgres", "Pair Programming"],
      image: project1,
      live_link: "https://doc-appointments.netlify.app/",
      source_link:
        "https://github.com/trace-kadenyi/doctor-appointment-front-end.git",
    },
    {
      id: 3,
      title: "Movie Database",
      description:
        "Animation films are fetched from a public api. The user can like and comment on each film, of which the data is stored in two separate involvement apis.",
      technologies: ["React", "Redux", "REST API", "Pair Programming"],
      image: project3,
      live_link: "https://animation-database.netlify.app/",
      source_link:
        "https://github.com/trace-kadenyi/Movie-Database-react-redux.git",
    },
    {
      id: 4,
      title: "Leaderboard",
      description:
        "An app that records the scores of various players. The data is posted on the api through a form and fetched when the player's list is refreshed.",
      technologies: ["Webpack", "React", "REST API"],
      image: project4,
      live_link: "https://playful-dragon-df58b2.netlify.app/",
      source_link: "https://github.com/trace-kadenyi/Leaderboard.git",
    },
    // {
    //   id: 5,
    //   title: "Crypto Tracker",
    //   description:
    //     "An SPA that fetches the latest cryptocurrency data from an API. 100 crytocurrencies are ranked and details provided on an alternate route/page.",
    //   technologies: ["React", "Redux", "API"],
    //   image: project5,
    //   live_link: "https://papaya-sunburst-a9d343.netlify.app/",
    //   source_link: "https://github.com/TracK92/crypto-metrics-webapp.git",
    // },
    {
      id: 5,
      title: "Math Magicians",
      description:
        "A single page app of a calculator with three pages: home, calculator, and random mathematics quotes. Solve complex mathematical problems with ease.",
      technologies: ["React", "Single-Page Application", "Pair Programming"],
      image: project6,
      live_link: "https://math-magicks.netlify.app/",
      source_link: "https://github.com/trace-kadenyi/Math-Magicians.git",
    },
    {
      id: 6,
      title: "Hidden Musical Treasures",
      description:
        "This website is a guide to unpopular music that suits different moods from happy to sad to mawkish. Pick and choose depending on how you feel.",
      technologies: ["HTML", "CSS", "Netlify"],
      image: project7,
      live_link: "https://kind-yonath-62b539.netlify.app/",
      source_link:
        "https://github.com/trace-kadenyi/Hidden-Musical-Treasures.git",
    },
    // {
    //   id: 7,
    //   title: "Bookstore App",
    //   description:
    //     "An app that allows the user to add and remove books. The books are saved on an API and are posted and fetched in alignment with the user's interaction.",
    //   technologies: ["React", "Redux", "API"],
    //   image: project7,
    //   live_link: "https://bookstore-webapp-2022.netlify.app/",
    //   source_link: "https://github.com/TracK92/Bookstore-App.git",
    // },
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
  const scrollToProjects = (e) => {
    if (e.target.innerText === "See More") {
      document
        .querySelector(".projects_sect")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  window.addEventListener("click", scrollToProjects);

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
