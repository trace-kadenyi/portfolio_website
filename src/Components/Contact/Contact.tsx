import React, { useState, useRef, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import "./contact.css";

// Import images
import twitter from "../../Assets/Images/contact_icons/twitter.png";
import linkedin from "../../Assets/Images/contact_icons/linkedin.png";
import github from "../../Assets/Images/contact_icons/github.png";
import medium from "../../Assets/Images/contact_icons/medium.png";
import mail from "../../Assets/Images/contact_icons/mail-icon.jpg";

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define interface for social link
interface SocialLink {
  href: string;
  img: string;
  alt: string;
  label: string;
  isEmail?: boolean;
}

// Define type for feedback message
interface FeedbackMessage {
  text: string;
  color: string;
}

const Contact = () => {
  // State with explicit types
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<FeedbackMessage | null>(null);

  // Use ref for DOM element instead of querySelector
  const feedbackRef = useRef<HTMLDivElement>(null);

  // Email validation regex - more comprehensive
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle form input changes with proper event types
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  // Validate email
  const isValidEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  // Clear form
  const clearForm = (): void => {
    setName("");
    setEmail("");
    setMessage("");
  };

  // Set feedback message
  const setFeedbackMessage = (text: string, color: string): void => {
    setFeedback({ text, color });

    // Auto-clear feedback after 5 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 5000);
  };

  // Handle form submission with proper event type
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validate email
    if (!isValidEmail(email)) {
      setFeedbackMessage(
        "Please enter a valid email address (e.g., name@example.com)",
        "red",
      );
      return;
    }

    // Validate all fields are filled
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedbackMessage("Please fill in all fields", "red");
      return;
    }

    const formData: FormData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    setIsSubmitting(true);

    try {
      await axios.post(
        "https://getform.io/f/0af932b0-6945-43c1-ba97-1c056995e29f",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      setFeedbackMessage("Message sent successfully!", "#ff3b3f");
      clearForm();
    } catch (error) {
      // Type guard for axios error
      if (axios.isAxiosError(error)) {
        setFeedbackMessage(
          error.response?.data?.message ||
            "Failed to send message. Please try again.",
          "red",
        );
      } else {
        setFeedbackMessage(
          "An unexpected error occurred. Please try again.",
          "red",
        );
      }
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social links data
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
      alt: "mail",
      label: "Email",
      isEmail: true,
    },
    {
      href: "https://twitter.com/traci_k7",
      img: twitter,
      alt: "X",
      label: "X",
    },
    {
      href: "https://medium.com/@tracekadenyi",
      img: medium,
      alt: "medium",
      label: "Medium",
    },
  ];

  return (
    <section className="contact_sect" id="contact">
      <div className="contact_start">
        <h2 className="contact_head">Contact Me</h2>
        <div className="contact_content">
          {/* Card details */}
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
                </a>
              </span>
            </p>

            {/* Contact icons */}
            <div className="contact_sect_icons">
              <ul>
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.isEmail ? undefined : "_blank"}
                      rel={link.isEmail ? undefined : "noreferrer"}
                      className={link.isEmail ? "email-link" : ""}
                    >
                      <img src={link.img} alt={link.alt} />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="contact_form">
            {/* Feedback message */}
            {feedback && (
              <div
                ref={feedbackRef}
                className="feedback"
                style={{ color: feedback.color }}
              >
                {feedback.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                  disabled={isSubmitting}
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
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form_group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={message}
                  onChange={handleMessageChange}
                  cols={30}
                  rows={10}
                  placeholder="Write your message"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form_group">
                <button
                  type="submit"
                  className="submit_btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
