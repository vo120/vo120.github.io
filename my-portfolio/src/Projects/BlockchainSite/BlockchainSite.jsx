import React from "react";
import "./BlockchainSite.css";
import ThreeDLogo from "../../imgPF/3DLogo.gif";
import ThreeDResponsive from "../../imgPF/3DResponsive.gif";
import { Link, Outlet } from "react-router-dom";

const BlockchainSite = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content" id="blockchain">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Blockchain Website
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
                    15 Aug 2022
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    8 Dec 2022
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                A client wanted help in building out their blockchain/web3
                company website. Alongside a team of engineers, I helped build
                out the website using a PERN stack. While this client requested
                this to be mostly private, there is not much I can say
                concerning this. However, I can say that I learned a lot about
                the PERN stack while building out this project. I worked mostly
                on the frontend. As part of some of my tasks, this included me
                building the 3D logo on the front page (seen below), as well as
                the internal client dashboard sidebars. I also helped with the
                design of the website as a whole, and provided guidance with
                understanding how the user journey and flows should work, and
                all things frontend related.
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                I learned React-Three-Fiber to be able to build the 3D logo. I
                chose 3 dodecahedron shapes to encapsulate the theme of
                blockchain technology. I made it so that once the user hovers
                over each it changes color and scales bigger to add a sense of
                interactivity. I also made it so that the logo is responsive, so
                that it can be viewed on mobile devices as well.
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                Since the client requested a sense a of privacy, I cannot share
                the name of the site nor any identifiers on the front page.
                Thus, I will only show the particular feature of the 3D logo
                mentioned.
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
          <div className="row col-lg-12" id="blockchain">
            <div className="col">
              <img
                src={ThreeDLogo}
                alt="gif of 3d logo (3 dodecahedron shapes)"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>3D Logo on Front Page in Action</h2>
            </div>
            <div className="col">
              <img
                src={ThreeDResponsive}
                alt="gif of 3d responsive logo (3 dodecahedron shapes)"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>3D Responsiveness</h2>
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
              to="/projects/chrome-redesign-concept"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/image-generator"
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

export default BlockchainSite;
