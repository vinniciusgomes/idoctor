import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
      {user.avatar ? (
        <img src={user.avatar} alt={user.name} />
      ) : (
        <Avatar size={50} icon={<UserOutlined />} style={{ marginLeft: 20 }} />
      )}
    </Container>
  );
};
export default Header;
