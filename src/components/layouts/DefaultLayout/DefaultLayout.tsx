import { DefaultTemplate } from '~components/templates/DefaultTemplate';

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
    <DefaultTemplate
      header={<DefaultLayoutHeader />}
      topNav={<DefaultLayoutNav />}
      footer={<TestFooter />}
      mobileNav={<TestMobileNav />}
    >{children}
    </DefaultTemplate>
  );
}
