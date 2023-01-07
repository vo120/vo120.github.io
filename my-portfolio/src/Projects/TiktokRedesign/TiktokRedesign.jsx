import React from "react";
import "./TiktokRedesign.css";
import originalCC from "../../imgPF/Original with CC.png";
import originalDesign from "../../imgPF/Original Design.png";
import ttRedesign from "../../imgPF/TikTok Redesign.gif";
import cover from "../../imgPF/cover.png";
import closedBtmSide from "../../imgPF/ClosedBottom&SideSheet.JPG";
import openBtm from "../../imgPF/OpenBottomSheet.JPG";
import openSide from "../../imgPF/OpenSideSheet.JPG";
import openBtmSide from "../../imgPF/OpenBottom&SideSheetModal.JPG";
import { Link, Outlet } from "react-router-dom";

const TiktokRedesign = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* {  <!---------------where hero section starts------------->} */}
      <div className="container">
        <div className="hero-content" id="tiktok">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                TikTok Redesign
              </h1>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    role :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                    UX Designer & Researcher
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    started :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    Spring 2020 (Original)
                  </h6>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    10 Feb 2022 (Newest)
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    12 Feb 2022
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                When quarantine hit in Spring 2020, TikTok quickly became
                popular. With the rise of TikTok, I noticed it was not very
                accessible. When people would type out their closed captions, it
                would interfere with the pre-existing caption of the video
                itself. I felt this would make the user experience less
                enjoyable for people, especially those with hearing
                disabilities. This lack of accessibility was more or less
                confirmed by a deaf woman who made a TikTok essentially about
                the daily experiences of a deaf person living in a hearing world
                during the time of a pandemic where people wear masks, so it's
                hard to read lips and when you come home to unwind and get on
                TikTok there are no captions. She entitled it "Deaf Ears In A
                Hearing World." I have seen other complaints about the closed
                captions being unreadable because of the video caption
                overlapping it. I could see there was definitely a problem here.
                So, I had this idea to redesign TikTok and make it more
                accessible. I started this project in Figma, but back then I did
                not quite know what I was doing, in terms of how to operate
                Figma to redesign. So I decided to focus on the research aspect.
                It was not until recently I picked up the redesign again and
                taught myself enough Figma to redesign TikTok in 2 days. I first
                started out with a low fidelity wireframe. Then, I was able to
                translate that into the actual prototype. This way TikTok would
                be accessible for more users, which makes the design more
                usable, equitable, useful, and enjoyable for all users. The
                results of this project are shown below.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* { <!---------------where hero section ends--------------->

      <!---------------where project image starts------------>} */}
      {/* //todo: fix responsiveness */}
      <div className="project-img">
        <div className="container">
          <br />
          <br />
          <div className="row" id="tiktok">
            <div className="col item1">
              <img
                src={originalDesign}
                alt="shows original tiktok homepage design"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              {/* <!--<div className="images images1 wow fadeInUp" data-wow-delay=onloadedmetadata="0.8s"></div>--> */}
              <h2>Original Design</h2>
            </div>

            <div className="col item2">
              <img
                src={originalCC}
                alt="shows original tiktok homepage design with closed captions"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>Original Design with Closed Captions</h2>
            </div>

            <div className="col item3">
              <img
                src={ttRedesign}
                alt="tiktok redesign in action picture"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.4s")}
              />
              {/* {<!--<div className="images images3 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>-->} */}
              <h2>Redesign In Action</h2>
            </div>
            <div className="col item4">
              <img
                src={cover}
                alt="picture of tiktok redesign figma mockup"
                className="wow fadeInUp"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              {/* <!--<div className="images images4 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>
                TikTok Redesign Mockup
                <a
                  href="https://www.figma.com/community/file/1074501002749472433?preview=fullscreen"
                  target="_blank"
                >
                  (Figma)
                </a>
              </h2>
            </div>
            <div className="col item5">
              <img
                src={closedBtmSide}
                alt="closed bottom and side sheet modal wireframe for tiktok redesign"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              <h2>Closed Bottom & Side Sheet Modal Wireframe</h2>
            </div>
            <div className="col item6">
              <img
                src={openBtm}
                alt="open bottom sheet modal wireframe for tiktok redesign"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              <h2>Open Bottom Sheet Modal Wireframe</h2>
            </div>
            <div className="col item7">
              <img
                src={openSide}
                alt="open side sheet modal wireframe for tiktok redesign"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              <h2>Open Side Sheet Modal Wireframe</h2>
            </div>
            <div className="col item8">
              <img
                src={openBtmSide}
                alt="open bottom & side sheet modal wireframe for tiktok redesign"
                className="wow fadeInRight"
                data-wow-delay={(onloadedmetadata = "2.6s")}
              />
              <h2>Open Bottom & Side Sheet Modal Wireframe</h2>
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
              to="/projects/personal-portfolio"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/chess-app"
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

export default TiktokRedesign;
