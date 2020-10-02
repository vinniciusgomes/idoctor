import React from 'react';
import { FiChevronLeft, FiChevronRight, FiCode } from 'react-icons/fi';

import Navbar from '../../components/layout/Navbar';

import welcomeImage from '../../assets/images/dr-woman.svg';
import PatientsList from '../../components/pages/Patients/PatientsList';

import {
  AppointmentsListContainer,
  CalendarWrapper,
  Container,
  ContentWrapper,
  PageTitleContainer,
  WelcomeCard,
  WelcomeImage,
  Wrapper,
  ListContainer,
} from './styles';

const Home: React.FC = () => (
  <Navbar pageSelected="dashboard">
    <Container>
      <PageTitleContainer>
        <h1>Dashboard</h1>
      </PageTitleContainer>

      <Wrapper>
        <ContentWrapper>
          <WelcomeCard>
            <WelcomeImage src={welcomeImage} />
            <div>
              <span>Bom dia,</span>
              <b>Dra. Lee Parker</b>
            </div>
            <span>
              Seja bem vindo ao iDoctor, você tem um total de
              {' '}
              <b>8</b>
              {' '}
              consultas hoje!
            </span>
          </WelcomeCard>
          <AppointmentsListContainer>
            <h1>Consultas</h1>

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
                <PatientsList max={3} />
              </main>
            </ListContainer>
          </AppointmentsListContainer>
        </ContentWrapper>
        <CalendarWrapper />
      </Wrapper>
    </Container>
  </Navbar>
);

export default Home;
