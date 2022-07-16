import { LayoutContainer } from '~containers/LayoutContainer';
import { TBaseComponentWithChildren } from '~types/base-component.type';

import { DefaultLayoutNav } from './DefaultLayoutNav';

export function DefaultLayout({ children }: TBaseComponentWithChildren) {
  return (
    <LayoutContainer>
      <DefaultLayoutNav />
      {children}
    </LayoutContainer>
  );
}
