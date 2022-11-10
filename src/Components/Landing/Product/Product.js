import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <section id="Product">
      <div className="product">
        <div className="productTitle">Our Product</div>
        <div className="productItem">
          <div className="productCard">
            <div className="productCardImg">
              <i class="fa-solid fa-message"></i>
            </div>
            <div className="productCardInfo">
              <h1>School Management System</h1>
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
              <h1>Store Management System</h1>
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
              <h1>Document Maker</h1>
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
  );
};

export default Product;
