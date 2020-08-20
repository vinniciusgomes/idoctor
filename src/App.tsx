import React from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

import Routes from "./routes";
import store from "./store";
import GlobalStyle from "./assets/styles/Global";

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <ReduxToastr />
        <GlobalStyle />
      </>
    </Provider>
  );
}

export default App;
