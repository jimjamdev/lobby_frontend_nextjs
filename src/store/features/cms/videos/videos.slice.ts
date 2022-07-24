import { cmsApi } from '~store/features/cms';
import { formatQueryString } from '~utils/formatQueryString';

export const gamesApi = cmsApi.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query<any, any>({
      query: () => `/videos?${formatQueryString({ populate: ['video'] })}`,
      providesTags: ['Cms'],
    }),
  }),
});

export const { getVideos } = gamesApi.endpoints;
export const { useGetVideosQuery } = gamesApi;
