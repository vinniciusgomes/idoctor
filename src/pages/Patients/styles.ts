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

  ul {
    list-style: none;
    li {
      width: 100%;
      border-bottom: 1px solid #eef0f2;
      padding-bottom: 20px;

      & + li {
        margin-top: 20px;
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

      > span {
        display: block;

        font-weight: 500;

        &:first-child {
          width: 25px;
          height: 25px;

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
