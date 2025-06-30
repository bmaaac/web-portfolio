import "./index.scss";
import { React, useRef } from "react";
import satellite from "./img/Satellite.png";
import earth from "./img/Earth.png";
import emailjs from "@emailjs/browser";
import Stars from "../_bg-animations/Contact_BG/backgroundStars";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        refForm.current,
        import.meta.env.VITE_EMAILJS_USER_ID,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send the message, please try again", error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <Stars />
      <div className="text-zone">
        <h1>Contact</h1>
        <p>
          Hire me to build your website or feel free to send me a message 😁
        </p>

        <div className="contact-animation">
          <section>
            <div className="satellite">
              <img src={satellite} draggable="false" alt="" />
            </div>
            <div className="earth">
              <img src={earth} draggable="false" alt="" />
            </div>
          </section>
        </div>

        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  name="from_username"
                  required
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="email_username"
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject_username"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="send-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
