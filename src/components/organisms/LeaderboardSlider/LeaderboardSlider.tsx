import { Flex } from '~components/atoms/Flex';
import { Title } from '~components/atoms/Title';
import { Slider } from '~components/molecules/Slider';

export function LeaderboardSlider() {
  return (
    <>
      <Title>Leaderboard Slider</Title>
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
    </>
  );
}
