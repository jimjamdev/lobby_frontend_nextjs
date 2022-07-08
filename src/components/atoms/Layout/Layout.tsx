import styled from 'styled-components';
import { layout, LayoutProps, compose } from 'styled-system';

export const Layout = styled.div<LayoutProps>(compose(layout));
