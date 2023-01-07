import React from "react";
import "./ChessApp.css";
import chessGame from "../../imgPF/chessgame.png";
import chessGameTrimmed from "../../imgPF/chessgametrimmed.gif";
import { Link, Outlet } from "react-router-dom";
const ChessApp = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container projpage">
        <div className="hero-content" id="chess">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Chess
              </h1>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    role :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                    Software Engineer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    started :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    August 2021
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    Dec 2021
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                I play a lot of chess. When I found out I had to complete my
                first software engineering project for school, naturally I
                thought "Why not build a chess engine from scratch?" I set out
                on this journey to do so, only having ever used Python for
                statistics solely. I decided to use the Python GUI to create
                this. While learning data structures and algorithms, I had to
                put what I was learning to the test as I developed the game. I
                also had to teach myself how to use Python GUI and how that
                translates to chess. While developing this game, I planned out
                the project schedule that included gathering requirements,
                design phase, making the MVC, and developing the algorithms.
                Below is the result. You can also find the source code, MVC,
                project plan, etc. on my GitHub profile.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where hero section ends--------------->

      <!---------------where project image starts------------> */}
      <div className="project-img">
        <div className="container">
          <br />
          <br />
          <div className="row" id="chess">
            <div className="col">
              <img
                src={chessGame}
                alt="picture of chess game without opening move"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Chess Game</h2>
            </div>

            <div className="col">
              <img
                src={chessGameTrimmed}
                alt="picture of chess game in action"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              <h2>Chess Game in Action</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where project image ends--------------> */}
      <br />
      <br />
      {/* <!---------------where project nav starts--------------> */}
      <div className="project-nav" id="arrows">
        <div className="container">
          <div className="row">
            <Link
              className="col-lg-6 no-underline prev"
              to="/projects/tiktok-redesign"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/notes-app"
            >
              <p id="next">
                next
                <ion-icon name="arrow-forward"></ion-icon>
              </p>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
      {/* <!---------------where project nav end-----------------> */}
      <div className="whitespace"></div>
    </>
  );
};

export default ChessApp;
