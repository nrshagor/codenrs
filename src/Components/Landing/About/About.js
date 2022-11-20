import React from "react";
import "./About.css";
import about from "../../Image/Hero/heroLeft.png";
const About = () => {
  return (
    <section>
      <div id="About">
        <div className="about">
          <div className="aboutTitle">
            <h1>About US</h1>
          </div>
          <div className="aboutItem">
            <div className="aboutLeft">
              <img src={about} alt="" />
            </div>
            <div className="aboutRight">
              <h1>Who We Are</h1>
              <p>
                CODENRS is a premier provider of software development and
                testing services. Having talented software engineers on board,
                we craft compelling web, desktop, and mobile applications for
                our clients.
              </p>
              <p>
                Our main focus is to deliver high-quality and scalable custom
                and new applications. We focus our diligent coding abilities and
                integrate the latest development trends, and best practices
                available in the industry to create plugins that help
                individuals or companies with eCommerce, Project Management, and
                Enterprise Solutions. We love simplicity and intuitiveness, so
                all of our products are user-centric and designed to be Front
                End friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
