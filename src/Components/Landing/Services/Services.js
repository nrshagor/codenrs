import React from "react";
import seo from "../../Image/Services/seom.png";
import digital from "../../Image/Services/digital1.png";
import app from "../../Image/Services/mobileapp.png";
import wordpress from "../../Image/Services/wpress.png";
import shopify from "../../Image/Services/shopify.png";
import business from "../../Image/Services/business.png";
import portfolio from "../../Image/Services/portfolio1.png";
import businessmanagment from "../../Image/Services/businessmanagment.png";
import ecommarce from "../../Image/Services/ecommarce.png";
import "./Services.css";
const Services = () => {
  return (
    <section id="Services">
      <div className="services">
        <div className="servicesTitle">Our Services</div>
        <div className="servicesItem">
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={seo} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1> SEO Optimization</h1>
            </div>
          </div>
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={digital} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>Digital Marketing</h1>
            </div>
          </div>

          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={app} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>Mobile Apps Development</h1>
            </div>
          </div>
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={wordpress} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>Wordpress Development </h1>
            </div>
          </div>
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={shopify} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>Shopify Store Design </h1>
            </div>
          </div>
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={business} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>Profesional Business Website</h1>
            </div>
          </div>
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={portfolio} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>Protfolio Website </h1>
            </div>
          </div>
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={businessmanagment} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>Business Management Software </h1>
            </div>
          </div>
          <div className="servicesCard">
            <div className="servicesCardImg">
              <img src={ecommarce} alt="" />
            </div>
            <div className="servicesCardInfo">
              <h1>E-commers Website </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
