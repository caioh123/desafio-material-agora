import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  background-color: rgb(25, 25, 32);
  height: 90.4vh;
  width: 100%;
`;

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 24px;
  width: 80%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 50vh;
  }

  @media (max-width: 1000px) {
    img {
      display: none;
    }
  }

  @media (max-width: 376px) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const HeroContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 60px;
`;

export const MainSectionDetails = styled.section`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export const AliasesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 5px;
  width: 300px;

  @media (max-width: 376px) {
    font-size: 1.5rem;
  }
`;

export const HeroTitleStats = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
  margin-top: 50px;
`;

export const HeroFullName = styled.p`
  font-size: 1.5rem;
  width: 100%;
  margin-left: 50px;
`;

export const HeroGender = styled.h2`
  opacity: 0.5;
`;

export const StatusContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 50%;
  flex-direction: column;
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 80vh;
`;

export const StatTitle = styled.p`
  font-size: 1.5rem;
`;

export const StatValue = styled.p`
  font-size: 1.3rem;
  margin-left: 15px;
`;

export const SubmitButton = styled.button`
  width: 300px;
  margin-top: 30px;
  height: 45px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  @media (max-width: 670px) {
    width: 250px;
    margin-top: 50px;
  }

  @media (max-width: 376px) {
    margin-top: 80px;
    width: 210px;
  }
`;

export const ButtonText = styled.p`
  font-size: 1.1rem;

  @media (max-width: 376px) {
    font-size: 1rem;
  }
`;
