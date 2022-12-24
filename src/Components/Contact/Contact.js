import React from "react";

import "./contact.css";
import twitter from "../../Assets/Images/twitter.png";
import linkedin from "../../Assets/Images/linkedin.png";
import github from "../../Assets/Images/github.png";
import medium from "../../Assets/Images/medium.png";
import angelist from "../../Assets/Images/angelist.png";

const Contact = () => {
  return (
    <section className="contact_sect" id="contact">
      <div className="contact_start">
        <h2 className="contact_head">Contact Me</h2>
        <div className="contact_content">
          {/* card details */}
          <div className="contact_card">
            <p className="details_head">
              I'm always looking for interesting and challenging projects to
              dive into. If you want to develop an application or build a
              feature...if you simply have an idea that you think I'd be a good
              fit for, I'd love to hear about it.
            </p>
            <p className="email_para">
              {/* <span className="email:head">Email:</span>{" "} */}
              <span className="email">
                <a
                  href="mailto:treykadenyi@gmail.com"
                  className="contact_touch"
                >
                  treykadenyi@gmail.com
                </a>{" "}
              </span>
            </p>
            {/* contact icons */}
            <div className="contact_sect_icons">
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
          {/* card form */}
          <div className="contact_form">
            <form>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
