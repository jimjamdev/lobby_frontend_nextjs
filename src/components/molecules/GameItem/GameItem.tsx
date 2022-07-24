import { Box } from '~components/atoms/Box';

import { GameItemImage } from './GameItemImage';

export function GameItem() {
  return (
    <Box borderRadius={4} position="relative" overflow="hidden" width="100%" height="100%">
      <GameItemImage />
    </Box>
  );
}
