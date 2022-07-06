import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { TPortal } from '~components/atoms/Portal/Portal.types';

export function Portal({ children, isOpen }: TPortal) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (mounted) {
    const node = document.createElement('div') as HTMLDivElement;
    return isOpen && ReactDOM.createPortal(children, node);
  }
}
