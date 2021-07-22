import React from 'react'
import {Container, TextButton} from './Button.elements'

export const Button = ({environment, handleEnvironmentSelected}) => {
  return (
    <Container onClick={() => (handleEnvironmentSelected)}>
      <TextButton>{environment}</TextButton>
    </Container>
  )
}