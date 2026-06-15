import React from "react";
import "./Home.css";
import { Link, Outlet } from "react-router-dom";
import { featuredProjects } from "../data/projects";

const services = [
  "Software Engineering",
  "UX / UI Engineering",
  "Product Design",
  "UX Research",
  "Frontend Development",
  "Design Systems",
];

const Home = () => {
  return (
    <div className="home">
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="shell hero__inner">
          <p className="eyebrow hero__eyebrow" data-reveal="fade">
            Software Engineer · UX Engineer · Designer
          </p>

          <h1 className="display hero__title">
            <span className="hero__line" data-reveal>
              I work with brands
            </span>
            <span className="hero__line" data-reveal style={{ "--reveal-delay": "0.08s" }}>
              to drive <em>impact</em>
            </span>
            <span className="hero__line" data-reveal style={{ "--reveal-delay": "0.16s" }}>
              in&nbsp;culture.
            </span>
          </h1>

          <div className="hero__bottom">
            <p className="hero__intro" data-reveal style={{ "--reveal-delay": "0.24s" }}>
              I'm Vanessa Oru — a software engineer and designer working at the
              intersection of psychology, technology &amp; design. I build
              thoughtful, human products from the first sketch to the last line
              of code.
            </p>
            <div className="hero__cta" data-reveal style={{ "--reveal-delay": "0.3s" }}>
              <Link to="/portfolio-projects" className="btn btn-solid">
                View Work <span className="arrow">↗</span>
              </Link>
              <Link to="/contact" className="btn">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__meta shell">
          <span>Atlanta, GA</span>
          <span className="hero__status">
            <i></i> Available for 2026
          </span>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {services.concat(services).map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      {/* ---------------- FEATURED WORK ---------------- */}
      <section className="work shell">
        <header className="work__head">
          <h2 className="section-title" data-reveal>
            Selected <em>Work</em>
          </h2>
          <p className="work__count eyebrow" data-reveal="fade">
            {String(featuredProjects.length).padStart(2, "0")} Featured Projects
          </p>
        </header>

        <div className="work__grid">
          {featuredProjects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className={"project-card" + (i % 3 === 0 ? " project-card--wide" : "")}
              data-reveal
            >
              <div className="project-card__media">
                <img src={p.image} alt={p.title} loading="lazy" />
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
                <ul className="project-card__tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className="work__all" data-reveal="fade">
          <Link to="/portfolio-projects" className="btn">
            All Projects <span className="arrow">↗</span>
          </Link>
        </div>
      </section>

      {/* ---------------- CLOSING STATEMENT ---------------- */}
      <section className="manifesto shell">
        <p className="eyebrow" data-reveal="fade">
          The approach
        </p>
        <p className="manifesto__text display" data-reveal>
          Curious by default. A fast, life-long learner who loves turning
          complex ideas into <em>simple, beautiful</em> experiences people
          actually enjoy using.
        </p>
        <Link to="/about" className="ul-link manifesto__link" data-reveal="fade">
          More about me →
        </Link>
      </section>

      <Outlet />
    </div>
  );
};

export default Home;
