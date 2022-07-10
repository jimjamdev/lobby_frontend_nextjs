import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';

import { cmsApi } from '~store/features/cms';
import { gamesApi } from '~store/features/cms/games';

export const makeStore = () => configureStore({
  reducer: {
    [cmsApi.reducerPath]: cmsApi.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (gDM) => gDM().concat(cmsApi.middleware, gamesApi.middleware),
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

setupListeners(makeStore().dispatch);

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
