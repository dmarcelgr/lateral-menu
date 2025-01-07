import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import MessagesModel, { dataAux } from '../../models/MessagesModel.ts';

interface Message {
  group_data: JSON;
  messages: [];
  is_family_member: boolean;
  is_patient: boolean;
  total_messages: number;
}

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  endpoints: (builder) => {
    return {
      getMessagesInbox: builder.query<Message[], void>({
        queryFn: async () => {
          return { data: MessagesModel(dataAux) };
        },
      }),
    };
  },
});

export const { useGetMessagesInboxQuery } = messagesApi;
