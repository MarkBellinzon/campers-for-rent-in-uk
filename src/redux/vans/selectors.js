export const selectAdverts = state => state.vans.vans;

export const selectAdvertsLoading = state => state.vans.isLoading;

export const selectAdvertsError = state => state.vans.error;

export const selectFavorites = state =>
  state.vans && state.vans.favorites;
