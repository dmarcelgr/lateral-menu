// Api for alerts tab at Lateral Menu:
//esvyda-events-api-eventlist&is_read_by_medical_staff=false&only_my_patients=true&page=1&page_size=5

import { AlertEvents, AlertProps, AlertSearchProps } from '../dto/';
import { EwpAlert } from '../models';

export default function AlertsAdapter(data: AlertProps): EwpAlert {
  const { events, total_events } = data;
  return {
    events: events.map((item: AlertEvents) => ({
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
    totalEvents: total_events,
  };
}

export function AlertsSearchAdapter(data: AlertSearchProps) {
  const { searchParams } = data;
  return {
    readByMedicalStaff: searchParams.readByMedicalStaff,
    onlyMyPatients: searchParams.onlyMyPatients,
    page: searchParams.page,
    pageSize: searchParams.pageSize,
  };
}
