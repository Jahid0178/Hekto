import React from "react";
import Container from "../../Styles/Container.styles";
import PrimaryBtn from "../../Styles/Primary.btn.styles";
import "./Banner.css";
import PromotionalImg from "../../../assets/Home/sofa promotional header.png";

const Banner = () => {
  return (
    <div className="banner-body">
      <Container>
        <div className="banner-container">
          <div className="banner-content">
            <h6>Best Furniture For Your Castle....</h6>
            <h1>
              New Furniture Collection <br /> Trends in 2020
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              autem vero, placeat similique et excepturi optio hic! Sunt error
              et aperiam, dolor quo veniam reiciendis iste porro quasi tenetur
              consequuntur.
            </p>
            <PrimaryBtn>Shop Now</PrimaryBtn>
          </div>
          <div className="promotional-img-container">
            <img className="promotional-img" src={PromotionalImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
