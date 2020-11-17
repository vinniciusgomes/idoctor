import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface IDoctor {
  id: string;
  speciality: string;
  start_time: string;
  end_time: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

interface IUser {
  avatar: string;
  clinic_id: string;
  id: string;
  login: string;
  name: string;
  type: number;
  doctor?: IDoctor;
  created_at: string;
  updated_at: string;
}

interface IAuthState {
  token: string;
  user: IUser;
  doctor?: IDoctor;
}

interface ISignInCredentials {
  login: string;
  password: string;
}

interface IAuthContextData {
  user: IUser;
  doctor?: IDoctor;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@iDoctor:token');
    const user = localStorage.getItem('@iDoctor:user');
    const doctor = localStorage.getItem('@iDoctor:doctor');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      if (doctor) {
        return { token, user: JSON.parse(user), doctor: JSON.parse(doctor) };
      }

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post('sessions', {
      login,
      password,
    });

    const { token, user, doctor } = response.data;

    localStorage.setItem('@iDoctor:token', token);
    localStorage.setItem('@iDoctor:user', JSON.stringify(user));

    if (doctor) {
      localStorage.setItem('@iDoctor:doctor', JSON.stringify(doctor));
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user, doctor });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@iDoctor:token');
    localStorage.removeItem('@iDoctor:user');
    localStorage.removeItem('@iDoctor:doctor');

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        doctor: data.doctor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
