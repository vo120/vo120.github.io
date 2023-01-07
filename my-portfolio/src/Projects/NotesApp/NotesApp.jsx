import React from "react";
import "./NotesApp.css";
import emptyNotes from "../../imgPF/EmptyNotes.png";
import notesAppOpenPage from "../../imgPF/NotesAppOpenPage.png";
import noteInNotesApp from "../../imgPF/NoteInNotesApp.png";
import notesApp from "../../imgPF/NotesApp.gif";
import { Link, Outlet } from "react-router-dom";

const NotesApp = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container projpage">
        <div className="hero-content" id="notes">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Notes App
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
                JavaScript. Once I felt comfortable enough to code, I decided to
                build a notes app. This app is able to add in multiple notes,
                delete, and undo notes. Below is the result.
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
          <div className="row" id="notes">
            <div className="col">
              <img
                src={emptyNotes}
                alt="picture of empty notes app"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              {/* <!--<div className="images images1 wow fadeInUp" data-wow-delay=onloadedmetadata="0.8s"></div>--> */}
              <h2>Empty Notes</h2>
            </div>

            <div className="col">
              <img
                src={notesAppOpenPage}
                alt="picture of open page in notes app"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>Open Page</h2>
            </div>

            <div className="col">
              <img
                src={noteInNotesApp}
                alt="picture of notes in notes app"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay=onloadedmetadata="1s"></div>--> */}
              <h2>Notes in app</h2>
            </div>

            <div className="col">
              <img
                src={notesApp}
                alt="gif of notes app"
                className="wow fadeInDown"
                data-wow-delay={(onloadedmetadata = "2.2s")}
              />
              {/* <!-- <div className="images images2 wow fadeInUp" data-wow-delay={(onloadedmetadata="1s")}></div>--> */}
              <h2>Notes App in Action</h2>
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
              to="/projects/chess-app"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/case-converter"
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

export default NotesApp;
