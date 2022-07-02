import { TGames, TGamesResponse } from '~types/data';

export function transformGamesResponse(response?: TGamesResponse): TGames {
  console.log('response', response);
  const games = response?.data?.map((game) => ({
    ...game,
  }));
  return {
    data: games,
    meta: response?.meta,
  };
}
