import { createSlice } from '@reduxjs/toolkit';

import { modalsList } from './modals.list';

export type TModals = {
  current?: {
    key?: string;
    Component?: any;
    props?: any;
  };
};

const initialState: TModals = {
  current: {
    key: undefined,
    Component: undefined,
    props: undefined,
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
