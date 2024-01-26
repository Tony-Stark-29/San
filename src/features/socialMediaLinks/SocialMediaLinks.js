import React from "react";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialMediaLinks.css"
import { LINKEDIN_LINK,GITHUB_LINK } from "../../constants/socialMediaLinks";

export const SocialMediaLinks = () => {
  return (
    <div>
      <div className="col m-auto fs-5 d-flex flex-row justify-content-between ">
        <div className="text-info mx-2">
          <FontAwesomeIcon className="fa-icon" icon={faGithub} />{" "}
          <span className="fs-6 text-light">
           <a href={GITHUB_LINK} target="_blank" > <small>GitHub</small></a>
          </span>
        </div>
        <div className="text-info mx-2">
          <FontAwesomeIcon className="fa-icon" icon={faLinkedinIn} />{" "}
          <span className="fs-6 text-light">
            <a href={LINKEDIN_LINK} target="_blank"><small>LinkedIn</small></a>
          </span>
        </div>
      </div>
    </div>
  );
};
