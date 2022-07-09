import {
  BorderProps, LayoutProps, PositionProps, SpaceProps,
} from 'styled-system';

import { TSizes } from '~types/common-components.types';

export type TButton = SpaceProps &
BorderProps &
LayoutProps &
PositionProps & {
  variant?: 'primary' | 'secondary' | 'alternative' | string;
  size?: TSizes | TSizes[];
};
