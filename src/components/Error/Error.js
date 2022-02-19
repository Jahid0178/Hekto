import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../assets/404/404.png";
import OurClient from "../Home/OurClient/OurClient";
import Container from "../Styles/Container.styles";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <Container>
        <div>
          <h2 className="error-title">404 Not Found</h2>
          <div className="error-img-container">
            <img className="error-img" src={NotFound} alt="" />
            <Link className="back-to-home-btn" to="/">
              Back To Home
            </Link>
          </div>
          <OurClient />
        </div>
      </Container>
    </div>
  );
};

export default Error;
