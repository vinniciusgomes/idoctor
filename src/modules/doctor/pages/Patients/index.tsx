import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Navbar from '@shared/components/Navbar';
import PatientItem from '@doctor/components/Patients/PatientItem';

import { Container, ListContainer } from './styles';
import api from '@shared/services/api';
import { IPaginationProperties, IPatient } from './interfaces';
import { Skeleton } from 'antd';

const Patients: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [page, setPage] = useState(1);
  const [paginationProperties, setPaginationProperties] = useState<
    IPaginationProperties
  >();

  const getAppointments = useCallback(async () => {
    try {
      const response = await api.get(`patients?page=${page}`);

      setPatients(response.data);
    } catch (err) {
      setLoading(false);

      if (err.response) {
        return toast.error(err.response.data.message);
      }

      return toast.error('Ocorreu um erro interno. Tente novamente mais tarde');
    }
  }, [page]);

  const getPaginationProperties = useCallback(async () => {
    try {
      const response = await api.get(`patients/pagination`);

      setPaginationProperties(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.response) {
        return toast.error(err.response.data.message);
      }

      return toast.error('Ocorreu um erro interno. Tente novamente mais tarde');
    }
  }, []);

  const handleAddPage = useCallback(() => {
    setPage(state => state + 1);
  }, []);

  const handleRemovePage = useCallback(() => {
    if (page > 1) {
      setPage(state => state - 1);
    }
  }, [page]);

  useEffect(() => {
    getAppointments();
  }, [getAppointments, page]);

  useEffect(() => {
    getPaginationProperties();
  }, []);

  return (
    <Navbar pageSelected="patients">
      {loading ? (
        <Skeleton loading={loading} active avatar />
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
            </main>

            {paginationProperties && (
              <footer>
                <span>
                  Mostrando <b>{patients.length}</b> de{' '}
                  <b>{paginationProperties.numberOfPatients}</b> pacientes
                </span>

                <div>
                  <FiChevronLeft
                    size={22}
                    color="#D8DCE0"
                    onClick={handleRemovePage}
                  />
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <FiChevronRight
                    size={22}
                    color="#D8DCE0"
                    onClick={handleAddPage}
                  />
                </div>
              </footer>
            )}
          </ListContainer>
        </Container>
      )}
    </Navbar>
  );
};

export default Patients;
