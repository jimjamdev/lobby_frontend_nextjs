import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TDefaultTemplate = TBaseComponentWithChildren & {
  header?: JSX.Element;
  topNav?: JSX.Element;
  footer?: JSX.Element;
  mobileNav?: JSX.Element;
};
