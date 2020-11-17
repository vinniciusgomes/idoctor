import styled, { css } from 'styled-components';

interface StylesProps {
  selected?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  overflow: none !important;
`;

export const NavbarContainer = styled.div`
  width: 270px;
  border-radius: 0px 20px 20px 0px;
  background: #ffffff;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 90px;

  padding: 20px 40px;
`;

export const PageList = styled.ul`
  padding: 40px 20px;
`;

export const PageItem = styled.li<StylesProps>`
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

      ${(props) => props.selected
        && css`
          color: #7081fa;
        `}
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

export const Content = styled.div`
  width: calc(100vw - 270px);
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  padding: 20px 40px;

  overflow-y: scroll !important;
`;
