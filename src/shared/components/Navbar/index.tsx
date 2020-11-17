import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import idoctorLogo from '@shared/assets/images/idoctor-logo-dark.svg';
import dashboardIcon from '@shared/assets/images/dashboard-icon.svg';
import dashboardIconSelected from '@shared/assets/images/dashboard-icon-selected.svg';
import calendarIcon from '@shared/assets/images/calendar-icon.svg';
import calendarIconSelected from '@shared/assets/images/calendar-icon-selected.svg';
import patientsIcon from '@shared/assets/images/patients-icon.svg';
import patientsIconSelected from '@shared/assets/images/patients-icon-selected.svg';
import gearIcon from '@shared/assets/images/gear-icon.svg';
import gearIconSelected from '@shared/assets/images/gear-icon-selected.svg';
import chevronRightIcon from '@shared/assets/images/chevron-right-icon.svg';
import chevronRightIconSelected from '@shared/assets/images/chevron-right-icon-selected.svg';
import logoutIcon from '@shared/assets/images/logout-icon.svg';

import Header from '../Header';
import { useAuth } from '@shared/hooks/auth';

import {
  Container,
  NavbarContainer,
  LogoContainer,
  PageList,
  LogoutContainer,
  Content,
  PageItem,
} from './styles';

interface NavbarProps {
  pageSelected: string;
}

const Navbar: React.FC<NavbarProps> = ({ pageSelected, children }) => {
  const { signOut } = useAuth();
  const pages = [
    {
      id: 1,
      name: 'Dashboard',
      slug: 'dashboard',
      path: '/',
      icon: dashboardIcon,
      iconSelected: dashboardIconSelected,
    },
    {
      id: 2,
      name: 'Agenda',
      slug: 'schedule',
      path: '/agenda',
      icon: calendarIcon,
      iconSelected: calendarIconSelected,
    },
    {
      id: 3,
      name: 'Pacientes',
      slug: 'patients',
      path: '/pacientes',
      icon: patientsIcon,
      iconSelected: patientsIconSelected,
    },
    {
      id: 4,
      name: 'Config.',
      slug: 'settings',
      path: '/configuracoes',
      icon: gearIcon,
      iconSelected: gearIconSelected,
    },
  ];

  const handleLogOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <NavbarContainer>
        <LogoContainer>
          <img src={idoctorLogo} alt="iDoctor Logo" />
        </LogoContainer>
        <PageList>
          {pages.map((page) => (
            <PageItem
              key={page.id}
              selected={pageSelected === page.slug && true}
            >
              <Link to={page.path}>
                <div>
                  <img
                    src={
                      pageSelected === page.slug ? page.iconSelected : page.icon
                    }
                    alt={page.name}
                  />
                  <span>{page.name}</span>
                </div>
                <img
                  src={
                    pageSelected === page.slug
                      ? chevronRightIconSelected
                      : chevronRightIcon
                  }
                  alt="Arrow"
                />
              </Link>
            </PageItem>
          ))}
        </PageList>
        <LogoutContainer>
          <button type="button" onClick={handleLogOut}>
            <img src={logoutIcon} alt="Logout" />
            <span>Sair do sistema</span>
          </button>
        </LogoutContainer>
      </NavbarContainer>
      <Content>
        <Header
          userName="Dra. Lee Parker"
          userPhoto="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        />
        {children}
      </Content>
    </Container>
  );
};

export default Navbar;
