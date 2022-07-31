import { useCallback } from 'react';

import {
  closeAll, closePortalByKey, openPortalByKey, TPortal,
} from '~store/features/modals';
import { useAppDispatch } from '~store/store';

export function usePortal() {
  const dispatch = useAppDispatch();
  const openPortal = useCallback(
    (key: string, props: unknown) => {
      console.log('**openPortal', key, props);
      return dispatch(openPortalByKey({ key, props }));
    },
    [dispatch],
  );
  async function closePortal({ key }: TPortal) {
    if (!key) return null;
    return dispatch(closePortalByKey({ key }));
  }
  async function closeAllPortals() {
    return dispatch(closeAll());
  }

  return { openPortal, closePortal, closeAllPortals };
}
