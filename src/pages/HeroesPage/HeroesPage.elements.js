import styled from 'styled-components'

export const Container = styled.section`
  display: block;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;


  
`

export const ButtonContainerFilter = styled.div`
height: 40px;
width: 76px;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
border-radius: 12px;
margin-right: 5px;
margin-left: 10px;
cursor: pointer;
`

export const TextButton = styled.h2`
font-size: 1rem;
color: white;
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    border-radius: 5px;
    margin: 1rem 3rem;
    justify-content: center;
    
    
    input {
        width: 70%;
        border: 1px solid black;
        outline: none;
        padding: 5px;
        height: 5vh;

        ::placeholder {
          font-size: 1rem;


        }

        @media (max-width: 50px) {
          .input::placeholder {
            font-size: 5px;
            background-color: red;
            width: 80%;

          }
  
}

    }
`

export const ButtonContainer = styled.section`
background-color: red;
align-items: center;
display: flex;
justify-content: center;
`