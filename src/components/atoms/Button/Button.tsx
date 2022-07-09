import styled from 'styled-components';
import {
  variant, space, layout, position,
} from 'styled-system';

import { TButton } from './Button.types';

export const Button = styled('button')<TButton>`
  border: 0 none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  ${(
    variant({
      scale: 'buttons',
    })
  )};
  ${(
    variant({
      prop: 'size',
      scale: 'buttonSizes',
    })
  )};
  ${space};
  ${layout};
  ${position};
`;
