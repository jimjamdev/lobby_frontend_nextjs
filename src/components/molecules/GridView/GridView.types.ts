import { TGrid } from '~components/atoms/Grid/Grid.types';
import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TGridView = TBaseComponentWithChildren & TGrid & {
  columns?: number | number[];
};
