import React, { useState, useEffect } from "react";

import {
  ButtonContent,
  Container,
  InfoContent,
  HeroName,
  ButtonText,
} from "./HeroCard.elements";
import axios from "axios";
import { Link } from "react-router-dom";

export const HeroCard = ({ name, image, id }) => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(
        `https://www.superheroapi.com/api.php/${process.env.REACT_APP_KEY_API}/${id}`
      );

      setHero(response.data);
    };

    fetchResults();
  }, [id]);

  return (
    <Link to={`/hero/details/${hero.id}`}>
      <Container>
        <InfoContent>
          <img alt={name} src={image} />

          <HeroName>{name}</HeroName>
        </InfoContent>
        <ButtonContent>
          <ButtonText>Clique aqui para acessar detalhes</ButtonText>
        </ButtonContent>
      </Container>
    </Link>
  );
};
