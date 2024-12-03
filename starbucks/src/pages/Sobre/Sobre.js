import React from 'react';
import { Container, Header, Content, Image, InfoSection, Button } from './SobreStyles';

const Sobre = () => {
  return (
    <Container>
     
      <Content>
       
        <Image src="https://raw.githubusercontent.com/caesarveras/VnW_Starbucks/3280c3e3aa261ce79cf0d556f0772ab23e8dccd8/starbucks/public/images/starbucks_antigo.svg" alt="Starbucks Store" />
        <InfoSection>

          <h2>PREPARAÇÃO</h2>
        <h3>Níveis de torra</h3>
        <p>
        Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®.
        </p>
        <button className="novidades-button"><b>SAIBA MAIS</b></button>

        </InfoSection>
      </Content>
    </Container>
  );
};

export default Sobre;
