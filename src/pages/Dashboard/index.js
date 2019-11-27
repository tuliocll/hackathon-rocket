import React from 'react';

import {
  Container,
  LeftContainer,
  Letter,
  Separator,
  RightContainer,
  NameContainer,
  NameText,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <LeftContainer>
        <Letter>G</Letter>
        <Separator />
      </LeftContainer>
      <RightContainer>
        <NameContainer>
          <NameText>Bem vindo, Guilherme</NameText>
        </NameContainer>
      </RightContainer>
    </Container>
  );
}
