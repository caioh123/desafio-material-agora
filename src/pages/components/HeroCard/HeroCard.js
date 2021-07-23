import React, { useState, useEffect } from "react";

import {
  ButtonContent,
  Container,
  InfoContent,
  Price,
} from "./HeroCard.elements";
import axios from "axios";
import { Link } from "react-router-dom";

export const HeroCard = ({ name, image, id }) => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(
        `https://www.superheroapi.com/api.php/10219177700206566/${id}`
      );

      setHero(response.data);
    };

    fetchResults();
  }, []);

  return (
    <Link to={`/hero/details/${hero.id}`}>
      <Container>
        <InfoContent>
          <img alt={name} src={image} />

          <Price>{name}</Price>
        </InfoContent>
        <ButtonContent>
          <p>Clique aqui para acessar detalhes</p>
        </ButtonContent>
      </Container>
    </Link>
  );
};
