import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/dre.gif";
const About = () => {
  return (
    <React.Fragment>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome to About page
                    <strong className="brand-name"> ArihantWorks</strong>
                  </h1>
                  <h2 className="mt-3">Talented Web Developer</h2>
                  <div className="mt-3">
                    <NavLink to="/contact" className="btn btn-outline-primary">
                      Contact Now
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="image-fluid-animated" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
