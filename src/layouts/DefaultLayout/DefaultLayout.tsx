import { AppContainer } from '~containers/AppContainer/AppContainer';
import { TBaseComponentWithChildren } from '~types/base-component.type';

import { DefaultLayoutNav } from './DefaultLayoutNav';

export function DefaultLayout({ children }: TBaseComponentWithChildren) {
  return (
    <AppContainer>
      <DefaultLayoutNav />
      {children}
    </AppContainer>
  );
}
