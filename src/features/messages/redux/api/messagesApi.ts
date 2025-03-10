import { createApi } from '@reduxjs/toolkit/query/react';
import MessagesAdapter from '../../adapters/MessagesAdapter.adapter.ts';
import { MessagesProps } from '../../dto';
import baseQueryWithReauth from '../../../../utils/api/apiConst.ts';
import { EwpMessagesSearch } from '../../models/messagesSearch.ts';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getMessagesInbox: build.query({
      query: (searchTerms: EwpMessagesSearch) =>
        `/api/messages/:userId/inbox/?djng_url_kwarg_section=${searchTerms.urlSection}&page=${searchTerms.page}&page_size=${searchTerms.pageSize}`,
      transformResponse: (rawResult: MessagesProps[]) => {
        return MessagesAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetMessagesInboxQuery } = messagesApi;
