import { createSlice } from '@reduxjs/toolkit';

import { modalsList } from './modals.list';

export type TModals = {
  current?: {
    key?: string | null;
    Component?: any | null;
    props?: any | null;
  };
};

const initialState: TModals = {
  current: {
    key: null,
    Component: null,
    props: null,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalByKey(state, action) {
      const { key, props } = action.payload;
      // @ts-ignore
      const activeModal = modalsList[key] && modalsList[key];
      state.current = { key, Component: activeModal, props };
    },
    resetCurrentModal(state) {
      state.current = initialState?.current;
    },
  },
});

export const { openModalByKey, resetCurrentModal } = modalSlice.actions;
export default modalSlice.reducer;
