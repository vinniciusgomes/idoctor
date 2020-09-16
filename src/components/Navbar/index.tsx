import React from 'react';
import { Link } from 'react-router-dom';

import { Container, LogoContainer, PageList, LogoutContainer } from './styles';
import idoctorLogo from '../../assets/images/idoctor-logo-dark.svg';
import dashboardIcon from '../../assets/images/dashboard-icon.svg';
import calendarIcon from '../../assets/images/calendar-icon.svg';
import patientsIcon from '../../assets/images/patients-icon.svg';
import gearIcon from '../../assets/images/gear-icon.svg';
import chevronRightIcon from '../../assets/images/chevron-right-icon.svg';
import logoutIcon from '../../assets/images/logout-icon.svg';

const Navbar: React.FC = () => {
  const pages = [
    { id: 1, name: 'Dashboard', path: '/', icon: dashboardIcon },
    { id: 2, name: 'Agenda', path: '/agenda', icon: calendarIcon },
    { id: 3, name: 'Pacientes', path: '/pacientes', icon: patientsIcon },
    { id: 4, name: 'Config.', path: '/configuracoes', icon: gearIcon },
  ];

  return (
    <Container>
      <LogoContainer>
        <img src={idoctorLogo} alt="iDoctor Logo" />
      </LogoContainer>
      <PageList>
        {pages.map(page => (
          <li key={page.id}>
            <Link to={page.path}>
              <div>
                <img src={page.icon} alt={page.name} />
                <span>{page.name}</span>
              </div>
              <img src={chevronRightIcon} alt="Arrow" />
            </Link>
          </li>
        ))}
      </PageList>
      <LogoutContainer>
        <button type="button">
          <img src={logoutIcon} alt="Logout" />
          <span>Sair do sistema</span>
        </button>
      </LogoutContainer>
    </Container>
  );
};

export default Navbar;
