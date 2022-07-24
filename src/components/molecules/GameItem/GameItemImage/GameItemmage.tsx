import { Image } from '~components/atoms/Image';

// eslint-disable-next-line import/no-absolute-path
import fakeImage from '/public/images/game.webp';

export function GameItemImage() {
  return <Image src={fakeImage} alt="game image" borderRadius={4} />;
}
