import React from 'react';
import {
  Container,
  ContentGameName,
  ProgressBar,
  ContainerFooter,
  Button
} from './styles';
import {Link} from 'react-router-dom';

export default function Game() {
  return (
    <Container>
      <ContentGameName>
        <h1>Facebook</h1>
      </ContentGameName>
      <ProgressBar />
      <ContainerFooter>
        <Link to="/dashboard">
          <a>Voltar</a>
        </Link>
        <Button to="/">Próximo</Button>
      </ContainerFooter>
    </Container>
  );
}
