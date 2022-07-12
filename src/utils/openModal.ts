import { store } from '~store/store';

export function openModal(key: string, props?: unknown): any {
  const { dispatch } = store;
  return dispatch(openModal(key, props));
}
