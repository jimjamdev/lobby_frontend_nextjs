import { DisableWindowScroll, OverlayStyle } from './Overlay.style';
import { TOverlay } from './Overlay.types';

export function Overlay({ children, isOpen, isTransparent }: TOverlay) {
  return isOpen ? (
    <>
      <DisableWindowScroll />
      <OverlayStyle isTransparent={isTransparent}>{children}</OverlayStyle>
    </>
  ) : null;
}
