import React from "react";
import "./BankApp.css";
import BankAppGif from "../../imgPF/bank-app.gif";
import BankAppHome from "../../imgPF/bank-home.png";
import BankAppCover from "../../imgPF/bank-cover.png";
import BankAppBalance from "../../imgPF/bank-balance.png";
import { Link, Outlet } from "react-router-dom";

const BankApp = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content" id="bankApp">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Bank App
              </h1>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    role :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                    Frontend Engineer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    started :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    7 Feb 2023
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    9 Feb 2023
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                This project is a concept for a bank app. I wanted to try to
                create a modernistic look to it. This is my attempt at
                experimenting with that.
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                I learned React Native & Expo 2 days before I build this
                project. I wanted to challenge myself and put my skills to the
                test. I also brushed up on Typescript and paired it with that.
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                You can check out the code
                <a
                  href="https://github.com/vo120/Bank-App"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  &nbsp;Here
                </a>
                !
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
          <div className="row col-lg-12" id="bankApp">
            <div className="col">
              <img
                src={BankAppGif}
                alt="gif of bank app user flow"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Bank App in Action</h2>
            </div>
            <div className="col">
              <img
                src={BankAppCover}
                alt="bank app cover page"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Bank App Welcome Screen</h2>
            </div>
            <div className="col">
              <img
                src={BankAppHome}
                alt="bank app home page"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Bank App Home Screen</h2>
            </div>
            <div className="col">
              <img
                src={BankAppBalance}
                alt="bank app home page"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Bank App Balance Screen</h2>
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
              to="/projects/image-generator"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/personal-portfolio"
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

export default BankApp;
