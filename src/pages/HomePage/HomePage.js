import React from 'react'
import { Container, Overlay, SubmitButton } from './HomePage.elements'
import { Link } from 'react-router-dom'
import { HeroesPage } from '../HeroesPage/HeroesPage'

export const HomePage = () => {
  return (
    <>
      <Overlay />
      <Container>
        <SubmitButton to="/heroes">Clique aqui para escolher seu herói e salvar o mundo!</SubmitButton>
      </Container>
    </>
  )
}