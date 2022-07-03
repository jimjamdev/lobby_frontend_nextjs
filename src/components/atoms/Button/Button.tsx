import styled from 'styled-components';
import {
  variant, space, border, compose,
} from 'styled-system';

import { TButton } from './Button.types';

export const Button = styled('button')<TButton>`
  border: 0 none;
  outline: none;
  ${compose(space, border)};
  ${(
    variant({
      scale: 'buttons',
    })
  )};
`;
