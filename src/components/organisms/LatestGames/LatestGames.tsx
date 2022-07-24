import { Container } from '~components/atoms/Container';
import { Flex } from '~components/atoms/Flex';
import { Title } from '~components/atoms/Title';

export function LatestGames() {
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        <Title>Latest Games</Title>
      </Flex>
    </Container>
  );
}
