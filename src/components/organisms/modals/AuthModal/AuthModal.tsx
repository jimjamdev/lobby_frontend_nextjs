import { Box } from '~components/atoms/Box';
import { Button } from '~components/atoms/Button';
import { Overlay } from '~components/atoms/Overlay';
import { Portal } from '~components/atoms/Portal';
import { usePortal } from '~hooks/usePortal';

export default function AuthModal(data: any) {
  const { closePortal } = usePortal();
  console.log('**modalData', data);

  const handleClose = () => {
    console.log('**close modal');
    return closePortal('auth');
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
          AUTH MODAL
        </Box>
      </Overlay>
    </Portal>
  );
}
