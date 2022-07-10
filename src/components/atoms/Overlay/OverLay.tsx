import { OverlayGlobals, OverlayStyle } from './Overlay.style';
import { TOverlay } from './Overlay.types';

export function Overlay({ children, isOpen, isTransparent }: TOverlay) {
  return isOpen ? (
    <>
      <OverlayGlobals />
      <OverlayStyle isTransparent={isTransparent}>{children}</OverlayStyle>
    </>
  ) : null;
}
