import { createSlice } from '@reduxjs/toolkit';

import { modalsList } from './modals.list';

export type TModals = {
  current?: {
    key?: string;
    Component?: any;
    props?: any;
  }
};

const initialState = { current: {} } as TModals;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalByKey(state, action) {
      const { key, props } = action.payload;
      // @ts-ignore
      const activeModal = modalsList[key] && modalsList[key];
      console.log('**action', action);
      // eslint-disable-next-line no-param-reassign
      state.current = { key, Component: activeModal, props };
    },
    resetCurrentModal(state) {
      console.log('**state', state);
      // eslint-disable-next-line no-param-reassign
      state.current = {};
    },
  },
});

export const { openModalByKey, resetCurrentModal } = modalSlice.actions;
export default modalSlice.reducer;
