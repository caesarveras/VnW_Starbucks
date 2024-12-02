import React from 'react';
import './Novidades.css'; // Arquivo de estilos

const Novidades = () => {
  return (
    <div className="novidades-container">
      <div className="novidades-content">
        <h2>PREPARAÇÃO</h2>
        <h1>Níveis de torra</h1>
        <p>
        Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®
        </p>
        <button className="novidades-button"><b>SAIBA MAIS</b></button>
      </div>
      <div className="novidades-image">
        <img
          src="https://github.com/caesarveras/meustrabalhos/blob/main/starbucks/starbucks/public/images/cafezinho.svg" // CAFEZINHO
          alt="TORRA DE CAFE"
        />
      </div>
    </div>
  );
};

export default Novidades;
