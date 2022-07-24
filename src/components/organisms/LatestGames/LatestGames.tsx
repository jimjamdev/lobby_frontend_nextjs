import { Container } from '~components/atoms/Container';
import { Flex } from '~components/atoms/Flex';
import { Text } from '~components/atoms/Text';
import { Title } from '~components/atoms/Title';

export function LatestGames() {
  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        <Title>Latest Games</Title>
        <Text>What&apos;s new in Arcade Games</Text>
      </Flex>
    </Container>
  );
}
