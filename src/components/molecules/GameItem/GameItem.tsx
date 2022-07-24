import { Box } from '~components/atoms/Box';

import { GameItemImage } from './GameItemImage';

export function GameItem() {
  return (
    <Box borderRadius={4} position="relative" overflow="hidden" width="200px" height="100%">
      <GameItemImage />
    </Box>
  );
}
