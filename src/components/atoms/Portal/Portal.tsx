import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { TPortal } from '~components/atoms/Portal/Portal.types';

export function Portal({ children, isOpen }: TPortal) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#__next');
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted && isOpen ? createPortal(children, ref.current) : null;
}
