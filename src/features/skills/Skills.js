import React from "react";
import "./skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
  return (
    <section className="skills-container container">
      <div className="row vh-100 align-items-end">
        <div className="col-12 mb-5">
          <div className="row m-auto w-auto ">
            <h1 className="display-4 fw-bolder w-auto m-auto">Skills<FontAwesomeIcon className="fs-5" icon={faCode} /></h1>
            <p className="text-center text-capitalize py-2">
              i am striving to never stop learning and improving
            </p>
          </div>
          <div className="row m-auto w-auto my-5 ">
            <div className="skillset-card w-auto m-auto px-5">
              <FontAwesomeIcon icon={faDesktop} />
              <h6>Web Devlopment</h6>
              <small>html , css , js </small>
            </div>
          </div>
          <div className="skills row m-auto w-auto display-3 justify-content-center my-5 ">
            <div className="  rounded-circle px-1 mx-3 my-4 my-md-0 py-3 bg-info text-center">
              <FontAwesomeIcon icon={faHtml5} />
              <span> Html</span>
            </div>
            <div className="  rounded-circle px-1 mx-3 py-3 my-4 my-md-0 bg-success text-center">
              <FontAwesomeIcon icon={faCss3} />
              <span> Css</span>
            </div>
            <div className="  rounded-circle px-1 mx-3 py-3 my-4 my-md-0 bg-warning text-center">
              <FontAwesomeIcon icon={faJs} />
              <span> Javascript</span>
            </div>
            <div className="  rounded-circle px-1 mx-3 py-3 my-4 my-md-0 bg-light text-center">
              <FontAwesomeIcon icon={faJava} />
              <span> Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
