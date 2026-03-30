import { useEffect } from "react";

import "./projects.css";
import planit from "../../Assets/Images/dashboard-dark.png";
import imagine from "../../Assets/Images/imagine.png";
import metriq from "../../Assets/Images/metriq_app.png";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  live_link: string;
  source_link: string;
}

const Projects = () => {
  // create an array of all the projects
  const projectsContainer: Project[] = [
    {
      id: 1,
      title: "Planit",
      description:
        "An event management SaaS that allows organizations to effecively manage various elements of their events such as tasks, vendors, expenses, clients, etc.",
      technologies: ["MERN Stack", "Redux", "Tailwind", "Supabase"],
      image: planit,
      live_link: "https://planit-hq.vercel.app/",
      source_link: "https://github.com/trace-kadenyi/PlaniT",
    },
    {
      id: 2,
      title: "MetriQ",
      description:
        "An interactive web performance analysis platform for visualizing PageSpeed results, comparing competitors, and generating AI-powered insights.",
      technologies: ["MERN Stack", "Tailwind", "AI", "Recharts"],
      image: metriq,
      live_link: "https://metri-q.vercel.app/",
      source_link: "https://github.com/trace-kadenyi/MetriQ",
    },
    {
      id: 3,
      title: "Imagine",
      description:
        "An interactive application for creatives (readers and writers). Users can publish their own original stories and/or read stories published by other users.",
      technologies: ["MongoDB", "Expressjs", "Reactjs", "Nodejs"],
      image: imagine,
      live_link: "https://imagine-tellmeastory.vercel.app/",
      source_link: "https://github.com/trace-kadenyi/storybrooke-frontend",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const reveal = (): void => {
    const reveals = document.querySelectorAll(".reveal");

    // Use forEach instead of for loop for cleaner code
    reveals.forEach((revealElement) => {
      const windowHeight = window.innerHeight;
      const revealTop = revealElement.getBoundingClientRect().top;
      const revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        revealElement.classList.add("appear");
      } else {
        revealElement.classList.remove("appear");
      }
    });
  };

  return (
    <section className="projects_sect" id="projects">
      <div className="project_start">
        <h2 className="projects_head">Projects</h2>
        <div className="projects">
          {/* single project */}
          {projectsContainer.map((project: Project) => {
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
                        {project.technologies.map((tech: string) => {
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
                        <span id={project.id.toString()} className="link_span">
                          Source
                        </span>
                        <span id={project.id.toString()} className="link_span">
                          Source
                        </span>
                      </a>
                      <a
                        href={project.live_link}
                        className="project_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span id={project.id.toString()} className="link_span">
                          Live
                        </span>
                        <span id={project.id.toString()} className="link_span">
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
