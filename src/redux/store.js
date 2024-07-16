import { configureStore } from '@reduxjs/toolkit';

import useSlice from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    user: useSlice
  },
});
