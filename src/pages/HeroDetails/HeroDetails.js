import React, { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  SubmitButton,
  HeroContainer,
  ButtonText,
} from "./HeroDetails.elements";
import axios from "axios";

export const HeroDetails = () => {
  const { id } = useParams();

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

  const notify = () =>
    toast.success(
      `Parabéns, voce escolheu o(a) herói ${hero.name} para salvar o mundo!`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  return (
    <>
      <Navbar />
      <ToastContainer />
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
                <SubmitButton onClick={() => notify()}>
                  <ButtonText>
                    Escolher esse herói para salvar o mundo
                  </ButtonText>
                </SubmitButton>
              </MainSectionDetails>
            </Container>
          </>
        )}
      </MainContainer>
    </>
  );
};
