import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 350px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
  transition: all ease 0.3s;
  :hover {
    transform: scale(1);
    cursor: pointer;
  }

  @media (max-width: 750px) {
    width: 250px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  width: 100%;
  flex: 7;
  flex-direction: column;
  align-items: center;
  img {
    height: 180px;
    margin: 0.8rem 0;
  }
`;

export const HeroName = styled.p`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  outline: none;
`;

export const ButtonContent = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 15rem;
  border-radius: 5px;
  border: none;
  margin: 0.8rem 0.5rem;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font-size: 0.8rem;
`;
