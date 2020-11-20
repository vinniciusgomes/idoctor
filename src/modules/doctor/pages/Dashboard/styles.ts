import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const PageTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 30px;
    color: ${props => props.theme.colors.black};
  }
`;

export const Wrapper = styled.div`
  display: flex;

  flex: 1;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  margin-right: 40px;
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 550px;
`;

export const WelcomeCard = styled.div`
  width: 100%;
  max-width: 850px;
  max-height: 235px;

  border-radius: 10px;
  padding: 30px 40px;

  background: #7081fa;
  position: relative;

  div {
    span {
      font-size: 26px;
      color: #fff;
      display: block;
    }

    b {
      font-size: 28px;
      color: #fff;
      display: block;
      margin-top: -10px;
    }
  }

  > span {
    display: block;
    font-size: 17px;
    color: #fff;

    max-width: 400px;
  }

  box-shadow: 0px 0px 10px #0000000d;
`;

export const WelcomeImage = styled.img`
  width: 320px;

  position: absolute;
  bottom: 0px;
  right: 0;
`;

export const AppointmentsListContainer = styled.div`
  width: 100%;

  margin-top: 30px;
`;

export const AppointmentsTitleContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    cursor: pointer;

    span {
      display: block;
      color: #3f5368;
      font-weight: 500;
      margin-right: 5px;
    }
  }
`;

export const ListContainer = styled.div`
  width: 100%;

  header {
    width: 100%;
    padding-bottom: 30px;
    margin-bottom: 20px;
    border-bottom: 2px solid #eef0f2;

    display: flex;
    align-items: center;

    div {
      width: 32.8%;
      display: flex;
      align-items: center;

      span {
        font-weight: 700;
      }

      svg {
        transform: rotate(90deg);
        margin-left: 10px;

        cursor: pointer;
      }
    }
  }

  main {
    li {
      display: flex;
      align-items: center;

      border-radius: 10px;
      padding: 15px 20px;
      box-shadow: 0px 0px 10px #0000000d;
    }
  }

  footer {
    margin: 30px 0 10px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      svg {
        margin-left: 15px;
        cursor: pointer;
      }

      > span {
        display: block;
        cursor: pointer;

        font-weight: 500;

        &:nth-child(2) {
          width: 25px;
          height: 25px;

          margin-left: 15px;
          border-radius: 30px;
          background: #7081fa;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #fff;
        }

        & + span {
          margin-left: 20px;
        }
      }
    }
  }
`;
