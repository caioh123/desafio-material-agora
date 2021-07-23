import React from "react";
import { Container, TextButton } from "./Button.elements";

export const Button = ({ environment, handleEnvironmentSelected, onClick }) => {
  return (
    <Container onClick={() => console.log(environment)}>
      <TextButton>{environment}</TextButton>
    </Container>
  );
};
