import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../../../../utils/api/apiConst.ts';
import NotificationsAdapter, {
  NotificationsSearchAdapter,
} from '../../adapters/NotificationsAdapter.adapter.ts';
import { NotificationsProps } from '../../dto/Notifications';
import AlertsAdapter, {
  AlertsSearchAdapter,
} from '../../adapters/AlertsAdapter.adapter.ts';
import { AlertsProps } from '../../dto/Alerts';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    // getAlerts: build.query<AlertsProps[], void>({
    //   // Query cambiarlo
    //   // Backend manda total
    //   queryFn: async (searchTerms: AlertsSearchAdapter) => {
    //     const startIndex = (searchTerms.page || 0) * searchTerms.pageSize;
    //     const endIndex = startIndex + searchTerms.pageSize;
    //
    //     const filteredData = ALERTS_DATA.events.filter(
    //       (item) =>
    //         item?.is_read_by_medical_staff === searchTerms?.readByMedicalStaff
    //     );
    //
    //     const paginatedData = filteredData.slice(startIndex, endIndex);
    //
    //     paginatedData['total_events'] = filteredData.length;
    //
    //     return { data: AlertsAdapter(paginatedData) };
    //   },
    // }),
    getAlerts: build.query({
      query: (searchTerms: AlertsSearchAdapter) =>
        `api/events/events/?is_read_by_medical_staff=${searchTerms.readByMedicalStaff}&only_my_patients=${searchTerms.onlyMyPatients}&page=${searchTerms.page}&page_size=${searchTerms.pageSize}`,
      transformResponse: (rawResult: AlertsProps[]) => {
        return AlertsAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),

    getNotifications: build.query({
      query: (searchTerms: NotificationsSearchAdapter) =>
        `api/comments/comment/?type=${searchTerms.type}&is_read=${searchTerms.isRead}`,
      transformResponse: (rawResult: NotificationsProps[]) => {
        return NotificationsAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAlertsQuery, useGetNotificationsQuery } = notificationsApi;
