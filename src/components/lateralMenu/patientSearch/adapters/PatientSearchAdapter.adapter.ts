// Api for Patient Search Section at Lateral Menu:
//esvyda-patients-api-patients-get
import { PatientSearchBoxProps, PatientSearchInfoApi, PatientSearchProps } from '../dto';
import { EwpPatientSearch, EwpPatientSearchBox } from '../models';

export default function PatientSearchAdapter(
  data: PatientSearchProps
): EwpPatientSearch {
  const { patients, total: total_patients } = data;
  return {
    totalPatients: total_patients,
    patients: patients.map((patient: PatientSearchInfoApi) => ({
      patientId: patient.id,
      patientFirstName: patient.id_people.first_name,
      patientLastName: patient.id_people.last_name,
      patientFullName: patient.id_people.full_name,
      patientDOB: patient.id_people.date_of_birth,
      patientStatus: patient.id_people.id_user?.is_active || null,
    })),
  };
}

export function searchBoxAdapter(
  data: PatientSearchBoxProps
): EwpPatientSearchBox {
  const { searchData } = data;
  return {
    searchBox: searchData.search_box,
    dailyReview: searchData.daily_review,
    section: searchData.section,
    departmentInsertions: searchData.department_insertions,
  };
}
