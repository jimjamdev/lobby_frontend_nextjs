import { Box } from '~components/atoms/Box';
import { Flex } from '~components/atoms/Flex';

export function GameGridTags() {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="center" mt={2} mb={2}>
        <Flex bg="magenta" color="white" padding={2} borderRadius="full" ml={1} mr={1}>Racing</Flex>
        <Flex bg="lightseagreen" color="white" padding={2} borderRadius="full" ml={1} mr={1}>Puzzle</Flex>
        <Flex bg="purple" color="white" padding={2} borderRadius="full" ml={1} mr={1}>Shooter</Flex>
        <Flex bg="blue" color="white" padding={2} borderRadius="full" ml={1} mr={1}>Action</Flex>
      </Flex>
    </Box>
  );
}
