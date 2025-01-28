import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import MessagesAdapter, {
  dataAux,
} from '../../adapters/MessagesAdapter.adapter.ts';

import { MessagesProps } from '../../dto';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  endpoints: (builder) => {
    return {
      getMessagesInbox: builder.query<MessagesProps[], void>({
        queryFn: async () => {
          return { data: MessagesAdapter(dataAux) };
        },
      }),
    };
  },
});

export const { useGetMessagesInboxQuery } = messagesApi;
