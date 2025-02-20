import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import NotificationsAdapter, {
  NOTIFICATIONS_DATA,
  NotificationsSearchAdapter,
} from '../../adapters/NotificationsAdapter.adapter.ts';
import { NotificationsProps } from '../../dto/Notifications';
import AlertsAdapter, {
  ALERTS_DATA,
  AlertsSearchAdapter,
} from '../../adapters/AlertsAdapter.adapter.ts';
import { AlertsProps } from '../../dto/Alerts';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => {
    return {
      getAlerts: builder.query<AlertsProps[], void>({
        queryFn: async (searchTerms: AlertsSearchAdapter) => {
          const startIndex = (searchTerms.page || 0) * searchTerms.pageSize;
          const endIndex = startIndex + searchTerms.pageSize;

          const filteredData = ALERTS_DATA.events.filter(
            (item) =>
              item?.is_read_by_medical_staff === searchTerms?.readByMedicalStaff
          );

          const paginatedData = filteredData.slice(startIndex, endIndex);

          paginatedData['total_events'] = filteredData.length;

          return { data: AlertsAdapter(paginatedData) };
        },
      }),

      getNotifications: builder.query<NotificationsProps[], void>({
        queryFn: async (searchTerms: NotificationsSearchAdapter) => {
          const filteredData = NOTIFICATIONS_DATA.data.filter(
            (item) =>
              item?.type === searchTerms?.type ||
              item?.is_read === searchTerms?.isRead
          );
          filteredData['total'] = NOTIFICATIONS_DATA.total;
          return { data: NotificationsAdapter(filteredData) };
        },
      }),
    };
  },
});

export const { useGetAlertsQuery, useGetNotificationsQuery } = notificationsApi;
