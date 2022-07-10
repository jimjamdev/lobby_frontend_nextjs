import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TOverlay = TBaseComponentWithChildren & {
  isOpen?: boolean;
  isTransparent?: boolean;
};
