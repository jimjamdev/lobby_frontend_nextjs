import { RefObject } from 'react';

import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TPortal = TBaseComponentWithChildren & {
  isOpen?: boolean;
};
