import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mapSlice from '../features/map/map.slice';

export const store = configureStore({
  reducer: {
    mapSlice: mapSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
