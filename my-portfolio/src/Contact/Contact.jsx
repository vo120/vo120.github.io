import React, { useState } from "react";
import "./Contact.css";

const EMAIL = "redacted@example.com";

// Submissions are emailed straight to EMAIL via FormSubmit.co — free, no
// account, no API key. ONE-TIME SETUP: after this is deployed, send yourself
// a test message; FormSubmit will email you a confirmation link. Click it once
// and from then on every submission lands in your inbox.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._gotcha) return; // honeypot: ignore bots

    try {
      setStatus("sending");
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New message from ${form.name} — vanessaoru.codes`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact">
      <header className="contact__head shell">
        <p className="eyebrow" data-reveal="fade">
          Contact
        </p>
        <h1 className="display contact__title" data-reveal>
          Let's say <em>hello.</em> <span className="contact__wave">👋</span>
        </h1>
        <p className="contact__intro" data-reveal style={{ "--reveal-delay": "0.1s" }}>
          Since you've stopped by — why not say hello? Whether it's a role, a
          project, or just a chat, I'd love to hear from you.
        </p>
      </header>

      <section className="contact__body shell">
        {/* form */}
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          {/* honeypot — hidden from people, catches bots */}
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            value={form._gotcha || ""}
            onChange={update}
            style={{ display: "none" }}
            aria-hidden="true"
          />
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={update}
              placeholder="Your name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={update}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={update}
              placeholder="Tell me a little about it…"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-solid contact-form__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}{" "}
            <span className="arrow">↗</span>
          </button>

          {status === "success" && (
            <p className="contact-form__note contact-form__note--ok">
              Thanks — your message is on its way. I'll be in touch soon. ✨
            </p>
          )}
          {status === "error" && (
            <p className="contact-form__note contact-form__note--err">
              Something went wrong. Please email me directly at{" "}
              <a href={`mailto:${EMAIL}`} className="ul-link">
                {EMAIL}
              </a>
              .
            </p>
          )}
        </form>

        {/* aside */}
        <aside className="contact__aside" data-reveal style={{ "--reveal-delay": "0.1s" }}>
          <div className="contact__block">
            <p className="eyebrow">Email</p>
            <a href={`mailto:${EMAIL}`} className="contact__email ul-link">
              {EMAIL}
            </a>
          </div>
          <div className="contact__block">
            <p className="eyebrow">Elsewhere</p>
            <ul className="contact__socials">
              <li>
                <a
                  href="https://www.linkedin.com/in/vanessaoru/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ul-link"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vo120"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ul-link"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/@vanessaoru"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ul-link"
                >
                  Figma ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="contact__block">
            <p className="eyebrow">Status</p>
            <p className="contact__status">
              <i></i> Open to new opportunities in 2026.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contact;
