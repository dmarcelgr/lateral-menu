import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import NotificationsAdapter, {
  NOTIFICATIONS_DATA,
} from '../../adapters/NotificationsAdapter.adapter.ts';
import AlertsAdapterAdapter, {
  ALERTS_DATA,
} from '../../adapters/AlertsAdapter.adapter.ts';
import { AlertsProps } from '../../dto/Alerts';
import { NotificationsProps } from '../../dto/Notifications';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  endpoints: (builder) => {
    return {
      getAlerts: builder.query<AlertsProps[], void>({
        queryFn: async () => {
          return { data: AlertsAdapterAdapter(ALERTS_DATA) };
        },
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
