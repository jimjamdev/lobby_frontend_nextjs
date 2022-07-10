import { Box } from '~components/atoms/Box';
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
      <Box zIndex={1}>
        <Text color="mono.0" fontSize={6}>CLAIM FREE POINTS</Text>
        <Button variant="primary" size={['md', 'lg']}>
          PLAY NOW
        </Button>
      </Box>
      <Image src={fakeImage} alt="some fake image" layout="fill" objectFit="cover" priority />
    </Flex>
  );
}
