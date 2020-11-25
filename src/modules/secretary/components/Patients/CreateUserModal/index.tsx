import React, { useCallback, useState } from 'react';
import { message, Spin, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import TextField from '@shared/components/TextField';
import TextArea from '@shared/components/TextArea';
import Button from '@shared/components/Button';
import addIcon from '@shared/assets/images/add.svg';

import {
  ButtonWrapper,
  Container,
  InputRowAlign,
  TextFieldRow,
  TextFieldWrapper,
} from './styles';
import api from '@shared/services/api';
import { ICreateUserModal } from './interfaces';

const CreateUserModal: React.FC<ICreateUserModal> = ({ close }) => {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async e => {
    e.preventDefault();
    setLoading(true);

    try {
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
  }, []);

  const handleResetForm = useCallback(() => {
    setHasError(false);

    setLoading(false);
  }, []);

  const [fileList, setFileList] = useState<any>([]);

  const onChange = ({ fileList: newFileList }: any) => {
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

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextFieldRow>
          <TextFieldWrapper width={194}>
            <ImgCrop modalTitle="Cortar imagem" rotate>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
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
                <TextField label="Nome" name="name" />
              </TextFieldWrapper>
              <TextFieldWrapper width={555}>
                <TextField label="E-mail" name="email" />
              </TextFieldWrapper>
            </InputRowAlign>
            <InputRowAlign>
              <TextFieldWrapper width={260}>
                <TextField label="Telefone" name="phone" />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField label="Cadastro" name="register" />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField label="Nascimento" name="birthday" />
              </TextFieldWrapper>
            </InputRowAlign>
            <InputRowAlign>
              <TextFieldWrapper width={260}>
                <TextField label="Prontuário" name="medicalRecord" />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField label="Sexo" name="gender" />
              </TextFieldWrapper>
              <TextFieldWrapper width={260}>
                <TextField label="Cor" name="color" />
              </TextFieldWrapper>
            </InputRowAlign>
          </div>
        </TextFieldRow>
        <TextFieldRow>
          <TextFieldWrapper width={260}>
            <TextField label="Naturalidade" name="naturalness" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Estado civil" name="maritalStatus" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="CPF" name="cpf" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Titular do CPF" name="cpfOwner" />
          </TextFieldWrapper>
        </TextFieldRow>
        <TextFieldRow>
          <TextFieldWrapper width={260}>
            <TextField label="Grau de instrução" name="educationLevel" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Profissão" name="profession" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Convenio" name="healthInsurance" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Matrícula" name="registration" />
          </TextFieldWrapper>
        </TextFieldRow>
        <TextFieldRow>
          <TextFieldWrapper width={260}>
            <TextField label="CEP" name="cep" />
          </TextFieldWrapper>
          <TextFieldWrapper width={565}>
            <TextField label="Logradouro" name="street" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Complemento" name="complement" />
          </TextFieldWrapper>
        </TextFieldRow>
        <TextFieldRow>
          <TextFieldWrapper width={260}>
            <TextField label="Número" name="number" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Bairro" name="neighborhood" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="Cidade" name="city" />
          </TextFieldWrapper>
          <TextFieldWrapper width={260}>
            <TextField label="UF" name="state" />
          </TextFieldWrapper>
        </TextFieldRow>
        <ButtonWrapper>
          <Button>
            {loading ? <Spin style={{ marginTop: 10 }} /> : 'Criar Paciente'}
          </Button>
        </ButtonWrapper>
      </form>
    </Container>
  );
};

export default CreateUserModal;
