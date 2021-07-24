import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.main`
  flex: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgb(25, 25, 32);

  @media (max-width: 750px) {
    height: 100vh;
  }
`;

export const LeftContainer = styled.section`
  border-radius: 50%;
  width: 50%;
  background-image: url("https://media2.giphy.com/media/10ADhj1QPawFna/giphy.gif?cid=790b76115cc079a96d68734d4973c9b0");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90%;
  display: flex;
  align-self: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RightContainer = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Overlay = styled.div`
  border-radius: 49%;
  width: 50%;
  height: 90%;
  top: 10;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
  position: absolute;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div``;

export const SubmitButton = styled(Link)`
  box-shadow: inset 1px 2px 2px 1px #ffffff;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 42px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #000;
  font-family: Verdana;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 7px 24px;
  text-decoration: none;
  align-self: center;
  width: 45%;
  display: flex;
  justify-content: center;

  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

export const MainRightContainer = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 24px;
  width: 80%;
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 60%;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  max-width: 90%;
  align-self: center;

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

export const MainDesc = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;

  @media (max-width: 750px) {
    font-size: 1.3rem;
  }
`;
