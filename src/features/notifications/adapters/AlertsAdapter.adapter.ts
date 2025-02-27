// Api for alerts tab at Lateral Menu:
//esvyda-events-api-eventlist&is_read_by_medical_staff=false&only_my_patients=true&page=1&page_size=5

import { AlertsProps } from '../dto/Alerts';
import { AlertsSearchProps } from '../dto/AlertsSearch';

export default function AlertsAdapter(data: AlertsProps) {
  const { events, total_events } = data;
  return {
    totalEvents: total_events,
    events: events.map((item) => ({
      id: item.id,
      createDate: item.symptom_resport.created_at,
      status: item.status,
      cause: item.cause,
      patientPhoto: item.patient.id_people.image_filename,
      patientId: item.patient.id,
      patientName:
        item.patient.id_people.first_name +
        ' ' +
        item.patient.id_people.last_name,
    })),
  };
}

export function AlertsSearchAdapter(data: AlertsSearchProps) {
  const { searchParams } = data;
  return {
    readByMedicalStaff: searchParams.is_read_by_medical_staff,
    onlyMyPatients: searchParams.only_my_patients,
    page: searchParams.page,
    pageSize: searchParams.page_size,
  };
}
