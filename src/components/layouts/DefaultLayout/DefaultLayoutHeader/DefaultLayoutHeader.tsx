import styled from 'styled-components';
import { compose, color, ColorProps } from 'styled-system';

export const DefaultLayoutHeaderContainerStyle = styled.div<ColorProps>`
  display: flex;
  height: 60px;;
  ${compose(color)};
`;

export function DefaultLayoutHeader() {
  return <DefaultLayoutHeaderContainerStyle bg="primary.5">Hello</DefaultLayoutHeaderContainerStyle>;
}
