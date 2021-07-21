import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Container } from '../../../GlobalStyle';


export const Nav = styled.nav`
  background: black;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1, 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  
`;


export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  .img {
    width: 100px;
    height: 90px;
    display: block;
    text-indent: -9999px;
  }
`;

export const NavItem = styled.p`
color: white;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

`;
