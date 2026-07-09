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
    addSortingData: (state, action) => {},
  },
});

export const { addSortingData } = sortingSlice.actions;

export default sortingSlice.reducer;
