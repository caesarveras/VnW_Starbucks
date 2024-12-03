import React, { useState } from 'react';
import { Container, Header, MainContent, DrinkButton, DrinkImage, InfoSection } from './HomeStyles';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('default');

  const drinkData = {
    default: {
      image: 'https://github.com/caesarveras/VnW_Starbucks/blob/main/starbucks/public/images/laranja2x%201.png?raw=true',
      color: '#037143',
    },
    caramel: {
      image: '/images/caramel-drink.png',
      color: '#f5d3a6',
    },
    redVelvet: {
      image: '/images/red-velvet-drink.png',
      color: '#97090C',
    },
    manga: {
      image: '/images/lemon-drink.png',
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
          <h1><span style={{ fontWeight: 'normal' }}>Mais que Café</span></h1>
          <h2>Isso é <b> <span style={{ color: '#037143', fontWeight: 'bold' }}>Starbucks</span></b></h2>
          <p>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <button aria-label="Learn more about Starbucks">Saiba Mais</button>
        </InfoSection>
        <DrinkImage src={drinkData[selectedFlavor].image} alt={`Imagem do drink ${selectedFlavor}`} />
      </MainContent>
      <div>
        <DrinkButton
          onClick={() => handleFlavorChange('caramel')}
          style={{ backgroundColor: selectedFlavor === 'caramel' ? '#d1a15d' : 'transparent' }}
        >
          Caramelo
        </DrinkButton>
        <DrinkButton
          onClick={() => handleFlavorChange('redVelvet')}
          style={{ backgroundColor: selectedFlavor === 'redVelvet' ? '#f29d9d' : 'transparent' }}
        >
          Red Velvet
        </DrinkButton>
        <DrinkButton
          onClick={() => handleFlavorChange('lemon')}
          style={{ backgroundColor: selectedFlavor === 'manga' ? '#f6e2a1' : 'transparent' }}
        >
          Manga
        </DrinkButton>
      </div>
    </Container>
  );
};

export default Home;