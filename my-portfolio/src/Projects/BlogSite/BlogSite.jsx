import React from "react";
import "./BlogSite.css";
import BlogHomePage from "../../imgPF/blog-site-home-page.png";
import BlogPostPage from "../../imgPF/blog-site-post-page.png";
import BlogSiteGif from "../../imgPF/blog-site.gif";
import { Link, Outlet } from "react-router-dom";

const BlogSite = () => {
  return (
    <>
      <div className="whitespace"></div>
      {/* <!---------------where hero section starts-------------> */}
      <div className="container">
        <div className="hero-content" id="blogSite">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <br />
              <h1 className="wow fadeInUp" data-wow-delay="1s">
                Blog Site
              </h1>
              <br />
              <br />

              <div className="row">
                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.2s">
                    role :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                    Full-Stack Engineer
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.4s">
                    started :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                    10 Feb 2023
                  </h6>
                </div>

                <div className="col-lg-4">
                  <p className="wow fadeInUp" data-wow-delay="1.6s">
                    completed :
                  </p>
                  <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                    10 Feb 2023
                  </h6>
                </div>
              </div>
              <br />
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                This project was for me to learn Next.js & GraphQL. After doing
                so, I decided to build a blog site with it. I used GraphCMS to
                create the data schema and content. I also used Next.js &
                React.js for the frontend and routing.I used GraphQL to fetch
                the data from GraphCMS and display it on the site. (The only
                issue I had was getting the font to look the same in the
                deployed site as it did in development. As is seen by my
                mulitple commits on github. 🤦🏽‍♀️)
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                I learned Next.js & GraphQL in the same day that I built this.
              </p>
              <p className="wow fadeInUp" data-wow-delay="1.8s">
                You can check out the site
                <a
                  href="https://vanessa-blog-site.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                >
                  &nbsp;Here
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where hero section ends--------------->

        <!---------------where project image starts------------> */}
      <div className="project-img">
        <div className="container">
          <br />
          <br />
          <div className="row col-lg-12" id="blogSite">
            <div className="col">
              <img
                src={BlogSiteGif}
                alt="gif of blog site flow"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Blog Site in Action</h2>
            </div>
            <div className="col">
              <img
                src={BlogHomePage}
                alt="blog site home page"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Blog Site Home Page</h2>
            </div>
            <div className="col">
              <img
                src={BlogPostPage}
                alt="blog post page"
                className="wow fadeInLeft"
                data-wow-delay={(onloadedmetadata = "2s")}
              />
              <h2>Blog Post Page</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!---------------where project image ends--------------> */}
      <br />
      <br />
      {/* <!---------------where project nav starts--------------> */}
      <div className="project-nav" id="arrows">
        <div className="container">
          <div className="row">
            <Link
              className="col-lg-6 no-underline prev"
              to="/projects/bank-app"
            >
              <p id="prev">
                <ion-icon name="arrow-back"></ion-icon>
                previous
              </p>
            </Link>

            <Link
              className="col-lg-6 no-underline next"
              to="/projects/personal-portfolio"
            >
              <p id="next">
                next
                <ion-icon name="arrow-forward"></ion-icon>
              </p>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
      {/* <!---------------where project nav end-----------------> */}
      <div className="whitespace"></div>
    </>
  );
};

export default BlogSite;
