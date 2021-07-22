import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import axios from 'axios'
import { HeroCard } from '../components/HeroCard/HeroCard'
import { Container, InputContainer, NavbarContainer, ButtonContainer, TextButton, ButtonContainerFilter } from './HeroesPage.elements'
import {Button} from '../components/Button/Button'

export const HeroesPage = () => {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

  const publishers = superheroData.map((hero) => (
    hero.biography.publisher
  ))


  const set = new Set(publishers)
  console.log(set)

//   const heroesByPublisher = []

//   for(let hero of superheroData) {
//     if(heroesByPublisher[hero.biography.publisher]) {
//       heroesByPublisher[hero.biography.publisher].push(hero)
//     } else {
//       heroesByPublisher[hero.biography.publisher] = []
//       heroesByPublisher[hero.biography.publisher].push(hero)
//     }
//   }
// console.log(heroesByPublisher)

// const test = superheroData.reduce((acc, curr) => {
//   (acc[curr[curr.biography.publisher]] = acc[curr[curr.biography.publisher]] || []).push(curr);
//   return acc;
// }, {});

// console.log(test)

console.log(superheroData)


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
    if (searchTerm.length > 4) {
      searchSuperHeroes();
    }
  }



  return (
    <>
      <Navbar />
      <InputContainer>
        <input placeholder="Procure seu herói favorito" onChange={handleChange} value={searchText} />
      </InputContainer>
       <ButtonContainer>

        {superheroData && superheroData.map((hero, index) => (
          <ButtonContainerFilter >
            <TextButton>{hero.biography.publisher}</TextButton>
          </ButtonContainerFilter>
        ))}


      </ButtonContainer>
      <Container>
        {[...set].map((publisher) => (
          <div>
            <p>{publisher}</p>
            {superheroData.map((hero) => {

              return(
                hero.biography.publisher === publisher ? 
                <HeroCard name={hero.name} image={hero.image.url} publisher={hero.biography.publisher}/>
                : null
              )              
              
            }              
            )}
          </div>
        ))}
      </Container> 
    </>
  )
}