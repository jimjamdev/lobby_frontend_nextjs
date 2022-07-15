import { Box } from '~components/atoms/Box';
import { Container } from '~components/atoms/Container';
import { Flex } from '~components/atoms/Flex';
import { GridView } from '~components/molecules/GridView';

export function RecentlyPlayedSlider() {
  return (
    <Box position="relative" mb={3} mt={3}>
      <Container>
        <GridView gridGap={3} columns={8} height="8em">
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
          <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
        </GridView>
      </Container>
    </Box>
  );
}
