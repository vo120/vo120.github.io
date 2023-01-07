import React from "react";
import "./ChromeRedesignConcept.css";
import stackedView from "../../imgPF/stackedview.jpg";
import sideBySide from "../../imgPF/sidebyside.jpg";
import stackedToColumn from "../../imgPF/stackedtocolumn.jpg";
import colToStacked from "../../imgPF/columntostacked.jpg";
import tShapedView from "../../imgPF/T_shaped.jpg";
import googleHomepage from "../../imgPF/GoogleHomepage.jpg";
import { Link, Outlet } from "react-router-dom";

const ChromeRedesignConcept = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Google Chrome Design Concept
              </h1>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    role :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                    UX Engineer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    started :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    9 March 2022
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    TBD
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                Application split-screen views are very common. Most computers
                are able to use this feature. Split-screen views have a couple
                of benefits, one being, it offers the user the experience of
                viewing multiple things they are working on at the same time
                instead of switching back and forth between tabs. Since I hadn't
                seen this feature on Google Chrome, I thought why not integrate
                it? I started empathizing with potential users who may often
                work on projects where they would be switching back & forth
                between tabs. This can be exhausting. This was a possible user
                pain point. However, for some users this may not be a pain point
                which is why this feature would be completely optional to the
                user. After that I thought, "how would you design this in a way
                that would be equitable, usable, enjoyable, and useful for the
                user?" I started to ideate and came up with these wireframes. I
                have not done a mockup of them yet in Figma or coded it out, but
                stay tuned.
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
          <div className="row" id="google">
            <div className="col item1">
              <img
                src={googleHomepage}
                alt="google homepage design"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Google Search Homepage</h2>
            </div>

            <div className="col item2">
              <img
                src={tShapedView}
                alt="t-shaped tab view"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              <h2>T-shaped Tab View</h2>
            </div>

            <div className="col item3">
              <img
                src={colToStacked}
                alt="column to stacked tab view"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.4s")}
              />
              <h2>Column-to-Stacked Tab View</h2>
            </div>
            <div className="col item4">
              <img
                src={stackedToColumn}
                alt="stacked-to-column view"
                className="wow fadeInUp"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              <h2>Stacked-to-Column Tab View</h2>
            </div>
            <div className="col item5">
              <img
                src={stackedView}
                alt="stacked tab view"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              <h2>Stacked Tab View</h2>
            </div>
            <div className="col item6">
              <img
                src={sideBySide}
                alt="side-by-side tab view"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              <h2>Side-by-Side Tab View</h2>
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
            <Link className="col-lg-6 prev" to="/projects/case-converter">
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link className="col-lg-6 next" to="/projects/blockchain-site">
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

export default ChromeRedesignConcept;
