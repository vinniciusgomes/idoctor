import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';

import api from '../../services/api';
import AuthActions from '../ducks/auth';

interface SignInData {
  email: string;
  password: string;
}

export function* signIn({ email, password }: SignInData) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    localStorage.setItem('iDoctor:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha!',
      }),
    );
  }
}
