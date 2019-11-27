import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ContentGameName,
  ContentGameDescription,
  ProgressBar,
  ProgressBarFull,
  ContainerFooter,
  Button,
} from './styles';

import ChalengerComponent from '../../components/Chalenger';

export default function Game() {
  const desafio = [
    {
      title: 'Vamos ao seu primeiro desafio com HTML!',
      message:
        'Vamos criar um clone do Facebook! Vamos lá, mão na massa. Faça uma div com a classe "header"!',
    },
    {
      title: 'Vamos ao seu primeiro desafio com HTML!',
      message:
        'Legal, parabéns, você esta indo muito bem, agora, vamos criar a logo marca, faça um h1 com a classe "logo" e nela coloque o nome "facebook".',
    },
    {
      title: 'Vamos ao seu primeiro desafio com HTML!',
      message:
        'Nossa! Você é 10! Agora, que tal a gente adicionar aqueles botões que ficam abaixo da logo? Adicione um <i> com a classe "logo".',
    },
  ];
  const [index, setIndex] = useState(0);
  const [textoDesafio, setTextoDesafio] = useState(desafio[index]);

  return (
    <Container>
      <ContentGameName>
        <h1>Facebook</h1>
      </ContentGameName>
      <ContentGameDescription>
        {textoDesafio.title}
        <br />
        {textoDesafio.message}
      </ContentGameDescription>
      <ProgressBar>
        <ProgressBarFull />
      </ProgressBar>
      <ChalengerComponent />
      <ContainerFooter>
        <Link to="/dashboard">Voltar</Link>
        <Button
          onClick={() => {
            if (index > 3) {
              return;
            }
            console.log(index);
            setTextoDesafio(desafio[index + 1]);
            setIndex(index + 1);
          }}
        >
          Próximo
        </Button>
      </ContainerFooter>
    </Container>
  );
}
