import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { RxDoubleArrowDown } from "react-icons/rx";

import "./landingpage.css";
import twitter from "../../Assets/Images/twitter.png";
import linkedin from "../../Assets/Images/linkedin.png";
import github from "../../Assets/Images/github.png";
import medium from "../../Assets/Images/medium.png";
import angelist from "../../Assets/Images/angelist.png";

const LandingPage = () => {
  // select container div after component mounts
  useEffect(() => {
    const container = document.querySelector(".landing_container");

    for (let i = 0; i <= 100; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      container.appendChild(blocks);
    }
  }, []);

  // Scroll down function
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  // Animateblocks function
  const animateBlocks = () => {
    anime({
      targets: ".block",
      translateX: () => anime.random(-700, 700),
      translateY: () => anime.random(-500, 500),
      scale: () => anime.random(1, 5),
      easing: "linear",
      duration: 2000,
      delay: anime.stagger(10),
      complete: animateBlocks,
    });
  };
  animateBlocks();

  return (
    <section className="blocks-sect" id="home">
      <div className="landing_container">
        <h2 className="span1">TRACEY</h2>
        <h2 className="span2">KADENYI</h2>
        <p className="title">Full Stack Web Developer</p>
        {/* contact icons */}
        <div className="landing_contact_icons">
          <ul>
            <li>
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/tracey-kadenyi/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
                <span>LinkedIn</span>
              </a>
            </li>
            {/* github */}
            <li>
              <a
                href="https://github.com/TracK92"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
                <span>GitHub</span>
              </a>
            </li>

            <li>
              {/* angelist */}
              <a
                href="https://angel.co/u/tracey-kadenyi"
                target="_blank"
                rel="noreferrer"
              >
                <img src={angelist} alt="angelist" />
                <span>AngelList</span>
              </a>
            </li>

            <li>
              {/* twitter */}
              <a
                href="https://twitter.com/traci_k7"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" />
                <span>Twitter</span>
              </a>
            </li>

            <li>
              {/* medium */}
              <a
                href="https://medium.com/@tracekadenyi"
                target="_blank"
                rel="noreferrer"
              >
                <img src={medium} alt="medium" />
                <span>Medium</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        style={{ zIndex: "10", marginTop: "50px" }}
      >
        <RxDoubleArrowDown className="down" />
      </button>
    </section>
  );
};

export default LandingPage;
