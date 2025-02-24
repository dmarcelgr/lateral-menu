import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TelehealthAdapter, {
  TELEHEALTH_DATA,
} from '../../adapters/TelehealthAdapter.adapter.ts';
import TelehealthProviderAdapter, {
  TELEHEALTH_PROVIDER_DATA,
} from '../../adapters/TelehealthProviderAdapter.adapter.ts';

import { TelehealthProps } from '../../dto/Telehealth';

export const telehealthApi = createApi({
  reducerPath: 'telehealthApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  endpoints: (builder) => ({
    getTelehealthRooms: builder.query<TelehealthProps[], void>({
      queryFn: async () => {
        return {
          data: TelehealthAdapter(TELEHEALTH_DATA),
        };
      },
    }),
    getTelehealthProvider: builder.query<TelehealthProps[], void>({
      queryFn: async () => {
        return {
          data: TelehealthProviderAdapter(TELEHEALTH_PROVIDER_DATA),
        };
      },
    }),
  }),
});

export const { useGetTelehealthRoomsQuery, useGetTelehealthProviderQuery } =
  telehealthApi;
