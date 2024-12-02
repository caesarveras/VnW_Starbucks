import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #1E3932;
  color: #333;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  
  nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #006241;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 8px;
`;

export const InfoSection = styled.div`
  max-width: 45%;
  padding: 20px;
  background-color: #1E3932;
  border-radius: 8px;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.2em;
    color: #ffffff;
  }

  h3 {
    font-size: 1.8em;
    color: #ffffff;
    margin-top: 10px;
  }

  p {
    font-size: 1em;
    color: #ffffff;
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #006241;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  
  &:hover {
    background-color: #004d32;
  }
`;
