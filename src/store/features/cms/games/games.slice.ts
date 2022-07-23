import { cmsApi } from '~store/features/cms';
import { TGames, TGamesRequestParams, TGamesResponse } from '~types/data';
import { formatQueryString } from '~utils/formatQueryString';

import { gamesTransform } from './games.transform';

const locale = 'en';

export const gamesApi = cmsApi.injectEndpoints({
  endpoints: (build) => ({
    getGames: build.query<TGames, TGamesRequestParams>({
      query: ({ pageSize = 20, page = 1 }) => `/games?${formatQueryString({
        populate: ['thumbnail', 'categories'],
        locale,
        filters: {
          new: {
            $eq: true,
          },
        },
        pagination: {
          pageSize, page, withCount: true,
        },
        sort: ['publishedAt:asc'],
      })}`,
      transformResponse: (response: TGamesResponse) => gamesTransform(response),
      providesTags: ['Cms'],
    }),
  }),
});

export const { getGames } = gamesApi.endpoints;
export const { useGetGamesQuery } = gamesApi;
