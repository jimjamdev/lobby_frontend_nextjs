import { Box } from '~components/atoms/Box';
import { Overlay } from '~components/atoms/Overlay';
import { Portal } from '~components/atoms/Portal';

export default function GameInfoModal(data: any) {
  console.log('**modalData', data);
  return (
    <Portal isOpen>
      <Overlay isOpen>
        <Box
          position="fixed"
          left="50%"
          top="50%"
          bg="mono.0"
          width={['98%', '30rem']}
          maxWidth="40rem"
          minHeight={['98%', '30rem']}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          MODAL
        </Box>
      </Overlay>
    </Portal>
  );
}
