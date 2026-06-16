import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/portfolio-projects", label: "Work" },
  { to: "/resume", label: "Resume" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the mobile menu + jump to top whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Hide on scroll-down, reveal on scroll-up; add a backdrop once scrolled.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (!menuOpen) setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          "nav",
          scrolled ? "nav--scrolled" : "",
          hidden ? "nav--hidden" : "",
          menuOpen ? "nav--open" : "",
        ]
          .join(" ")
          .trim()}
      >
        <NavLink to="/" className="nav__brand">
          <span className="nav__brand-mark">VO</span>
          <span className="nav__brand-name">Vanessa Oru</span>
        </NavLink>

        <nav className="nav__menu" aria-label="Primary">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                "nav__link" + (isActive ? " is-active" : "")
              }
            >
              <span className="nav__index">0{i + 1}</span>
              <span className="nav__label">{l.label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          className={"nav__toggle" + (menuOpen ? " is-open" : "")}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      {/* Full-screen mobile overlay */}
      <div className={"nav-overlay" + (menuOpen ? " is-open" : "")}>
        <nav className="nav-overlay__menu" aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="nav-overlay__link"
              style={{ "--i": i }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-overlay__index">0{i + 1}</span>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-overlay__foot">
          <NavLink
            to="/contact"
            className="ul-link"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </NavLink>
          <div className="nav-overlay__socials">
            <a
              href="https://www.linkedin.com/in/vanessaoru/"
              target="_blank"
              rel="noreferrer noopener"
              className="ul-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vo120"
              target="_blank"
              rel="noreferrer noopener"
              className="ul-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Navbar;
