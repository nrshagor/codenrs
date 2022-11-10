import React from "react";
import "./About.css";
import about from "../../Image/Hero/heroLeft.svg";
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
                Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend
                et tiram.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
