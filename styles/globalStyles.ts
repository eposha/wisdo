import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Martel Sans', sans-serif;
  box-sizing: border-box;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

  body {
    margin: 0;
    padding: 0;  
    background-color: #f8f7f7;  
  }

  a {
    color: #000;
    text-decoration: none
  }
`;

export { GlobalStyle };
