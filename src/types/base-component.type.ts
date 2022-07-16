import { ReactElement } from 'react';

export type TBaseComponent = {
  className?: string;
  id?: string;
};

export type TBaseComponentWithChildren = TBaseComponent & {
  children: ReactElement | any;
};
