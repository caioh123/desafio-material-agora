import React, { useState, useEffect } from "react";

import {
  ButtonContent,
  Container,
  InfoContent,
  Price,
} from "./HeroCard.elements";
import axios from "axios";
import { Link } from "react-router-dom";

export const HeroCard = ({ name, image, publisher, handleDetails, id }) => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    axios.get(`https://www.superheroapi.com/api.php/10219177700206566/${id}`);
  }, []);

  return (
    <Container onClick={() => handleDetails(id)}>
      <InfoContent>
        <img alt={name} src={image} />

        <Price>{name}</Price>
      </InfoContent>
      <ButtonContent>
        <p>Clique aqui para acessar detalhes</p>
      </ButtonContent>
    </Container>
  );
};
