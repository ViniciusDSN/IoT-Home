// styles.js
import styled from "styled-components";

export const TextPrincipal = styled.div`
  font-weight: bold;
  text-decoration: none;
  color: #E0E0E2 !important;
  text-align: left;
  font-size: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  margin-left: -70vh;
`;

export const TextLugar = styled.span`
  color: #0059B2;
  display: inline;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  color: #0059B2;
  border: 2px solid #0059B2;
  border-radius: 8px;
  padding: 0.5em; /* Ajuste o tamanho conforme necessário */
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #0059B2;
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 89, 178, 0.8);
  }

  align-self: flex-start; /* Alinha à esquerda e ao texto */
`;
