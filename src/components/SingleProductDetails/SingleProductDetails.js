import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../Styles/Container.styles";
import "./SingleProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const SingleProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const url = "/fakeData/allProducts.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setProductDetails(data.find((product) => product.id === productId))
      );
  }, []);

  return (
    <div className="single-product-details-container">
      <div className="page-title">
        <h2>Product Details</h2>
      </div>
      <Container>
        <div className="single-product-details-inner-container">
          <div className="single-product-details-image-container">
            <img src={productDetails?.productImage} alt="" />
          </div>
          <div className="single-product-details-content">
            <h2>{productDetails?.productName}</h2>
            <p>
              <Rating
                initialRating={productDetails.rating}
                readonly
                fullSymbol={<FontAwesomeIcon className="icons" icon={faStar} />}
                emptySymbol={
                  <FontAwesomeIcon className="icons" icon={faStarHalfStroke} />
                }
              />
            </p>
            <span className="reg-price">{productDetails.discountPrice}</span>
            <span className="desc-price">{productDetails.regularPrice}</span>
            <p className="product-desc">{productDetails.desc}</p>
            <Link className="cart-btn" to="#">
              Add To Cart{" "}
              <FontAwesomeIcon className="cart-icon" icon={faHeart} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProductDetails;
