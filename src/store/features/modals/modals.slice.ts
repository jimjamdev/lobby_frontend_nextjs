import { createSlice } from '@reduxjs/toolkit';

import { modalsList } from './modals.list';

export type TPortal = {
  key?: [key: string];
  component?: any | null;
  props?: any | null;
};

export type TPortals = {
  portals?: Array<TPortal> | null;
};

const initialState: TPortals = {
  portals: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openPortalByKey(state, action) {
      const { key, props } = action.payload;
      // @ts-ignore
      const activePortal = modalsList[key] && modalsList[key];
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.portals?.findIndex((item) => item.key === key) === -1
        ? state.portals?.push({ key, component: activePortal, props: { key, ...props } })
        : state.portals;
    },
    closePortalByKey(state, action) {
      const { key } = action.payload as TPortal;
      state.portals = state?.portals?.filter((portal) => portal.key !== key);
    },
    closeAll(state) {
      state.portals = initialState?.portals;
    },
  },
});

export const { openPortalByKey, closePortalByKey, closeAll } = modalSlice.actions;
export default modalSlice.reducer;
