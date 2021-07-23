import React from "react";
import {
  LeftContainer,
  Overlay,
  SubmitButton,
  RightContainer,
  MainContainer,
  MainTitle,
  MainRightContainer,
  MainDesc,
} from "./HomePage.elements";

export const HomePage = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Overlay />
      </LeftContainer>
      <RightContainer>
        <MainRightContainer>
          <MainTitle>O mundo corre grande perigo</MainTitle>
          <MainDesc>
            O planeta Terra está prestes a ser destruído e só você pode nos
            ajudar escolhendo o herói de sua preferência para salvar o mundo
          </MainDesc>
          <SubmitButton to="/heroes">Acessar a lista</SubmitButton>
        </MainRightContainer>
      </RightContainer>
    </MainContainer>
  );
};
