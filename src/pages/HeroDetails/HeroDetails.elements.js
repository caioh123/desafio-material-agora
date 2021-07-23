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
  border-radius: 4px;
  width: 80%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    height: 50vh;
  }
`;

export const MainSectionDetails = styled.section`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

export const AliasesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 60%;
`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const HeroFullName = styled.p`
  font-size: 1.5rem;
`;

export const HeroGender = styled.h2`
  opacity: 0.5;
`;

export const StatsContainer = styled.section``;
