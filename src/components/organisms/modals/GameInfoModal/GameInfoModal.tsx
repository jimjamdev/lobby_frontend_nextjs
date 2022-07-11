import { Box } from '~components/atoms/Box';
import { Overlay } from '~components/atoms/Overlay';
import { Portal } from '~components/atoms/Portal';

export function GameInfoModal(data:any) {
  return (
    <Portal isOpen>
      <Overlay isOpen>
        <Box bg="mono.0" maxWidth="640" minHeight="480">MODAL</Box>
      </Overlay>
    </Portal>
  );
}
