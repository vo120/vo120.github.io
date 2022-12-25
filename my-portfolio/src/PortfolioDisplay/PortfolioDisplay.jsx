import React from "react";
import "./PortfolioDisplay.css";

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

          <div
            className="col-lg-4 project project6 wow fadeInUp"
            onClick="location.href='project6.html'"
          ></div>

          {/* <!--<div className="col-lg-1"></div>--> */}
        </div>
        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <div
            className="col-lg-5 project project1 wow fadeInUp"
            onClick="location.href='project1.html'"
          ></div>

          <div className="col-lg-4"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-8"></div>

          <div
            className="col-lg-4 project project2 wow fadeInUp"
            data-wow-delay="1.4s"
            onClick="location.href='project2.html'"
          ></div>
        </div>

        <div className="row">
          <div
            className="col-lg-6 project project3 wow fadeInUp"
            onClick="location.href='project3.html'"
          ></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="row">
          <div className="col-lg-7"></div>

          <div
            className="col-lg-4 project project4 wow fadeInUp"
            onClick="location.href='project4.html'"
          ></div>

          <div className="col-lg-1"></div>
        </div>

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-1"></div>

          <div
            className="col-lg-5 project project5 wow fadeInUp"
            onClick="location.href='project5.html'"
          ></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>
      </div>
    </>
  );
};

export default PortfolioDisplay;
