import React, { useState } from "react";

import "./about.css";
// import myPic from "../../Assets/Images/my_pic.png";
import myPic from "../../Assets/Images/profile_image.png";
import skills from "../../Assets/Images/skills1.gif";

const About = () => {
  const [active, setActive] = useState(1);

  const handleTabs = (index) => {
    setActive(index);
  };

  return (
    <section id="about" className="about_sect">
      <div className="about_container">
        <div className="content_tabs">
          {/* links */}
          <div className="links_container">
            <button
              className={active === 1 ? "tabs active_tabs" : "tabs"}
              onClick={() => handleTabs(1)}
            ></button>
            <button
              className={active === 2 ? "tabs active_tabs" : "tabs"}
              onClick={() => handleTabs(2)}
            ></button>
            <button
              className={active === 3 ? "tabs active_tabs" : "tabs"}
              onClick={() => handleTabs(3)}
            ></button>
          </div>
          {/* about me intro */}
          <div className={active === 1 ? "active_content" : "content"}>
            <h1 className="about_title">About Me</h1>
            <div className="content_one_div">
              <img src={myPic} alt="my_pic" className="hero" />
              <p className="content_para">
                Hello there! <br />
                I'm Tracey, a full-stack web developer. <br />I am in love with
                all things <span className="magic">JavaScript</span> and can
                adapt to any associated frameworks with ease. <br />
                My primary stack is MERN (MongoDB, Express, React, Node.js).
                <br />I love the ability that programming gives me to create
                anything that I can imagine, just like{" "}
                <span className="magic">MAGIC</span>
                . <br />
                I embrace challenges because solving them is so much fun. <br />
                I am also a lifelong learner with a passion for technology,
                books, food, dogs and people. <br />
                If you have a tech idea that you want to actualize,{" "}
                <a href="mailto:treykadenyi@gmail.com" className="touch">
                  get in touch
                </a>{" "}
                and let's chat! <br />
                Check out my{" "}
                <a
                  href="https://docs.google.com/document/d/1bzoeJz-HpSqfjInOUQuz1AT2de0feeBd_JN4oA8CPNM/edit?usp=sharing"
                  target="_blank"
                  className="touch"
                >
                  RESUME
                </a>
                .
              </p>
            </div>
          </div>
          {/* skills section */}
          <div
            className={active === 2 ? "active_content active_two" : "content"}
          >
            <h1 className="about_title">Skills</h1>
            <img src={skills} alt="skills" className="skill_hero" />
            <div className="content_para skills">
              {/* languages */}
              <h3>Languages</h3>
              <ul className="languages">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Ruby</li>
              </ul>

              <hr className="line" />
              {/* frameworks/libraries */}
              <h3>Frameworks/Libraries</h3>
              <ul className="frameworks">
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>Ruby on Rails</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Font Awesome</li>
              </ul>

              <hr className="line" />
              {/* tools */}
              <h3>Tools</h3>
              <ul className="tools">
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Vercel</li>
                <li>Netlify</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>WordPress</li>
              </ul>

              <hr className="line" />
              {/* databases */}
              <h3>Databases</h3>
              <ul className="databases">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
              </ul>

              <hr className="line" />
              {/* other */}
              <h3>Supplementary Skills</h3>
              <ul className="other">
                <li>TDD</li>
                <li>RESTful API</li>
                <li>Object Oriented Programming</li>
                <li>Jest</li>
                <li>RSpec</li>
              </ul>
              <hr className="line" />
              {/* soft skills */}
              <h3>Soft Skills</h3>
              <ul className="soft_skills">
                <li>Leadership</li>
                <li>Pair Programming</li>
                <li>Remote Work</li>
                <li>Intercultural Communication</li>
                <li>Teamwork and Collaboration</li>
                <li>Problem-solving</li>
                <li>Critical-thinking</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Mentorship</li>
              </ul>
            </div>
          </div>
          {/* background section */}
          <div className={active === 3 ? "active_content" : "content"}>
            <h1 className="about_title">Background</h1>
            <div className=" background_content">
              <p className="content_para background_para">
                As a creative person, finding outlets for my creativity has
                always been a priority for me. I stumbled upon software
                development by accident and, well, how could I resist? Software
                development presented me with the perfect outlet for my creative
                side. I enjoy the thrill and challenge of designing and creating
                applications that solve real-world problems.
              </p>
              <p className="content_para background_para">
                I had been a self-taught developer for a while when I joined{" "}
                <a
                  href="https://www.microverse.org/"
                  target="_blank"
                  className="microverse"
                >
                  Microverse
                </a>
                . There, I found a community of like-minded individuals, and
                together, through 8+ hours of daily pair programming, we built
                impressive applications primarily using React and Rails. The
                pragmatic structure/setting at Microverse equipped me with the
                skills and knowledge that are required in the workplace. I also
                learned how to work effectively alongside people from different
                cultures/backgrounds all over the world, some of whom have
                become treasured friends.
              </p>

              <p className="content_para background_para">
                Following my studies, I participated in multiple volunteer and
                internship programmes (
                <a
                  href="https://www.linkedin.com/in/tracey-kadenyi/"
                  target="_blank"
                  className="touch"
                >
                  LinkedIn
                </a>
                ). I also spend a lot of my time building personal projects to
                learn new skills and enhance my current knowledge/skills. Check
                out my{" "}
                <a
                  href="https://github.com/trace-kadenyi"
                  target="_blank"
                  className="touch"
                >
                  GitHub page
                </a>
                .
              </p>

              <p className="content_para background_para">
                Presently, I am interested in pursuing a career as a remote
                full-stack web developer. I have grown to appreciate the power
                of technology to transform the world. It is my goal to play a
                part in this by solving real-world problems and challenges one
                application at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
