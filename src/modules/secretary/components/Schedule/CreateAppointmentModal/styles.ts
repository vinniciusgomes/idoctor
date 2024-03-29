import styled, { css } from 'styled-components';

interface ITextFieldWrapperProps {
  row?: boolean;
}

interface ITextFieldProps {
  hasError: boolean;
  label: string;
}

export const TextFieldWrapper = styled.div<ITextFieldWrapperProps>`
  width: 100%;

  ${props =>
    props.row &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        width: 47.5%;
      }
    `}
`;

export const Container = styled.div`
  width: 100%;
  padding: 40px 80px;

  > .ant-select {
    width: 100% !important;
  }

  ${TextFieldWrapper + TextFieldWrapper} {
    margin-top: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
`;
