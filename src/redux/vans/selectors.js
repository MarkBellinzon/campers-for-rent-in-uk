export const selectVans = state => state.vans.vans;

export const selectVansLoading = state => state.vans.isLoading;

export const selectVansError = state => state.vans.error;

export const selectFavorites = state =>
  state.vans && state.vans.favorites;
