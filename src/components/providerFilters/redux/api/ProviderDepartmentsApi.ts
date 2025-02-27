import { createApi } from '@reduxjs/toolkit/query/react';
import ProviderDepartmentAdapter from '../../adapters/ProviderDepartmentAdapter.adapter.ts';
import { ProviderDepartmentsProps } from '../../dto';
import baseQueryWithReauth from '../../../../utils/api/apiConst.ts';

export const providerDepartmentsApi = createApi({
  reducerPath: 'providerDepartmentsApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getProviderDepartments: build.query({
      query: () => `/api/interoperability/patient-departments/`,
      transformResponse: (rawResult: ProviderDepartmentsProps[]) => {
        return ProviderDepartmentAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetProviderDepartmentsQuery } = providerDepartmentsApi;
