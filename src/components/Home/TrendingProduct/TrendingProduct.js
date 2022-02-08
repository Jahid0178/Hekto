import React from "react";
import "./TrendingProduct.css";

const TrendingProduct = (props) => {
  const { productName, image, discountPrice, price } = props.product;
  return (
    <>
      <div className="trending-product-box">
        <div className="trending-product-image-container">
          <img className="trending-product-image" src={image} alt="" />
        </div>
        <div className="trending-product-details">
          <h3>{productName}</h3>
          <div>
            <span className="discount-price">{discountPrice}</span>
            <span className="price">{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
