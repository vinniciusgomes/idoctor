import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;

  box-shadow: 0px 0px 20px #eceff929;
  border: 1px solid #b5bcc7;
  border-radius: 10px;
  background: #f4f5fa;

  padding: 10px 20px;
  font-size: 18px;
  font-weight: 600;

  transition: border-color 0.2s;

  resize: none;

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
