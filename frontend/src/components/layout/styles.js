import styled from 'styled-components';
import bg from '../../img/tccbg.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Para ocupar pelo menos a altura total da viewport */
  background: url(${bg}) center center fixed;
  background-size: cover;
`;