export interface IDoctorData {
  id: string;
  speciality: string;
  start_time: string;
  end_time: string;
  user: { name: string };
}

export interface IDoctorDropdownProps {
  setDoctorId(id: string): void;
  setDoctorName(name: string): void;
}
