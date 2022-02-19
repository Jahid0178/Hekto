import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../../Styles/Navbar.styles";
import Logo from "../../../assets/Home/Hekto.png";
import Container from "../../Styles/Container.styles";
import "./Navigation.css";
const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <Nav>
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="nav-ul">
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              to="/home"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-li dropdown-menu">
            <NavLink
              style={{ textDecoration: "none" }}
              to="#"
              className="nav-link"
              onClick={() => setIsActive(!isActive)}
            >
              Pages
            </NavLink>
            {isActive && (
              <ul className="dropdown-btn">
                <li className="dropdown-item">
                  <NavLink className="dropdown-link" to="/about-us">
                    About Us
                  </NavLink>
                </li>
                <li className="dropdown-item">
                  <NavLink className="dropdown-link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              to="products"
              className="nav-link"
            >
              Products
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              to="blog"
              className="nav-link"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              to="shop"
              className="nav-link"
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              to="contact"
              className="nav-link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Navigation;
