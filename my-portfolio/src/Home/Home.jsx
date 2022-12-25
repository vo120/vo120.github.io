import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="wrapper">
      {/* <!--------------- where hero section starts-------------> */}
      <div className="hero">
        <div className="header">
          <h1 className="line anim-typewriter">
            I work with brands to drive impact in culture.
          </h1>
        </div>
      </div>

      <div className="scroll-down"></div>
      {/* <!--------------- where hero section ends---------------> */}

      {/* <!--------------- where project section starts----------> */}
      <div className="container-fluid">
        <br />
        <br />
        <br />

        <h6>Featured Projects</h6>

        <div className="vertical"></div>
        <br />

        <div className="whitespace"></div>
        <div className="whitespace"></div>
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

        <div className="row">
          <div
            className="col-lg-5 project project1 wow fadeInUp"
            onClick="location.href='project1.html'"
          ></div>

          <div className="col-lg-4"></div>
        </div>

        <div className="row">
          <div className="col-lg-8"></div>

          <div
            className="col-lg-4 project project2 wow fadeInUp"
            onClick="location.href='project2.html'"
          ></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div
            className="col-lg-6 project project3 wow fadeInUp"
            onClick="location.href='project3.html'"
          ></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-7"></div>

          <div
            className="col-lg-4 project project4 wow fadeInUp"
            onClick="location.href='project4.html'"
          ></div>

          <div className="col-lg-1"></div>
        </div>

        <div className="whitespace"></div>
      </div>
      {/* <!--------------- where project section ends------------> */}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;