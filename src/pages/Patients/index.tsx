import React from 'react';
import { FiChevronLeft, FiChevronRight, FiCode } from 'react-icons/fi';

import Navbar from '../../components/layout/Navbar';
import PatientsList from '../../components/pages/Patients/PatientsList';

import { Container, ListContainer } from './styles';

const Patients: React.FC = () => (
  <Navbar pageSelected="patients">
    <Container>
      <h1>Pacientes</h1>
      <ListContainer>
        <header>
          <div>
            <span>Nome</span>
          </div>
          <div>
            <span>Ultima consulta</span>
            <FiCode color="#7081FA" />
          </div>
          <div>
            <span>Próxima consulta</span>
            <FiCode color="#7081FA" />
          </div>
        </header>

        <main>
          <PatientsList />
        </main>

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
            <FiChevronLeft size={22} color="#D8DCE0" />
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <FiChevronRight size={22} color="#D8DCE0" />
          </div>
        </footer>
      </ListContainer>
    </Container>
  </Navbar>
);

export default Patients;
