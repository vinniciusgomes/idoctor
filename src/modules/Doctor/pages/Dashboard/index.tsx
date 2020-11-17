import React, { useCallback, useEffect } from 'react';
import { FiArrowRight, FiCode } from 'react-icons/fi';

import { toast } from 'react-toastify';
import Navbar from '@doctor/components/layout/Navbar';

import welcomeImage from '@shared/assets/images/dr-woman.svg';
import PatientsList from '@doctor/components/pages/Patients/PatientsList';

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
import Calendar from '@doctor/components/pages/Home/Calendar';
import { useAuth } from '@shared/hooks/auth';
import api from '@shared/services/api';

const Home: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    // getAppointments();
    console.log(user);
  }, []);

  const getAppointments = useCallback(async ({ doctorId }) => {
    try {
      const response = await api.get(
        `appointments/doctor/${doctorId}?date=2020-11-16&limit=6`,
      );

      console.log(response);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }, []);

  return (
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
                <b>{user.name}</b>
              </div>
              <span>
                Seja bem vindo ao iDoctor, você tem um total de <b>8</b>{' '}
                consultas hoje!
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
};

export default Home;
