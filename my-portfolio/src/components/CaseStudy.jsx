import React from "react";
import "./CaseStudy.css";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { caseStudies } from "../data/caseStudies";

// One layout to render every project case study from data.
export default function CaseStudy({ slug }) {
  const base = projects.find((p) => p.slug === slug);
  const detail = caseStudies[slug];
  if (!base || !detail) return null;

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const [cover, ...rest] = detail.gallery;

  return (
    <article className="cs">
      {/* header */}
      <header className="cs__head shell">
        <Link to="/portfolio-projects" className="cs__back ul-link" data-reveal="fade">
          ← All work
        </Link>

        <p className="eyebrow cs__eyebrow" data-reveal="fade">
          {base.category} · {base.year}
        </p>

        <h1 className="display cs__title" data-reveal>
          {base.title}
        </h1>

        <p className="cs__intro" data-reveal style={{ "--reveal-delay": "0.08s" }}>
          {detail.intro}
        </p>

        <div className="cs__meta" data-reveal style={{ "--reveal-delay": "0.16s" }}>
          <div className="cs__meta-item">
            <span className="cs__meta-label">Role</span>
            <span className="cs__meta-value">{detail.role}</span>
          </div>
          <div className="cs__meta-item">
            <span className="cs__meta-label">Timeline</span>
            <span className="cs__meta-value">{detail.timeline}</span>
          </div>
          <div className="cs__meta-item cs__meta-item--tags">
            <span className="cs__meta-label">Stack</span>
            <ul className="cs__tags">
              {base.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {detail.links.length > 0 && (
          <div className="cs__links" data-reveal="fade">
            {detail.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className={"btn" + (i === 0 ? " btn-solid" : "")}
              >
                {l.label} <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        )}
      </header>

      {/* cover */}
      {cover && (
        <figure className="cs__cover shell" data-reveal="scale">
          <img src={cover.src} alt={cover.caption} />
          {cover.caption && <figcaption>{cover.caption}</figcaption>}
        </figure>
      )}

      {/* overview */}
      {detail.body.length > 0 && (
        <section className="cs__overview shell">
          <h2 className="cs__sec-label" data-reveal="fade">
            Overview
          </h2>
          <div className="cs__body">
            {detail.body.map((para, i) => (
              <p key={i} data-reveal>
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* gallery */}
      {rest.length > 0 && (
        <section className="cs__gallery shell">
          {rest.map((g, i) => (
            <figure
              key={i}
              className={"cs__shot" + (rest.length === 1 ? " cs__shot--wide" : "")}
              data-reveal
            >
              <div className="cs__shot-media">
                <img src={g.src} alt={g.caption} loading="lazy" />
              </div>
              {g.caption && <figcaption>{g.caption}</figcaption>}
            </figure>
          ))}
        </section>
      )}

      {/* prev / next */}
      <nav className="cs__nav shell" aria-label="Project navigation">
        <Link to={`/projects/${prev.slug}`} className="cs__nav-link cs__nav-link--prev">
          <span className="cs__nav-dir">← Previous</span>
          <span className="cs__nav-title">{prev.title}</span>
        </Link>
        <Link to={`/projects/${next.slug}`} className="cs__nav-link cs__nav-link--next">
          <span className="cs__nav-dir">Next →</span>
          <span className="cs__nav-title">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}
