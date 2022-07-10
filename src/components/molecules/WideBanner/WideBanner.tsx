import { Button } from '~components/atoms/Button';
import { Flex } from '~components/atoms/Flex';
import { Image } from '~components/atoms/Image';
import { Text } from '~components/atoms/Text/Text';

// eslint-disable-next-line import/no-absolute-path
import fakeImage from '/public/images/shooter.jpg';

export function WideBanner() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="25em"
      bg="mono.1"
      marginTop={3}
      position="relative"
    >
      <Flex zIndex={1} flexDirection="column" justifyContent="center" alignItems="center">
        <Text as="h3" color="mono.0" margin={0} fontSize={6} textShadow={1}>
          CLAIM FREE POINTS
        </Text>
        <Text color="mono.0" lineHeight={0} marginBottom={4} textShadow={1}>
          Play games and get free points.
        </Text>
        <Button variant="primary" size={['md', 'lg']}>
          PLAY NOW
        </Button>
      </Flex>
      <Image src={fakeImage} alt="some fake image" layout="fill" objectFit="cover" priority />
    </Flex>
  );
}
