import { DefaultLayout } from '~layouts/DefaultLayout';
import { TPage } from '~types/pages/Page.types';

// eslint-disable-next-line react/function-component-definition
const UserProfilePage: TPage = () => (
  <div>
    <h1>User Profile Page</h1>
  </div>
);

UserProfilePage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default UserProfilePage;
