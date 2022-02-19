import React from "react";
import Container from "../../Styles/Container.styles";
import PrimaryBtn from "../../Styles/Primary.btn.styles";
import "./TrendingProductsBanner.css";

const TrendingProductsBanner = () => {
  return (
    <div className="tpb-container">
      <Container>
        <div className="trending-products-box">
          <div className="trending-products-content">
            <div>
              <img
                className="trending-image"
                src="https://i.ibb.co/4p1CGgK/trending-product.png"
                alt="Trending Product"
              />
            </div>
            <div>
              <h2 className="trending-title">
                Unique Features Of latest & <br /> Trending Products
              </h2>
              <p className="trending-desc">
                All frames constructed with hardwood solids and laminates
              </p>
              <p className="trending-desc">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
              <p className="trending-desc">
                Arms, backs and seats are structurally reinforced
              </p>
              <div>
                <PrimaryBtn>Add To Cart</PrimaryBtn>
                <span className="product-details">
                  <h5>B&B Italian Sofa</h5>
                  <p>$32.00</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingProductsBanner;
