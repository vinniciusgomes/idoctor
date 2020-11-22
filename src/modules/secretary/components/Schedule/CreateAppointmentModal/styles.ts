import { AutoComplete } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px;

  > .ant-select {
    width: 100% !important;
  }
`;

export const NameTextField = styled(AutoComplete)``;
