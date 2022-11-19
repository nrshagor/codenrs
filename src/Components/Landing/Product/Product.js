import React from "react";
import "./Product.css";
import school from "../../Image/Services/school.png";
import pos from "../../Image/Services/pos.jpg";
import document from "../../Image/Services/document.png";

const Product = () => {
  return (
    <section id="Product">
      <div className="product">
        <div className="productTitle">Our Product</div>
        <div className="productItem">
          <div className="productCard">
            <div className="productCardImg">
              <img src={school} alt="" />
            </div>
            <div className="productCardInfo">
              <h1>School Management System</h1>
            </div>
          </div>
          <div className="productCard">
            <div className="productCardImg">
              <img src={pos} alt="" />
            </div>
            <div className="productCardInfo">
              <h1>Store Management System</h1>
            </div>
          </div>
          <div className="productCard">
            <div className="productCardImg">
              <img src={document} alt="" />
            </div>
            <div className="productCardInfo">
              <h1>Document Maker</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
