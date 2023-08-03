import { createSlice } from "@reduxjs/toolkit";

const recipeDataSlice = createSlice({
  name: "data",
  initialState: { recipeData: null },
  reducers: {
    setRecipeData: (state, action) => {
      state.recipeData = action.payload;
    },
  },
});

export const { setRecipeData } = recipeDataSlice.actions;
export default recipeDataSlice.reducer;
