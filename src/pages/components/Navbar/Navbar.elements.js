import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Container } from '../../../GlobalStyle';


export const Nav = styled.nav`
  background: black;
  display: flex;
  max-width: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 1,2rem;
  z-index: 999;

  @media (max-width: 750px) {
    width: 100vw;
  
}
  
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  width: 100vw;

  @media (max-width: 750px) {
    
    justify-content: space-between;
  
}
  
`;


export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  .img {
    width: 100px;
    height: 90px;
    display: block;
  }


`;

export const NavItem = styled.p`
color: white;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  font-size: 2.5rem;


  @media (max-width: 750px) {    
    font-size: 1.7rem;
  
}

@media (max-width: 500px) {    
    display: none;
}
`;
