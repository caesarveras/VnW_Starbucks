import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Importando o Header
import Home from './pages/Home/Home'; // Importando a página Home
import Novidades from './pages/Novidades/Novidades'; // Importando a página Novidades
import Sobre from './pages/Sobre/Sobre'; // Importando a página Sobre

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novidades" element={<Novidades />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  </Router>
  
);

export default App;
