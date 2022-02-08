import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../../assets/Home/Hekto.png";
import Container from "../../Styles/Container.styles";
import FooterTitle from "../../Styles/FooterTitle.styles";
import PrimaryBtn from "../../Styles/Primary.btn.styles";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-upper-container">
      <Container>
        <div className="footer-container">
          <div>
            <img src={FooterLogo} alt="Hekto" />
            <div className="sign-up-container">
              <input
                className="email-input"
                type="email"
                placeholder="Enter Your Email"
              />
              <PrimaryBtn>Sign Up</PrimaryBtn>
            </div>
            <div className="contact-container">
              <span>Contact Info</span>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          <div>
            <FooterTitle>Categories</FooterTitle>
            <ul className="footer-ul">
              <li>
                <Link className="footer-link" to="#">
                  Laptops & Computers
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Cameras & Photography
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Smart Phones & Tablets
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Video Games & Consoles
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Waterproof Headphones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <FooterTitle>Customer Care</FooterTitle>
            <ul className="footer-ul">
              <li>
                <Link className="footer-link" to="#">
                  My Account
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Discount
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Returns
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Orders History
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <FooterTitle>Pages</FooterTitle>
            <ul className="footer-ul">
              <li>
                <Link className="footer-link" to="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Browse the Shop
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Category
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Pre-Built Pages
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Visual Composer Elements
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  WooCommerce Pages
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
