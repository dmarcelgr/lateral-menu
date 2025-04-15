export interface PatientSearchProps {
  data: PatientSearchApi;
}

export interface PatientSearchApi {
  total_patients: number;
  patients: PatientSearchInfoApi[];
}

export interface PatientSearchInfoApi {
  id: number;
  id_people: {
    first_name: string;
    last_name: string;
    full_name: string;
    date_of_birth: string;
    id_user: {
      is_active: boolean;
    };
  };
}
