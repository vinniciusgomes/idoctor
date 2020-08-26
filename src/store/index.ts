import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './ducks';
import rootSaga from './sagas';
import history from '../routes/history';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
