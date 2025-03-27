import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { messagesApi } from '../components/lateralMenu/messages/redux/api/messagesApi.ts';
import { notificationsApi } from '../components/lateralMenu/notifications/redux/api/notificationsApi.ts';
import { telehealthApi } from '../components/lateralMenu/telehealth/redux/api/TelehealthApi.ts';
import { patientSearchApi } from '../components/lateralMenu/patientSearch/redux/api/patientSearchApi.ts';
import { providerDepartmentsApi } from '../components/providerFilters/redux/api/ProviderDepartmentsApi.ts';

export const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]: messagesApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
    [telehealthApi.reducerPath]: telehealthApi.reducer,
    [patientSearchApi.reducerPath]: patientSearchApi.reducer,
    [providerDepartmentsApi.reducerPath]: providerDepartmentsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      messagesApi.middleware,
      notificationsApi.middleware,
      telehealthApi.middleware,
      patientSearchApi.middleware,
      providerDepartmentsApi.middleware
    ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
