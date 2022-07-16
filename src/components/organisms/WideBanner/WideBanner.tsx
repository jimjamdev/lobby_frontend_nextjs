import { Button } from '~components/atoms/Button';
import { Flex } from '~components/atoms/Flex';
import { Image } from '~components/atoms/Image';
import { Text } from '~components/atoms/Text/Text';

// eslint-disable-next-line import/no-absolute-path
import fakeImage from '/public/images/shooter.jpg';

import { openModal } from '~utils/openModal';

export function WideBanner() {
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="mono.1"
        position="relative"
      >
        <Flex zIndex={1} height={['15em', '25em']} flexDirection="column" justifyContent="center" alignItems="center">
          <Text as="h3" color="mono.0" margin={0} fontSize={[2, 6]} textShadow={1}>
            CLAIM FREE POINTS
          </Text>
          <Text color="mono.0" lineHeight={0} marginBottom={4} textShadow={1}>
            Play games and get free points.
          </Text>
          <Button variant="primary" size={['md', 'lg']} onClick={() => openModal('gameInfo', { gameId: 1 })}>
            PLAY NOW
          </Button>
        </Flex>
        <Image src={fakeImage} alt="some fake image" layout="fill" objectFit="cover" priority />
      </Flex>
    </div>
  );
}
