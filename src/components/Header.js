import React from "react";
import header_img from "../resource/boy.png";

export const Header = () => {
  return (
    <header className="row align-items-center hero-container">
      <div className="col-12 col-lg-6 hero-left">
        <div className="row">
          <h2 className="display-3">Santhosh Kumar</h2>
          <h3>Web Devloper</h3>
          <button className="btn btn-outline-dark w-25 m-auto" >My Resumae</button>
        </div>
      </div>
      <div className="col col-lg-6 d-none d-lg-block hero-right">
        <div className="row justify-content-center">
          <div className=" col-6 header-img-container bg-transparent  d-flex align-items-center justify-content-center  ">
            <img src={header_img} alt="Developer" className="img-fluid " />
          </div>
        </div>
      </div>
    </header>
  );
};
