// eslint-disable-next-line import/no-cycle
import { openModalByKey, resetCurrentModal } from '~store/features/modals';
// eslint-disable-next-line import/no-cycle
import { store } from '~store/store';

export const openModal = (key: string, props?: unknown): any => {
  const { dispatch } = store;
  return dispatch(openModalByKey({ key, props }));
};

export const closeModals = (): any => {
  const { dispatch } = store;
  return dispatch(resetCurrentModal());
};
