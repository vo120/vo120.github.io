import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import { gsap, Expo } from "gsap";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const [toggleOn, setToggleOn] = useState(false);
  const [resizeActive, setResizeActive] = useState(false);

  function handleToggleClick() {
    setToggleOn(!toggleOn);
    setResizeActive(!resizeActive);
  }

  function handleResizeClick() {
    setResizeActive(!resizeActive);
  }

  const brandRef = useRef();
  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(brandRef.current, {
      duration: 0.5,
      delay: 0.3,
      y: 10,
      opacity: 0, // Set the initial opacity to 0
      ease: Expo.easeInOut,
    }).to(brandRef.current, {
      opacity: 1, // Animate the opacity to 1
    });
    tl.from("#menu li a", {
      stagger: 0.1,
      duration: 0.3,
      delay: 0.3,
      opacity: 0, // Set the initial opacity to 0
      ease: Expo.easeIn,
    }).to("#menu li a", {
      opacity: 1, // Animate the opacity to 1
    });
  }, [tl]);

  return (
    <>
      <nav>
        <span id="brand" ref={brandRef}>
          <NavLink to="/">Vanessa Oru</NavLink>
        </span>

        <ul id="menu">
          <li>
            <NavLink to="/">
              home<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio-projects">
              portfolio<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="resume">
              resume<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="about">
              about me<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="contact">
              contact me<span>.</span>
            </NavLink>
          </li>
        </ul>

        <div
          id="toggle"
          className={toggleOn ? "on" : ""}
          onClick={handleToggleClick}
        >
          <div className="span">menu</div>
        </div>
      </nav>

      <div id="resize" className={resizeActive ? "active" : ""}>
        <div
          className={resizeActive ? "on close-btn" : "close-btn"}
          onClick={handleResizeClick}
        >
          close
        </div>

        <ul id="menu">
          <li>
            <NavLink
              to="/"
              onClick={handleResizeClick}
              className={resizeActive ? "on" : ""}
            >
              home<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio-projects"
              onClick={handleResizeClick}
              className={resizeActive ? "on" : ""}
            >
              portfolio<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              onClick={handleResizeClick}
              className={resizeActive ? "on" : ""}
            >
              resume<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={handleResizeClick}
              className={resizeActive ? "on" : ""}
            >
              about me<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleResizeClick}
              className={resizeActive ? "on" : ""}
            >
              contact me<span>.</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
