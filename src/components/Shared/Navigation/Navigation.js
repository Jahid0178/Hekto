import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../../Styles/Navbar.styles";
import Logo from "../../../assets/Home/Hekto.png";
import NavLi from "../../Styles/Navbar.li.styles";
import NavUl from "../../Styles/Navbar.ul.styles";
import Container from "../../Styles/Container.styles";

const Navigation = () => {
  return (
    <Container>
      <Nav>
        <div>
          <img src={Logo} alt="" />
        </div>
        <NavUl>
          <NavLi>
            <NavLink style={{ textDecoration: "none" }} to="home">
              Home
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink style={{ textDecoration: "none" }} to="pages">
              Pages
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink style={{ textDecoration: "none" }} to="products">
              Products
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink style={{ textDecoration: "none" }} to="blog">
              Blog
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink style={{ textDecoration: "none" }} to="shop">
              Shop
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink style={{ textDecoration: "none" }} to="contact">
              Contact
            </NavLink>
          </NavLi>
        </NavUl>
      </Nav>
    </Container>
  );
};

export default Navigation;
