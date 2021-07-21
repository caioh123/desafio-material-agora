import React from 'react'
import { Nav, NavLogo, NavbarContainer, NavItem } from './Navbar.elements'

export const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>


        <NavLogo to="/heroes">
          <img className="img" src="https://pbs.twimg.com/media/DfiY76qXUAER0EI.jpg" />
        </NavLogo>

        <NavItem>SUPERHEROES</NavItem>
      </NavbarContainer>
    </Nav>
  )
}