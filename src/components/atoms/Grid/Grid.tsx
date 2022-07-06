import styled from 'styled-components';
import {
  compose, grid, layout, space,
} from 'styled-system';

import { TGrid } from './Grid.types';

export const Grid = styled('div')<TGrid>`
  display: ${(props) => props.display};
  ${compose(grid, space, layout)};
`;
