import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../../../../../utils/api/apiConst.ts';
import TelehealthAdapter from '../../adapters/TelehealthAdapter.adapter.ts';
import { TelehealthProps, TelehealthRoomSearchProps } from '../../dto';
import TelehealthProviderAdapter from '../../adapters/TelehealthProviderAdapter.adapter.ts';
import { EwpTelehealthProviderInfo } from '../../models';
import {
  TelehealthProviderProps,
  TelehealthProviderResponse,
} from '../../dto/TelehealthProvider';

export const telehealthApi = createApi({
  reducerPath: 'telehealthApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getTelehealthRooms: build.query({
      query: (searchTerms: TelehealthRoomSearchProps) =>
        `/api/telecoms/roomtelehealth/?page=${searchTerms.page}&page_size=${searchTerms.pageSize}`,
      transformResponse: (rawResult: TelehealthProps[]) => {
        return TelehealthAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
    getTelehealthProvider: build.query<
      EwpTelehealthProviderInfo,
      TelehealthProviderResponse
    >({
      query: () => `/api/telecoms/roomtelehealthDoctorPresence/3/`,
      transformResponse: (rawResult: TelehealthProviderProps[]) => {
        return TelehealthProviderAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetTelehealthRoomsQuery, useGetTelehealthProviderQuery } =
  telehealthApi;
