import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight, FiCode } from 'react-icons/fi';
import { toast } from 'react-toastify';

import welcomeImage from '@shared/assets/images/dr-woman.svg';

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
import AppointmentsItem from '../../components/Home/Appointments';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Loading from '@shared/components/Loading';
import { Skeleton } from 'antd';

const Home: React.FC = () => {
  const { user, doctor } = useAuth();
  const [loading, setLoading] = useState(true);

  const [appointments, setAppointments] = useState<IAppointments[]>([]);

  const getAppointments = useCallback(async () => {
    try {
      const response = await api.get(
        `appointments/doctor/${doctor?.id}?date=${format(
          new Date(),
          'yyyy/MM/dd',
        )}&limit=3`,
      );

      setAppointments(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      if (err.response) {
        return toast.error(err.response.data.message);
      }

      return toast.error('Ocorreu um erro interno. Tente novamente mais tarde');
    }
  }, [doctor]);

  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  return (
    <Navbar pageSelected="dashboard">
      {loading ? (
        <>
          <Skeleton loading={loading} active />
          <Skeleton loading={loading} active />
          <Skeleton loading={loading} active />
          <Loading />
        </>
      ) : (
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
                  Seja bem vindo ao iDoctor, você tem um total de{' '}
                  <b>{appointments.length}</b> consultas hoje!
                </span>
              </WelcomeCard>
              <AppointmentsListContainer>
                <AppointmentsTitleContainer>
                  <h1>Consultas</h1>
                  <Link to="/pacientes">
                    <span>Ver todos</span>
                    <FiArrowRight color="#3F5368" />
                  </Link>
                </AppointmentsTitleContainer>

                <ListContainer>
                  <header>
                    <div>
                      <span>Nome</span>
                    </div>
                    <div>
                      <span>Telefone</span>
                      <FiCode color="#7081FA" />
                    </div>
                    <div>
                      <span>Próxima consulta</span>
                      <FiCode color="#7081FA" />
                    </div>
                  </header>

                  <main>
                    {appointments.map(appointment => (
                      <AppointmentsItem
                        key={appointment.id}
                        id={appointment.id}
                        date={appointment.date}
                        doctor={appointment.doctor}
                        patient={appointment.patient}
                        start_time={appointment.start_time}
                        status={appointment.status}
                        type={appointment.type}
                      />
                    ))}
                  </main>
                </ListContainer>
              </AppointmentsListContainer>
            </ContentWrapper>
            <CalendarWrapper>
              <Calendar appointments={appointments} />
            </CalendarWrapper>
          </Wrapper>
        </Container>
      )}
    </Navbar>
  );
};

export default Home;