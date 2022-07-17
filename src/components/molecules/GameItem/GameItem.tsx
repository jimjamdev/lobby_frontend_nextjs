import { Box } from '~components/atoms/Box';

import { GameItemImage } from './GameItemImage';

export function GameItem() {
  return (
    <Box borderRadius={4} overflow="hidden">
      <GameItemImage />
    </Box>
  );
}
