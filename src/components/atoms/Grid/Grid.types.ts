import { GridProps, LayoutProps, SpaceProps } from 'styled-system';

export type TGrid = GridProps & SpaceProps & LayoutProps & {
  display?: 'grid';
};
