// interfaces/schemas.ts

export type Lecturer = {
  id_lecturer: number;
  NIDN: number;
  name_lecturer: string;
  room_lecturer: number;
  mac_address_lecturer: string;
  course_lecture: string;
}

export type Device = {
  id_scan: number;
  boardcomputer_name: string;
  mac_address_scan: string;
  ip_address_scan: string;
  timetaken: string; // or Date if preferred
}

export type Availability = {
  id_availability: number;
  NIDN: string;
  lecturer_status: string | null;
  timetaken: string; // Assuming it's a string representation of datetime
}

export type Student=  {
  id_student: number;
  name_student: string;
  NIM: string;
  class_student: string;
}

export type Login = {
  id_login: number;
  email: string;
  password: string;
  NIM: number;
  NIDN: number;
}

export type Props = {
  lecture: Lecturer;
  availabilityRecords: Availability[];
}