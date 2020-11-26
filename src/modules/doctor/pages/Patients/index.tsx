import React, { useCallback, useEffect, useState } from 'react';
import { Empty, message, Pagination, Skeleton } from 'antd';

import Navbar from '@shared/components/Navbar';
import PatientItem from '@shared/components/PatientItem';

import api from '@shared/services/api';
import Loading from '@shared/components/Loading';

import { IPaginationProperties, IPatient } from './interfaces';
import { Container, ListContainer } from './styles';

const Patients: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginationProperties, setPaginationProperties] = useState<
    IPaginationProperties
  >();

  const getAppointments = useCallback(async () => {
    try {
      const response = await api.get(`patients?page=${pageNumber}`);

      setPatients(response.data);
    } catch (err) {
      setLoading(false);

      if (err.response) {
        return message.error(err.response.data.message);
      }

      return message.error('Ocorreu um erro interno. Tente novamente mais tarde');
    }
  }, [pageNumber]);

  const getPaginationProperties = useCallback(async () => {
    try {
      const response = await api.get(`patients/pagination`);

      setPaginationProperties(response.data);

      if (response.data) {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      if (err.response) {
        return message.error(err.response.data.message);
      }

      return message.error('Ocorreu um erro interno. Tente novamente mais tarde');
    }
  }, [paginationProperties]);

  useEffect(() => {
    getPaginationProperties();
  }, [pageNumber]);

  useEffect(() => {
    getAppointments();
  }, [getAppointments, pageNumber]);

  return (
    <Navbar pageSelected="patients">
      {loading ? (
        <>
          <Skeleton loading={loading} active />
          <Skeleton loading={loading} active />
          <Skeleton loading={loading} active />
          <Loading />
        </>
      ) : (
        <Container>
          <h1>Pacientes</h1>
          <ListContainer>
            <header>
              <div>
                <span>Nome</span>
              </div>
            </header>

            <main>
              {patients.map(patient => (
                <PatientItem
                  key={patient.id}
                  avatar={patient.avatar}
                  name={patient.name}
                  id={patient.id}
                />
              ))}

              {patients.length === 0 && <Empty description="" />}
            </main>

            {paginationProperties && (
              <footer>
                <span>
                  Mostrando <b>{patients.length}</b> de{' '}
                  <b>{paginationProperties.numberOfPatients}</b> pacientes
                </span>

                <Pagination
                  defaultCurrent={1}
                  total={paginationProperties.numberOfPages}
                  onChange={page => setPageNumber(page)}
                />
              </footer>
            )}
          </ListContainer>
        </Container>
      )}
    </Navbar>
  );
};

export default Patients;
