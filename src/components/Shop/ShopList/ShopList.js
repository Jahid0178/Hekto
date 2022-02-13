import React from "react";
import Rating from "react-rating";
import "./ShopList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

const ShopList = (props) => {
  const {
    productImage,
    productName,
    regularPrice,
    discountPrice,
    desc,
    rating,
  } = props.product;
  return (
    <>
      <div className="shop-list-container">
        <div className="shop-list-img-container">
          <img className="product-image" src={productImage} alt={productName} />
        </div>
        <div className="shop-list-content">
          <h2>{productName}</h2>
          <span className="reg-price">{regularPrice}</span>
          <span className="desc-price">{discountPrice}</span>
          <span>
            <Rating
              initialRating={rating}
              readonly
              fullSymbol={<FontAwesomeIcon className="icons" icon={faStar} />}
              emptySymbol={
                <FontAwesomeIcon className="icons" icon={faStarHalfStroke} />
              }
            />
          </span>
          <p className="product-desc">{desc}</p>
          <div className="shop-list-button-container">
            <button className="shop-list-btn">
              <FontAwesomeIcon className="btn-icon" icon={faShoppingCart} />
            </button>
            <button className="shop-list-btn">
              <FontAwesomeIcon className="btn-icon" icon={faHeart} />
            </button>
            <button className="shop-list-btn">
              <FontAwesomeIcon
                className="btn-icon"
                icon={faMagnifyingGlassPlus}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
