import React from "react";
import "./Home.css";
import { Link, Outlet } from "react-router-dom";

// todo: change onclicks to link tags and properly render them using react-router-dom -> thats whats giving onclick error
//todo: change project 1 to actual project name here and everywhere else (same with all projects)
//todo: fix Uncaught SyntaxError: Unexpected token '<' coming from external js files in index.html -> affecting animations
//todo: fix tweenmax issue in main.js
const Home = () => {
  return (
    <>
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

            <Link
              className="col-lg-4 no-underline project image-generator wow fadeInUp"
              to="/projects/image-generator"
            ></Link>
          </div>

          <div className="whitespace"></div>

          <div className="row">
            <Link
              className="col-lg-5 no-underline project blockchain-site wow fadeInUp"
              to="/projects/blockchain-site"
            ></Link>

            <div className="col-lg-4"></div>
          </div>

          <div className="row">
            <div className="col-lg-8"></div>

            <Link
              className="col-lg-4 no-underline project tiktok-redesign wow fadeInUp"
              to="/projects/tiktok-redesign"
            ></Link>
          </div>

          <div className="whitespace"></div>

          <div className="row">
            <Link
              className="col-lg-6 no-underline project chess-app wow fadeInUp"
              to="/projects/chess-app"
            ></Link>

            <div className="col-lg-6"></div>
          </div>

          <div className="whitespace"></div>

          <div className="row">
            <div className="col-lg-7"></div>

            <Link
              className="col-lg-4 no-underline project notes-app wow fadeInUp"
              to="/projects/notes-app"
            ></Link>

            <div className="col-lg-1"></div>
          </div>

          <div className="whitespace"></div>
        </div>
        {/* <!--------------- where project section ends------------> */}
        <br />
        <br />
        <br />
        <br />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
