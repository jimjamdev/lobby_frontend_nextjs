import { formatQueryString } from 'utils/format-query-string';
import { cmsApi } from '~store/features/cms';
import { transformGamesResponse } from '~store/transforms';
import { TGames, TGamesRequestParams, TGamesResponse } from '~types/data';

export const gamesApi = cmsApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<TGames, TGamesRequestParams>({
      query: () => `/games?${formatQueryString({ populate: '*' })}`,
      transformResponse: (response: TGamesResponse) => transformGamesResponse(response),
      providesTags: ['Cms'],
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
