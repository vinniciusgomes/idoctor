import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../../assets/images/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
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
      font-size: 45px;
      font-weight: 600px;
      margin-bottom: 40px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        border: 0;
        background-color: #7081fa;
        color: #ffffff;
        font-size: 22px;
        font-weight: 600;
        width: 400px;
        height: 65px;
        border-radius: 5px;
        box-shadow: 0px 0px 20px #eceff929;
        margin-top: 70px;
        margin-bottom: 30px;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#7081fa')};
        }
      }

      div {
        margin-top: 20px;

        span {
          display: block;
          margin-bottom: 10px;

          font-size: 20px;
          font-weight: 600;
        }

        input {
          width: 600px;
          height: 75px;

          box-shadow: 0px 0px 20px #eceff929;
          border: 1px solid #b5bcc7;
          border-radius: 10px;
          background: #f4f5fa;

          padding: 0 20px;
          font-size: 20px;
          font-weight: 600;

          transition: border-color 0.2s;

          &::placeholder {
            color: #b5bcc7;
            font-weight: 400;
          }

          &:hover {
            border-color: #7081fa;
          }
        }
      }
    }

    a {
      text-decoration: none;
      font-size: 18px;
      font-weight: 600;
      color: #1d1d1d;
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
      width: 300px;
      margin-bottom: 70px;
    }

    h1 {
      font-size: 55px;
      color: #ffffff;
      display: block;
    }

    span {
      display: block;
      margin-top: 30px;

      font-size: 30px;
      font-weight: 300;
      color: #ffffff;
    }

    strong {
      display: block;
      margin-top: 50px;

      font-size: 30px;
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
`;
