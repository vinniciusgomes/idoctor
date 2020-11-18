import React from 'react';

import avatarIcon from '@shared/assets/images/avatar.png';
import notificationIcon from '@shared/assets/images/notification-icon.svg';
import { useAuth } from '@shared/hooks/auth';

import { Container, Notification } from './styles';

interface UserInfo {
  userName: string;
  userPhoto: string;
}
const Header: React.FC<UserInfo> = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Notification>
        <img src={notificationIcon} alt="notification icon" />
      </Notification>
      <strong>{user.name}</strong>
      <img src={user.avatar ? user.avatar : avatarIcon} alt={user.name} />
    </Container>
  );
};
export default Header;
