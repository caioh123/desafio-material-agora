import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { HeroCard } from "../components/HeroCard/HeroCard";
import {
  Container,
  InputContainer,
  CategoryTitle,
  EmptyInput,
} from "./HeroesPage.elements";
import axios from "axios";

export const HeroesPage = () => {
  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);

  const publishers = superheroData?.map((hero) => hero.biography.publisher);

  const set = new Set(publishers);

  const searchSuperHeroes = async () => {
    const response = await axios.get(
      `https://www.superheroapi.com/api.php/${process.env.REACT_APP_KEY_API}/search/${searchText}`
    );

    setSuperheroData(response.data.results);
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 1) {
      searchSuperHeroes();
    }
  };

  return (
    <>
      <Navbar />
      <InputContainer>
        <input
          placeholder="Procure seu herói favorito"
          onChange={handleChange}
          value={searchText}
        />
      </InputContainer>

      <Container>
        {!![...set].length ? (
          [...set].map((publisher, index) => (
            <React.Fragment key={index}>
              <CategoryTitle>{publisher}</CategoryTitle>
              {superheroData.map((hero, index) => {
                return hero.biography.publisher === publisher ? (
                  <HeroCard
                    key={index}
                    name={hero.name}
                    image={hero.image.url}
                    publisher={hero.biography.publisher}
                    id={hero.id}
                  />
                ) : null;
              })}
            </React.Fragment>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <EmptyInput>
              Por favor, busque o nome do herói na barra de pesquisa acima
            </EmptyInput>
          </div>
        )}
      </Container>
    </>
  );
};
