import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Category = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  border-bottom: 1px solid black;
`;

export const CategoryTitle = styled.p`
  color: black;
  font-size: 2rem;
  width: 80%;
  border-bottom: 1px black solid;
`;

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
`;

export const TextButton = styled.h2`
  font-size: 1rem;
  color: white;
`;

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
      font-size: 1.2rem;
    }

    @media (max-width: 50px) {
      .input::placeholder {
        font-size: 5px;
        width: 80%;
      }
    }
  }
`;

export const EmptyInput = styled.p`
  font-size: 1.6rem;
  color: black;
`;
