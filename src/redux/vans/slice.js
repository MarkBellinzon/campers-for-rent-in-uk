import { createSlice } from '@reduxjs/toolkit';
import { getVans } from './operations';
import { handlePending, handleRejected } from '../../helpers/helpers';

const FavoritesLS =
  JSON.parse(localStorage.getItem('favorites')) || [];

const initialState = {
  vans: [],
  favorites: FavoritesLS,
  isLoading: false,
  error: null,
};

export const vansSlice = createSlice({
  name: 'vans',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.favorites.push(payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(
        van => van._id !== payload
      );
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    clearFavorites(state) {
      state.favorites = [];
      localStorage.removeItem('favorites');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getVans.pending, handlePending)

      .addCase(getVans.fulfilled, (state, { payload }) => {
        state.vans = [...state.vans, ...payload];
        state.isLoading = false;
        state.error = null;
      })

      .addCase(getVans.rejected, handleRejected);
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  vansSlice.actions;
export const vansReducer = vansSlice.reducer;
