import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import { store, persistor } from './store';
import GlobalStyle from './assets/styles/Global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <ReduxToastr />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
