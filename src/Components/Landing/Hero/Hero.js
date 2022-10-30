import React from "react";
import "./Hero.css";
import heroLeft1 from "../../Image/Hero/hero-banner.png";
const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero">
          <div className="heroLeft">
            <h1> We are available for Helping </h1>
            <p>
              A top tier software development team assisting owners and decision
              makers to implement digital initiatives to achieve lasting
              financial success
            </p>
          </div>
          <div className="heroRight">
            <img src={heroLeft1} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
