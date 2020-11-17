import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  h1 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.black};
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;
