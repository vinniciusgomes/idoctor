import React from 'react';
import { FiArrowRight, FiCode } from 'react-icons/fi';

import Navbar from '../../components/layout/Navbar';

import welcomeImage from '../../assets/images/dr-woman.svg';
import PatientsList from '../../components/pages/Patients/PatientsList';

import {
  AppointmentsListContainer,
  AppointmentsTitleContainer,
  CalendarWrapper,
  Container,
  ContentWrapper,
  PageTitleContainer,
  WelcomeCard,
  WelcomeImage,
  Wrapper,
  ListContainer,
} from './styles';
import Calendar from '../../components/pages/Home/Calendar';

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
              consultas
              hoje!
            </span>
          </WelcomeCard>
          <AppointmentsListContainer>
            <AppointmentsTitleContainer>
              <h1>Consultas</h1>
              <div>
                <span>Ver todos</span>
                <FiArrowRight color="#3F5368" />
              </div>
            </AppointmentsTitleContainer>

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
        <CalendarWrapper>
          <Calendar />
        </CalendarWrapper>
      </Wrapper>
    </Container>
  </Navbar>
);

export default Home;
