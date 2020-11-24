import React, { useCallback, useState } from 'react';
import { message } from 'antd';
import { format } from 'date-fns';

import TextField from '@shared/components/TextField';
import Button from '@shared/components/Button';

import { ButtonWrapper, Container, TextFieldWrapper } from './styles';
import api from '@shared/services/api';
import { ICreateAppointmentModal, IPatientData } from './interfaces';

const CreateAppointmentModal: React.FC<ICreateAppointmentModal> = ({
  doctorId,
  doctorName,
}) => {
  const [hasError, setHasError] = useState(false);
  const [patientDocument, setPatientDocument] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentHour, setAppointmentHour] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      if (
        patientDocument &&
        appointmentDate &&
        appointmentHour &&
        appointmentType
      ) {
        try {
          const patientResponse = await api.get(
            `patients/document/${patientDocument}`,
          );

          const patientData: IPatientData = patientResponse.data;

          if (patientData.id) {
            const data = {
              date: format(new Date(appointmentDate), 'yyyy-mm-dd'),
              start_time: appointmentHour,
              status: 1,
              type: appointmentType,
              doctor_id: doctorId,
              patient_id: patientData.id,
              clinic_id: patientData.clinic_id,
            };

            const response = await api.post('appointments', data);

            console.log(response);
          } else {
            setHasError(true);
            setLoading(false);
            return message.error(
              'Não foi possível encontrar esse paciente. Tente novamente!',
            );
          }
        } catch (err) {
          setHasError(true);
          setLoading(false);
          if (err.response) {
            return message.error(err.response.data.message);
          }
          return message.error(
            'Ocorreu um erro interno na aplicação. Tente novamente mais tarde!',
          );
        }
      } else {
        setHasError(true);
        setLoading(false);
        return message.error('Preencha todos os campos para prosseguir!');
      }
    },
    [patientDocument, appointmentDate, appointmentHour, appointmentType],
  );

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextFieldWrapper>
          <TextField
            label="Documento do paciente"
            required={true}
            placeholder="Documento do paciente"
            name="patientDocument"
            id="patientDocument"
            hasError={hasError}
            onChange={e => {
              setPatientDocument(e.target.value);
              setHasError(false);
            }}
          />
        </TextFieldWrapper>
        <TextFieldWrapper row={true}>
          <TextField
            label="Data da consulta"
            required={true}
            placeholder="Data da consulta"
            name="appointmentDate"
            id="appointmentDate"
            hasError={hasError}
            onChange={e => {
              setAppointmentDate(e.target.value);
              setHasError(false);
            }}
          />
          <TextField
            label="Hora da consulta"
            required={true}
            placeholder="Hora da consulta"
            name="appointmentHour"
            id="appointmentHour"
            hasError={hasError}
            onChange={e => {
              setAppointmentHour(e.target.value);
              setHasError(false);
            }}
          />
        </TextFieldWrapper>
        <TextFieldWrapper row={true}>
          <TextField
            label="Tipo da consulta"
            required={true}
            placeholder="Tipo da consulta"
            name="appointmentType"
            id="appointmentType"
            hasError={hasError}
            onChange={e => {
              setAppointmentType(e.target.value);
              setHasError(false);
            }}
          />
          <TextField
            label="Médico"
            required={true}
            placeholder="Médico"
            disabled
            value={doctorName}
            hasError={hasError}
          />
        </TextFieldWrapper>
        <ButtonWrapper>
          <Button>Salvar</Button>
        </ButtonWrapper>
      </form>
    </Container>
  );
};

export default CreateAppointmentModal;
