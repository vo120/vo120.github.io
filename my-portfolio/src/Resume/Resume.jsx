import React from "react";
import "./Resume.css";
import { Link, Outlet } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content-1">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-8">
              <h3 className="wow fadeInUp" data-wow-delay="1s">
                resume.
              </h3>
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where hero section ends---------------> */}

      {/* <!---------------where education starts------------> */}
      <div className="container" id="education">
        <div className="row">
          <div className="edu">
            <h2 className="col-lg-12 wow fadeInUp" data-wow-delay="1.2s">
              education
            </h2>
            <br />
            <ul className="wow fadeInDown" data-wow-delay="1.4s">
              <li>
                Kennesaw State University | M.Sc. Software Engineering | Fall
                2022 GPA: 4.0/4.0
              </li>
              <li>
                Kennesaw State University | B.Sc. Psychology, Applied Statistics
                & Data Analysis | Magna Cum Laude
              </li>
              <li>University of Ottawa | B.A. Psychology</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!---------------where education ends--------------> */}
      <br />
      {/* <!---------------where skills starts------------> */}
      <div className="container">
        <div className="row" id="skills">
          <div className="skill col-md-12 wow fadeInUp" data-wow-delay="1.6s">
            <h2>skills</h2>
            <br />
            <div className="row">
              <ul className="col-md-4 wow fadeInDown" data-wow-delay="1.8s">
                <li>Java, Python</li>
                <li>SQL, SPSS, SAS, R</li>
                <li>HTML, CSS, JavaScript</li>
                <li>React, React-Three-Fiber, Node.js</li>
                <li>Bootstrap, jQuery, GSAP</li>
                <li>Eclipse, IntelliJ, Webstorm, PyCharm</li>
              </ul>
              <ul className="col-md-4 text-center">
                <li>
                  Prototyping, UX Design, UX Research, Data Structures,
                  Algorithms, Statistics, Research Methods
                </li>
              </ul>
              <ul className="col-md-4 text-right">
                <li>
                  Fast Learner, Adaptable, Works well under pressure, Flexible
                  team player, Attention to detail, Problem-solving, Creativity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where skills ends--------------> */}
      <br />
      {/* <!---------------where experience starts--------------> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="exp wow fadeInUp" data-wow-delay="2.0s">
              experience
            </h2>
          </div>
        </div>
        <div className="row wow fadeInDown" data-wow-delay="2s">
          <h3 className="col-md-6 sub-exp">Software Engineering Projects</h3>
          <h4 className="timeline col-md-6">August 2021 – Present</h4>
        </div>
        <div
          className="row wow fadeInDown"
          id="experience"
          data-wow-delay="1.4s"
        >
          <ul className="col-md-12">
            <li>
              Built my portfolio website using HTML, CSS, JavaScript, jQuery,
              Boostrap 4, WOW.js, Animate.js
            </li>
            <li>Programmed a Case Converter using JavaScript, HTML, & CSS</li>
            <li>
              Built and designed a Notes app in JavaScript, including designing,
              and implementing its user interfaces
            </li>
            <li>Built a Chess Game in Python (GUI)</li>
            <li>
              Created a 2-line Calculator in Python that can run simple and
              complex math problems (ex. discrete math)
            </li>
            <li>Created a Simple Bank Application in Java</li>
          </ul>
        </div>
        <div className="row wow fadeInDown" data-wow-delay="1.5s">
          <h3 className="col-md-6 sub-exp">UX Projects/Product Management</h3>
          <h4 className="timeline col-md-6">May 2020 – Present</h4>
        </div>
        <div
          className="row wow fadeInDown"
          id="experience"
          data-wow-delay="1.6s"
        >
          <ul className="col-lg-12">
            <li>
              Currently (Spring 2022) the Product Owner for a className group
              project on building an outdoor app
            </li>
            <li>
              Researched and redesigned mobile apps like TikTok for improved
              user experience
            </li>
            <li>
              Taught myself product management using online resources paired
              with personal & academic projects I undertook
            </li>
            <li>
              Creating product planning methodologies to drive new mobile app
              product launches and support product lifecycle; creating product
              roadmap for this
            </li>
          </ul>
        </div>
      </div>
      {/* <!---------------where experience end-----------------> */}
      <div className="whitespace"></div>
      <div className="row">
        <div
          className="announcement col-lg-12 wow fadeIn"
          data-wow-delay="1.5s"
        >
          <h2>
            for my full resume, please <Link to="/contact">contact me.</Link>
          </h2>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Resume;
