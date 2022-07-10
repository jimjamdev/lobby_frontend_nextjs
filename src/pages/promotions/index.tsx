import { DefaultLayout } from '~layouts/DefaultLayout';
import { TPage } from '~types/page.types';

// eslint-disable-next-line react/function-component-definition
const PromotionsPage: TPage = () => (
  <div>
    <h1>PromotionsPage</h1>
  </div>
);

PromotionsPage.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default PromotionsPage;
