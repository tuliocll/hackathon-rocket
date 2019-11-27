import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IoIosFlash } from 'react-icons/io';

import Routes from './routes';

import GlobalStyles, {
  Container,
  Button,
  ContainerFooter,
} from './styles/global.styles';
import CodeBox from './components/Codebox';
import Playground from './components/Playground';

export default function App() {
  const [code, setCode] = useState();

  function compilar(str) {
    if (str === '<div class="header"></div>') {
      return draw('nav');
    }

    alert('Erro ao compilar, verifique seu codigo');
    return;
  }

  function draw(element) {
    const c = document.getElementById('playground');
    const ctx = c.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }
  return (
    <Router>
      <Routes />

      <GlobalStyles />
      <Container>
        <CodeBox value={code} setValue={setCode} />
        <Playground />
      </Container>

      <ContainerFooter>
        <Button onClick={() => compilar(code)}>
          Executar
          <IoIosFlash />
        </Button>
      </ContainerFooter>
    </Router>
  );
}
