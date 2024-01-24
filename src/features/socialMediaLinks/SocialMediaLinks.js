import React from "react";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialMediaLinks.css"

export const SocialMediaLinks = () => {
  return (
    <div>
      <div className="col m-auto fs-5 d-flex flex-row justify-content-between ">
        <div className="text-info mx-2">
          <FontAwesomeIcon className="fa-icon" icon={faGithub} />{" "}
          <span className="fs-6 text-light">
            <small>GitHub</small>
          </span>
        </div>
        <div className="text-info mx-2">
          <FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />{" "}
          <span className="fs-6 text-light">
            <small>LinkedIn</small>
          </span>
        </div>
      </div>
    </div>
  );
};
