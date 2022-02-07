import React from "react";
import "./FeaturedProduct.css";

const FeaturedProduct = (props) => {
  const { productName, code, price, image } = props.product;
  return (
    <div className="fp-body">
      <div className="card">
        <div className="img-body">
          <img src={image} alt="" />
        </div>
        <div className="card-content">
          <h3>{productName}</h3>
          <p>Code: {code}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
