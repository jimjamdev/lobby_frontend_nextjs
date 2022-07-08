import styled from 'styled-components';
import { compose, layout, space } from 'styled-system';

import { TContainer } from './Container.types';

export const Container = styled.div<TContainer>(compose(space, layout));

Container.defaultProps = {
  display: 'block',
  maxWidth: '60em',
  margin: '0 auto',
  pl: [2, 3],
  pr: [2, 3],
};