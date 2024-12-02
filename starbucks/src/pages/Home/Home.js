import React, { useState } from 'react';
import { Container, Header, MainContent, DrinkButton, DrinkImage, InfoSection } from './HomeStyles';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('default');

  const drinkData = {
    default: {
      image: '/images/default-drink.png',
      color: '#ffffff',
    },
    caramel: {
      image: '/images/caramel-drink.png',
      color: '#f5d3a6',
    },
    redVelvet: {
      image: '/images/red-velvet-drink.png',
      color: '#fce4e4',
    },
    lemon: {
      image: '/images/lemon-drink.png',
      color: '#fdf7d6',
    },
  };

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor);
  };

  return (
    <Container background={drinkData[selectedFlavor].color}>
      
      <MainContent>
        <InfoSection>
          <h2>Isso é Starbucks</h2>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o
            Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso.
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
          style={{ backgroundColor: selectedFlavor === 'lemon' ? '#f6e2a1' : 'transparent' }}
        >
          Limão
        </DrinkButton>
      </div>
    </Container>
  );
};

export default Home;
