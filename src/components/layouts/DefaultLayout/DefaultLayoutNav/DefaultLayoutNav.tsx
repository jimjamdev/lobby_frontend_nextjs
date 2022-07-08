import { Box } from '~components/atoms/Box';

export function DefaultLayoutNav() {
  return (
    <Box display={['none', 'block']} height="40px" padding="0 2rem" position="relative">
      <Box
        as="ul"
        display="flex"
        alignItems="center"
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        maxWidth="900px"
        bg="primary.6"
        height="40px"
        margin="0 auto"
        position="sticky"
        boxShadow="1px 1px 1px rgb(0, 0, 0, 0.1)"
        top={0}
      >
        Nav
      </Box>
    </Box>
  );
}
