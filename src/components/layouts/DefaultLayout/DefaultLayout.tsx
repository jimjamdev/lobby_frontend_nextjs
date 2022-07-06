import { TDefaultLayout } from '~components/layouts/DefaultLayout/DefaultLayout.types';
import { DefaultTemplate } from '~components/templates/DefaultTemplate';

function TestHeader() {
  return <div>Header</div>;
}

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
      header={<TestHeader />}
      topNav={<TestNav />}
      footer={<TestFooter />}
      mobileNav={<TestMobileNav />}
    >{children}
    </DefaultTemplate>
  );
}
