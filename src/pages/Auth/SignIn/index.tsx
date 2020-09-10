import React from 'react';

import vifeLogo from '../../../assets/images/vife-logo.svg';
import { Container, Background, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Background />
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
            <button type="submit">Acessar</button>
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
