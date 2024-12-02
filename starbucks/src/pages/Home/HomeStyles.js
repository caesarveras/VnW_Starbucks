import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.background || '#ffffff'};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

export const InfoSection = styled.section`
  text-align: center;
  margin-bottom: 30px;
  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #555;
    }
  }
`;

export const DrinkImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

export const DrinkButton = styled.button`
  background-color: transparent;
  color: #333;
  padding: 10px 20px;
  border: 2px solid #333;
  margin: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: #333;
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

