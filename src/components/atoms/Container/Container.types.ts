import { LayoutProps, SpaceProps } from 'styled-system';

import { TBaseComponentWithChildren } from '~types/base-component.type';

export type TContainer = TBaseComponentWithChildren & SpaceProps & LayoutProps;
