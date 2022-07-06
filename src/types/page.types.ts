import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type TPage<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
};
