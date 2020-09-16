import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import idoctorLogo from '../../assets/images/idoctor-logo-dark.svg';
import dashboardIcon from '../../assets/images/dashboard-icon.svg';
import dashboardIconSelected from '../../assets/images/dashboard-icon-selected.svg';
import calendarIcon from '../../assets/images/calendar-icon.svg';
import calendarIconSelected from '../../assets/images/calendar-icon-selected.svg';
import patientsIcon from '../../assets/images/patients-icon.svg';
import patientsIconSelected from '../../assets/images/patients-icon-selected.svg';
import gearIcon from '../../assets/images/gear-icon.svg';
import gearIconSelected from '../../assets/images/gear-icon-selected.svg';
import chevronRightIcon from '../../assets/images/chevron-right-icon.svg';
import chevronRightIconSelected from '../../assets/images/chevron-right-icon-selected.svg';
import logoutIcon from '../../assets/images/logout-icon.svg';

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
  const history = useHistory();
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
    localStorage.clear();
    history.push('/acessar');
  }, []);

  return (
    <Container>
      <NavbarContainer>
        <LogoContainer>
          <img src={idoctorLogo} alt="iDoctor Logo" />
        </LogoContainer>
        <PageList>
          {pages.map(page => (
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
      <Content>{children}</Content>
    </Container>
  );
};

export default Navbar;
