import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { message, Spin } from 'antd';

import { useAuth } from '@shared/hooks/auth';

import vifeLogo from '@shared/assets/images/vife-logo.svg';
import idoctorLogo from '@shared/assets/images/idoctor-logo.svg';
import Button from '@shared/components/Button';

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

const Home: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(
    async e => {
      e.preventDefault();
      setLoading(true);

      if (login && password !== '') {
        try {
          await signIn({
            login,
            password,
          });
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

        history.push('/');
      } else {
        setHasError(true);
        setLoading(false);
        return message.error('Preencha todos os campos para prosseguir!');
      }
    },
    [login, password, signIn, history],
  );

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
        <FormContent>
          <h1>Acesse sua conta</h1>
          <SignInForm>
            <div>
              <span>E-mail</span>
              <TextField
                type="text"
                placeholder="seuemail@exemplo.com"
                name="email"
                id="email"
                hasError={hasError}
                onChange={e => {
                  setLogin(e.target.value);
                  setHasError(false);
                }}
              />
            </div>
            <div>
              <span>Senha</span>
              <TextField
                type="password"
                placeholder="**********"
                name="password"
                id="password"
                hasError={hasError}
                onChange={e => {
                  setPassword(e.target.value);
                  setHasError(false);
                }}
              />
            </div>
            <Button type="submit" onClick={handleSignIn} disabled={loading}>
              {loading ? <Spin style={{ marginTop: 10 }} /> : 'Acessar'}
            </Button>
          </SignInForm>
          <Link to="/recuperar-senha">Esqueci minha senha</Link>
        </FormContent>
      </Content>
    </Container>
  );
};

export default Home;
