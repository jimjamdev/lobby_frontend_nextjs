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

const gameInfo = dynamic(
  () => import('../../../components/organisms/modals/GameInfoModal/GameInfoModal'),
);

const modalList: TModalList = {
  gameInfo,
};

const initialState = { current: {} } as TModals;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      const { key, props } = action.payload;
      const activeModal = modalList[key];
      console.log('**action', action);
      state.current = { key, Component: activeModal, props };
    },
    closeModal(state) {
      state.current = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
