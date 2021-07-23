import React from "react";
import { Container, Overlay, SubmitButton } from "./HomePage.elements";

export const HomePage = () => {
  return (
    <>
      <Overlay />
      <Container>
        <SubmitButton to="/heroes">
          Clique aqui para escolher seu herói e salvar o mundo!
        </SubmitButton>
      </Container>
    </>
  );
};
