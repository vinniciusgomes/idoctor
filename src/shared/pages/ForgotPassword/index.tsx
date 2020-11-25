import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import vifeLogo from '@shared/assets/images/vife-logo.svg';
import idoctorLogo from '@shared/assets/images/idoctor-logo.svg';

import {
  Container,
  Background,
  Content,
  TextField,
  FormContent,
  SignInForm,
  ContentFooter,
  ContentHeader,
  BackgroundContent,
  BackgroundFooter,
} from './styles';
import Button from '@shared/components/Button';

const Home: React.FC = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Background>
        <BackgroundContent>
          <img src={idoctorLogo} alt="iDoctor" />
          <h1>Bem vindo</h1>
          <span>
            Sistema que organiza e agiliza sua clínica, tenha mais praticidade
            no seu dia a dia com o software para clínicas mais fácil de usar.
            Queremos o sucesso da sua clínica tanto quanto você!
          </span>
          <strong>O Software Médico preparado para a LGPD</strong>
        </BackgroundContent>
        <BackgroundFooter>
          <span>© VIFE 2020 </span>
          <ul>
            <li>
              <a href="http://localhost:3000">Privacidade</a>
            </li>
            <li>
              <a href="http://localhost:3000">Ajuda</a>
            </li>
            <li>
              <a href="http://localhost:3000">Contato</a>
            </li>
          </ul>
        </BackgroundFooter>
      </Background>
      <Content>
        <ContentHeader>
          <FiArrowLeft color="#7081fa" size="25" />
          <Link to="/">Voltar para o login</Link>
        </ContentHeader>
        <FormContent>
          <h1>Recuperar sua conta</h1>
          <SignInForm>
            <div>
              <span>E-mail</span>
              <TextField
                hasError={false}
                type="text"
                placeholder="seuemail@exemplo.com"
                name="email"
                id="email"
              />
            </div>
            <Button type="submit">Recuperar</Button>
          </SignInForm>
        </FormContent>
        <ContentFooter>
          <span>CREATED BY</span>
          <img src={vifeLogo} alt="VIFE Logo" />
        </ContentFooter>
      </Content>
    </Container>
  );
};

export default Home;
