import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ProviderDepartmentAdapter, {
  PROVIDER_DEPARTMENTS,
} from '../../adapters/ProviderDepartmentAdapter.adapter.ts';
import { ProviderDepartmentsProps } from '../../dto';

export const providerDepartmentsApi = createApi({
  reducerPath: 'providerDepartmentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  endpoints: (builder) => ({
    getProviderDepartments: builder.query<ProviderDepartmentsProps[], void>({
      queryFn: async () => {
        return {
          data: ProviderDepartmentAdapter(PROVIDER_DEPARTMENTS),
        };
      },
    }),
  }),
});

export const { useGetProviderDepartmentsQuery } = providerDepartmentsApi;
