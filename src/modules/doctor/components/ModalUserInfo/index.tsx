import React, { useCallback, useEffect, useState } from 'react';

import TextField from '@shared/components/TextField';
import TextArea from '@shared/components/TextArea';
import Button from '@shared/components/Button';

import addIcon from '@shared/assets/images/add.svg';

import {
  Container,
  Form,
  ImageInput,
  InputRowAlign,
  TextFieldRow,
  TextFieldWrapper,
} from './styles';
import { IModalUserInfo, IReportData } from './interfaces';
import api from '@shared/services/api';
import { format } from 'date-fns';
import { useAuth } from '@shared/hooks/auth';

const ModalUserInfo: React.FC<IModalUserInfo> = ({ patient }) => {
  const [medicalReport, setMedicalReport] = useState('');
  const { doctor } = useAuth();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      try {
        api.post('patients/medical-record', {
          patient_id: patient?.id,
          date: format(new Date(), 'yyyy-MM-dd'),
          record: medicalReport,
          doctor_id: doctor?.id,
        });
      } catch (err) {}
    },

    [medicalReport],
  );

  const handleGetMedicalReport = useCallback(async () => {
    try {
      const response: IReportData = await api.get(
        `patients/${patient?.id}/medical-record`,
      );

      setMedicalReport(response.data.record);
    } catch (err) {}
  }, []);

  useEffect(() => {
    handleGetMedicalReport();
  }, []);

  return (
    <Container>
      <TextFieldRow>
        <TextFieldWrapper width={194}>
          <ImageInput>
            <img src={addIcon} style={{ width: 40 }} />
          </ImageInput>
        </TextFieldWrapper>
        <div>
          <InputRowAlign>
            <TextFieldWrapper width={260}>
              <TextField
                disabled
                label="Nome"
                name="name"
                value={patient?.name}
              />
            </TextFieldWrapper>
            <TextFieldWrapper width={555}>
              <TextField
                disabled
                label="E-mail"
                name="email"
                value={patient?.email}
              />
            </TextFieldWrapper>
          </InputRowAlign>
          <InputRowAlign>
            <TextFieldWrapper width={260}>
              <TextField
                disabled
                label="Telefone"
                name="phone"
                value={patient?.phone}
              />
            </TextFieldWrapper>
            <TextFieldWrapper width={260}>
              <TextField disabled label="Cadastro" name="register" value="" />
            </TextFieldWrapper>
            <TextFieldWrapper width={260}>
              <TextField
                disabled
                label="Nascimento"
                name="birthday"
                value={patient?.date_of_birth}
              />
            </TextFieldWrapper>
          </InputRowAlign>
          <InputRowAlign>
            <TextFieldWrapper width={260}>
              <TextField
                disabled
                label="Prontuário"
                name="medicalRecord"
                value=""
              />
            </TextFieldWrapper>
            <TextFieldWrapper width={260}>
              <TextField
                disabled
                label="Sexo"
                name="gender"
                value={patient?.gender}
              />
            </TextFieldWrapper>
            <TextFieldWrapper width={260}>
              <TextField
                disabled
                label="Cor"
                name="color"
                value={patient?.skin_color}
              />
            </TextFieldWrapper>
          </InputRowAlign>
        </div>
      </TextFieldRow>
      <TextFieldRow>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Naturalidade"
            name="naturalness"
            value={patient?.naturalness}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Estado civil"
            name="maritalStatus"
            value={patient?.marital_status}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField disabled label="CPF" name="cpf" value={patient?.ssn} />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField disabled label="Titular do CPF" name="cpfOwner" value="" />
        </TextFieldWrapper>
      </TextFieldRow>
      <TextFieldRow>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Grau de instrução"
            name="educationLevel"
            value={patient?.degree_of_instuction}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Profissão"
            name="profession"
            value={patient?.profession}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Convenio"
            name="healthInsurance"
            value={patient?.health_insurance}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Matrícula"
            name="registration"
            value={patient?.id}
          />
        </TextFieldWrapper>
      </TextFieldRow>
      <TextFieldRow>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="CEP"
            name="cep"
            value={patient?.zip_code}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={565}>
          <TextField
            disabled
            label="Logradouro"
            name="street"
            value={patient?.address}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Complemento"
            name="complement"
            value={patient?.complement}
          />
        </TextFieldWrapper>
      </TextFieldRow>
      <TextFieldRow>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Número"
            name="number"
            value={patient?.address_number}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Bairro"
            name="neighborhood"
            value={patient?.neighborhood}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField
            disabled
            label="Cidade"
            name="city"
            value={patient?.city}
          />
        </TextFieldWrapper>
        <TextFieldWrapper width={260}>
          <TextField disabled label="UF" name="state" value={patient?.fu} />
        </TextFieldWrapper>
      </TextFieldRow>
      <Form onSubmit={handleSubmit}>
        <TextFieldWrapper>
          <TextArea
            label="Prontuário"
            value={medicalReport}
            onChange={e => setMedicalReport(e.target.value)}
          />
        </TextFieldWrapper>
        <Button type="submit">Salvar prontuário</Button>
      </Form>
    </Container>
  );
};

export default ModalUserInfo;
