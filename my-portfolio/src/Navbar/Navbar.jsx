import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";

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

  console.log("in navbar");
  return (
    <>
      <nav>
        <span id="brand">
          <NavLink to="/">Vanessa Oru</NavLink>
        </span>

        <ul id="menu">
          <li>
            <NavLink to="/">
              home<span>.</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio">
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
          className={resizeActive ? "on close-btn" : ""}
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
              to="/portfolio"
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
