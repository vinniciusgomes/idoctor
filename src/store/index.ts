import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

import rootReducer from "./ducks";
import rootSaga from "./sagas";
import history from "../routes/history";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(rootReducer(history), applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
