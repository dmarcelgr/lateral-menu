import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { messagesApi } from '../features/messages/redux/api/messagesApi.ts';
import { notificationsApi } from '../features/notifications/redux/api/notificationsApi.ts';

export const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]: messagesApi.reducer,
    [notificationsApi.reducerPath]: notificationsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      messagesApi.middleware,
      notificationsApi.middleware
    ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
