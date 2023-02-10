import React from "react";
import "./ImageGenerator.css";
import imageGenerator from "../../imgPF/image-generator.gif";
import { Link, Outlet } from "react-router-dom";

const ImageGenerator = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content" id="imgGen">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Image Generator App
              </h1>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    role :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                    Fullstack Software Engineer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    started :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    6 Jan 2022
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    6 Jan 2022
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                AI has been a huge discussion recently. Thus, I decided to build
                a project related to AI. Using OpenAI's DALL-E API, I created an
                Image Generator Web App that creates a unique image based on the
                user's input text. If the user has the same input and
                regenerates that, it will generate a new image. Note: all these
                images are generated using AI and not from the internet.
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                For the backend, I used Node.js and Express.js where I utilized
                the OpenAI-Node package. For the frontend, I used HTML, CSS, &
                JavaScript.
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                Check it out{" "}
                <a
                  href="https://image-generator-app-vo120.vercel.app/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  here!
                </a>
              </p>
              <br />
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
          <div className="row col-lg-12" id="imgGen">
            <div className="col">
              <img
                src={imageGenerator}
                alt="gif of generator app"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Image Generator in Action</h2>
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
              to="/projects/blockchain-site"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/bank-app"
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

export default ImageGenerator;
