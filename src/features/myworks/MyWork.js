import React from "react";
import "./mywork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import tasty_daily from "../../resource/tasty-daily.png";
import group_2 from "../../resource/Group 2-mobile.png";

export const MyWork = () => {
  return (
    <section className="mywork-container container">
      <div className="row vh-100 align-items-end ">
        <div className="col-12 mb-5">
          <div className="row m-auto w-auto ">
            <div className="col-12  mx-auto">
              <h1 className="display-4 fw-bolder w-auto m-auto text-center">
                MyWorks
                <FontAwesomeIcon className="fs-5" icon={faCode} />
              </h1>
              <p className="text-center text-capitalize py-2">
                i am striving to never stop learning and improving
              </p>
            </div>

            <div className="col-6 m-auto  rounded h-50 position-relative">
              <div className="row m-auto">
                <img
                  src={tasty_daily}
                  className=" top-0 img-thumbnail"
                  alt=""
                />
              </div>
              <div className="row m-auto">
                <a href="https://my-tasty-daily-mern-app.onrender.com/" className="w-auto m-auto">
                  <button className=" top-0 left-50  px-3 my-3 btn btn-outline-light rounded-5">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
