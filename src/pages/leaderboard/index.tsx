import { DefaultLayout } from '~layouts/DefaultLayout';
import { TPage } from '~types/page.types';

// eslint-disable-next-line react/function-component-definition
const LeaderboardPage: TPage = () => (
  <div>
    <h1>Leaderboard</h1>
  </div>
);

LeaderboardPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default LeaderboardPage;
