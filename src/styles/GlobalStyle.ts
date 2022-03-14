import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Heebo';
  }

  body {
    background: #040327;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    outline: 0;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: #e85937;

    border-radius: 10px;
  }

`;

export default GlobalStyle;
