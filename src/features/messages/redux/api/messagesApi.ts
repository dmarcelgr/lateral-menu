import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import MessagesAdapter, {
  dataAux,
} from '../../adapters/MessagesAdapter.adapter.ts';

import { MessagesProps } from '../../dto';
// import baseQueryWithReauth from '../../../../utils/api/apiConst.ts';

// export const messagesApi = createApi({
//   reducerPath: 'messagesApi',
//   baseQuery: baseQueryWithReauth,
//   endpoints: (build) => ({
//     getMessagesInbox: build.query({
//       query: () => "",
//       transformResponse: (dataAux: MeasureProps[]) => MessagesAdapter(dataAux),
//       keepUnusedDataFor: 0,
//     },
//   }),
// });
export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Base ficticia
  endpoints: (builder) => ({
    getMessagesInbox: builder.query<MessagesProps[], void>({
      queryFn: async () => {
        return { data: MessagesAdapter(dataAux) };
      },
    }),
  }),
});

export const { useGetMessagesInboxQuery } = messagesApi;
