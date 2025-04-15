import { createApi } from '@reduxjs/toolkit/query/react';
import MessagesAdapter from '../../adapters/MessagesAdapter.adapter.ts';
import { MessageProps } from '../../dto';
import baseQueryWithReauth from '../../../../../utils/api/apiConst.ts';
import { EwpMessageSearch } from '../../models/messagesSearch.ts';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getMessagesInbox: build.query({
      query: (searchTerms: EwpMessageSearch) =>
        `/api/messages/inbox/?page=${searchTerms.page}&page_size=${searchTerms.pageSize}`,
      transformResponse: (rawResult: MessageProps[]) => {
        return MessagesAdapter(rawResult);
      },
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetMessagesInboxQuery } = messagesApi;
