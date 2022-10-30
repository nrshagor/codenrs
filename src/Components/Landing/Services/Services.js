import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div>
      <section id="Services">
        <div className="services">
          <div className="servicesTitle">Our Services</div>
          <div className="servicesItem">
            <div className="servicesCard">
              <div className="servicesCardImg">
                <i class="fa-solid fa-message"></i>
              </div>
              <div className="servicesCardInfo">
                <h1> SEO Optimization</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque animi consequatur porro, quasi numquam cupiditate!
                  Debitis sunt delectus repellendus vel cumque nesciunt incidunt
                  modi, at, in distinctio sit quisquam quibusdam.
                </p>
              </div>
            </div>
            <div className="servicesCard">
              <div className="servicesCardImg">
                <i class="fa-solid fa-desktop"></i>
              </div>
              <div className="servicesCardInfo">
                <h1>Digital Marketing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque animi consequatur porro, quasi numquam cupiditate!
                  Debitis sunt delectus repellendus vel cumque nesciunt incidunt
                  modi, at, in distinctio sit quisquam quibusdam.
                </p>
              </div>
            </div>

            <div className="servicesCard">
              <div className="servicesCardImg">
                <i class="fa-solid fa-code"></i>
              </div>
              <div className="servicesCardInfo">
                <h1>Mobile & Website Development</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque animi consequatur porro, quasi numquam cupiditate!
                  Debitis sunt delectus repellendus vel cumque nesciunt incidunt
                  modi, at, in distinctio sit quisquam quibusdam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
