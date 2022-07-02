import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TButton = TBaseComponentWithChildren;

export function Button({ children }: TButton) {
  return <button type="button">{children}</button>;
}
