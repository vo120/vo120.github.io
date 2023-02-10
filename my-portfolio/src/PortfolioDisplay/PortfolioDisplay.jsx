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
          <Link
            className="col-lg-5 no-underline project bank-app-pd wow fadeInUp"
            to="/projects/bank-app"
          ></Link>

          <div className="col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-lg-7"></div>

          <Link
            className="col-lg-4 no-underline project image-generator-pd wow fadeInUp"
            to="/projects/image-generator"
          ></Link>

          <div className="col-lg-6"></div>
        </div>

        <div className="row">
          <div className="col-lg-1"></div>

          <Link
            className="col-lg-5 no-underline project blockchain-site-pd wow fadeInUp"
            to="/projects/blockchain-site"
          ></Link>

          <div className="col-lg-6"></div>
        </div>

        <div className="row">
          <div className="col-lg-8"></div>

          <Link
            className="col-lg-4 no-underline project chrome-redesign-concept-pd wow fadeInUp"
            to="/projects/chrome-redesign-concept"
          ></Link>
        </div>
        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <Link
            className="col-lg-5 no-underline project personal-portfolio-pd wow fadeInUp"
            to="/projects/personal-portfolio"
          ></Link>

          <div className="col-lg-4"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-8"></div>

          <Link
            className="col-lg-4 no-underline project tiktok-redesign-pd wow fadeInUp"
            data-wow-delay="1.4s"
            to="/projects/tiktok-redesign"
          ></Link>
        </div>

        <div className="row">
          <Link
            className="col-lg-6 no-underline project chess-app-pd wow fadeInUp"
            to="/projects/chess-app"
          ></Link>

          <div className="col-lg-6"></div>
        </div>

        <div className="row">
          <div className="col-lg-7"></div>

          <Link
            className="col-lg-4 no-underline project notes-app-pd wow fadeInUp"
            to="/projects/notes-app"
          ></Link>

          <div className="col-lg-1"></div>
        </div>

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-1"></div>

          <Link
            className="col-lg-5 no-underline project case-converter-pd wow fadeInUp"
            to="/projects/case-converter"
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
