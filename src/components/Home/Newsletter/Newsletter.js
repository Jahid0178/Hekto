import React from "react";
import PrimaryBtn from "../../Styles/Primary.btn.styles";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newslater-container">
      <div className="newslater-content">
        <h2>
          Get Latest Update By Subscribe <br /> Our Newslater
        </h2>
        <PrimaryBtn>Shop Now</PrimaryBtn>
      </div>
    </div>
  );
};

export default Newsletter;
