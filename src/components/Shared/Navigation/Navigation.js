import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../../Styles/Navbar.styles";
import Logo from "../../../assets/Home/Hekto.png";
import Container from "../../Styles/Container.styles";
import "./Navigation.css";
const Navigation = () => {
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
          <li className="nav-li">
            <NavLink
              style={{ textDecoration: "none" }}
              to="pages"
              className="nav-link"
            >
              Pages
            </NavLink>
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
