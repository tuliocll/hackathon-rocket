import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
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
    font: 14px 'Montserrat', sans-serif;
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
