import styled from 'styled-components';
import { variant } from 'styled-system';

import { TButton } from './Button.types';

export const Button = styled('button')<TButton>`
  border: 0 none;
  ${(
    variant({
      prop: 'colour',
      scale: 'buttons',
    })
  )};
`;
