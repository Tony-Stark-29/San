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

export const AboutMeCard = () => {
  return (
    <div className="row m-auto about-me-card py-3  px-2">
      <div className=" about-me-card-header row m-auto text-center ">
        <h4 className="fs-4 fw-bolder text-capitalize">Santhosh Kumar</h4>
        <h4 className="fs-6 fw-bolder text-capitalize"> Web developer</h4>
      </div>
      <div className=" p-0 my-3 about-me-card-body ">
        <div className="">
          <FontAwesomeIcon className="fa-icon mx-1" icon={faEnvelope} />{" "}
          <span>santhoshkumar67249@gmail.com</span>
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
        <div className="row m-auto">
          <button className="btn-primary w-auto my-4 mx-auto px-4">
            <span>Download CV</span>{" "}
            <FontAwesomeIcon className="text-light" icon={faDownload} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
