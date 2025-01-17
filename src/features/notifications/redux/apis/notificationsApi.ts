import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import NotificationsModel, {
  dataAux,
} from '../../models/NotificationsModel.ts';
import AlertsModel from '../../models/AlertsModel.ts';

interface Notification {
  total: number;
  data: [];
}

interface Alert {
  total_events: number;
  events: [];
}

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  endpoints: (builder) => {
    return {
      getAlerts: builder.query<Alert[], void>({
        queryFn: async () => {
          return { data: AlertsModel(dataAux) };
        },
      }),
      getNotifications: builder.query<Notification[], void>({
        queryFn: async () => {
          return { data: NotificationsModel(dataAux) };
        },
      }),
    };
  },
});

export const { useGetAlertsQuery, useGetNotificationsQuery } = notificationsApi;
