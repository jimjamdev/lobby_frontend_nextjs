import styled from 'styled-components';
import {
  compose, space, typography, color, shadow,
} from 'styled-system';

import { TTitle } from './Title.types';

export const Title = styled.h1<TTitle>`
  ${compose(space, typography, color, shadow)};
`;
