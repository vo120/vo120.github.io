import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="projectPage">
        <div className="container">
          <br /> <br />
          <div className="collab">
            <div className="row">
              <div className="col-lg-12">
                <p className="wow fadeInUp">
                  Looking for a software engineer? You've come to the right
                  place!
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="hr">
            <div className="row"></div>
          </div>
          <br /> <br />
          <div className="info">
            <div className="row">
              <div className="col-lg-4" id="linkedin">
                <p className="wow fadeInUp">connect with me</p>
                <a
                  href="https://www.linkedin.com/in/vanessaoru/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <h4 className="wow fadeInUp" data-wow-delay="0.2s">
                    ln /vanessaoru
                  </h4>
                </a>
                <br />
                <br />
              </div>

              <div className="col-lg-4" id="media">
                <p className="wow fadeInUp" data-wow-delay="0s">
                  follow me
                </p>

                <ul>
                  <li id="gh" className="wow fadeInUp" data-wow-delay="0.6s">
                    <a
                      href="https://github.com/vo120"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      gh
                    </a>
                  </li>
                  <li id="fg" className="wow fadeInUp" data-wow-delay="0.8s">
                    <a
                      href="https://www.figma.com/@vanessaoru"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      fg
                    </a>
                  </li>
                </ul>
                <br />
                <br />
              </div>

              <div className="col-lg-4" id="address">
                <p className="wow fadeInUp" data-wow-delay="0s">
                  get in touch
                </p>
                <a href="mailto:redacted@example.com">
                  <h4 className="wow fadeInUp" data-wow-delay="1.0s">
                    email me
                  </h4>
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="updated">
          <div className="container">
            <p className="wow fadeInUp" data-wow-delay="0.8s">
              last updated: {document.lastModified} EST
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
