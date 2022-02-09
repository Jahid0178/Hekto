import React from "react";
import Container from "../Styles/Container.styles";
import "./ContactUs.css";
import contactImage from "../../assets/Contact/contact-img.png";

const ContactUs = () => {
  return (
    <div>
      <div className="page-title">
        <h1>Contact Us</h1>
      </div>
      <Container>
        <div>
          <div className="contact-container">
            <div>
              <h2 className="about-us-header">Information About us</h2>
              <p className="about-us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
            </div>
            <div>
              <h2 className="contact-header">Contact Way</h2>
              <div className="contact-way-container">
                <div className="contact-content">
                  <p>Tel: +877-67-88-99</p>
                  <p>Email: Shop@store.com</p>
                </div>
                <div className="contact-content">
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
                <div className="contact-content">
                  <p>20 Margaret st, London</p>
                  <p>Great britain, 3NM98-LK</p>
                </div>
                <div className="contact-content">
                  <p>
                    Free standard shipping <br /> on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-container">
            <div></div>
            <div>
              <img src={contactImage} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
