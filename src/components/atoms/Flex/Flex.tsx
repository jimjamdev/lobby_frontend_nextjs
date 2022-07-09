import styled from 'styled-components';
import {
  color, compose, layout, space, border, position, flexbox, shadow,
} from 'styled-system';

import { TFlex } from './Flex.types';

export const Flex = styled.div<TFlex>`
  display: flex;
  ${compose(space, layout, color, border, position, flexbox, shadow)};
`;
