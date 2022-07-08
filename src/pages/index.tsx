import Head from 'next/head';

import { Box } from '~components/atoms/Box';
import { Container } from '~components/atoms/Container';
import { Portal } from '~components/atoms/Portal/Portal';
import { DefaultLayout } from '~components/layouts/DefaultLayout';
import { useGetGamesQuery } from '~store/features/cms/games';
import { TPage } from '~types/page.types';
import { handleError } from '~utils/handleError';

// eslint-disable-next-line react/function-component-definition
const Home: TPage = () => {
  const {
    data: games,
    isLoading: isGamesLoading,
    error: gamesError,
  } = useGetGamesQuery({ page: 1 });

  return (
    <>
      <Head>
        <title>Lobby - Green Jade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Portal isOpen>
        <Box bg="tomato" position="absolute" top="0">SOME PORTAL</Box>
      </Portal>
      <Portal isOpen>
        <Box bg="tomato" position="absolute" top="50px">SOME PORTAL 2</Box>
      </Portal>

      <Container as="section">
        {games && games?.meta?.pagination?.total} Results
        {gamesError && handleError(gamesError)}
        {isGamesLoading && <div>Loading...</div>}
        <Box as="ul" padding={0} margin={0}>
          {games?.data
            && games?.data?.map((game) => <Box bg="secondary.4" as="li" margin="0" padding={3} key={game.id}>{game.name}</Box>)}
        </Box>
      </Container>

    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
