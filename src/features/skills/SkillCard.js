import React from "react";
import "./skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNode, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

export const SkillCard = () => {
  return (
    <div className="skill-card bg-dark   px-2 py-3 rounded-5">
      <div className="row m-auto p-2 justify-content-center">
        <FontAwesomeIcon className="display-1"  icon={faReact} />
      </div>
      <div className="row m-auto p-2 justify-content-center">
        <FontAwesomeIcon className="display-1" icon={faNodeJs} />
      </div>
      <div className="row m-auto p-2 justify-content-center">
        <FontAwesomeIcon className="display-1 " icon={faJs} />
      </div>
    </div>
  );
};
