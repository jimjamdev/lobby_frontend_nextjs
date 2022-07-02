export const transformGamesResponse = (response = []) => response?.data?.map((game: any) => ({
  ...game,
  image: game?.image?.url,
}));
