import { Box } from '~components/atoms/Box';
import { Button } from '~components/atoms/Button';
import { Overlay } from '~components/atoms/Overlay';
import { Portal } from '~components/atoms/Portal';
import { closeModals } from '~utils/openModal';

export default function GameInfoModal(data: any) {
  console.log('**modalData', data);

  const handleClose = () => {
    console.log('**close modal');
    closeModals();
  };

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
          zIndex={1001}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <Button variant="primary" onClick={handleClose}>
            CLOSE
          </Button>
          MODAL
        </Box>
      </Overlay>
    </Portal>
  );
}
