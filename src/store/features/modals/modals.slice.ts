import { createSlice } from '@reduxjs/toolkit';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export type TModals = {
  current?: {
    key?: string;
    Component?: any;
    props?: any;
  }
};

export type TModalList = {
  gameInfo?: ComponentType<any>;
};

const modalList: TModalList = {
  gameInfo: dynamic(
    () => import('../../../components/organisms/modals/GameInfoModal/GameInfoModal'),
  ),
};

const initialState = { current: {} } as TModals;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModalByKey(state, action) {
      const { key, props } = action.payload;
      const activeModal = modalList[key] && modalList[key];
      console.log('**action', action);
      state.current = { key, Component: activeModal, props };
    },
    closeModals(state) {
      state.current = undefined;
    },
  },
});

export const { openModalByKey, closeModals } = modalSlice.actions;
export default modalSlice.reducer;
