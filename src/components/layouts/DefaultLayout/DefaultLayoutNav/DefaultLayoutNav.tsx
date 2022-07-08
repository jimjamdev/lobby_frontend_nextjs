import { Box } from '~components/atoms/Box';
import { Container } from '~components/atoms/Container';

export function DefaultLayoutNav() {
  return (
    <Box id="top-menu" className="top-menu" display={['none', 'block']} height="2.8em" position="relative">
      <Container>
        <Box
          as="ul"
          display="flex"
          alignItems="center"
          borderBottomLeftRadius="md"
          borderBottomRightRadius="md"
          maxWidth="60em"
          bg="primary.6"
          height="2.8em"
          margin="0 auto"
          padding={0}
          position="sticky"
          boxShadow="0 0.1em 0.1em rgb(0, 0, 0, 0.25)"
          top={0}
        >
          Nav
        </Box>
      </Container>
    </Box>
  );
}
