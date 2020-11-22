export interface IAppointment {
  id: string;
  date: string;
  start_time: string;
  status: number;
  type: number;
  patient: IPatient;
  doctor: IDoctor;
}

export interface IDoctor {
  id: string;
  speciality: string;
  user: {
    name: string;
  };
}

export interface IPatient {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface IEvent {
  type: 'success' | 'processing' | 'error' | 'default' | 'warning';
  content: string;
}
