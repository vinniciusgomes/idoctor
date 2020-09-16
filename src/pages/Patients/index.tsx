import React from 'react';
import Navbar from '../../components/Navbar';

import { Container } from './styles';

const Patients: React.FC = () => {
  return (
    <Navbar pageSelected="patients">
      <Container>
        <h1>Patients</h1>
      </Container>
    </Navbar>
  );
};

export default Patients;
