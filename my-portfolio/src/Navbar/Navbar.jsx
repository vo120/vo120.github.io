import React from "react";
import "./Navbar.css";

//todo: set up react router for proper navigation
const Navbar = () => {
  return (
    <>
      <nav>
        <span id="brand">
          <a href="index.html">Vanessa Oru</a>
        </span>

        <ul id="menu">
          <li>
            <a href="index.html">
              home<span>.</span>
            </a>
          </li>
          <li>
            <a href="portfolio.html">
              portfolio<span>.</span>
            </a>
          </li>
          <li>
            <a href="resume.html">
              resume<span>.</span>
            </a>
          </li>
          <li>
            <a href="about.html">
              about me<span>.</span>
            </a>
          </li>
          <li>
            <a href="contact.html">
              contact me<span>.</span>
            </a>
          </li>
        </ul>

        <div id="toggle">
          <div className="span">menu</div>
        </div>
      </nav>

      <div id="resize">
        <div className="close-btn">close</div>

        <ul id="menu">
          <li>
            <a href="index.html">
              home<span>.</span>
            </a>
          </li>
          <li>
            <a href="portfolio.html">
              portfolio<span>.</span>
            </a>
          </li>
          <li>
            <a href="resume.html">
              resume<span>.</span>
            </a>
          </li>
          <li>
            <a href="about.html">
              about me<span>.</span>
            </a>
          </li>
          <li>
            <a href="contact.html">
              contact me<span>.</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
