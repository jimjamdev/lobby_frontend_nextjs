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
  portals: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openPortalByKey(state, action) {
      console.log('**openPortalByKey', action?.payload);
      const { key, props } = action.payload;
      // @ts-ignore
      const activePortal = (modalsList[key] && modalsList[key]);
      console.log('**activePortal', activePortal);
      state.portals?.push({ key, component: activePortal, props });
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
