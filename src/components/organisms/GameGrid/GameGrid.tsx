import { Box } from '~components/atoms/Box';
import { GridView } from '~components/molecules/GridView';
import { handleError } from '~utils/handleError';

// import { TGameGrid } from './GameGrid.types';

export function GameGrid({ defaultGames }: any) {
  const { data, isLoading, error } = defaultGames;
  return (
    <GridView columns={6} gridGap={3}>
      {error && handleError(error)}
      {isLoading && <div>Loading...</div>}
      {data?.data
          && data?.data?.map((game: any) => (
            <Box bg="mono.1" width="200px" height="200px" padding={3} key={game.id}>
              {game.name}
            </Box>
          ))}
    </GridView>
  );
}
