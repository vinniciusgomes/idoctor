import React from 'react';

import notificationIcon from '../../assets/images/notification-icon.svg';

import { Container, Notification } from './styles';

interface UserInfo {
  userName: string;
  userPhoto: string;
}

const Header: React.FC<UserInfo> = ({ userName, userPhoto }) => {
  return (
    <Container>
      <Notification>
        <img src={notificationIcon} alt="notification icon" />
      </Notification>
      <strong>{userName}</strong>
      <img src={userPhoto} alt={userName} />
    </Container>
  );
};

export default Header;
