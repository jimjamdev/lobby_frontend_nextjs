import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeModal, openModal } from '~store/features/modals';

export function useModal(key: string) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openModal(key));
  }, []);
  const handleClose = () => {
    dispatch(closeModal());
  };
  return {
    handleClose,
  };
}
