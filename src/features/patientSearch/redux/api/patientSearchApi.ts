import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PatientSearchProps } from '../../dto/';
import PatientSearchAdapter, {
  PATIENTS_SEARCH,
} from '../../adapters/PatientSearchAdapter.adapter.ts';

export const patientSearchApi = createApi({
  reducerPath: 'patientSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => {
    return {
      getPatient: builder.query<PatientSearchProps[], void>({
        queryFn: async (filterValues) => {
          const filteredData = PATIENTS_SEARCH.filter((item) => {
            if (!filterValues.length) return true;
            return filterValues.some(
              (filter) =>
                item.id_people.full_name
                  .toLowerCase()
                  .includes(filter.toLowerCase()) ||
                item.id_people.date_of_birth?.includes(filter.toLowerCase())
            );
          });

          return { data: PatientSearchAdapter(filteredData) };
        },
      }),
      // getPatient: builder.query<PatientSearchProps[], void>({
      //   queryFn: async () => {
      //     return { data: PatientSearchAdapter(PATIENTS_SEARCH) };
      //   },
      // }),
    };
  },
});

export const { useGetPatientQuery } = patientSearchApi;
