import styled from 'styled-components';

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
      }

      div {
        margin-top: 20px;

        label {
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

          &::placeholder {
            color: #b5bcc7;
            font-weight: 400;
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
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
