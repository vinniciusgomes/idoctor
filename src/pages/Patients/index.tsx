import React from 'react';
import Navbar from '../../components/Navbar';

import { Container, ListContainer } from './styles';

const Patients: React.FC = () => (
  <Navbar pageSelected="patients">
    <Container>
      <h1>Pacientes</h1>
      <ListContainer>
        <ul>
          <li>Paciente 1</li>
          <li>Paciente 1</li>
          <li>Paciente 1</li>
          <li>Paciente 1</li>
          <li>Paciente 1</li>
        </ul>

        <footer>
          <span>
            Mostrando
            {' '}
            <b>10</b>
            {' '}
            de
            {' '}
            <b>350</b>
            {' '}
            pacientes
          </span>

          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </footer>
      </ListContainer>
    </Container>
  </Navbar>
);

export default Patients;
