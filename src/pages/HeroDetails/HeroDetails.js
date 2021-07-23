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
  StatusContainer,
  StatContainer,
  HeroTitleStats,
  StatValue,
  StatTitle,
  HeroContainer,
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

    console.log(hero);
    fetchResults();
  }, []);

  console.log(hero);

  return (
    <>
      <Navbar />
      <MainContainer>
        {hero.name && (
          <>
            <Container>
              <img alt={hero.name} src={hero.image.url} />
              <MainSectionDetails>
                <HeroContainer>
                  <HeroTitle>{hero.name}</HeroTitle>
                  <HeroGender>{hero.appearance.gender}</HeroGender>
                </HeroContainer>
                <AliasesContainer>
                  <HeroTitle>Apelido:</HeroTitle>
                  <HeroFullName>
                    {hero.biography.aliases[0] === "-"
                      ? "Null"
                      : hero.biography.aliases[0]}
                  </HeroFullName>
                </AliasesContainer>
                <StatusContainer>
                  <HeroTitleStats>Status de poder</HeroTitleStats>
                  <StatContainer>
                    <StatTitle>Inteligência: </StatTitle>
                    <StatValue>{hero.powerstats.intelligence}</StatValue>
                  </StatContainer>
                  <StatContainer>
                    <StatTitle>Força:</StatTitle>
                    <StatValue>{hero.powerstats.strength}</StatValue>
                  </StatContainer>
                  <StatContainer>
                    <StatTitle>Velocidade:</StatTitle>
                    <StatValue>{hero.powerstats.speed}</StatValue>
                  </StatContainer>
                  <StatContainer>
                    <StatTitle>Durabilidade:</StatTitle>
                    <StatValue>{hero.powerstats.durability}</StatValue>
                  </StatContainer>
                  <StatContainer>
                    <StatTitle>Poder:</StatTitle>
                    <StatValue>{hero.powerstats.power}</StatValue>
                  </StatContainer>
                  <StatContainer>
                    <StatTitle>Combate:</StatTitle>
                    <StatValue>{hero.powerstats.combat}</StatValue>
                  </StatContainer>
                </StatusContainer>
              </MainSectionDetails>
            </Container>
          </>
        )}
      </MainContainer>
    </>
  );
};
