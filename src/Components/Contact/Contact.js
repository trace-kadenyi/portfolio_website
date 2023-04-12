import React, { useState } from "react";
import axios from "axios";

import "./contact.css";
import twitter from "../../Assets/Images/contact_icons/twitter.png";
import linkedin from "../../Assets/Images/contact_icons/linkedin.png";
import github from "../../Assets/Images/contact_icons/github.png";
import medium from "../../Assets/Images/contact_icons/medium.png";
import angelist from "../../Assets/Images/contact_icons/angelist.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const feedback = document.querySelector(".feedback");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    const emailChars = /^[a-z0-9@.]+$/;
    // email validation
    if (!emailChars.test(email)) {
      feedback.textContent = "Please enter your email correctly";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Message sent successfully!";
      feedback.style.color = "green";

      setName("");
      setEmail("");
      setMessage("");

      await axios.post(
        "https://getform.io/f/0af932b0-6945-43c1-ba97-1c056995e29f",
        formData,
        { headers: { Accept: "application/json" } }
      );
    }
  };

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
                    href="https://github.com/trace-kadenyi"
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
            <div className="feedback"></div>
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form_group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="10"
                  placeholder="Write your message"
                />
              </div>
              <div className="form_group">
                <button type="submit" className="submit_btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
