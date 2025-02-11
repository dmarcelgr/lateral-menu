import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import NotificationsAdapter, {
  NOTIFICATIONS_DATA,
} from '../../adapters/NotificationsAdapter.adapter.ts';
import { AlertsProps } from '../../dto/Alerts';
import { NotificationsProps } from '../../dto/Notifications';
import AlertsAdapter, {
  ALERTS_DATA,
} from '../../adapters/AlertsAdapter.adapter.ts';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => {
    return {
      getAlerts: builder.query<AlertsProps[], void>({
        queryFn: async () => {
          return { data: AlertsAdapter(ALERTS_DATA) };
        },

        // query: ({ page, pageSize }) =>
        //   `items?page=${page}&page_size=${pageSize}`,
        // transformResponse: (ALERTS_DATA) => {
        //   return AlertsAdapter(ALERTS_DATA);
        // },
        // keepUnusedDataFor: 0,

        // queryFn: async () => {
        //   try {
        //     return { data: AlertsAdapter(ALERTS_DATA) };
        //   } catch (error) {
        //     return { error: { message: error.message } };
        //   }
        // },
      }),
      getNotifications: builder.query<NotificationsProps[], void>({
        queryFn: async () => {
          return { data: NotificationsAdapter(NOTIFICATIONS_DATA) };
        },
      }),
    };
  },
});

export const { useGetAlertsQuery, useGetNotificationsQuery } = notificationsApi;
