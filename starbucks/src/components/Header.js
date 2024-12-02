import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;

  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #006241;
  }
`;

const Header = () => (
  <Navbar>
    <h1>
    <img
     src='https://raw.githubusercontent.com/caesarveras/VnW_Starbucks/dd3c3591517ee9cf39b700aafce3b5ed25d327ef/starbucks/public/images/logo%202.svg' alt='StarBucks' /></h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/novidades">Novidades</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  </Navbar>
);

export default Header;
