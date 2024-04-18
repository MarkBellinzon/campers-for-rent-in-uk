import { configureStore } from '@reduxjs/toolkit';

import { vansReducer } from './vans/slice';

const store = configureStore({
  reducer: {
    vans: vansReducer,
  },
});

export default store;
