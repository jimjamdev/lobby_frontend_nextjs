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
      // @ts-ignore
      const activeModal = modalList[key] && modalList[key];
      console.log('**action', action);
      // eslint-disable-next-line no-param-reassign
      state.current = { key, Component: activeModal, props };
    },
    resetCurrentModal(state) {
      // eslint-disable-next-line no-param-reassign
      state.current = undefined;
    },
  },
});

export const { openModalByKey, resetCurrentModal } = modalSlice.actions;
export default modalSlice.reducer;
