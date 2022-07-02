import { TGameResponse, TGamesResponse } from '~types/data';

export const transformGamesResponse = (response?: TGamesResponse) => response?.data?.map(
  (game: TGameResponse) => ({
    ...game,
  }),
);
