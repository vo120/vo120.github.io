import React from "react";
import "./PortfolioDisplay.css";
import { Link, Outlet } from "react-router-dom";
import { projects } from "../data/projects";

const PortfolioDisplay = () => {
  return (
    <div className="portfolio">
      {/* ---------------- header ---------------- */}
      <header className="portfolio__head shell">
        <p className="eyebrow" data-reveal="fade">
          Portfolio · 2021—2026
        </p>
        <h1 className="display portfolio__title" data-reveal>
          Selected <em>projects</em> &amp; experiments.
        </h1>
        <p className="portfolio__intro" data-reveal style={{ "--reveal-delay": "0.1s" }}>
          A mix of shipped products, design concepts and things I built to learn
          something new — spanning software engineering, UX and a little 3D.
        </p>
      </header>

      {/* ---------------- index list ---------------- */}
      <section className="portfolio__grid shell">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="project-card"
            data-reveal
            style={{ "--reveal-delay": `${(i % 2) * 0.08}s` }}
          >
            <div className="project-card__media">
              <img src={p.image} alt={p.title} loading="lazy" />
              <span className="project-card__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="project-card__view">
                View <span className="arrow">↗</span>
              </span>
            </div>
            <div className="project-card__foot">
              <div className="project-card__title-row">
                <h3>{p.title}</h3>
                <span className="project-card__year">{p.year}</span>
              </div>
              <p className="project-card__cat">{p.category}</p>
              <p className="project-card__blurb">{p.blurb}</p>
            </div>
          </Link>
        ))}
      </section>

      <Outlet />
    </div>
  );
};

export default PortfolioDisplay;
