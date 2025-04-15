import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../../../../../utils/api/apiConst.ts';
import NotificationsAdapter, {
  NotificationsSearchAdapter,
} from '../../adapters/NotificationsAdapter.adapter.ts';
import { AlertProps, NotificationProps } from '../../dto/';
import AlertsAdapter, {
  AlertsSearchAdapter,
} from '../../adapters/AlertsAdapter.adapter.ts';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getAlerts: build.query({
      query: (searchTerms: AlertsSearchAdapter) =>
        `api/events/events/?is_read_by_medical_staff=${searchTerms.readByMedicalStaff}&only_my_patients=${searchTerms.onlyMyPatients}&page=${searchTerms.page}&page_size=${searchTerms.pageSize}`,
      transformResponse: (rawResult: AlertProps[]) => {
        return AlertsAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),

    getNotifications: build.query({
      query: (searchTerms: NotificationsSearchAdapter) =>
        `api/comments/comment/?type=${searchTerms.type}&is_read=${searchTerms.isRead}`,
      transformResponse: (rawResult: NotificationProps[]) => {
        return NotificationsAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAlertsQuery, useGetNotificationsQuery } = notificationsApi;
