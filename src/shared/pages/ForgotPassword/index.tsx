import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import vifeLogo from '@shared/assets/images/vife-logo.svg';
import idoctorLogo from '@shared/assets/images/idoctor-logo.svg';

import { Container, Background, Content } from './styles';
import { useAuth } from '@shared/hooks/auth';
import { message } from 'antd';

const Home: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = useCallback(
    async e => {
      e.preventDefault();

      try {
        await signIn({
          login,
          password,
        });
      } catch (err) {
        if (err.response.data) {
          return message.error(err.response.data.message);
        }

        return message.error(
          'Ocorreu um erro interno. Tente novamente mais tarde',
        );
      }

      history.push('/');
    },
    [login, password, signIn, history],
  );

  return (
    <Container>
      <Background>
        <main>
          <img src={idoctorLogo} alt="iDoctor" />
          <h1>Bem vindo</h1>
          <span>
            Sistema que organiza e agiliza sua clínica, tenha mais praticidade
            no seu dia a dia com o software para clínicas mais fácil de usar.
            Queremos o sucesso da sua clínica tanto quanto você!
          </span>
          <strong>O Software Médico preparado para a LGPD</strong>
        </main>
        <footer>
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
        </footer>
      </Background>
      <Content>
        <header>
          <FiArrowLeft color="#7081fa" size="25" />
          <Link to="/">Voltar para login</Link>
        </header>
        <main>
          <h1>Redefinir sua senha</h1>
          <form>
            <div>
              <span>E-mail</span>
              <input
                type="text"
                placeholder="seuemail@exemplo.com"
                name="email"
                id="email"
                onChange={e => setLogin(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleSignIn}>
              Recuperar
            </button>
          </form>
        </main>
        <footer>
          <span>CREATED BY</span>
          <img src={vifeLogo} alt="VIFE Logo" />
        </footer>
      </Content>
    </Container>
  );
};

export default Home;
