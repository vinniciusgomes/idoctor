import React from 'react';

import Navbar from '@shared/components/Navbar';

import { Container } from './styles';

const Settings: React.FC = () => (
  <Navbar pageSelected="settings">
    <Container>
      <h1>Settings</h1>
    </Container>
  </Navbar>
);

export default Settings;
