import React from "react";
import Container from "../../Styles/Container.styles";
import "./OurClient.css";

const OurClient = () => {
  return (
    <div className="our-client-container">
      <Container>
        <div className="client-logo-content">
          <img
            src="https://i.ibb.co/yWXq55R/our-client.png"
            alt="Clients Logo"
          />
        </div>
      </Container>
    </div>
  );
};

export default OurClient;
