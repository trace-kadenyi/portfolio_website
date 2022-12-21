import React, { useState } from "react";

import "./about.css";

const About = () => {
  const [active, setActive] = useState(1);

  const handleTabs = (index) => {
    setActive(index);
  };

  return (
    <section className="about_sect">
      <div className="about_container">
        <div className="content_tabs">
          <div className={active === 1 ? "content active_content" : "content"}>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className={active === 2 ? "content active_content" : "content"}>
            <h1>Skills</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className={active === 3 ? "content active_content" : "content"}>
            <h1>Hobbies</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
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
          <button
            className={active === 3 ? "tabs active_tabs" : "tabs"}
            onClick={() => handleTabs(3)}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default About;
