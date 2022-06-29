import { ReactChild } from 'react';

export type TBaseComponent = {
  className?: string;
  id?: string;
};

export type TBaseComponentWithChildren = TBaseComponent & {
  children?: ReactChild | ReactChild[] | string | string[];
};
