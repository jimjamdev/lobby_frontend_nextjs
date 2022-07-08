import { Box } from '~components/atoms/Box';

export function DefaultLayoutNav() {
  return (
    <Box display={['none', 'block']} height="2.8em" padding="0 2rem" position="relative">
      <Box
        as="ul"
        display="flex"
        alignItems="center"
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
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
    </Box>
  );
}
