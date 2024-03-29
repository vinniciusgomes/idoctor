export interface IModalUserInfo {
  patient: IPatient | undefined;
}

export interface IPatient {
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

export interface IReportData {
  data: {
    record: string;
  };
}
