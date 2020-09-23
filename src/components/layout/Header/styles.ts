import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px 20px 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-bottom: 1px solid #e2e5ec;
  margin-bottom: 40px;

  > img {
    width: 52px;
    height: auto;

    border-radius: 50%;
    margin-left: 20px;
  }

  strong {
    font-size: 19px;
    font-weight: bold;
    color: #1d1d1d;
  }
`;

export const Notification = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 20px;

  img {
    width: 20px;
  }
`;
