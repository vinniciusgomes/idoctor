import styled, { css } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '@shared/assets/images/sign-in-background.png';

interface ITextFieldProps {
  hasError: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  .ant-spin-dot-item {
    background-color: #fff;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 900px;

  display: flex;
  flex-direction: column;
  align-content: space-between;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 40px 30px 0 0;

    a {
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      color: #7081fa;

      @media (max-width: 520px) {
        font-size: 15px;
      }
    }

    @media (max-width: 520px) {
      padding: 20px 30px 0 0;

      a {
        font-size: 17px;
      }
    }
  }

  main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 35px;
      font-weight: 600px;
      margin-bottom: 40px;

      @media (max-width: 520px) {
        margin-bottom: 16px;
        font-size: 25px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        border: 0;
        background-color: #7081fa;
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
        width: 350px;
        height: 55px;
        border-radius: 5px;
        box-shadow: 0px 0px 20px #eceff929;
        margin-top: 70px;
        margin-bottom: 30px;
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
      }

      div {
        margin-top: 20px;

        span {
          display: block;
          margin-bottom: 10px;

          font-size: 20px;
          font-weight: 600;

          @media (max-width: 520px) {
            font-size: 15px;
          }
        }

        @media (max-width: 640px) {
          width: 100%;
        }
      }

      @media (max-width: 640px) {
        width: 100%;
        padding: 0 24px;
      }
    }

    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      color: #1d1d1d;

      @media (max-width: 520px) {
        font-size: 15px;
      }
    }

    @media (max-width: 520px) {
      font-size: 27px;
      font-weight: 600px;
      margin-bottom: 16px;
    }
  }

  footer {
    width: 100%;
    padding-bottom: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      margin-right: 15px;
      font-size: 18px;
      font-weight: 600;
    }

    img {
      height: 27px;
    }

    @media (max-width: 520px) {
      padding-bottom: 20px;

      span {
        font-size: 12px;
      }

      img {
        height: 22px;
      }
    }
  }

  @media (max-width: 1560px) {
    max-width: 760px;
  }

  @media (max-width: 1366px) {
    max-width: 100%;
  }
`;

export const Background = styled.div`
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
  padding: 50px 80px;

  flex: 1;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;

    img {
      width: 250px;
      margin-bottom: 70px;
    }

    h1 {
      font-size: 45px;
      color: #ffffff;
      display: block;
    }

    span {
      display: block;
      margin-top: 30px;

      font-size: 25px;
      font-weight: 300;
      color: #ffffff;
    }

    strong {
      display: block;
      margin-top: 50px;

      font-size: 25px;
      font-weight: 600;
      color: #ffffff;
    }
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 25px;
      color: #ffffff;
    }

    ul {
      list-style: none;

      display: flex;
      align-items: center;

      li > a {
        color: #ffffff;
        display: block;
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 1366px) {
    display: none;
  }
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
