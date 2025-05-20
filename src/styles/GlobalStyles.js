import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

 html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', sans-serif;
    background-color: #ffffff;
    color: #444444;
  }
`;
