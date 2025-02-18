import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PatientSearchProps } from '../../dto/';
import PatientSearchAdapter, {
  PATIENTS_SEARCH,
  searchBoxAdapter,
} from '../../adapters/PatientSearchAdapter.adapter.ts';

export const patientSearchApi = createApi({
  reducerPath: 'patientSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => {
    return {
      getPatient: builder.query<PatientSearchProps[], void>({
        queryFn: async (searchTerm: searchBoxAdapter) => {
          const filteredData = PATIENTS_SEARCH[0].patients.filter(
            (item) =>
              item?.id_people?.full_name
                .toLowerCase()
                .includes(searchTerm.searchBox?.toLowerCase()) ||
              item?.athena_id?.departmentid
                ?.toString()
                ?.includes(searchTerm.departmentInsertions)
          );
          return { data: PatientSearchAdapter(filteredData) };
        },
      }),
    };
  },
});

export const { useGetPatientQuery } = patientSearchApi;
