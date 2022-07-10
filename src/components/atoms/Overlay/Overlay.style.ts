import styled, { createGlobalStyle } from 'styled-components';

import { TOverlay } from './Overlay.types';

export const OverlayStyle = styled.div<TOverlay>`
  pointer-events: none;
  overscroll-behavior: contain;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ isTransparent }) => (isTransparent ? 'transparent' : 'rgba(0, 0, 0, 0.9)')};
  z-index: 1000;
`;

export const DisableWindowScroll = createGlobalStyle`
html,body {
  overflow: hidden;
}
body {
  -webkit-overflow-scrolling: touch;
}
`;
