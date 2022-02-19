import React from "react";
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
            <span>English</span>
            <span>USD</span>
            <span>Login</span>
            <span>Wishlist</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeadingNav;
