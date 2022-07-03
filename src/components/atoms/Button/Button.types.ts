import { BorderProps, SpaceProps } from 'styled-system';

export type TButton = SpaceProps & BorderProps & {
  variant?: 'primary' | 'secondary';
};
