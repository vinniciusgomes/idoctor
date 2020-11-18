import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  background: rgba(0, 0, 0, 0.2);

  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-spin-dot-item {
    background-color: #3f5368;
  }
`;
