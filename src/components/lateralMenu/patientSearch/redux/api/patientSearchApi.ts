import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PatientSearchProps } from '../../dto/';
import PatientSearchAdapter, {
  searchBoxAdapter,
} from '../../adapters/PatientSearchAdapter.adapter.ts';

export const patientSearchApi = createApi({
  reducerPath: 'patientSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (build) => ({
    getPatient: build.query({
      query: (searchTerms: searchBoxAdapter) => ({
        url: `/api/patients/patients/`,
        params: searchTerms,
      }),
      transformResponse: (rawResult: PatientSearchProps[]) => {
        return PatientSearchAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetPatientQuery } = patientSearchApi;
