import React from "react";
import "./aboutMe.css";

export const AboutMe = () => {
  return (
    <section className="about-me-container container d-flex flex-column justify-content-lg-end ">
        
      <div className="about-me-content  row  align-items-lg-end justify-content-between px-4">
        <div className="col-12 col-lg-7 mb-5">
          <div className="about-me-title my-3 px-3 py-1">
            <h3  >About Me</h3>
          </div>
          <div className="about-me-body px-4 rounded-4 shadow py-3 ">
            <div >
              <h4>👋 Hi</h4>
              <p >
                I'm Santhosh Kumar, a passionate and detail-oriented web
                developer with a Master's in Computer Applications (MCA). My
                journey in the tech world has been a fascinating exploration,
                leading me to the dynamic realm of web development.
              </p>
              <p>
                💻 Currently, I'm immersed in the exciting world of React and
                Node.js, honing my skills to craft immersive and responsive web
                experiences. From creating interactive user interfaces to
                building robust server-side applications, I thrive on the
                challenges that web development presents.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mb-5 p-0 rounded-3 d-none d-lg-block overflow-hidden">
          <div className="about-me-image h-100">
            
          </div>
        </div>
      </div>
    </section>
  );
};
