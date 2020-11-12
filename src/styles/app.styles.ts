import styled from 'styled-components';

export const Container = styled.div``;

export const NotSupported = styled.div`
  display: none;

  height: 100vh;
  width: 100vw;

  @media (max-width: 1500px) {
    display: flex;
  }
`;
