import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight, FiCode } from 'react-icons/fi';
import { toast } from 'react-toastify';

import welcomeImage from '@shared/assets/images/dr-woman.svg';
import PatientsList from '@doctor/components/Patients/PatientsList';

import Calendar from '@doctor/components/Home/Calendar';
import Navbar from '@shared/components/Navbar';
import { useAuth } from '@shared/hooks/auth';
import api from '@shared/services/api';

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
import { IAppointments } from './interfaces';

const Home: React.FC = () => {
  const { user, doctor } = useAuth();

  const [appointments, setAppointments] = useState<IAppointments[]>([]);

  useEffect(() => {
    handleGetAppointments();
  }, [user]);

  const handleGetAppointments = useCallback(async () => {
    try {
      const response = await api.get(
        `appointments/doctor/${doctor?.id}?date=2020-11-16&limit=6`,
      );

      setAppointments(response.data);
    } catch (err) {
      if (err.response.data) {
        return toast.error(err.response.data.message);
      }

      return toast.error('Ocorreu um erro interno. Tente novamente mais tarde');
    }
  }, [user]);

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
                Seja bem vindo ao iDoctor, você tem um total de <b>{appointments.length}</b>{' '}
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
                  {appointments.map(appointment => (
                    <div>Item</div>
                  ))}
                  <PatientsList max={1} />
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
