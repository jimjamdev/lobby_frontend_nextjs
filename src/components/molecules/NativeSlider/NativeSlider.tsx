import { Box } from '~components/atoms/Box';
import { Container } from '~components/atoms/Container';
import { Flex } from '~components/atoms/Flex';
import { GridView } from '~components/molecules/GridView';

export function NativeSlider() {
  return (
    <Box position="relative" mb={3} mt={3}>
      <Container>
        <GridView gridGap={3} columns={3} height="18em">
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard</Flex>
        </GridView>
      </Container>
    </Box>
  );
}
