import { TGames, TGamesResponse } from '~types/data';

export function transformGamesResponse(response?: TGamesResponse): TGames {
  const games = response?.data?.map((game) => ({
    ...game,
  }));
  return {
    data: games,
    meta: response?.meta,
  };
}
