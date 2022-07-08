import { DefaultLayout } from '~components/layouts/DefaultLayout';
import { TPage } from '~types/page.types';

// eslint-disable-next-line react/function-component-definition
export const FaqPage:TPage = () => (
  <div>
    <h1>FaqPage</h1>
  </div>
);

FaqPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default FaqPage;
