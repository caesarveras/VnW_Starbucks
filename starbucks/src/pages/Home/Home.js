import React, { useState } from 'react';
import { Container, MainContent, DrinkButton, DrinkImage, InfoSection } from './HomeStyles';

const Home = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('default');

  const drinkData = {
    default: {
      image: 'https://github.com/caesarveras/VnW_Starbucks/blob/main/starbucks/public/images/laranja2x%201.png?raw=true',
      color: '#037143',
    },
    caramel: {
      image: 'https://github.com/caesarveras/VnW_Starbucks/blob/main/starbucks/public/images/laranja2x%201.png?raw=true',
      color: '#037143',
    },
    redVelvet: {
      image: 'https://raw.githubusercontent.com/caesarveras/VnW_Starbucks/614f44e31dc8dfa4661a6721d61fb0c324e10997/starbucks/public/images/vermelho2x%201.svg',
      color: '#97090C',
    },
    manga: {
      image: 'https://raw.githubusercontent.com/caesarveras/VnW_Starbucks/614f44e31dc8dfa4661a6721d61fb0c324e10997/starbucks/public/images/amarelo2x%201.svg',
      color: '#DECD13',
    },
  };

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor);
  };

  return (
    <Container background={drinkData[selectedFlavor].color}>
      <MainContent>
        <InfoSection>
          <h1>Mais que Café</h1>
          <h2>
            Isso é{' '}
            <span style={{ color: '#037143', fontWeight: 'bold' }}>Starbucks</span>
          </h2>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte
            Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes
            e frias, doces diferenciados e sanduíches.
          </p>
          <button aria-label="Saiba mais sobre o Starbucks">Saiba Mais</button>
        </InfoSection>
        <DrinkImage
          src={drinkData[selectedFlavor].image}
          alt={`Imagem do drink ${selectedFlavor}`}
        />
      </MainContent>
      <div>
        <DrinkButton
          onClick={() => handleFlavorChange('caramel')}
          isSelected={selectedFlavor === 'caramel'}
        >
          <img
            src="https://github.com/caesarveras/VnW_Starbucks/blob/main/starbucks/public/images/laranja%203.png?raw=true"
            alt="Caramelo"
          />
        </DrinkButton>
        <DrinkButton
          onClick={() => handleFlavorChange('redVelvet')}
          isSelected={selectedFlavor === 'redVelvet'}
        >
          <img
            src="https://github.com/caesarveras/VnW_Starbucks/blob/main/starbucks/public/images/vermelho%201.png?raw=true"
            alt="Red Velvet"
          />
        </DrinkButton>
        <DrinkButton
          onClick={() => handleFlavorChange('manga')}
          isSelected={selectedFlavor === 'manga'}
        >
          <img
            src="https://raw.githubusercontent.com/caesarveras/VnW_Starbucks/614f44e31dc8dfa4661a6721d61fb0c324e10997/starbucks/public/images/amarelo%201.svg"
            alt="Manga"
          />
        </DrinkButton>
      </div>
    </Container>
  );
};

export default Home;
