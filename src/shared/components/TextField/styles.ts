import styled, { css } from 'styled-components';

interface IInputProps {
  hasError?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input<IInputProps>`
  width: 100%;
  height: 57px;

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

export const Label = styled.span`
  display: block;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 600;

  b {
    color: #fa7070;
  }

  @media (max-width: 520px) {
    font-size: 15px;
  }
`;
