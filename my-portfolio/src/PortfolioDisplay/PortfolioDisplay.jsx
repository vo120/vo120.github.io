import React from "react";
import "./PortfolioDisplay.css";
import { Link, Outlet } from "react-router-dom";

const PortfolioDisplay = () => {
  return (
    <>
      <div className="whitespace"></div>

      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-8">
              <h3 className="wow fadeInUp" data-wow-delay="1s">
                portfolio.
              </h3>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.2s">
                {" "}
                here is some of my work
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where hero section ends--------------->

<!---------------where project section starts----------> */}
      <div className="container-fluid">
        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-8"></div>

          <Link
            className="col-lg-4 no-underline project project6 wow fadeInUp"
            to="/projects/project6"
          ></Link>

          {/* <!--<div className="col-lg-1"></div>--> */}
        </div>
        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <Link
            className="col-lg-5 no-underline project project1 wow fadeInUp"
            to="/projects/project1"
          ></Link>

          <div className="col-lg-4"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-8"></div>

          <Link
            className="col-lg-4 no-underline project project2 wow fadeInUp"
            data-wow-delay="1.4s"
            to="/projects/project2"
          ></Link>
        </div>

        <div className="row">
          <Link
            className="col-lg-6 no-underline project project3 wow fadeInUp"
            to="/projects/project3"
          ></Link>

          <div className="col-lg-6"></div>
        </div>

        <div className="row">
          <div className="col-lg-7"></div>

          <Link
            className="col-lg-4 no-underline project project4 wow fadeInUp"
            to="/projects/project4"
          ></Link>

          <div className="col-lg-1"></div>
        </div>

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-1"></div>

          <Link
            className="col-lg-5 no-underline project project5 wow fadeInUp"
            to="/projects/project5"
          ></Link>

          <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>
        <Outlet />
      </div>
    </>
  );
};

export default PortfolioDisplay;
