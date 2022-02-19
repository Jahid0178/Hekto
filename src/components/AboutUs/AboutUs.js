import React from "react";
import Container from "../Styles/Container.styles";
import "./AboutUs.css";
import aboutBg from "../../assets/About-Us/about-us.png";
import PrimaryBtn from "../Styles/Primary.btn.styles";
import ShopexOffer from "../Home/ShopexOffer/ShopexOffer";

const AboutUs = () => {
  return (
    <>
      <div className="page-title">
        <h2>About Us</h2>
      </div>
      <div>
        <Container>
          <div className="about-us-container">
            <div className="about-bg-container">
              <img className="about-img" src={aboutBg} alt="" />
            </div>
            <div className="about-us-content">
              <h2>
                Know About Our Ecommerce <br /> Business, History
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <PrimaryBtn className="contact-us-btn">Contact Us</PrimaryBtn>
            </div>
          </div>
          <ShopexOffer />
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
