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
                <div>
                  <HeroTitle>{hero.name}</HeroTitle>
                  <HeroGender>{hero.appearance.gender}</HeroGender>
                </div>
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
                    Inteligência:{hero.powerstats.intelligence}
                  </StatContainer>
                  <StatContainer>
                    Força:
                    {hero.powerstats.strength}
                  </StatContainer>
                  <StatContainer>
                    Velocidade:{hero.powerstats.speed}
                  </StatContainer>
                  <StatContainer>
                    Durabilidade:{hero.powerstats.durability}
                  </StatContainer>
                  <StatContainer>
                    Poder:
                    {hero.powerstats.power}
                  </StatContainer>
                  <StatContainer>
                    Combate:{hero.powerstats.combat}
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
