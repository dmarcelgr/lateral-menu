import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Environment } from '../env/Environment';

const env = new Environment();

const baseQuery = fetchBaseQuery({
  // baseUrl: '/',
  baseUrl: env.baseUrlApi,
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (
    result.error &&
    (result.error.status === 401 || result.error.status === 403)
  ) {
    localStorage.setItem('state', '');
    location.reload();
  }
  return result;
};

export default baseQueryWithReauth;
