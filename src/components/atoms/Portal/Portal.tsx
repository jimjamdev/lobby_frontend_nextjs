import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { TPortal } from './Portal.types';

export function Portal({ children, isOpen }: TPortal) {
  const ref = useRef<HTMLBodyElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('body');
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted && isOpen ? createPortal(children, ref.current!) : null;
}
