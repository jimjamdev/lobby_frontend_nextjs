import { Box } from '~components/atoms/Box';

export function DefaultLayoutNav() {
  return (
    <Box display={['none', 'block']} height="40px" padding="0 2rem" position="relative">
      <Box
        display="flex"
        alignItems="center"
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        maxWidth="900px"
        bg="primary.6"
        height="40px"
        margin="0 auto"
        position="sticky"
        top={0}
      >
        Nav
      </Box>
    </Box>
  );
}
