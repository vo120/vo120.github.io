import React from "react";
import "./Resume.css";
import { Link } from "react-router-dom";

const education = [
  {
    school: "Kennesaw State University",
    detail: "M.Sc. Software Engineering",
    note: "Dean's 4.0 Club · Summa Cum Laude · GPA 4.0/4.0",
  },
  {
    school: "Kennesaw State University",
    detail: "B.Sc. Psychology, Applied Statistics & Data Analysis",
    note: "Magna Cum Laude · GPA 3.81/4.0",
  },
  {
    school: "University of Ottawa",
    detail: "B.A. Psychology",
    note: "",
  },
];

const skillGroups = [
  {
    title: "Engineering",
    items: [
      "Java, Python",
      "JavaScript, TypeScript",
      "React.js, Next.js, React Native",
      "React-Three-Fiber",
      "Node.js, Express.js, GraphQL",
      "HTML, CSS",
      "SQL, SPSS, SAS, R",
    ],
  },
  {
    title: "Design & Research",
    items: [
      "Prototyping",
      "UX Design",
      "UX Research",
      "Research Methods",
      "Data Structures & Algorithms",
      "Statistics",
    ],
  },
  {
    title: "Tools & Strengths",
    items: [
      "Figma, GSAP, Bootstrap",
      "Expo, Vercel, jQuery",
      "IntelliJ, WebStorm, PyCharm",
      "Fast learner & adaptable",
      "Problem-solving & creativity",
      "Attention to detail",
    ],
  },
];

const experience = [
  {
    role: "Google Inc.",
    time: "May 2022 – Aug 2022",
    points: [
      "Executed direct design and front-end engineering work within a larger project.",
      "Developed interactions, reusable UI components and new features in a prototype the design team could live in and experience proposed changes.",
      "Provided a way to iterate, test and validate new features.",
      "Explored new patterns across Google Workspace apps (Gmail, Chat, Spaces).",
      "Worked cross-functionally to ensure requirements were met and proper assets used.",
    ],
  },
  {
    role: "Software Engineering Projects",
    time: "Aug 2021 – Present",
    points: [
      "Built a blog site with React.js, GraphQL, Next.js & Vercel.",
      "Built a mobile bank app with React Native in 2 days.",
      "Programmed a random AI image generator using OpenAI's DALL·E API.",
      "Created a 3D-logo website with React-Three-Fiber for a blockchain client.",
      "Built and designed a Notes app in JavaScript, including its interfaces.",
      "Built a chess game in Python (GUI).",
    ],
  },
  {
    role: "UX & Product Management",
    time: "May 2020 – Present",
    points: [
      "Served as Product Owner for a class project building an outdoor app.",
      "Researched and redesigned mobile apps like TikTok for improved UX.",
      "Self-taught product management through online resources and projects.",
      "Created product-planning methodologies and roadmaps to drive launches.",
    ],
  },
];

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume__head shell">
        <p className="eyebrow" data-reveal="fade">
          Curriculum Vitae
        </p>
        <h1 className="display resume__title" data-reveal>
          Resume
        </h1>
        <p className="resume__intro" data-reveal style={{ "--reveal-delay": "0.1s" }}>
          A snapshot of my education, skills and experience. For the full
          version,{" "}
          <Link to="/contact" className="ul-link resume__link">
            get in touch
          </Link>
          .
        </p>
      </header>

      {/* education */}
      <section className="resume__section shell">
        <h2 className="resume__sec-title" data-reveal="fade">
          Education
        </h2>
        <div className="resume__list">
          {education.map((e, i) => (
            <div className="resume-row" key={i} data-reveal>
              <h3>{e.school}</h3>
              <p className="resume-row__detail">{e.detail}</p>
              {e.note && <p className="resume-row__note">{e.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* skills */}
      <section className="resume__section shell">
        <h2 className="resume__sec-title" data-reveal="fade">
          Skills
        </h2>
        <div className="resume__skills">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.title} data-reveal>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* experience */}
      <section className="resume__section shell">
        <h2 className="resume__sec-title" data-reveal="fade">
          Experience
        </h2>
        <div className="resume__timeline">
          {experience.map((x) => (
            <div className="resume-exp" key={x.role} data-reveal>
              <div className="resume-exp__head">
                <h3>{x.role}</h3>
                <span className="resume-exp__time">{x.time}</span>
              </div>
              <ul>
                {x.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume__cta shell" data-reveal="fade">
        <p className="display resume__cta-text">
          Want the <em>full resume?</em>
        </p>
        <Link to="/contact" className="btn btn-solid">
          Contact Me <span className="arrow">↗</span>
        </Link>
      </section>
    </div>
  );
};

export default Resume;
