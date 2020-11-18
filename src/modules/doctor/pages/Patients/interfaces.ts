export interface IPatient {
  id: string;
  name: string;
  avatar: string | null;
}

export interface IPaginationProperties {
  numberOfPatients: number;
  patientsPerPage: number;
  numberOfPages: number;
}
