import { DefaultTemplate } from '~components/templates/DefaultTemplate';
import { AppContainer } from '~containers/AppContainer/AppContainer';

import { TDefaultLayout } from './DefaultLayout.types';
import { DefaultLayoutHeader } from './DefaultLayoutHeader';
import { DefaultLayoutNav } from './DefaultLayoutNav';

function TestFooter() {
  return <div>Footer</div>;
}

function TestMobileNav() {
  return <div>MobileNav</div>;
}

export function DefaultLayout({ children }: TDefaultLayout) {
  return (
    <AppContainer>
      <DefaultTemplate
        header={<DefaultLayoutHeader />}
        topNav={<DefaultLayoutNav />}
        footer={<TestFooter />}
        mobileNav={<TestMobileNav />}
      >
        {children}
      </DefaultTemplate>
    </AppContainer>
  );
}
