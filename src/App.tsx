import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { store, persistor } from './store';
import GlobalStyle from './assets/styles/Global';
import theme from './assets/styles/Theme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Routes />
          <ReduxToastr />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
