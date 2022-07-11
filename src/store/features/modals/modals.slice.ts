import { createSlice } from '@reduxjs/toolkit';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export type TModals = {
  activeModal?: string;
};

export type TModalList = {
  gameInfo?: ComponentType<any>;
};

const gameInfo = dynamic(() => import('../../../components/organisms/modals/GameInfoModal/GameInfoModal'));

const modalList: TModalList = {
  gameInfo,
};

const initialState = { activeModal: undefined } as TModals;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    useOpenModal(state, action) {
      state.activeModal = modalList[action.payload];
    },
  },
});

export const { useOpenModal } = modalSlice.actions;
export default modalSlice.reducer;
