import React from "react";
import "./index.scss";
import avatar from "./img/Avatar.png";
import Stars from "../_bg-animations/About_BG/backgroundStars";
import Spaceshuttle from "./svgShuttle";

const About = () => {
  return (
    <div className="about-page">
      <Stars />
      <div className="text-zone">
        <div className="avatar">
          <img src={avatar} draggable="false" alt="" />
        </div>
        <h1>About me</h1>
        <p>
          I'm quite fascinated when it comes to computers and technology in
          general. From the intricate inner workings of hardware components to
          the limitless possibilities of software development, I find myself
          constantly intrigued by the ever-evolving world of technology.
        </p>
      </div>
      <div>
        <Spaceshuttle className="spaceshuttle" />
      </div>
    </div>
  );
};

export default About;
