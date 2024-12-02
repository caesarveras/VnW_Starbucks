import React from 'react';
import { Container, Header, Content, Image, InfoSection, Button } from './SobreStyles';

const Sobre = () => {
  return (
    <Container>
     
      <Content>
        <Image src="/images/starbucks-store.jpg" alt="Starbucks Store" />
        <InfoSection>
          <h2>Preparação</h2>
          <h3>Níveis de torra</h3>
          <p>
            Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são as torras
            que fazem parte dos níveis de torra Starbucks®.
          </p>
          <Button>Saiba Mais</Button>
        </InfoSection>
      </Content>
    </Container>
  );
};

export default Sobre;
