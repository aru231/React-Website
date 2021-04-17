import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/ras.gif";
const Home = () => {
  return (
    <React.Fragment>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow Your Business with
                    <strong className="brand-name"> ArihantWorks</strong>
                  </h1>
                  <h2 className="mt-3">Talented Web Developer</h2>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn btn-outline-primary">
                      Get Started
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

export default Home;
