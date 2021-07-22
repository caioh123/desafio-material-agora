import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import axios from 'axios'
import { HeroCard } from '../components/HeroCard/HeroCard'
import { Container, InputContainer, NavbarContainer } from './HeroesPage.elements'

export const HeroesPage = () => {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  const searchSuperHeroes = async () => {
    const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
    const data = await response.json();
    console.log("searchSuperHeroes -> data", data.results)

    setSuperheroData(data.results);
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value;

    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setSuperheroData([]);
    }
    if (searchTerm.length > 1) {
      searchSuperHeroes();
    }
  }


  return (
    <>
      <Navbar />
      <InputContainer>
        <input placeholder="Procure seu herói favorito" onChange={handleChange} value={searchText} />
      </InputContainer>
      <Container>
        {superheroData && superheroData.map((hero, index) => (
          <HeroCard image={hero.image.url} name={hero.name} />
        ))}
      </Container>
    </>
  )
}