import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="whitespace"></div>

      {/* <!----where hero section starts for saying hello-------> */}
      <div className="container">
        <div className="hero-content">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-8">
              <h3 className="wow fadeInUp" data-wow-delay="1s">
                say hello 👋.
              </h3>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.2s">
                {" "}
                since you've stopped by, why don't you say hello? <br />
                I'd love to hear from you. 😊
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where hero section ends---------------> */}
      {/* <!--<div className="whitespace"></div>--> */}
      {/* <!---------------where form section starts-------------> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <form
              name="contact-form"
              id="contact-form"
              encType="text/plain"
              method="post"
              action="mailto:redacted@example.com"
            >
              <ul>
                <li className="wow fadeInUp" data-wow-delay="1.4s">
                  <label for="contact-name">Name:</label>
                  <div className="textarea">
                    <input
                      type="text"
                      name="contact-name"
                      id="contact-name"
                      value=" "
                      required
                    />
                  </div>
                </li>

                <li className="wow fadeInUp" data-wow-delay="1.4s">
                  <label for="contact-email">Email:</label>
                  <div className="textarea">
                    <input
                      type="email"
                      name="contact-email"
                      id="contact-email"
                      value=" "
                      required
                    />
                  </div>
                </li>

                <li className="wow fadeInUp" data-wow-delay="1.4s">
                  <label for="contact-project">Message:</label>
                  <div className="textarea">
                    <textarea
                      name="contact-project"
                      id="contact-project"
                      rows="7"
                      required
                    ></textarea>
                  </div>
                </li>
              </ul>

              <button
                type="submit"
                id="contact-submit"
                className="send wow fadeInUp"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!---------------where form section ends---------------> */}
      <div className="whitespace"></div>
    </>
  );
};

export default Contact;
