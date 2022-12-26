import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "./testimonials.css";
import charles from "../../Assets/Images/testimonials/charles.png";
import mohamed from "../../Assets/Images/testimonials/aachour.png";
import tushar from "../../Assets/Images/testimonials/tushar.png";
import clifford from "../../Assets/Images/testimonials/clifford.png";
import alex from "../../Assets/Images/testimonials/alex.png";
import eyasu from "../../Assets/Images/testimonials/eyasu.png";
import tarek from "../../Assets/Images/testimonials/tarek.png";

const Testimonials = () => {
  const [active, setActive] = useState(1);

  const handleTabs = (index) => {
    setActive(index);
  };

  return (
    <section className="testimonials_sect" id="testimonials">
      <div className="testimonials_start">
        <h1 className="testimonials_head">Testimonials</h1>
        <p className="testimonials_intro">
          During the past year, I have worked with several programmers from
          different countries through pair-programming. Here are some of their
          recommendations...
        </p>

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
          <button
            className={active === 4 ? "tabs active_tabs" : "tabs"}
            onClick={() => handleTabs(4)}
          ></button>
          <button
            className={active === 5 ? "tabs active_tabs" : "tabs"}
            onClick={() => handleTabs(5)}
          ></button>
          <button
            className={active === 6 ? "tabs active_tabs" : "tabs"}
            onClick={() => handleTabs(6)}
          ></button>
          <button
            className={active === 7 ? "tabs active_tabs" : "tabs"}
            onClick={() => handleTabs(7)}
          ></button>
        </div>

        <div className="testimonials_container">
          {/* first testimonial */}
          <div
            className={active === 1 ? "active_content_testimonials" : "content"}
          >
            <div className="testimonials_card">
              <div className="testimonials_content">
                <div className="testimonials_text">
                  <p className="testimonials_span1">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    Tracey and I worked together on several projects, and I was
                    lucky to call her my team member. She consistently gave 100
                    percent effort to the team and played a significant role in
                    ensuring that we completed assignments on time.
                  </p>{" "}
                  <br />
                  <p>
                    She has excellent time management skills and a knack for
                    keeping everyone calm and productive during intense crunch
                    periods. I’m grateful to have worked with Miss Kadenyi and
                    highly recommend her to any company.
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className="testimonials_img">
                <img src={charles} alt="testimonials" />
                <div className="identity">
                  <p className="testimonials_name">Charles Okoye</p>
                  <p className="origin">Abuja, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* second testimonial */}
          <div
            className={active === 2 ? "active_content_testimonials" : "content"}
          >
            <div className="testimonials_card">
              <div className="testimonials_content">
                <div className="testimonials_text">
                  <p className="testimonials_span1">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    Tracey Kadenyi is a kind and hard-working developer. Her
                    ability to quickly analyze and solve data structures and
                    algorithms is amazing. She has good knowledge of HTML,
                    JavaScript, React, and Redux and she's a good communicator.
                    I totally recommend her. She is a great person to work with.
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className="testimonials_img">
                <img src={mohamed} alt="testimonials" />
                <div className="identity">
                  <p className="testimonials_name">Mohamed Aachour</p>
                  <p className="origin">Kenitra, Morocco</p>
                </div>
              </div>
            </div>
          </div>

          {/* third testimonial */}
          <div
            className={active === 3 ? "active_content_testimonials" : "content"}
          >
            <div className="testimonials_card">
              <div className="testimonials_content">
                <div className="testimonials_text">
                  <p className="testimonials_span1">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    Tracey is very skilled in front-end technologies like React,
                    Redux, and she is a team player and has an eye for details.
                    She is a quick learner and manages to understand and adapt
                    to new technologies. I enjoyed working with Tracey a lot.{" "}
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className="testimonials_img">
                <img src={tushar} alt="testimonials" />
                <div className="identity">
                  <p className="testimonials_name">Tushar Singh</p>
                  <p className="origin">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* fourth testimonial */}
          <div
            className={active === 4 ? "active_content_testimonials" : "content"}
          >
            <div className="testimonials_card">
              <div className="testimonials_content">
                <div className="testimonials_text">
                  <p className="testimonials_span1">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    Tracey is an amazing person. She is a great communicator and
                    a very hard worker. She is a great team player and is always
                    willing to help others.
                  </p>{" "}
                  <br />
                  <p>
                    I have been working with her for a year now and I have
                    always appreciated the thoughtfulness she brings to her
                    tasks and the level of experience she is willing to share
                    with the team. She is definitely the asset your company and
                    team have been hunting for. I would recommend her
                    wholeheartedly for her expertise.
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className="testimonials_img">
                <img src={clifford} alt="testimonials" />
                <div className="identity">
                  <p className="testimonials_name">Sire Clifford</p>
                  <p className="origin">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>

          {/* fifth testimonial */}
          <div
            className={active === 5 ? "active_content_testimonials" : "content"}
          >
            <div className="testimonials_card">
              <div className="testimonials_content">
                <div className="testimonials_text">
                  <p className="testimonials_span1">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    Tracey is a very talented developer. Her understanding of
                    algorithms is at an enviable level. She is always ready to
                    tackle a problem and help others. She is also positive and
                    communicative. I recommend her.
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className="testimonials_img">
                <img src={alex} alt="testimonials" />
                <div className="identity">
                  <p className="testimonials_name">Aleksandra Ujvari</p>
                  <p className="origin">Vojvodina, Serbia</p>
                </div>
              </div>
            </div>
          </div>

          {/* sixth testimonial */}
          <div
            className={active === 6 ? "active_content_testimonials" : "content"}
          >
            <div className="testimonials_card">
              <div className="testimonials_content">
                <div className="testimonials_text">
                  <p className="testimonials_span1">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    We’ve joined our hands on several projects and Tracey is one
                    of the best people I had as a partner. I highly recommend
                    her expertise to any person looking for a Full-stack Web
                    Developer. She is the most profound person I have met and
                    her ability to tackle any problem with a warm smile is
                    remarkable. Tracey would be an appreciated member of any
                    team.
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className="testimonials_img">
                <img src={eyasu} alt="testimonials" />
                <div className="identity">
                  <p className="testimonials_name">Eyasu Teshome</p>
                  <p className="origin">Jiangsu, China</p>
                </div>
              </div>
            </div>
          </div>

          {/* seventh testimonial */}
          <div
            className={active === 7 ? "active_content_testimonials" : "content"}
          >
            <div className="testimonials_card">
              <div className="testimonials_content">
                <div className="testimonials_text">
                  <p className="testimonials_span1">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    Tracey is a great developer. Apart from being on time, she
                    always thinks out of the box and provides creative
                    solutions. We worked together on one project, but I hope we
                    will have the chance to work together again.
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                  </p>
                </div>
              </div>
              <div className="testimonials_img">
                <img src={tarek} alt="testimonials" />
                <div className="identity">
                  <p className="testimonials_name">Tarek Yosry</p>
                  <p className="origin">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
