import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import fourSquareHttp from '../../httpService/httpService';

interface map {
  defaultPosition: google.maps.LatLngLiteral | null;
  loading: boolean;
  restaurants: [] | null;
  error: object | null;
}

interface getRestuarantReq {
  url: string;
}

const initialState = {
  defaultPosition: null,
  loading: false,
  error: null,
} as map;

export const getRestuarants = createAsyncThunk(
  'map/restaurants',
  async ({ url }: getRestuarantReq, thunkApi) => {
    const response = await fourSquareHttp.get(url);
    return response?.data;
  },
);

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      getRestuarants.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.restaurants = action.payload?.results;
        state.loading = false;
      },
    );
    builder.addCase(
      getRestuarants.pending,
      (state, action: PayloadAction<any>) => {
        state.restaurants = null;
        state.loading = true;
      },
    );
    builder.addCase(
      getRestuarants.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload.response;
        state.restaurants = null;
        state.loading = false;
      },
    );
  },
});

// export const { increment, decrement, incrementByAmount } = mapSlice.actions;
export default mapSlice.reducer;
