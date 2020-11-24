import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import 'antd/dist/antd.css';

import Routes from '@shared/routes';
import GlobalStyle from '@shared/styles/global';
import theme from '@shared/styles/Theme';

import { Container } from '@shared/styles/app.styles';
import AppProvider from '@shared/hooks';

const App: React.FC = () => (
  <AppProvider>
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={ptBR}>
        <Container>
          <Routes />
          <GlobalStyle />

        </Container>
      </ConfigProvider>
    </ThemeProvider>
  </AppProvider>
);

export default App;
