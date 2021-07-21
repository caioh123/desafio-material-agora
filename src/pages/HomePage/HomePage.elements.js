import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const Container = styled.div`
flex: 1;
width: 100vw;
height: 100vh;
background-image: url("https://media2.giphy.com/media/10ADhj1QPawFna/giphy.gif?cid=790b76115cc079a96d68734d4973c9b0");
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2;
    position: absolute;
`

export const SubmitButton = styled(Link)`
  box-shadow: 3px 4px 0px 0px #899599;
  background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
  background-color: #ededed;
  border-radius: 15px;
  border: 1px solid #d6bcd6;
  display: inline-block;
  cursor: pointer;
  color: #000000;
  font-family: Arial;
  font-size: 17px;
  padding: 7px 25px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #e1e2ed;
  margin-top: 10px;
  z-index: 3;
`