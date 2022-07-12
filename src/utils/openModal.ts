import { openModalByKey } from '~store/features/modals';
import { store } from '~store/store';

export const openModal = (key: string, props?: unknown): any => {
  const { dispatch } = store;
  return dispatch(openModalByKey({ key, props }));
};
