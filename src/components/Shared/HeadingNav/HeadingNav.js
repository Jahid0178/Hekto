import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Styles/Container.styles";
import "./HeadingNav.css";

const HeadingNav = () => {
  return (
    <div className="heading-nav-container">
      <Container>
        <div className="heading-nav-content">
          <div>
            <span className="email">zahidul.haque767@gmail.com</span>
            <span className="phone">(+88) 01789-293801</span>
          </div>
          <div className="information-content">
            <Link className="headingNav-link" to="#">
              English
            </Link>
            <Link className="headingNav-link" to="#">
              USD
            </Link>
            <Link className="headingNav-link" to="/sign-in">
              Login
            </Link>
            <Link className="headingNav-link" to="#">
              Wishlist
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeadingNav;
