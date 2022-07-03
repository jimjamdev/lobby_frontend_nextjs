import { BorderProps, SpaceProps } from 'styled-system';

import { TSizes } from '~types/common-components.types';

export type TButton = SpaceProps & BorderProps & {
  variant?: 'primary' | 'secondary' | 'alternative' | string;
  size?: TSizes | TSizes[]
};
