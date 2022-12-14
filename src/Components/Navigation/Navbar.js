import React, { useEffect } from "react";

import './navbar.css';

const Navbar = () => {
   // toggle the toggle div to open and close the navbar
  const handleToggle = () => {
    const toggle = document.getElementById('toggle');
    const toggler = document.getElementById('new_navbar');
    toggle.classList.toggle('active');
    toggler.classList.toggle('active');
  }
  
  return (
    <div className='new_header_sect'>
    <header className='new_header'>
      {/* <a href='#' className='logo'>logo</a> */}
      <div id="toggle" onClick={handleToggle}></div>
      <div id='new_navbar' onClick={handleToggle}>
        <ul className='new_header_ul'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
            <li><a href='#team'>Team</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      </header>

      {/* <section id="home" className="sect" style={{color: "white"}}>Home</section>
      <section id="about" className="sect" style={{color: "white"}}>About</section>
      <section id="services" className="sect" style={{color: "white"}}>Services</section>
      <section id="team" className="sect" style={{color: "white"}}>Team</section> */}
      {/* <section id="portfolio">Portfolio</section>
      <section id="contact">Contact</section> */}
      
    </div>
  )
};

export default Navbar;
