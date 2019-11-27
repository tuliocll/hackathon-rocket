import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
*:focus {
    outline: 0
}
html, body, #root {
    min-height: 100%;
    background: #100f12;
}
body, input, button{
    font: 14px 'Roboto', sans-serif;
}
a {
    text-decoration: none;
}
ul {
    list-style: none;
}
button {
    cursor: pointer;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  background: #1159cb;
  padding: 10px 50px;
  border-color: #0000;
  border-bottom-color: #0a439c;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  transition: all 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;
