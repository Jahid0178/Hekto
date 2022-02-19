import React from "react";
import "./LatestProduct.css";

const LatestProduct = (props) => {
  const { productName, image, offerPrice, price } = props.product;
  return (
    <>
      <div className="latest-product-container">
        <div className="img-body">
          <img src={image} alt={productName} />
        </div>
        <div className="latest-product-content">
          <span className="product-name">{productName}</span>
          <div>
            <span className="offer-price">{offerPrice}</span>
            <span className="regular-price">{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
