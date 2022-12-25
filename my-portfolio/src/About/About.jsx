import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <br />
      <br />
      {/* <!---------------where hero image starts---------------> */}
      <div className="container">
        <div className="row">
          <div
            className="col-md-8 about image wow fadeInLeft"
            data-wow-delay="1s"
          ></div>
          <div
            className="col-md-4 about1 image1 wow fadeInRight"
            data-wow-delay="1s"
          ></div>
        </div>
      </div>
      {/* <!---------------where hero image ends----------------->

        <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-12">
              <h3 className="wow fadeInUp" data-wow-delay="1.2s">
                about me.
              </h3>
              <br />

              <p className="wow fadeInUp">
                {" "}
                I am a Software Engineer, UX/UI Engineer, and UX
                Designer/Researcher. I have a passion for Psychology,
                Technology, & Design. I enjoy learning about people, the mind
                and behavior. I also enjoy learning about computer programming
                and design. My skills meet at the intersection of these two and
                extend far beyond.
              </p>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                I am inquisitive. A fast and life-long learner. Adaptable. I
                love creating new things. I love exploring new ideas.
              </p>
              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Fun Facts: I enjoy playing chess. I've taught myself a couple
                instruments (i.e., guitar). I enjoy watching Shark Tank, amongst
                other shows.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where hero section ends---------------> */}

      <div className="whitespace"></div>
    </>
  );
};

export default About;
