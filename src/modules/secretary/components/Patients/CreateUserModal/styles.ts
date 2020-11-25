import styled, { css } from 'styled-components';

interface ITextFieldWrapperProps {
  row?: boolean;
  width: number;
}

interface ITextFieldProps {
  hasError: boolean;
  label: string;
}

export const TextFieldRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TextFieldWrapper = styled.div<ITextFieldWrapperProps>`
  width: ${props => props.width}px;

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

  .ant-upload.ant-upload-select-picture-card {
    width: 259px;
    height: 354px;
    background-color: #f4f5fa;
    border: 1px dashed #b5bcc7;
    border-radius: 10px;
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

export const TextField = styled.input<ITextFieldProps>`
  width: 600px;
  height: 60px;

  box-shadow: 0px 0px 20px #eceff929;
  border: 1px solid #b5bcc7;
  border-radius: 10px;
  background: #f4f5fa;

  padding: 0 20px;
  font-size: 18px;
  font-weight: 600;

  transition: border-color 0.2s;

  ${props =>
    props.hasError &&
    css`
      border: 1px solid #fa7070;
    `}

  &::placeholder {
    color: #b5bcc7;
    font-weight: 400;
  }

  &:hover {
    border-color: #7081fa;
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    height: 55px;
    font-size: 16px;
    padding: 0 16px;
  }
`;

export const InputRowAlign = styled.div`
  display: flex;
  width: 848px;
  justify-content: space-between;
`;
