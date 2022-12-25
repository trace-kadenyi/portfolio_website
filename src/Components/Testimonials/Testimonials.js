import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "./testimonials.css";
import charles from "../../Assets/Images/charles1.png";
import ernest from "../../Assets/Images/ernest1.png";
import mohamed from "../../Assets/Images/aachour1.png";

const Testimonials = () => {
  const testimonialsContainer = [
    {
      id: 1,
      description:
        "Tracey Kadenyi is a kind and hard-working developer. her ability to quickly analyze and solve data structures and algorithms is amazing.",
      description2:
        "She has good knowledge of HTML, JavaScript, React, and Redux. and she's a good communicator. I totally recommend her, she is a great person to work with.",
      image: mohamed,
      name: "Mohamed Aachour",
      location: "Kenitra, Morocco",
    },
    {
      id: 3,
      description:
        "Tracey and I worked together on several projects, and I was lucky to call her my team member. She consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time.",
      description2:
        "She has excellent time management skills and a knack for keeping everyone calm and productive during intense crunch periods. I’m grateful to have worked with Miss Kadenyi and highly recommend her to any company.",
      image: charles,
      name: "Okoye Charles",
      location: "Abuja, Nigeria",
    },
    {
      id: 4,
      description:
        "Tracey is one of the best developers I have worked with. If you are looking for a developer who pays attention to details, then you need Tracey. She is fast, a team player and highly professional. You need her on your Web development team.",
      image: ernest,
      name: "Ernest Anyewe Adonu",
      location: "Accra, Ghana",
    },
  ];

  return (
    <section className="testimonials_sect" id="testimonials">
      <div className="testimonials_start">
        <h1 className="testimonials_head">Testimonials</h1>
        <p className="testimonials_intro">
          During the past year, I have worked with several programmers from
          different countries through pair-programming. Here are some of their
          recommendations...
        </p>
        <div className="testimonials_container">
          {/* single card */}
          {testimonialsContainer.map((testimonial) => {
            return (
              <div className="testimonials_card" key={testimonial.id}>
                <div className="testimonials_content">
                  <div className="testimonials_text">
                    <p className="testimonials_span1">
                      <span className="quote">
                        <FaQuoteLeft />
                      </span>
                      {testimonial.description}
                    </p>{" "}
                    <br />
                    <p>
                      {testimonial.description2}{" "}
                      <span className="quote">
                        <FaQuoteRight />
                      </span>
                      .
                    </p>
                  </div>
                </div>
                <div className="testimonials_img">
                  <img src={testimonial.image} alt="testimonials" />
                  <div className="identity">
                    <p className="testimonials_name">{testimonial.name}</p>
                    <p className="origin">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
