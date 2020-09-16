import { createReducer, createActions } from 'reduxsauce';

// Types & Actions Creators
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
});

export const AuthTypes = Types;
export default Creators;

// Initial State
export const INITIAL_STATE = {
  // replace true for !!localStorage.getItem('access_token')
  authenticated: true,
  token: localStorage.getItem('access_token') || null,
};

// Reducers
interface SuccessProps {
  token: string;
}
export const success = (state: any, { token }: SuccessProps) =>
  state.merge({ authenticated: true, token });

// Reducers to types
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
});
