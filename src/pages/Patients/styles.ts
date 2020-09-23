import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.black};
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
  margin-top: 40px;

  background: #fff;
  box-shadow: 0px 0px 10px #0000000d;
  border-radius: 10px;

  header {
    width: 100%;
    padding-top: 15px;
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
