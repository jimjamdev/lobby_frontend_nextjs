import styled from 'styled-components';
import {
  color, compose, layout, space, border, position, shadow, typography,
} from 'styled-system';

import { TBox } from './Box.types';

export const Box = styled.div<TBox>`
  ${compose(space, layout, color, border, position, shadow, typography)};
`;
