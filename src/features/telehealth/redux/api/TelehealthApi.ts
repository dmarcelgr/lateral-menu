import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../../../../utils/api/apiConst.ts';
import { EwpTelehealthSearch } from '../../models';
import TelehealthAdapter from '../../adapters/TelehealthAdapter.adapter.ts';
import { TelehealthProps } from '../../dto';
import TelehealthProviderAdapter from '../../adapters/TelehealthProviderAdapter.adapter.ts';

export const telehealthApi = createApi({
  reducerPath: 'telehealthApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getTelehealthRooms: build.query({
      query: (searchTerms: EwpTelehealthSearch) =>
        `/api/telecoms/roomtelehealth/?page=${searchTerms.page}&page_size=${searchTerms.pageSize}`,
      transformResponse: (rawResult: TelehealthProps[]) => {
        return TelehealthAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
    getTelehealthProvider: build.query({
      query: () => `/api/telecoms/roomtelehealthDoctorPresence/3/`,
      transformResponse: (rawResult: TelehealthProps[]) => {
        return TelehealthProviderAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),

  // baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  // endpoints: (builder) => ({
  //   getTelehealthRooms: builder.query<TelehealthProps[], void>({
  //     queryFn: async () => {
  //       return {
  //         data: TelehealthAdapter(TELEHEALTH_DATA),
  //       };
  //     },
  //   }),
  //   getTelehealthProvider: builder.query<TelehealthProps[], void>({
  //     queryFn: async () => {
  //       return {
  //         data: TelehealthProviderAdapter(TELEHEALTH_PROVIDER_DATA),
  //       };
  //     },
  //   }),
  // }),
});

export const { useGetTelehealthRoomsQuery, useGetTelehealthProviderQuery } =
  telehealthApi;
