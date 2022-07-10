import styled from 'styled-components';
import { color, compose, flexbox } from 'styled-system';

import { Link } from '~components/atoms/Link';

/* We'll break this up into its own folder as it will have its own types, func etc */

export type TDefaultLayoutNavItem = {
  isActive: boolean;
};

export const DefaultLayoutNavItem = styled(Link)<TDefaultLayoutNavItem>`
  text-decoration: none;
  color: ${({ theme, isActive }) => (!isActive ? theme.colors.mono[0] : theme.colors.highlight[5])};
  padding: 1rem;
  ${compose(color, flexbox)};
`;
