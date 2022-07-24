import { Container } from '~components/atoms/Container';
import { Flex } from '~components/atoms/Flex';
import { Title } from '~components/atoms/Title';
import { Slider } from '~components/molecules/Slider';

export function RecentlyPlayedSlider() {
  return (
    <Container>
      <Title>Most popular</Title>
      <Slider>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
        <Flex bg="mono.0" alignItems="center" justifyContent="center" minHeight="70px">Game</Flex>
      </Slider>
    </Container>
  );
}
