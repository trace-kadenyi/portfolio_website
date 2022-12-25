import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "./testimonials.css";
import myPic from "../../Assets/Images/my_pic.png";

const Testimonials = () => {
  const testimonialsContainer = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image: myPic,
      name: "Jane Doe",
      location: "Nairobi, Kenya",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image: myPic,
      name: "Alex",
      location: "Serbia",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image: myPic,
      name: "Okoye Charles",
      location: "Lagos, Nigeria",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image: myPic,
      name: "Ernest Adonu Anyewe",
      location: "Accra, Ghana",
    },
  ];

  return (
    <section className="testimonials_sect" id="testimonials">
      <div className="testimonials_start">
        <h1 className="testimonials_head">Testimonials</h1>
        <div className="testimonials_container">
          {/* single card */}
          {testimonialsContainer.map((testimonial) => {
            return (
              <div className="testimonials_card" key={testimonial.id}>
                <div className="testimonials_content">
                  <p className="testimonials_text">
                    <span className="quote">
                      <FaQuoteLeft />
                    </span>
                    {testimonial.description}
                    <span className="quote">
                      <FaQuoteRight />
                    </span>
                    .
                  </p>
                </div>
                <div className="testimonials_img">
                  <img src={myPic} alt="testimonials" />
                  <div className="identity">
                    <p className="testimonials_name">{testimonial.name}</p>
                    <p className="origin">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="testimonials_card">
            <div className="testimonials_content">
              <p className="testimonials_text">
                <span className="quote">
                  <FaQuoteLeft />
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam
                <span className="quote">
                  <FaQuoteRight />
                </span>
                .
              </p>
            </div>
            <div className="testimonials_img">
              <img src={myPic} alt="testimonials" />
              <div className="identity">
                <p className="testimonials_name">John Doe</p>
                <p className="origin">Nairobi, Kenya</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
