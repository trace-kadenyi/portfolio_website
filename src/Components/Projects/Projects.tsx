import { useEffect } from "react";

import "./projects.css";
import casual_gourmet from "../../Assets/Images/casual_gourmet.png";
import imagine from "../../Assets/Images/imagine.png";
import metriq from "../../Assets/Images/metriq_app.png";

const Projects = () => {
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


  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

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
    </section>
  );
};

export default Projects;
