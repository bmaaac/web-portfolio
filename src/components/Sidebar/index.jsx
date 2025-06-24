import "./index.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faFolderOpen,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resume from "./Resume.pdf";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHouse} color="#BFA181" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFolderOpen} color="#BFA181" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#BFA181" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#BFA181" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#BFA181"
          size="2x"
          className="close-menu"
        />
      </nav>
      <ul>
        <li>
          <a
            activeclassname="active"
            className="resume-link"
            target="_blank"
            rel="noreferrer"
            href={resume}
          >
            <FontAwesomeIcon icon={faFilePdf} color="#BFA181" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/brian-louise-macapagal-a866a723a/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#BFA181" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/bmaaac">
            <FontAwesomeIcon icon={faGithub} color="#BFA181" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#178582"
        size="2x"
        className="drop-menu"
      />
    </div>
  );
};

export default Sidebar;
