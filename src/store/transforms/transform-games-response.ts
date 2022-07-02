import { TGames } from '~types/data';

export const transformGamesResponse = (response: TGames) => response?.data?.map((game: any) => ({
  ...game,
}));
