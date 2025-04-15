import { createApi } from '@reduxjs/toolkit/query/react';
import { PatientSearchProps } from '../../dto/';
import PatientSearchAdapter, {
  searchBoxAdapter,
} from '../../adapters/PatientSearchAdapter.adapter.ts';
import baseQueryWithReauth from '../../../../../utils/api/apiConst.ts';

export const patientSearchApi = createApi({
  reducerPath: 'patientSearchApi',
  baseQuery: baseQueryWithReauth,
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
