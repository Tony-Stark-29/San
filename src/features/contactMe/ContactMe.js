import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./contact.css";
import { ContactForm } from "./ContactForm";

export const ContactMe = () => {
  return (
    <section className="contact-me-container container">
      <div className="row vh-100 align-items-end ">
        <div className="col-12 mb-5">
          <div className="row m-auto w-auto ">
            <div className="col-12 col-md-8 col-lg-6 mx-auto">
              <h1 className="contact-me-title display-5 fw-bolder w-50 p-2 m-auto text-center">
                Contact Me
              </h1>
              <p className="text-center text-capitalize py-2">
                I am ready to work with any web Devlopement Domain
              </p>
            </div>
            <div className="col-12 col-md-8  mx-auto">
              <ContactForm/>
            </div>

             
          </div>
        </div>
      </div>
    </section>
  );
};
