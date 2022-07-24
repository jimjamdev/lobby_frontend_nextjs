import { Container } from '~components/atoms/Container';
import { Flex } from '~components/atoms/Flex';
import { Title } from '~components/atoms/Title';
import { GameItem } from '~components/molecules/GameItem';
import { GridView } from '~components/molecules/GridView';
import { GameGridTags } from '~components/organisms/GameGrid/GameGridTags/GameGridTags';
import { handleError } from '~utils/handleError';

import { TGameGrid } from './GameGrid.types';

export function GameGrid({ games }: TGameGrid) {
  const { data, isLoading, error } = games;
  return (
    <Container as="section" pt={3} pb={3}>
      <Flex flexDirection="column" alignItems="center">
        <Title>Arcade Games</Title>
        <GameGridTags />
        <GridView columns={4} gridGap={3}>
          {error && handleError(error)}
          {isLoading && <div>Loading...</div>}
          {data?.data
          && data?.data?.map((game: any) => (
            <GameItem key={game.id} />
          ))}
        </GridView>
      </Flex>
    </Container>
  );
}
