import React from "react";
import "./aboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faDownload,
  faEnvelope,
  faLink,
  faLocation,
  faLocationPin,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
  return (
    <div className="aboutMe-card py-5  px-3">
      <div className=" aboutMe-header row m-auto  ">
        <h6>
          Santhosh Kumar <br />
          web devloper
        </h6>
      </div>
      <div className="aboutMe-body">
        <div className="">
          <FontAwesomeIcon className="fa-icon mx-1" icon={faEnvelope} />{" "}
          <span>tonyStark@gmail.com</span>
        </div>
        <div className="">
          <FontAwesomeIcon className="fa-icon mx-1" icon={faLocationPin} />{" "}
          <span>Puducherry</span>
        </div>
        <div className="">
          <FontAwesomeIcon className="fa-icon mx-1" icon={faStopwatch} />{" "}
          <span>Full-Time</span>
        </div>
        <div className="">
          <FontAwesomeIcon className="fa-icon mx-1" icon={faLink} />{" "}
          <span>tonyStark@gmail.com</span>
        </div>
        <button className="btn-primary   mt-3 mx-auto px-4">
          <span>Download CV</span>{" "}
          <FontAwesomeIcon className="text-light" icon={faDownload} />{" "}
        </button>
      </div>
    </div>
  );
};
