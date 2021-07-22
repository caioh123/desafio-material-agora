import { ButtonContent, Container, InfoContent, PokeName, Price, Type, TypesContent } from './HeroCard.elements';

export const HeroCard = ({ name, image }) => {
  return (
    <Container>
      <InfoContent>
        <img src={image} />
        <PokeName> {name} </PokeName>

        <Price> 40 </Price>
      </InfoContent>
      <ButtonContent >
        <p>Clique aqui para acessar detalhes</p>
      </ButtonContent>
    </Container>
  )
}