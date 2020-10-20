import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import vifeLogo from '../../../assets/images/vife-logo.svg';
import idoctorLogo from '../../../assets/images/idoctor-logo.svg';

import { Container, Background, Content } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleSignIn = useCallback(() => {
    localStorage.setItem(
      'access_token',
      '31203912-dsadas08312-dasdas-92112-12312312',
    );
    history.push('/');
  }, []);

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
              />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                placeholder="**********"
                name="password"
                id="password"
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
