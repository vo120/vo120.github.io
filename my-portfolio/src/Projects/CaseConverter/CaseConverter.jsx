import React from "react";
import "./CaseConverter.css";
import properCase from "../../imgPF/ProperCase.png";
import upperCase from "../../imgPF/UpperCase.png";
import lowerCase from "../../imgPF/LowerCase.png";
import sentenceCase from "../../imgPF/Sentence Case.png";
import caseConverter from "../../imgPF/CaseConverter.gif";
import { Link, Outlet } from "react-router-dom";

const CaseConverter = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container projpage">
        <div className="hero-content" id="caseconverter">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Case Converter
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
                    January 2022
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    January 2022
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                At the start of 2022, I decided to teach myself HTML, CSS,
                JavaScript. I started learning through different resources
                online. One of them was JetBrains Academy. At the end of the
                course, I built this case converter. It is able to convert text
                into sentence case, proper case, lower case, and uppercase. The
                results are shown below.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where project image starts------------> */}
      <div className="project-img">
        <div className="container">
          <br />
          <br />
          <div className="row" id="caseconverter">
            <div className="col item2">
              <img
                src={properCase}
                alt="picture of propercase in case converter"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              {/* <!--<div className="images images1 wow fadeInUp" data-wow-delay=onloadedmetadata="0.8s"></div>--> */}
              <h2>Proper Case</h2>
            </div>

            <div className="col item3">
              <img
                src={upperCase}
                alt=""
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>Uppercase</h2>
            </div>

            <div className="col item4">
              <img
                src={sentenceCase}
                alt="picture of sentence case converter"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>Sentence Case</h2>
            </div>

            <div className="col item5">
              <img
                src={lowerCase}
                alt=" picture of lowercase case converter"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>Lowercase</h2>
            </div>
            <div className="col item1">
              <img
                src={caseConverter}
                alt="gif of full case converter in action"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>Case Converter in Action</h2>
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
              to="/projects/notes-app"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/chrome-redesign-concept"
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

export default CaseConverter;
