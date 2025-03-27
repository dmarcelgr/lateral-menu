// Api for alerts tab at Lateral Menu:
//esvyda-events-api-eventlist&is_read_by_medical_staff=false&only_my_patients=true&page=1&page_size=5

import { AlertsProps, AlertsResponse } from '../dto/Alerts';
import { AlertsSearchProps } from '../dto/AlertsSearch';

export default function AlertsAdapter(data: AlertsProps): AlertsResponse {
  const { events, total_events: totalEvents } = data;
  return {
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
    totalEvents: totalEvents,
  };
}

export function AlertsSearchAdapter(data: AlertsSearchProps) {
  const { searchParams } = data;
  return {
    readByMedicalStaff: searchParams.readByMedicalStaff,
    onlyMyPatients: searchParams.onlyMyPatients,
    page: searchParams.page,
    pageSize: searchParams.pageSize,
  };
}
