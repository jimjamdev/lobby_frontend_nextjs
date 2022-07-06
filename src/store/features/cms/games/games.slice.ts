import { cmsApi } from '~store/features/cms';
import { transformGamesResponse } from '~store/transforms';
import { TGames, TGamesRequestParams, TGamesResponse } from '~types/data';
import { formatQueryString } from '~utils/formatQueryString';

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
      transformResponse: (response: TGamesResponse) => transformGamesResponse(response),
      providesTags: ['Cms'],
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
