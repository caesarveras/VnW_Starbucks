import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.background || '#ffffff'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative; /* posição */
  overflow: hidden; /* Garante que o círculo não vaze */
  
  &::after {
    content: '';
    position: absolute;
    width: 500px; /* tamanho; */
    height: 500px;
    background-color: ${(props) => props.background || '#DECD13'}; /* Cor do círculo */
    border-radius: 50%;
    bottom: -150px; /* Posição dentro do container */
    right: -150px;
    z-index: 1; /* atrás do conteudo */
  }
`;


export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  h1 {
    font-size: 2.5rem;
  }
  nav {
    a {
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
      font-size: 1.2rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative; /* Para o layout */
  z-index: 2; /* Mantém o conteúdo na frente */
`;


export const InfoSection = styled.section`
  max-width: 500px;
  text-align: left;
 
  h1, h2, p {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }
  button {
    font-family: 'Poppins', sans-serif;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 50px;
    background-color: #006241;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background: #004d31;
    }
  }
`;

export const DrinkImage = styled.img`
  width: 300px;
  height: auto;
  position: relative;
  z-index: 2; /* Garante que esteja na frente do círculo */
`;


export const DrinkButton = styled.button`
  background-color: transparent;
  //color: #333;
  //padding: 10px 20px;
  border: transparent;
  margin: 5px;
  //font-size: 1.1rem;
  cursor: pointer;
  //transition: background-color 0.3s, color 0.3s;
  &:hover {
    transform: rotate(15deg);
  }
  
`;

