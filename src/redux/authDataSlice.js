import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userName: "",
  userId: "",
};

const authDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { loggedIn, userName, userId } = action.payload;
      state.loggedIn = loggedIn;
      state.userName = userName;
      state.userId = userId;
    },
    resetUserData: (state) => {
      return initialState;
    },
  },
});

export const { setUserData, resetUserData } = authDataSlice.actions;
export default authDataSlice.reducer;
