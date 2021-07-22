import { ButtonContent, Container, InfoContent, PokeName, Price, Type, TypesContent } from './HeroCard.elements';

export const HeroCard = ({ name, image, publisher }) => {
  return (
    <Container>
      <InfoContent>
        <img src={image} />
        <PokeName> {publisher} </PokeName>

        <Price> {name} </Price>
      </InfoContent>
      <ButtonContent >
        <p>Clique aqui para acessar detalhes</p>
      </ButtonContent>
    </Container>
  )
}