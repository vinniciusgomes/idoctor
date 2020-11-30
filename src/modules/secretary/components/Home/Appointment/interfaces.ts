export interface IAppointmentItemProps {
  id: string;
  date: string;
  start_time: string;
  status: number;
  type: number;
  patient: {
    id: string;
    avatar: string;
    name: string;
    email: string;
    phone: string;
    appointments: any;
  };
  doctor: {
    id: string;
    speciality: string;
    user: { name: string };
  };
}
