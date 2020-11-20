import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    font-size: 30px;
    color: ${props => props.theme.colors.black};
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  .ant-badge-status-processing {
    background-color: #7081fa;
  }
  .ant-badge-status-error {
    background-color: #fa7070;
  }
`;
