import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg px-4  justify-content-between">
      <div>
        <h1 className="navbar-brand">San</h1>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end bg-dark text-light w-sm-70"
        ata-bs-scroll="true"
        data-bs-backdrop="true"
        tabindex="-1"
        id="offcanvasNavbar"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body justify-content-end">
          <ul className="navbar-nav ">
            <li className="nav-item mx-lg-3">
              <a href="#header" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a href="#about-me" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a href="#education" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a href="#skills" className="nav-link">
                Education
              </a>
            </li>
            <li className="nav-item mx-lg-3">
              <a href="#skills" className="nav-link">
                Contact Me
              </a>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  );
};
