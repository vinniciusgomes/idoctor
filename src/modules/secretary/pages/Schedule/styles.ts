import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    font-size: 30px;
    color: ${props => props.theme.colors.black};
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  .ant-badge-status-processing {
    background-color: #7081fa;
  }
  .ant-badge-status-error {
    background-color: #fa7070;
  }

  .ant-badge-status-text {
    font-size: 13px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button + button {
      margin-left: 15px;
    }
  }
`;

export const NewAppointmentButton = styled.button`
  height: 40px;
  width: 180px;

  cursor: pointer;
  background-color: #39d9bf;
  color: #fff;
  border-radius: 7px;
  padding: 8px 16px;

  border: 0;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectDoctorButton = styled.button`
  height: 40px;
  width: 180px;

  cursor: pointer;
  background-color: #7081fa;
  color: #fff;
  border-radius: 7px;
  padding: 8px 16px;

  border: 0;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
