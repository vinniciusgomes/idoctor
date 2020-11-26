import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowRight, FiCode } from 'react-icons/fi';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Empty, message, Modal, Skeleton } from 'antd';

import welcomeImage from '@doctor/assets/images/dr-woman.svg';
import Navbar from '@shared/components/Navbar';
import { useAuth } from '@shared/hooks/auth';
import Loading from '@shared/components/Loading';
import api from '@shared/services/api';
import AppointmentsItem from '@doctor/components/Home/Appointments';
import ModalUserInfo from '@doctor/components/ModalUserInfo';

import {
  AppointmentsListContainer,
  AppointmentsTitleContainer,
  Container,
  ContentWrapper,
  PageTitleContainer,
  WelcomeCard,
  WelcomeImage,
  Wrapper,
  ListContainer,
} from './styles';
import { IAppointmentsItemProps, IAllPatientData } from './interfaces';

const Home: React.FC = () => {
  const { user, doctor } = useAuth();
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<IAppointmentsItemProps[]>(
    [],
  );
  const [allPatientData, setAllPatientData] = useState<IAllPatientData>();
  const [visible, setVisible] = useState(false);

  const getAppointments = useCallback(async () => {
    try {
      const response = await api.get(
        `appointments/doctor/${doctor?.id}?date=${format(
          new Date(),
          'yyyy/MM/dd',
        )}&limit=4`,
      );

      setAppointments(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      if (err.response) {
        return message.error(err.response.data.message);
      }

      return message.error(
        'Ocorreu um erro interno. Tente novamente mais tarde',
      );
    }
  }, []);

  const handleOpenModal = useCallback(async patientId => {
    try {
      const response = await api.get(`patients/${patientId}`);
      setAllPatientData(response.data);
      setVisible(true);
    } catch (err) {}
  }, []);

  useEffect(() => {
    getAppointments();
  }, []);

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
                  <Link to="/agenda">
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
                    {appointments.length === 0 && <Empty description="" />}
                    {appointments.map((appointment, index) => {
                      if (index <= 2) {
                        return (
                          <AppointmentsItem
                            key={appointment.id}
                            id={appointment.id}
                            date={appointment.date}
                            doctor={appointment.doctor}
                            patient={appointment.patient}
                            start_time={appointment.start_time}
                            status={appointment.status}
                            type={appointment.type}
                            handleOpenModal={handleOpenModal}
                          />
                        );
                      }
                    })}
                  </main>
                </ListContainer>
              </AppointmentsListContainer>
            </ContentWrapper>
          </Wrapper>
          <Modal
            centered
            visible={visible}
            onCancel={() => setVisible(false)}
            width={1300}
            footer={false}
          >
            <ModalUserInfo patient={allPatientData} />
          </Modal>
        </Container>
      )}
    </Navbar>
  );
};

export default Home;
