import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" id="projectPage">
      <div className="shell">
        <div className="footer__cta">
          <p className="eyebrow" data-reveal="fade">
            Looking for a software engineer?
          </p>
          <Link to="/contact" className="footer__big display" data-reveal>
            Let's work <em>together</em> <span className="footer__arrow">↗</span>
          </Link>
        </div>

        <div className="footer__grid">
          <div className="footer__col">
            <span className="footer__label">Connect</span>
            <a
              href="https://www.linkedin.com/in/vanessaoru/"
              target="_blank"
              rel="noreferrer noopener"
              className="ul-link"
            >
              LinkedIn ↗
            </a>
            <Link to="/contact" className="ul-link">
              Email me ↗
            </Link>
          </div>

          <div className="footer__col">
            <span className="footer__label">Follow</span>
            <a
              href="https://github.com/vo120"
              target="_blank"
              rel="noreferrer noopener"
              className="ul-link"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.figma.com/@vanessaoru"
              target="_blank"
              rel="noreferrer noopener"
              className="ul-link"
            >
              Figma ↗
            </a>
          </div>

          <div className="footer__col">
            <span className="footer__label">Navigate</span>
            <Link to="/portfolio-projects" className="ul-link">
              Work
            </Link>
            <Link to="/about" className="ul-link">
              About
            </Link>
            <Link to="/contact" className="ul-link">
              Contact
            </Link>
          </div>

          <div className="footer__col footer__col--end">
            <span className="footer__label">Based in</span>
            <p>Atlanta, GA</p>
            <p className="footer__muted">Available for 2026</p>
          </div>
        </div>

        <div className="footer__bar">
          <span>© {year} Vanessa Oru</span>
          <span className="footer__signature">
            Designed &amp; built with care
          </span>
          <button
            type="button"
            className="footer__top ul-link"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
