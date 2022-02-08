import React from "react";
import Container from "../../Styles/Container.styles";
import PrimaryBtn from "../../Styles/Primary.btn.styles";
import TitleHeader from "../../Styles/TitleHeader.styles";
import "./DiscountProduct.css";

const DiscountProduct = () => {
  return (
    <div>
      <Container>
        <TitleHeader>Discount Product</TitleHeader>
        <div className="discount-product-container">
          <div className="discount-product-content">
            <h2 className="discount-header">20% Discount Of All Products</h2>
            <span className="product-name">Eams Sofa Compact</span>
            <p className="product-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <div className="product-details-container">
              <div className="product-details">
                <p>
                  <i class="fa-solid fa-check" /> Material expose like metals
                </p>
              </div>
              <div className="product-details">
                <p>
                  <i class="fa-solid fa-check" /> Clear lines and geomatric
                  figures
                </p>
              </div>
              <div className="product-details">
                <p>
                  <i class="fa-solid fa-check" /> Simple neutral colours.
                </p>
              </div>
              <div className="product-details">
                <p>
                  <i class="fa-solid fa-check" /> Material expose like metals
                </p>
              </div>
            </div>
            <PrimaryBtn>Shop Now</PrimaryBtn>
          </div>
          <div>
            <img
              src="https://i.ibb.co/st2tmXh/discount-chair.png"
              alt="Discount Product"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiscountProduct;
