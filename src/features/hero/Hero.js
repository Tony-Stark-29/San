import React from "react";
import "./hero.css";
 
import { SkillCard } from "../skills/SkillCard";
import { AboutMeCard } from "../aboutMe/AboutMeCard";

export const Hero = () => {
  return (
    <section className="hero-container container">
      <div className="hero-title row py-4  ">
        <h1 className=" display-2  w-auto m-auto"> Developer</h1>
      </div>
      <div className="hero-body row py-4  mb-auto">
        <div className="col-12 col-lg-3 p-1">
              <AboutMeCard/>
        </div>
        <div className="col-12 col-lg-6 p-1  m-auto">
          <div className=" row m-auto py-3">
            <div className="heading  m-auto ">
              <h2 className="display-5 fw-bolder ps-4 ">
                Hey <br /> I'm <span className="hero-name">Santhosh Kumar</span>{" "}
                <br /> Web Developer
              </h2>
            </div>
          </div>
          <div className=" row m-auto py-3 ">
            <div className=" para   ">
              <p className=" text-justify ps-4">
                "Crafting Digital Experiences That Captivate, Code That Excels,
                and Solutions That Transform."
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3   w-auto m-auto">
          <SkillCard/>
        </div>
      </div>
    </section>
  );
};
