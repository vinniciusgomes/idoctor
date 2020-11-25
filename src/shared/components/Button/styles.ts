import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background-color: #7081fa;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  width: 350px;
  height: 55px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px #eceff929;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#7081fa')};
  }

  @media (max-width: 520px) {
    width: 275px;
    height: 45px;
    margin-top: 40px;
    margin-bottom: 20px;

    font-size: 17px;
    font-weight: 500;
  }

  .ant-spin-dot-item {
    background-color: #ffffff;
  }
`;
