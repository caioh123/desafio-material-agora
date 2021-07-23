import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { useParams } from "react-router";
import {
  MainContainer,
  Container,
  MainSectionDetails,
  HeroTitle,
  HeroGender,
  HeroFullName,
  AliasesContainer,
  StatsContainer,
} from "./HeroDetails.elements";
import axios from "axios";

export const HeroDetails = () => {
  const { id } = useParams();

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

  console.log(hero);

  return (
    <>
      <Navbar />
      <MainContainer>
        {hero && (
          <>
            <Container>
              <img alt={hero.name} src={hero.image.url} />
              <MainSectionDetails>
                <div>
                  <HeroTitle>{hero.name}</HeroTitle>
                  <HeroGender>{hero.appearance.gender}</HeroGender>
                </div>
                <AliasesContainer>
                  <HeroTitle>Apelido:</HeroTitle>
                  <HeroFullName>{hero.biography.aliases[0]}</HeroFullName>
                </AliasesContainer>
                <h1>Status de poder</h1>
              </MainSectionDetails>
            </Container>
          </>
        )}
      </MainContainer>
    </>
  );
};
