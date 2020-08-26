import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types & Actions Creators
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

// Initial State
export const INITIAL_STATE = Immutable({
  signedIn: !!localStorage.getItem('@Omni:token'),
  token: localStorage.getItem('@Omni:token') || null,
});

// Reducers
interface SuccessProps {
  token: string;
}
export const success = (state: any, { token }: SuccessProps) =>
  state.merge({ signedIn: true, token });

// Reducers to types
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
