import { useRouter } from 'next/router';

import { DefaultLayoutNavItem } from 'layouts/DefaultLayout/DefaultLayoutNav/DefaultLayoutNav.styles';
import { Box } from '~components/atoms/Box';
import { Container } from '~components/atoms/Container';
import { Flex } from '~components/atoms/Flex';

export function DefaultLayoutNav() {
  const router = useRouter();
  const { pathname = '' } = router;

  return (
    <Box
      as="nav"
      id="top-menu"
      className="top-menu"
      display={['none', 'block']}
      height="2.8em"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container>
        <Flex
          as="ul"
          display="flex"
          alignItems="center"
          borderBottomLeftRadius={4}
          borderBottomRightRadius={4}
          maxWidth="60em"
          bg="primary.6"
          height="2.8em"
          margin="0 auto"
          padding={0}
          position="sticky"
          boxShadow="0 0.1em 0.1em rgb(0, 0, 0, 0.25)"
          top={0}
        >
          <li>
            <DefaultLayoutNavItem href="/" active={pathname === '/'}>
              Home
            </DefaultLayoutNavItem>
          </li>
          <li>
            <DefaultLayoutNavItem href="/promotions" active={pathname === '/promotions'}>Promotions</DefaultLayoutNavItem>
          </li>
          <li>
            <DefaultLayoutNavItem href="/leaderboard" active={pathname === '/leaderboard'}>Leaderboard</DefaultLayoutNavItem>
          </li>
          <li>
            <DefaultLayoutNavItem href="/faq" active={pathname === '/faq'}>Faq</DefaultLayoutNavItem>
          </li>
          <li>
            <DefaultLayoutNavItem href="/user-profile" active={pathname === '/user-profile'}>My Profile</DefaultLayoutNavItem>
          </li>
        </Flex>
      </Container>
    </Box>
  );
}
