import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { config } from 'config';
import { prepareCmsHeaders } from '~store/utils/prepare-cms-headers';

// import { IMessage, IMessagesResponse } from '~types';
export const cmsApi = createApi({
  reducerPath: 'cms',
  tagTypes: ['Cms'],
  baseQuery: fetchBaseQuery({
    baseUrl: config.cmsApiUrl,
    prepareHeaders: (headers) => prepareCmsHeaders(headers),
  }),
  endpoints: () => ({}),
});
