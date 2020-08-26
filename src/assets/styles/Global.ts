import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: #F4F5FA;
  }


  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Montserrat;
    color: #1D1D1D;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
