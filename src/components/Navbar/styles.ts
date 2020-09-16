import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  border-radius: 0px 20px 20px 0px;
  background: #ffffff;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #f7f7f7;

  padding: 20px 40px;
`;

export const PageList = styled.ul`
  padding: 40px 20px;

  li {
    list-style: none;
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: space-between;
      flex: 1;

      text-decoration: none;

      div {
        display: flex;
        align-items: center;
      }

      img {
        width: 25px;
      }

      span {
        display: block;
        font-size: 20px;
        font-weight: 500;
        color: #3f5368;
        margin-left: 20px;
      }
    }
  }
`;

export const LogoutContainer = styled.div`
  width: 100%;
  max-width: 270px;
  flex: 1;
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 40px 20px;
  border-top: 1px solid #f7f7f7;

  button {
    width: 100%;
    border: 0;
    background: transparent;

    display: flex;
    align-items: center;

    img {
      width: 25px;
      margin-right: 20px;
    }

    span {
      display: block;
      font-size: 20px;
      font-weight: 500;
      color: #fa7070;
    }
  }
`;
