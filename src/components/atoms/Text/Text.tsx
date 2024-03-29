import styled from 'styled-components';
import {
  compose, space, typography, color, shadow,
} from 'styled-system';

import { TText } from './Text.types';

export const Text = styled.p<TText>`
  ${compose(space, typography, color, shadow)};
`;
