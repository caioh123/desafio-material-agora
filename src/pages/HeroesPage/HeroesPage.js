import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { HeroCard } from "../components/HeroCard/HeroCard";
import {
  Container,
  InputContainer,
  CategoryTitle,
} from "./HeroesPage.elements";

export const HeroesPage = () => {
  const [searchText, setSearchText] = useState("");
  const [superheroData, setSuperheroData] = useState([]);

  const publishers = superheroData?.map((hero) => hero.biography.publisher);

  const set = new Set(publishers);

  const searchSuperHeroes = async () => {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`
    );
    const data = await response.json();

    setSuperheroData(data.results);
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 2) {
      searchSuperHeroes();
    }
  };

  const handleDetails = (id) => {
    console.log(id);
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
          [...set].map((publisher) => (
            <>
              <CategoryTitle>{publisher}</CategoryTitle>
              {superheroData.map((hero, index) => {
                return hero.biography.publisher === publisher ? (
                  <HeroCard
                    handleDetails={handleDetails}
                    key={index}
                    name={hero.name}
                    image={hero.image.url}
                    publisher={hero.biography.publisher}
                    id={hero.id}
                  />
                ) : null;
              })}
            </>
          ))
        ) : (
          <p>o</p>
        )}
      </Container>
    </>
  );
};
