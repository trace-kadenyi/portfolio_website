import React from "react";

import "./navbar.css";

const Navbar = () => {
  // toggle the toggle div to open and close the navbar
  const handleToggle = () => {
    const toggle = document.getElementById("toggle");
    const toggler = document.getElementById("new_navbar");
    toggle.classList.toggle("active");
    toggler.classList.toggle("active");
  };

  return (
    <div className="new_header_sect">
      <header className="new_header">
        <div id="toggle" onClick={handleToggle}></div>
        <div id="new_navbar" onClick={handleToggle}>
          <ul className="new_header_ul">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
