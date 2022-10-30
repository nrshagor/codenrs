import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <div>
      <section id="Product">
        <div className="product">
          <div className="productTitle">Our Product</div>
          <div className="productItem">
            <div className="productCard">
              <div className="productCardImg">
                <i class="fa-solid fa-message"></i>
              </div>
              <div className="productCardInfo">
                <h1> SEO Optimization</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque animi consequatur porro, quasi numquam cupiditate!
                  Debitis sunt delectus repellendus vel cumque nesciunt incidunt
                  modi, at, in distinctio sit quisquam quibusdam.
                </p>
              </div>
            </div>
            <div className="productCard">
              <div className="productCardImg">
                <i class="fa-solid fa-desktop"></i>
              </div>
              <div className="productCardInfo">
                <h1>Digital Marketing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque animi consequatur porro, quasi numquam cupiditate!
                  Debitis sunt delectus repellendus vel cumque nesciunt incidunt
                  modi, at, in distinctio sit quisquam quibusdam.
                </p>
              </div>
            </div>

            <div className="productCard">
              <div className="productCardImg">
                <i class="fa-solid fa-code"></i>
              </div>
              <div className="productCardInfo">
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

export default Product;
