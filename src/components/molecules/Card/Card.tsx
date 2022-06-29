import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TCard = TBaseComponentWithChildren;

export function Card({ children }: TCard) {
  return <div>{children}</div>;
}
