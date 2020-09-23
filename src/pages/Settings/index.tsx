import React from 'react';

import Navbar from '../../components/layout/Navbar';

import { Container } from './styles';

const Settings: React.FC = () => (
  <Navbar pageSelected="settings">
    <Container>
      <h1>Settings</h1>
    </Container>
  </Navbar>
);

export default Settings;
