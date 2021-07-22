import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  
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