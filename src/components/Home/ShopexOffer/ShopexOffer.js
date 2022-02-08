import React from "react";
import Container from "../../Styles/Container.styles";
import TitleHeader from "../../Styles/TitleHeader.styles";
import "./ShopexOffer.css";

const ShopexOffer = () => {
  return (
    <div className="shopex-container">
      <Container>
        <TitleHeader>What Shopex Offer!</TitleHeader>
        <div className="offer-container">
          <div className="offer-box">
            <img
              src="https://i.ibb.co/ZctkmGp/free-delivery-1.png"
              alt="Free Delivery"
            />
            <h3 className="offer-header">Free Delivery Support</h3>
            <p className="offer-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="offer-box">
            <img
              src="https://i.ibb.co/mXh222g/cashback-1.png"
              alt="Cash Back"
            />
            <h3 className="offer-header">Cashback Support</h3>
            <p className="offer-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="offer-box">
            <img
              src="https://i.ibb.co/L5yyYMn/premium-quality-1.png"
              alt="Premium Quality"
            />
            <h3 className="offer-header">Premium Quality</h3>
            <p className="offer-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
          <div className="offer-box">
            <img
              src="https://i.ibb.co/7WKK3BF/24-hours-support-1.png"
              alt="24 Hour Support"
            />
            <h3 className="offer-header">24 Hour Support</h3>
            <p className="offer-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopexOffer;
