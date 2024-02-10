import React from "react";
import { PrimaryNav } from "../navigation/PrimaryNav";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGreaterThan,
  faLessThan,
  faSlash,
} from "@fortawesome/free-solid-svg-icons";
import { SocialMediaLinks } from "../socialMediaLinks/SocialMediaLinks";

export const Header = () => {
  return (
    <header className=" container py-3 d-flex flex-row justify-content-between">
      <div className="header-title   text-center fs-4">
        <FontAwesomeIcon icon={faCode} />  
      </div>
      <PrimaryNav />
      <SocialMediaLinks />
      
    </header>
  );
};
