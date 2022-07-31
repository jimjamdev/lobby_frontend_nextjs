import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import { cmsApi } from '~store/features/cms';
import { gamesApi } from '~store/features/cms/games';
import modalsSlice from '~store/features/modals/modals.slice';

// eslint-disable-next-line import/no-mutable-exports
let store: ReturnType<typeof configStore>;

const configStore = () => configureStore({
  reducer: {
    [cmsApi.reducerPath]: cmsApi.reducer,
    [gamesApi.reducerPath]: gamesApi.reducer,
    portals: modalsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(cmsApi.middleware, gamesApi.middleware),
});

export const makeStore = () => {
  store = configStore();
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(makeStore().dispatch);

export { store };

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
