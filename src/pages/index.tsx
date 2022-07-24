import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { GameGrid } from '~components/organisms/GameGrid/GameGrid';
import { LatestGames } from '~components/organisms/LatestGames';
import { LeaderboardSlider } from '~components/organisms/LeaderboardSlider';
import { RecentlyPlayedSlider } from '~components/organisms/RecentlyPlayedSlider';
import { VideoScroller } from '~components/organisms/VideoScroller';
import { WideBanner } from '~components/organisms/WideBanner';
import { DefaultLayout } from '~layouts/DefaultLayout';
import { getGames, useGetGamesQuery } from '~store/features/cms/games';
import { wrapper } from '~store/store';
import { TPage } from '~types/pages';

// eslint-disable-next-line react/function-component-definition
const Home: TPage = () => {
  const defaultGames = useGetGamesQuery({ page: 1 });

  return (
    <>
      <Head>
        <title>Arcade Games Lobby - Green Jade</title>
        <meta name="description" content="Play our awesome arcade games" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RecentlyPlayedSlider />

      <WideBanner />

      <LatestGames />

      <GameGrid defaultGames={defaultGames} />

      <VideoScroller />

      <LeaderboardSlider />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getGames.initiate({ page: 1 }));
    return {
      props: {},
    };
  },
);

export default Home;
