import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import Lottie from 'lottie-react-web';
import ptBR from 'antd/es/locale/pt_BR';

import Routes from './routes';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import theme from './styles/Theme';
import notSupportedAnimation from './assets/animations/not-supported-animation.json';

import 'antd/dist/antd.css';
import { Container, NotSupported } from './styles/app.styles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ConfigProvider locale={ptBR}>
            <Container>
              <Routes />
              <ReduxToastr />
              <GlobalStyle />
            </Container>
            <NotSupported>
              <Lottie
                options={{
                  animationData: notSupportedAnimation,
                }}
                width={400}
              />
              <span>Infelizmente sua resolução é menor do que a suportada pela nossa aplicação!</span>
              <b>Resolução minima</b>
            </NotSupported>
          </ConfigProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
