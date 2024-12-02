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
    <h1>Starbucks</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/novidades">Novidades</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  </Navbar>
);

export default Header;
