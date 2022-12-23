import React, { useEffect } from "react";

import "./projects.css";
import project1 from "../../Assets/Images/doc1.png";

const Projects = () => {

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
      technologies: ["React", "Redux", "Ruby on Rails"],
      image: project1,
      link: "#",
    },
    {
      id: 2,
      title: "Doc Appointments",
      description: "Doc Appointments is a web application that eases the process of booking doctors' appointments for patients by allowing them to book appointments online.",
      technologies: ["React", "Redux", "Ruby on Rails"],
      image: project1,
      link: "#",
    },
  ]

  // create a function to map through the projects array and return the projects
  const projects = projectsContainer.map((project) => {
    title = project.title;
    description = project.description;
    technologies = project.technologies;
    image = project.image;
    link = project.link;
  })

  
  
  return (
    <section className="projects_sect" id="projects">
      <div>
        <h2 className="projects_head">Projects</h2>
        <div className="projects">
          {/* single project */}



          <div className="project">
            <div className="card">
              <div className="project_img">
                {/* get image from array */}

                <img src={project1} alt="project1" />
              </div>
              <div className="project_info">
                <h3 className="project_title">Doc Appointments</h3>
                <p className="project_desc">
                  Doc Appointments is a web application that eases the process
                  of booking doctors' appointments for patients by allowing them
                  to book appointments online.
                </p>
                <div className="tech_span">
                  <span>React</span>
                  <span>Redux</span>
                  <span>Ruby on Rails</span>
                </div>
                {/* see project */}
                <div className="project_links">
                  <a href="#" className="project_link" onClick={openPopup}>
                    <span>See Project</span>
                    <span>See Project</span>
                  </a>
                </div>

                {/* popup */}
                <div className="project_popup">
                  <div className="popup_content">
                    <div className="popup_close" onClick={closePopup}>&times;</div>
                    <h1>Title</h1>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                    </p>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum."
                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
