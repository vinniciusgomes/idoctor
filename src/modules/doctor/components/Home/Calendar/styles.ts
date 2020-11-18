import styled, { css } from 'styled-components';

interface IDay {
  disabled?: boolean;
  selected?: boolean;
}

interface IEvent {
  emergency?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: #fff;
  box-shadow: 0px 0px 10px #0000000d;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 45px;
`;

export const Header = styled.div`
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      display: block;
      font: normal normal 600 25px/30px Montserrat;

      margin: 0;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`;

export const DaysList = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      display: block;

      font: normal normal bold 15px/19px Montserrat;
      color: #7081fa;
    }
  }
`;

export const DayNumber = styled.div<IDay>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  margin-top: 10px;
  border-radius: 50%;

  cursor: pointer;

  span {
    font: normal normal normal 18px/24px Roboto;
    color: ${(props) => (props.disabled ? '#ADB5C0' : '#2e2e2e')};
  }

  ${(props) => props.selected
    && css`
      background: #7081fa;

      span {
        color: #fff;
      }
    `}
`;

export const EventList = styled.div`
  width: 100%;
  margin-top: 30px;

  > div {
    display: flex;

    > span {
      color: #d6dadf;
      font-weight: 500;
      width: 65px;
      font-size: 18px;
    }
  }

  div + div {
    margin-top: 20px;
  }
`;

export const Event = styled.div<IEvent>`
  flex: 1;
  background: #7081fa;

  padding: 15px 15px;

  height: 80px;
  border-radius: 8px;

  strong {
    flex: 1;
    display: block;

    color: #fff;
  }

  span {
    color: #fdfdfe;
  }

  ${(props) => props.emergency
    && css`
      background: #fa7070;
    `}
`;
