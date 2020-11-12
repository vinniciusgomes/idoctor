import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import vifeLogo from '../../../assets/images/vife-logo.svg';
import idoctorLogo from '../../../assets/images/idoctor-logo.svg';

import { Container, Background, Content } from './styles';
import { useAuth } from '../../../hooks/auth';

const Home: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = useCallback(
    async (e) => {
      e.preventDefault();

      await signIn({
        login,
        password,
      });

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
              <a href="#">Privacidade</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </footer>
      </Background>
      <Content>
        <header>
          <a href="#">Não possuí conta?</a>
        </header>
        <main>
          <h1>Acesse sua conta</h1>
          <form>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                placeholder="seuemail@exemplo.com"
                name="email"
                id="email"
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="**********"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleSignIn}>
              Acessar
            </button>
          </form>
          <a href="#">Esqueci minha senha</a>
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
