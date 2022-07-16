import { Container } from '~components/atoms/Container';
import { GameItem } from '~components/molecules/GameItem';
import { GridView } from '~components/molecules/GridView';
import { GameGridTags } from '~components/organisms/GameGrid/GameGridTags/GameGridTags';
import { handleError } from '~utils/handleError';

// import { TGameGrid } from './GameGrid.types';

export function GameGrid({ defaultGames }: any) {
  const { data, isLoading, error } = defaultGames;
  return (
    <Container as="section" pt={3} pb={3}>
      <GameGridTags />
      <GridView columns={2} gridGap={3}>
        {error && handleError(error)}
        {isLoading && <div>Loading...</div>}
        {data?.data
          && data?.data?.map((game: any) => (
            <GameItem key={game.id} />
          ))}
      </GridView>
    </Container>
  );
}
