import { TGrid } from '~components/atoms/Grid/Grid.types';
import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TGridViewItem = TBaseComponentWithChildren & TGrid & {
  span?: number | number[];
};
