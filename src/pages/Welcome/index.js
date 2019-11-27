/* eslint-disable object-curly-newline */
import React from 'react';

import welcomeImage from '../../assets/images/intro-logo.png';
import { Container, Image, IntroWrapper, Button } from './styles';

export default function Welcome() {
  return (
    <Container>
      <Image src={welcomeImage} />
      <IntroWrapper>
        <h1>Bem-vindo ao GameLang</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
          eros tempor, fringilla ante nec, tincidunt diam. Vestibulum eget
          pretium urna. Donec nec magna ac ante, Phasellus posuere mi sagittis
          volutpat vehicula. In nec libero fermentum, posuere arcu eget, cursus
          urna. Nam ut facilisis est.
        </div>
        <Button to="/dashboard">COMEÇAR</Button>
      </IntroWrapper>
    </Container>
  );
}
