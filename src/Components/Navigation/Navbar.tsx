import React, { useRef, useEffect } from "react";

import "./navbar.css";

const Navbar = () => {
  // use refs for DOM elements instead of getelementbyid
  const toggleRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  // use optional chaining and nullish coalescing
  const handleToggle = (): void => {
    toggleRef.current?.classList.toggle("active");
    navbarRef.current?.classList.toggle("active");
  };

  return (
    <div className="new_header_sect">
      <header className="new_header">
        <div ref={toggleRef} id="toggle" onClick={handleToggle}></div>
        <div ref={navbarRef} id="new_navbar" onClick={handleToggle}>
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
