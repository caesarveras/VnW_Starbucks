import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;

  img {
    width: 80px; 
    height: auto;
  }

  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #006241;
  }
`;

const Header = () => (
  <Navbar>
    <img
      src="https://github.com/caesarveras/VnW_Starbucks/blob/main/public/images/starbucks_logo.png?raw=true"
      alt="StarBucks Logo"
    />
    <nav>
      <Link to="/">Home</Link>
      <Link to="/novidades">Novidades</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  </Navbar>
);

export default Header;
