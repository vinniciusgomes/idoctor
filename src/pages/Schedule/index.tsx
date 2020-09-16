import React from 'react';
import Navbar from '../../components/Navbar';

import { Container } from './styles';

const Schedule: React.FC = () => {
  return (
    <Navbar pageSelected="schedule">
      <Container>
        <h1>Schedule</h1>
      </Container>
    </Navbar>
  );
};

export default Schedule;
