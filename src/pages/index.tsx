import Head from 'next/head';

import { GameGrid } from '~components/organisms/GameGrid/GameGrid';
import { LatestGames } from '~components/organisms/LatestGames';
import { LeaderboardSlider } from '~components/organisms/LeaderboardSlider';
import { RecentlyPlayedSlider } from '~components/organisms/RecentlyPlayedSlider';
import { VideoScroller } from '~components/organisms/VideoScroller';
import { WideBanner } from '~components/organisms/WideBanner';
import { DefaultLayout } from '~layouts/DefaultLayout';
import { getGames, useGetGamesQuery } from '~store/features/cms/games';
import { getVideos, useGetVideosQuery } from '~store/features/cms/videos';
import { wrapper } from '~store/store';
import { TPage } from '~types/pages';

// eslint-disable-next-line react/function-component-definition
const Home: TPage = () => {
  const games = useGetGamesQuery({ page: 1 });
  const videos = useGetVideosQuery({ });
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

      <GameGrid games={games} />

      <VideoScroller videos={videos} />

      <LeaderboardSlider />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ query }) => {
    console.log('query', query);
    await store.dispatch(getGames.initiate({ page: 1 }));
    await store.dispatch(getVideos.initiate({}));
    return {
      props: {},
    };
  },
);

export default Home;
