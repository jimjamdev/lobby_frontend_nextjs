import { openPortalByKey, closeAll } from '~store/features/modals';
import { store } from '~store/store';

export const openPortal = (key: string, props?: unknown): any => {
  const { dispatch } = store;
  return dispatch(openPortalByKey({ key, props }));
};

export const closePortal = (key: string): any => {
  const { dispatch } = store;
  return dispatch(closePortal(key));
};

export const closePortals = (): any => {
  const { dispatch } = store;
  return dispatch(closeAll());
};
