import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./projects.css";
import project1 from "../../Assets/Images/doc.png";

const Projects = () => {
  const { id } = useParams();

  // add event listener to the popup link to open the popup
const openPopup = (e) => {
  e.preventDefault();
  document.querySelector(".project_popup").classList.add("active");
}

// close popup
const closePopup = (e) => {
  e.preventDefault();
  document.querySelector(".project_popup").classList.remove("active");
}
  
  
  
  // create an array of all the projects
  const projectsContainer = [
    {
      id: 1,
      title: "Doc Appointments",
      description: "Doc Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      popup_description: "DOC- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technologies: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "Bootstrap"],
      image: project1,
      
    },
    {
      id: 2,
      title: "Event",
      description: "Event Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      popup_description: "EVENTs EVENTS- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technologies: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "Bootstrap"],
      image: project1,
    },
     {
      id: 3,
      title: "Cookbook",
      description: "Cookbook is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      popup_description: "Cookbook- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technologies: ["React", "Redux", "Ruby on Rails", "PostgreSQL", "Bootstrap"],
      image: project1,
      
    },
  ];
  
  
  return (
    <section className="projects_sect" id="projects">
      <div className="project_start">
        <h2 className="projects_head">Projects</h2>
        <div className="projects">
          {/* single project */}
          {projectsContainer.map((project) => {
            return (
              <div className="project" key={project.id}>
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
                      <a href="#" className="project_link" onClick={openPopup}>
                        <span id={project.id} className="link_span">Source</span>
                        <span id={project.id} className="link_span">Source</span>
                      </a>
                        <a href="#" className="project_link" onClick={openPopup}>
                        <span id={project.id} className="link_span">Live</span>
                        <span id={project.id} className="link_span">Live</span>
                      </a>
                    </div>

               
                  </div>
                </div>
              </div>
            );
          }
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Projects;














     {/* popup */}
                
                    {/* {project.id === e.target.id ? (
                      <div className="project_popup">
                        <div className="popup_content">
                          <div className="popup_close" onClick={closePopup}>
                            &times;
                          </div>
                          <h1>{project.title}</h1>
                          <p>{project.popup_description}</p>
                        </div>
                      </div>
                    ) : (
                        ""
                    )}
                     */}

               
                    {/* <div className="project_popup">
                      <div className="popup_content">
                        <div className="popup_close" onClick={closePopup}>
                          &times;
                        </div>
                        <h1>{project.title}</h1>
                        <p>
                          {project.popup_description}
                        </p>
                      </div>
                    </div> */}


