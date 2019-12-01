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
          Somos uma plataforma destinada ao ensino de programação de forma
          dinamica, engajada e super atual. <br />
          Com exemplos de aplicativos e sites reais, vamos te ensinar como
          funciona a programação. <br />
          Então vamos lá!
        </div>
        <Button to="/dashboard">COMEÇAR</Button>
      </IntroWrapper>
    </Container>
  );
}
