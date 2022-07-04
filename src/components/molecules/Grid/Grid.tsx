import styled from 'styled-components';
import { compose, grid } from 'styled-system';

import { TGrid } from './Grid.types';

export const Grid = styled('div')<TGrid>`
  display: grid;
  ${compose(grid)};
`;
