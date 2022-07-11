import Head from 'next/head';

import { Box } from '~components/atoms/Box';
import { Container } from '~components/atoms/Container';
// import { Overlay } from '~components/atoms/Overlay/OverLay';
import { Portal } from '~components/atoms/Portal/Portal';
import { Spacing } from '~components/atoms/Spacing';
import { WideBanner } from '~components/molecules/WideBanner';
import { GameGrid } from '~components/organisms/GameGrid/GameGrid';
import { useModal } from '~hooks/useModal/useModal';
import { DefaultLayout } from '~layouts/DefaultLayout';
import { useGetGamesQuery } from '~store/features/cms/games';
import { THomePage, TPage } from '~types/pages';

// eslint-disable-next-line react/function-component-definition
const Home: TPage = ({ defaultData }: THomePage) => {
  console.log('defaultData', defaultData);
  const defaultGames = useGetGamesQuery({ page: 1 });

  useModal('gameInfo');

  return (
    <>
      <Head>
        <title>Lobby - Green Jade</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Portal isOpen>
        <Overlay isOpen>
          <Box bg="primary.4" position="absolute" top="5em">
            SOME PORTAL
          </Box>
        </Overlay>
      </Portal> */}
      <Portal isOpen>
        <Box bg="primary.6" position="absolute" top="10em">
          SOME PORTAL 2
        </Box>
      </Portal>

      <Container as="section">
        <Spacing mt={3} mb={3}>
          <GameGrid defaultGames={defaultGames} />
        </Spacing>
      </Container>

      <WideBanner />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
/*
export async function getServerSideProps() {
  const { data: games } = await store.dispatch(getGames.initiate({ page: 1 }));
  return {
    props: {
      defaultData: {
        games,
      },
    },
  };
} */

export default Home;
