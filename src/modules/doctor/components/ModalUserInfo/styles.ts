import styled, { css } from 'styled-components';

interface ITextFieldWrapperProps {
  row?: boolean;
  width?: number;
}

export const TextFieldRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TextFieldWrapper = styled.div<ITextFieldWrapperProps>`
  width: ${props => (props.width ? props.width + 'px' : '100%')};

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

export const ImageInput = styled.div`
  width: 259px;
  height: 354px;
  background-color: #f4f5fa;
  border: 1px dashed #b5bcc7;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputRowAlign = styled.div`
  display: flex;
  width: 848px;
  justify-content: space-between;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 20px;
  }
`;
