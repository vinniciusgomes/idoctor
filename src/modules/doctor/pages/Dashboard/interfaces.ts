export interface IAppointmentsItemProps {
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

export interface IAllPatientData {
  id: string;
  name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  skin_color: string;
  naturalness: string;
  marital_status: string;
  ssn: string;
  degree_of_instuction: string;
  profession: string;
  health_insurance: string;
  zip_code: string;
  address: string;
  complement: string;
  address_number: number;
  neighborhood: string;
  city: string;
  fu: string;
  avatar: string | null;
  clinic_id: string;
  created_at: string;
  updated_at: string;
}
