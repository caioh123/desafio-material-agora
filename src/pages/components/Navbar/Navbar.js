import React from "react";
import { Nav, NavLogo, NavItem } from "./Navbar.elements";
import logo from "../../../assets/logo.png";

export const Navbar = () => {
  return (
    <Nav>
      <NavLogo to="/heroes">
        <img alt="heroes" className="img" src={logo} />
      </NavLogo>

      <NavItem>SUPERHEROES</NavItem>
    </Nav>
  );
};
