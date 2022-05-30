import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
  }

  body::-webkit-scrollbar {
    width: 10px;
    background-color: #110e0e;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 10px;
    outline: 1px solid #2a2a2a;
  }
`