import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 18%;
`;

export const TextPrincipal = styled.div`
  font-weight: bold;
  color: #E0E0E2 !important;
  text-align: left;
  font-size: 3vw;
  margin-left: 10%;
`;

export const TextLugar = styled.span`
  color: #0059B2;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  color: #0059B2;
  border: 2px solid #0059B2;
  border-radius: 8px;
  padding: 0.7em;
  font-size: 1.5vw;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-right: 15%;
  align-self: center;
  
  &:hover {
    background-color: #0059B2;
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 89, 178, 0.8);
  }
`;

export const BoxSaibaMais = styled.div`
  text-align: center;
  margin-top: 15%;
`;

export const TextSaibaMais = styled.div`
  font-size: 1vw;
  text-weight: bold;
  color: #E0E0E2 !important;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;

export const Card = styled.div`
  color: #E0E0E2 !important;
  border: 2px solid #000;
  width: 15%;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  padding: 16px;
  text-align: center;
  margin-left: 2%;
  margin-right: 2%;
`;

export const CardText = styled.div`
  color: #E0E0E2 !important;
  margin-top: 5%;
  text-align: center;
  font-size: 1vw;
`;

export const CardKeyText = styled.div`
  font-weight: bold;
  color: #0059B2 !important;
  margin-top: 1%;
  font-size: 2vw;
`;

export const Footer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-top: 3px solid #000;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const CreatorNames = styled.div`
  color: #E0E0E2;
  font-size: 110%;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const SocialText = styled.div`
  color: #E0E0E2;
  font-size: 1vh;
  margin-right: 1vh;
`;