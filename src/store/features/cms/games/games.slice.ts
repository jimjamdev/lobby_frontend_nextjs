import { formatQueryString } from 'utils/format-query-string';
import { cmsApi } from '~store/features/cms';
import { transformGamesResponse } from '~store/transforms';
import { TGames, TGamesRequestParams, TGamesResponse } from '~types/data';

const locale = 'en';

export const gamesApi = cmsApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<TGames, TGamesRequestParams>({
      query: () => `/games?${formatQueryString({
        populate: '*',
        locale,
        filters: {
          new: {
            $eq: true,
          },
        },
        pagination: {
          pageSize: 20, page: 1, withCount: true,
        },
        sort: ['publishedAt:asc'],
      })}`,
      transformResponse: (response: TGamesResponse) => transformGamesResponse(response),
      providesTags: ['Cms'],
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
