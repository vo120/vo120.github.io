import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import portraitA from "../imgPF/17.jpg";
import portraitB from "../imgPF/18.jpg";

const principles = [
  { n: "01", t: "Human first", d: "I study people, the mind and behavior — then design for them." },
  { n: "02", t: "Curious by default", d: "A fast, life-long learner who loves exploring new ideas." },
  { n: "03", t: "Craft & care", d: "Attention to detail from the first sketch to the last commit." },
  { n: "04", t: "Adaptable", d: "Flexible team player who works well under pressure." },
];

const About = () => {
  return (
    <div className="about-page">
      {/* ---------------- intro ---------------- */}
      <header className="about-hero shell">
        <p className="eyebrow" data-reveal="fade">
          About
        </p>
        <h1 className="display about-hero__title" data-reveal>
          Engineer &amp; designer at the intersection of{" "}
          <em>psychology, technology &amp; design.</em>
        </h1>
      </header>

      {/* ---------------- portraits ---------------- */}
      <section className="about-portraits shell">
        <figure className="about-portraits__a" data-reveal="left">
          <img src={portraitA} alt="Vanessa Oru" loading="lazy" />
        </figure>
        <figure className="about-portraits__b" data-reveal="right">
          <img src={portraitB} alt="Vanessa Oru" loading="lazy" />
        </figure>
      </section>

      {/* ---------------- bio ---------------- */}
      <section className="about-bio shell">
        <p className="eyebrow about-bio__label" data-reveal="fade">
          (Hello)
        </p>
        <div className="about-bio__body">
          <p className="about-bio__lead" data-reveal>
            I'm Vanessa — a Software Engineer, UX/UI Engineer and UX
            Designer/Researcher. My skills meet at the intersection of
            technology and human behavior, and extend far beyond.
          </p>
          <p data-reveal style={{ "--reveal-delay": "0.08s" }}>
            I have a passion for psychology, technology &amp; design. I enjoy
            learning about people, the mind and behavior — and I enjoy learning
            about computer programming and design just as much. I'm inquisitive,
            adaptable, and I love creating new things and exploring new ideas.
          </p>
          <p data-reveal style={{ "--reveal-delay": "0.16s" }}>
            <strong>A few fun facts:</strong> I play chess, I've taught myself a
            couple of instruments (guitar included), and yes — I enjoy watching
            Shark Tank, among other shows.
          </p>
        </div>
      </section>

      {/* ---------------- principles ---------------- */}
      <section className="about-principles shell">
        <h2 className="section-title" data-reveal>
          How I <em>work</em>
        </h2>
        <div className="about-principles__grid">
          {principles.map((p) => (
            <div className="principle" key={p.n} data-reveal>
              <span className="principle__n">{p.n}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- cta ---------------- */}
      <section className="about-cta shell" data-reveal="fade">
        <p className="display about-cta__text">
          Let's build something <em>worth using.</em>
        </p>
        <div className="about-cta__links">
          <Link to="/contact" className="btn btn-solid">
            Get in Touch <span className="arrow">↗</span>
          </Link>
          <Link to="/resume" className="btn">
            View Resume
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
