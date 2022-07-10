import { TGames, TGamesResponse } from '~types/data';

export function gamesTransform(response?: TGamesResponse): TGames {
  const games = response?.data?.map((game) => ({
    ...game,
  }));
  return {
    error: undefined,
    data: games,
    meta: response?.meta,
  };
}
