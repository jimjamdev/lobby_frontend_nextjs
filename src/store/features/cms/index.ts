import {
  BaseQueryFn, createApi, FetchArgs, fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { config } from 'config';
import { prepareCmsHeaders } from '~store/utils/prepare-cms-headers';
import { TError } from '~types/data/common';

export const cmsApi = createApi({
  reducerPath: 'cms',
  tagTypes: ['Cms'],
  baseQuery: fetchBaseQuery({
    baseUrl: config.cmsApiUrl,
    prepareHeaders: (headers) => prepareCmsHeaders(headers),
  }) as BaseQueryFn<string | FetchArgs, unknown, TError>,
  endpoints: () => ({}),
});
