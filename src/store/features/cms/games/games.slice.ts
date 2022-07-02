import { formatQueryString } from 'utils/format-query-string';
import { cmsApi } from '~store/features/cms';
import { transformGamesResponse } from '~store/transforms';
import { TGamesRequestParams, TGamesResponse } from '~types/data';

export const gamesApi = cmsApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<TGamesResponse, TGamesRequestParams>({
      query: () => `/games?${formatQueryString({ populate: '*' })}`,
      // @ts-ignore - known bug with types
      transformResponse: (response: TGamesResponse) => transformGamesResponse(response),
      providesTags: ['Cms'],
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
