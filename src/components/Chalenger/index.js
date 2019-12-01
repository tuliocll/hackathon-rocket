import React, { useState } from 'react';
import { IoIosFlash } from 'react-icons/io';
import { NotificationManager } from 'react-notifications';
import { Circle } from 'react-awesome-spinners';

import { Container, Button, ContainerFooter } from '../../styles/global.styles';

import CodeBox from '../Codebox';
import Playground from '../Playground';

import nav1 from '../../assets/images/facebook/nav1.png';
import nav2 from '../../assets/images/facebook/nav2.png';
import nav3 from '../../assets/images/facebook/nav3.png';
import nav4 from '../../assets/images/facebook/nav-4.png';

export default function Chalenger() {
  const [code, setCode] = useState();
  const [compiling, setCompiling] = useState(false);

  function compilar(compare) {
    const str = compare.replace(/(\r\n|\n|\r)/gm, '');
    setCompiling(true);
    setTimeout(() => {
      if (str === '<div class="header"></div>') {
        return draw('nav1');
      }

      if (str === '<div class="header"><h1 class="logo">facebook</h1></div>') {
        return draw('nav2');
      }

      if (
        str ===
        '<div class="header"><h1 class="logo">Facebook</h1></div><div><nav class="nav-link"><i class="home"></i></nav></div>'
      ) {
        return draw('nav3');
      }

      if (
        str ===
        '<div class="header"><h1 class="logo">Facebook</h1></div><div><nav class="nav-link"><i class="home"></i><i class="groups"></i><i class="video"></i><i class="store"></i><i class="alert"></i><i class="menu"></i></nav></div>'
      ) {
        return draw('nav4');
      }

      NotificationManager.error(
        'Verifique seu codigo e tente novamente!',
        'Erro de compilação'
      );
      setCompiling(false);
    }, Math.floor(Math.random() * 3000) + 1500);
  }

  function draw(element) {
    setCompiling(false);
    NotificationManager.success('Compilado com sucesso!');
    const c = document.getElementById('playground');
    const ctx = c.getContext('2d');

    if (element === 'nav1') {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 300, 50);
      };
      img.src = nav1;

      return;
    }

    if (element === 'nav2') {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 300, 50);
      };
      img.src = nav2;
      return;
    }

    if (element === 'nav3') {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 300, 50);
      };
      img.src = nav4;
      return;
    }
    if (element === 'nav4') {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, 300, 50);
      };
      img.src = nav3;
      return;
    }
  }
  return (
    <>
      <Container>
        <CodeBox value={code} setValue={setCode} />
        <Playground />
      </Container>

      <ContainerFooter>
        <Button disabled={compiling} onClick={() => compilar(code)}>
          Executar
          <IoIosFlash />
          {compiling && <Circle size={20} />}
        </Button>
      </ContainerFooter>
    </>
  );
}
