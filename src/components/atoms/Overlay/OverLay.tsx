import { OverlayStyle } from './Overlay.style';
import { TOverlay } from './Overlay.types';

export function Overlay({ children, isOpen, isTransparent }: TOverlay) {
  return isOpen ? <OverlayStyle isTransparent={isTransparent}>{children}</OverlayStyle> : null;
}
