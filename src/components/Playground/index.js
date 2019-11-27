import React from 'react';

import { Container, CanvasContainer } from './styles';

export default function Playground({ run }) {
  return (
    <Container>
      <CanvasContainer id="playground" />
    </Container>
  );
}
