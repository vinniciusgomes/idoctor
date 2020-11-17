import React from 'react';
import { Calendar } from 'antd';

import Navbar from '@doctor/components/layout/Navbar';

import { Container } from './styles';

const Schedule: React.FC = () => (
  <Navbar pageSelected="schedule">
    <Container>
      <h1>Agenda</h1>

      <Calendar style={{ padding: 20, borderRadius: 10 }} />
    </Container>
  </Navbar>
);

export default Schedule;
