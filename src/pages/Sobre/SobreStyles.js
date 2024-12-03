import styled from 'styled-components';

export const Container = styled.div`
margin: 100px;
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  color: #333;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  
  nav a {
    margin: 0 15px;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #006241;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 0px;
`;

export const InfoSection = styled.div`
  max-width: 45%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  h2 {
    font-size: 1.0em;
    color: #1E3932;
    font-family: 'Poppins', sans-serif;
    
  }

  h3 {
    font-size: 1.8em;
    color: #1E3932;
    font-family: 'Poppins', sans-serif;
    margin-top: 10px;
    font-weight: normal;
  }

  p {
    font-size: 1em;
    color: #1E3932;
    font-family: 'Poppins', sans-serif;
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #006241;
  color: #fff;
  font-size: 1em;
  border: none;
  font-family: 'Poppins', sans-serif;
  border-radius: 40px;
  cursor: pointer;
  
  &:hover {
    background-color: #004d32;
  }
`;
