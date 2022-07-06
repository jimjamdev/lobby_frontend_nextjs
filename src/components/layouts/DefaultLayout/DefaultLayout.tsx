import { TDefaultLayout } from '~components/layouts/DefaultLayout/DefaultLayout.types';
import { DefaultLayoutHeader } from '~components/layouts/DefaultLayout/DefaultLayoutHeader';
import { DefaultTemplate } from '~components/templates/DefaultTemplate';

function TestNav() {
  return <div>Nav</div>;
}

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
      topNav={<TestNav />}
      footer={<TestFooter />}
      mobileNav={<TestMobileNav />}
    >{children}
    </DefaultTemplate>
  );
}
