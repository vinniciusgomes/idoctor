import React, { useCallback, useState } from 'react';
import { message, Spin, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Formik } from 'formik';

import TextField from '@shared/components/TextField';
import Button from '@shared/components/Button';
import addIcon from '@shared/assets/images/add.svg';
import api from '@shared/services/api';

import {
  ButtonWrapper,
  Container,
  InputRowAlign,
  TextFieldRow,
  TextFieldWrapper,
} from './styles';
import { ICreateUserModal, IFormData } from './interfaces';
import { useAuth } from '@shared/hooks/auth';

const CreateUserModal: React.FC<ICreateUserModal> = ({ close }) => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<any>([]);

  const { user } = useAuth();

  const onPhotoChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: any) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleCreateUser = useCallback(
    async (userData: IFormData, { resetForm }) => {
      setLoading(true);

      const requestBody = {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        date_of_birth: userData.birthday,
        gender: userData.gender,
        skin_color: userData.color,
        naturalness: userData.naturalness,
        marital_status: userData.maritalStatus,
        ssn: userData.cpf,
        degree_of_instuction: userData.educationLevel,
        profession: userData.profession,
        health_insurance: userData.healthInsurance,
        zip_code: userData.cep,
        address: userData.street,
        complement: userData.complement,
        address_number: userData.number,
        neighborhood: userData.neighborhood,
        city: userData.city,
        fu: userData.state,
        clinic_id: user.clinic_id,
      };

      try {
        const response = await api.post('patients', requestBody);

        if (response.data.id) {
          message.success('Paciente criado com sucesso!');
        }
        setHasError(true);
        setLoading(false);
        resetForm({});
        close();
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
    },
    [],
  );

  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          register: '',
          birthday: '',
          medicalRecord: '',
          gender: '',
          color: '',
          naturalness: '',
          maritalStatus: '',
          cpf: '',
          cpfOwner: '',
          educationLevel: '',
          profession: '',
          healthInsurance: '',
          registration: '',
          cep: '',
          street: '',
          complement: '',
          number: '',
          neighborhood: '',
          city: '',
          state: '',
        }}
        onSubmit={handleCreateUser}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextFieldRow>
              <TextFieldWrapper width={194}>
                <ImgCrop modalTitle="Cortar imagem" rotate>
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onPhotoChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 1 && (
                      <img src={addIcon} style={{ width: 40 }} />
                    )}
                  </Upload>
                </ImgCrop>
              </TextFieldWrapper>
              <div>
                <InputRowAlign>
                  <TextFieldWrapper width={260}>
                    <TextField
                      label="Nome"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper width={555}>
                    <TextField
                      label="E-mail"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </TextFieldWrapper>
                </InputRowAlign>
                <InputRowAlign>
                  <TextFieldWrapper width={260}>
                    <TextField
                      label="Telefone"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper width={260}>
                    <TextField
                      label="Cadastro"
                      name="register"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.register}
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper width={260}>
                    <TextField
                      label="Nascimento"
                      name="birthday"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.birthday}
                    />
                  </TextFieldWrapper>
                </InputRowAlign>
                <InputRowAlign>
                  <TextFieldWrapper width={260}>
                    <TextField
                      label="Prontuário"
                      name="medicalRecord"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.medicalRecord}
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper width={260}>
                    <TextField
                      label="Sexo"
                      name="gender"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.gender}
                    />
                  </TextFieldWrapper>
                  <TextFieldWrapper width={260}>
                    <TextField
                      label="Cor"
                      name="color"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.color}
                    />
                  </TextFieldWrapper>
                </InputRowAlign>
              </div>
            </TextFieldRow>
            <TextFieldRow>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Naturalidade"
                  name="naturalness"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.naturalness}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Estado civil"
                  name="maritalStatus"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.maritalStatus}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="CPF"
                  name="cpf"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpf}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Titular do CPF"
                  name="cpfOwner"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpfOwner}
                />
              </TextFieldWrapper>
            </TextFieldRow>
            <TextFieldRow>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Grau de instrução"
                  name="educationLevel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.educationLevel}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Profissão"
                  name="profession"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.profession}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Convenio"
                  name="healthInsurance"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.healthInsurance}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Matrícula"
                  name="registration"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.registration}
                />
              </TextFieldWrapper>
            </TextFieldRow>
            <TextFieldRow>
              <TextFieldWrapper width={260}>
                <TextField
                  label="CEP"
                  name="cep"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cep}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={565}>
                <TextField
                  label="Logradouro"
                  name="street"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.street}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Complemento"
                  name="complement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.complement}
                />
              </TextFieldWrapper>
            </TextFieldRow>
            <TextFieldRow>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Número"
                  name="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Bairro"
                  name="neighborhood"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.neighborhood}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="Cidade"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField
                  label="UF"
                  name="state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                />
              </TextFieldWrapper>
            </TextFieldRow>
            <ButtonWrapper>
              <Button type="submit">
                {loading ? (
                  <Spin style={{ marginTop: 10 }} />
                ) : (
                  'Criar Paciente'
                )}
              </Button>
            </ButtonWrapper>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateUserModal;
