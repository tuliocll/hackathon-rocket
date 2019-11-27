import React, { useState } from 'react';

import { Container, Code, CodeContainer } from './styles';

export default function Codebox({ value, setValue }) {
  return (
    <Container>
      <CodeContainer>
        <Code
          value={value}
          onChange={object => {
            setValue(object.target.value);
          }}
        />
      </CodeContainer>
    </Container>
  );
}
