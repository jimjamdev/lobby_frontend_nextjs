import styled from 'styled-components';
import {
  variant, space, compose,
} from 'styled-system';

import { TButton } from './Button.types';

export const Button = styled('button')<TButton>`
  border: 0 none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${compose(space)};
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
`;

Button.defaultProps = {
  size: 'md',
};
