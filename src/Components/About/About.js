import React, { useState } from "react";

import "./about.css";
import myPic from "../../Assets/Images/my_pic.png";
import skills from "../../Assets/Images/skills1.gif";
// import cover from "../../Assets/Images/cover.jpeg";
// import one from "../../Assets/Images/1.jpeg";
// import two from "../../Assets/Images/2.jpeg";
// import three from "../../Assets/Images/3.jpeg";
// import four from "../../Assets/Images/4.jpeg";

const About = () => {
  const [active, setActive] = useState(1);

  const handleTabs = (index) => {
    setActive(index);
  };

  return (
    <section id="about" className="about_sect">
      <div className="about_container">
        <div className="content_tabs">
          {/* about me intro */}
          <div className={active === 1 ? "content active_content" : "content"}>
            <h1 className="about_title">About Me</h1>
            <img src={myPic} alt="my_pic" className="hero" />
            <p className="content_para">
              Hello there! <br />
              I'm Tracey, a full stack web developer based in Nairobi, Kenya.{" "}
              <br />
              My primary skills are React/Redux and Ruby on Rails. <br />
              I love the ability that programming gives me to create anything
              that I can imagine, just like <span className="magic">MAGIC</span>. <br />
              I embrace challenges because solving them is so much fun. <br />
              I am also a lifelong learner with a passion for technology, books,
              food, dogs and people. <br />
              If you have a tech idea you want to actualize, <a href="mailto:treykadenyi@gmail.com" className="touch">get in touch</a> and let's chat!
            </p>
          </div>
          {/* skills section */}
          <div
            className={
              active === 2 ? "content active_content active_two" : "content"
            }
          >
            <h1 className="about_title">Skills</h1>
            <img src={skills} alt="skills" className="hero skill_hero" />
            <div className="content_para skills">
              {/* languages */}
              <h3>Languages</h3>
              <ul className="languages">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Ruby</li>
              </ul>

              <hr />
              {/* frameworks/libraries */}
              <h3>Frameworks/Libraries</h3>
              <ul className="frameworks">
                <li>React</li>
                <li>Redux</li>
                <li>Ruby on Rails</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
                <li>Font Awesome</li>
              </ul>

              <hr />
              {/* tools */}
              <h3>Tools</h3>
              <ul className="tools">
                <li>Git</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>

              <hr />
              {/* databases */}
              <h3>Databases</h3>
              <ul className="databases">
                <li>PostgreSQL</li>
                <li>SQLite</li>
              </ul>

              <hr />
              {/* other */}
              <h3>Supplementary Skills</h3>
              <ul className="other">
                <li>TDD</li>
                <li>RESTful API</li>
                <li>Object Oriented Programming</li>
                <li>Jest</li>
                <li>RSpec</li>
              </ul>
            </div>
          </div>
          {/* hobbies section */}
          {/* <div className={active === 3 ? "content active_content" : "content"}>
            <h1 className="about_title">Hobbies</h1>
            
            <div className="book">
              <input type="checkbox" id="c1" />
              <input type="checkbox" id="c2" />
              <input type="checkbox" id="c3" />

              <div id="cover">
                <img src={cover} alt="cover" />
              </div>

              <div className="flip_book">
                <div className="flip" id="p1">
                  <div className="back">
                    <img src={one} alt="one" />
                    <label className="back_btn" for="c1">Back</label>
                  </div>
                  <div className="front">
                    <h2>Pineapple</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <label className="front_btn" for="c1">Next</label>
                  </div>
                </div>

                  <div className="flip" id="p2">
                  <div className="back">
                    <img src={two} alt="one" />
                    <label className="back_btn" for="c2">Back</label>
                  </div>
                  <div className="front">
                    <h2>Apple</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <label className="front_btn" for="c2">Next</label>
                  </div>
                </div>

                  <div className="flip" id="p3">
                  <div className="back">
                    <img src={three} alt="one" />
                    <label className="back_btn" for="c3">Back</label>
                  </div>
                  <div className="front">
                    <h2>Banana</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <label className="front_btn" for="c3">Next</label>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          
        </div>

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
          {/* <button
            className={active === 3 ? "tabs active_tabs" : "tabs"}
            onClick={() => handleTabs(3)}
          ></button> */}
        </div>
      </div>
    </section>
  );
};

export default About;
