import styled, { createGlobalStyle } from "styled-components";
import TCCBackground from "../../img/tccbg.png"; // Importa a imagem

// Estilo global para o body
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background: url(${TCCBackground}) center/cover no-repeat; /* Usa a imagem importada como background */
  }
`;

// Restante do código permanece inalterado
export const TextPrincipal = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: #E0E0E2 !important;
    text-align: left;
    font-size: 70px;
`;

// ... outros componentes e estilos
