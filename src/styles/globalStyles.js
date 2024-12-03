import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  width: 90%;
  padding: 20px;
  background: #fff;

  h1 {
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
  }
   img {
    width: auto; /* Adjust the width as needed */
    height: 10px; /* Maintain aspect ratio */
  }

  nav a {
    margin-left: 15px;
    color: #333;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
`;

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  justify-content: space-around;
  width: 90%;
  padding: 50px 0;
`;

export const InfoSection = styled.section`
  max-width: 500px;

  h2 {
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
    color: #006241;
  }

  p {
    margin: 20px 0;
    font-family: 'Poppins', sans-serif;
    color: #333;
    line-height: 1.5;
  }

  button {
    padding: 10px 20px;
    background: #006241;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
`;

export const DrinkImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 15px;
`;

export const DrinkButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background: #006241;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #004d31;
  }
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;