import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  margin-bottom: 20px;
`;

export const Item = styled.li`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eef0f2;
  padding-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #3f5368;
    font-weight: 500;
  }

  div {
    display: flex;
    align-items: center;

    > img {
      width: 50px;
      height: auto;
      border-radius: 100%;
      margin-right: 20px;
    }
  }

  & + li {
    margin-top: 20px;
  }

  svg {
    cursor: pointer;
  }
`;

export const ActionIcon = styled.img`
  height: 20px !important;
  margin-right: 0px !important;

  cursor: pointer;
`;
