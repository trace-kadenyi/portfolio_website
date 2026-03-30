import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { RxDoubleArrowDown } from "react-icons/rx";
import "./landingpage.css";

// Import images
import twitter from "../../Assets/Images/contact_icons/twitter.png";
import linkedin from "../../Assets/Images/contact_icons/linkedin.png";
import github from "../../Assets/Images/contact_icons/github.png";
import medium from "../../Assets/Images/contact_icons/medium.png";
import mail from "../../Assets/Images/contact_icons/mail-icon.jpg";

// Define type for social link
interface SocialLink {
  href: string;
  img: string;
  alt: string;
  label: string;
  isEmail?: boolean;
}

const LandingPage = () => {
  // Create blocks animation
  useEffect(() => {
    const container = document.querySelector(
      ".landing_container",
    ) as HTMLElement | null;

    if (container) {
      for (let i = 0; i <= 100; i++) {
        const blocks = document.createElement("div");
        blocks.classList.add("block");
        container.appendChild(blocks);
      }
    }
  }, []);

  // Animate blocks function with proper typing for anime.js
  const animateBlocks = (): void => {
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

  // Social links data - makes code more maintainable
  const socialLinks: SocialLink[] = [
    {
      href: "https://www.linkedin.com/in/tracey-kadenyi/",
      img: linkedin,
      alt: "linkedin",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/trace-kadenyi",
      img: github,
      alt: "github",
      label: "GitHub",
    },
    {
      href: "mailto:treykadenyi@gmail.com",
      img: mail,
      alt: "email",
      label: "Email",
      isEmail: true,
    },
    {
      href: "https://twitter.com/traci_k7",
      img: twitter,
      alt: "twitter",
      label: "Twitter",
    },
    {
      href: "https://medium.com/@tracekadenyi",
      img: medium,
      alt: "medium",
      label: "Medium",
    },
  ];

  return (
    <section className="blocks-sect" id="home">
      <div className="landing_container">
        <h2 className="span1">TRACEY</h2>
        <h2 className="span2">KADENYI</h2>
        <p className="title">Full Stack Web Developer</p>

        {/* Contact Icons */}
        <div className="landing_contact_icons">
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.isEmail ? undefined : "_blank"}
                  rel={link.isEmail ? undefined : "noreferrer"}
                >
                  <img src={link.img} alt={link.alt} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button style={{ zIndex: 10, marginTop: "50px" }}>
        <a href="#about">
          <RxDoubleArrowDown className="down" />
        </a>
      </button>
    </section>
  );
};

export default LandingPage;
