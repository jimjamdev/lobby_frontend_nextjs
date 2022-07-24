import { Flex } from '~components/atoms/Flex';
import { Text } from '~components/atoms/Text';
import { Title } from '~components/atoms/Title';
import { Slider } from '~components/molecules/Slider';

export function LeaderboardSlider() {
  return (
    <Flex flexDirection="column" alignItems="center" bg="mono.2" pb={4}>
      <Title textAlign="center">Leaderboard Slider</Title>
      <Text textAlign="center">Global ranking for games</Text>
      <Slider>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 1</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 2</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 3</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 4</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 5</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 6</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 7</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 8</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="200px">Leaderboard 9</Flex>
      </Slider>
    </Flex>
  );
}
