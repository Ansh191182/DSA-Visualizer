import { configureStore } from "@reduxjs/toolkit";
import sortingReducer from "./slice/sortingSlice";
export const store = configureStore({
  reducer: {
    sorting: sortingReducer,
  },
});
