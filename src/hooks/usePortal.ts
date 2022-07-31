import { useCallback } from 'react';

import { closeAll, closePortalByKey, openPortalByKey } from '~store/features/modals';
import { useAppDispatch } from '~store/store';

export function usePortal() {
  const dispatch = useAppDispatch();
  const openPortal = useCallback(
    (key: string, props: unknown) => dispatch(openPortalByKey({ key, props })),
    [dispatch],
  );
  const closePortal = useCallback((key: string) => dispatch(closePortalByKey({ key })), [dispatch]);
  const closeAllPortals = useCallback(() => dispatch(closeAll()), [dispatch]);

  return { openPortal, closePortal, closeAllPortals };
}
