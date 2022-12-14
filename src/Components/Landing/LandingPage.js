import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

import "./landingpage.css";

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
    <section className="blocks-sect">
      <div className="landing_container">
        <h2 className="span1">TRACEY</h2>
        <h2 className="span2">KADENYI</h2>
        <p className="title">Full Stack Web Developer</p>
        {/* <h2>Portfolio</h2> */}
      </div>
      {/* <button
        onClick={handleScrollDown}
        style={{ zIndex: "10", marginTop: "50px" }}
      >
        Down
      </button> */}
    </section>
  );
};

export default LandingPage;
