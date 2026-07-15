import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  algorithm: "",
  input: [],
  steps: [],
};

const sortingSlice = createSlice({
  name: "sorting",

  initialState,

  reducers: {
    addSortingData: (state, action) => {
      state.algorithm = action.payload.algorithm;
      state.input = action.payload.input;
      state.steps = action.payload.steps;
    },
  },
});

export const { addSortingData } = sortingSlice.actions;

export default sortingSlice.reducer;
